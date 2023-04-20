// VARIANTS
const dc = document.documentElement,
            header = document.querySelector('.header'),
            gnb = document.querySelectorAll('.gnb button'),
            anchors = document.querySelectorAll('.anchor'),
            quick = document.querySelector('.quick'),
            sections = document.querySelectorAll('section'),
            label = document.querySelectorAll('.plc'),
            maps = document.getElementById('map'),
            map_overlay = document.querySelector('.overlay'),
            btn_privacy = document.querySelector('.btn_privacy'),
            pop_close = document.querySelectorAll('.pop_close');

// HEADER:Fix
function headerFix(y){
    if(y > 0){
        header.classList.add('active')
    } else if(!dc.classList.contains('scroll-disable')){
        header.classList.remove('active')
    }
}

// ACTIVE
function scrollActive(y){
    const scrollTop = y + window.innerHeight / 1.2;

    sections.forEach(x => {
        if(scrollTop > x.offsetTop && !dc.classList.contains('scrolling')){
            x.classList.add('active');
            if(x.dataset.menu != undefined){
                const menu = document.querySelector(`.${x.dataset.menu}`);
                menu.classList.add('active');
                siblings(menu).forEach(j => j.classList.remove('active'));
                
            } else{
                if(header.querySelector('.active') != undefined){
                    header.querySelector('.active').classList.remove('active')
                }
            }
        }
    })
}

// QUICK
function followScroll(y){
    const limitArea = document.querySelector(quick.dataset.anchor),
                st = window.getComputedStyle(quick),
                gap = st.getPropertyValue('bottom').replace('px', ''),
                pos = y + window.innerHeight - quick.offsetHeight - gap;
    window.innerWidth <= 1420? quick.style.transform = `translateY(${pos}px)`: quick.removeAttribute('style');
    y > limitArea.offsetTop - window.innerHeight? quick.classList.add('hide'): quick.classList.remove('hide');
}

// PLACEHODER
function placeholder(plc){
	const target = plc.nextElementSibling;
	target.value != ''? plc.classList.add('up'): null;
	target.addEventListener('focus', () => {
		target.value == ''? plc.classList.add('up'): null;
	});
	target.addEventListener('blur', () => {
		target.value == ''? plc.classList.remove('up'): null;
	});
}

// POPUP:Open
function openPop(id){
    const target = document.getElementById(id);
    target.classList.add('show');
    target.style.visibility = 'visible';
    target.style.zIndex = 200;
}

// POPUP:Close
function closePop(id){
    const target = document.getElementById(id);
    target.classList.remove('show');
    setTimeout(function(){target.removeAttribute('style')}, 400);
}

// ANIMATION:Scroll
function animateScroll(selector, duration, adjust){
	const target = document.querySelector(selector),
				currentY = window.pageYOffset,
				targetY = target.offsetTop - (adjust || 0);
	animateScrollTo();
	function animateScrollTo(){
		dc.classList.add('scrolling');
		duration = duration? duration: 600;
		const startTime = new Date().getTime(),
					endTime = new Date().getTime() + duration;
		const scrollTo = function(){
			let now = new Date().getTime();
			const progress = Math.max(Math.min((now - startTime) / duration, 1), 0),
						easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
			let currentPosition = currentY + easeProgress * (targetY - currentY);
			if(now <= endTime){
				requestAnimationFrame(scrollTo)
			} else{
				dc.classList.remove('scrolling');
				currentPosition = targetY;
			}
			window.scrollTo(0, Math.round(currentPosition));
		}
		requestAnimationFrame(scrollTo);
	}
}

// SIBLINGS
function siblings(el){
	var targets = el.parentElement.children;
	var arr = [];
	Array.from(targets).forEach(x => {
		arr.push(x)
	});
	return arr.filter(node => node != el);
}

// INIT
function init(){
    const y = window.scrollY;
    headerFix(y);
    followScroll(y);
    scrollActive(y);
}
window.addEventListener('load', init);
window.addEventListener('scroll', init);
window.addEventListener('resize', () => {
    const y = window.scrollY;
    followScroll(y);
});

// ANCHORS
anchors.forEach(x => {
    x.addEventListener('click', e => {
        e.preventDefault();
        if(!x.classList.contains('quick')){
            siblings(x.parentElement).forEach(li => li.classList.remove('active'));
        }
        x.parentElement.classList.add('active');
        animateScroll(x.dataset.anchor, 500, header.offsetHeight);
    })
});

// PLACEHODER
label.forEach(x => placeholder(x));

// PRIVACY
btn_privacy.addEventListener('click', () => openPop('privacyPop'));

pop_close.forEach(x => {
    x.addEventListener('click', e => {
        const target = x.closest('.layer').getAttribute('id');
        e.target.classList.contains('pop_close')? closePop(target): null;
    })
});
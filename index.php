<?php include './include/top.php' ?>
<div id="wrap">
	<?php include './include/header.php' ?>
	<?php include './include/quick.php' ?>
	<main>
		<section class="visual">
			<h2 class="blind">visual</h2>
			<div class="inner">
				<p class="theme-color mont">Hello</p>
			</div>
		</section>
		<section class="sct01" data-menu="menu01">
			<div class="inner">
				section1
			</div>
		</section>
		<section class="sct02" data-menu="menu02">
			<div class="inner">
				section2
			</div>
		</section>
		<section class="sct03" data-menu="menu03">
			<div class="inner">
				section3
			</div>
		</section>
		<section class="sct04" data-menu="menu04">
			<div class="inner">
				section4
			</div>
		</section>
		<section class="consult" data-menu="menu05">
			<div class="inner flex-between">
				<div>
					<div class="title">상담신청</div>
				</div>
				<div class="form">
					<?php include './include/consult.php' ?>
				</div>
			</div>
		</section>
	</main>
	<?php include './include/footer.php' ?>
</div>
<?php include './include/end.php' ?>
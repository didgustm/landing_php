                    <form name="">
						<ul>
                            <li class="flex-between">
                                <div class="input rel uname">
                                    <label for="uname" class="plc ab">이름</label>
                                    <input type="text" name="uname" id="uname">
                                </div>
                                <div class="input rel utel">
                                    <label for="utel" class="plc ab">연락처</label>
                                    <input type="tel" name="utel" id="utel" maxlength="11">
                                </div>
                            </li>
                            <li class="flex-between">
                                <button type="button" class="btn_num">인증하기</button>
                                <div class="input rel unum">
                                    <label for="cernum" class="plc ab">인증번호</label>
                                    <input type="number" name="cernum" id="cernum" maxlength="6">
                                </div>
                            </li>
                            <li class="input rel">
                                <label for="sel" class="plc ab">상담시간선택</label>
                                <select name="sel" id="sel">
                                    <option value="" selected hidden disabled></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </li>
                        </ul>
                        <div class="agree flex-default">
                            <label class="flex-center">
                                <input type="checkbox" checked>
                                <span class="checkbox"></span>
                                <p>개인정보처리방침 동의</p>
                            </label>
                        </div>
                        <button type="button" class="submit bold">상담신청하기</button>
					</form>
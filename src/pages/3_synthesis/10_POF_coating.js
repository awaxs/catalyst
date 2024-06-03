import React from 'react';
import '../../styles/styles.css'

function POFCoating() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default POFCoating;

function MainContents() {
	const title = 'A10_POF_coating';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<a href="https://www.sciencedirect.com/science/article/pii/S004313542300670X#bib0021">Novel polymer optical fibers with high mass-loading g-C3N4 embedded metamaterial porous structures achieve rapid micropollutant degradation in water</a>
			<div>
				<h5>++++ POF 특징 ++++</h5>
				<ul>
					<li>물리적 인성, 유연성 및 내구성을 보유하므로 다양한 폴리머를 사용하여 유연한 선형 조명기</li>
					<li>POF는 UV-C 또는 UV-B 파장는 사용 불가능</li>
					<li>360~760nm 사이의 파장에서 탁월한 광 투과율를 가짐</li>
					<li>햇빛, UV-A(320~400nm), 가시광선(400~750 nm) 사용 가능</li>
					<li>코어 : 폴리메틸메타크릴레이트 (PMMA; n PMMA  = 1.49) </li>
					<li>클래딩 : 리비닐리덴 플루오라이드(PVDF; n PVDF  = 1.42)</li>
					<li></li>
					<li></li>
				</ul>

				<h5>++++ 광촉매로 코팅된 POF를 제조 방법 ++++</h5>
				<ol>
					<li>정전기 상호작용 기반 딥 코팅( Joo et al., 2003 ; Nagakawa et al., 2020 )</li>
						<ul>
							<li><a href="https://www.sciencedirect.com/science/article/pii/S0927024802003720">Joo et al., 2003; 트리클로로에틸렌의 광촉매에 플라스틱 광섬유를 사용하는 방법</a></li>
							
							<li>클래드를 벗겨낸 후 섬유 표면에 광촉매를 코팅하면 광촉매의 굴절률이 코어재의 굴절률보다 높아 굴절된 빛을 흡수할 수 있습니다.</li>
							<li>POF의 전처리는 코어와 클래드의 재료가 서로 매우 유사하기 때문에 열적으로나 물리적으로 수행할 수 없습니다. </li>
							<li>POF 클래드를 제거하기 위해 아세톤을 용매로 사용 하였다.</li>
							<li>첫 번째 단계로 POF를 아세톤에 3~5분간 담근 후, 남은 잔류물을 증류수로 씻었다. </li>
							<li>클래드 용해시간, 5분후 PMMA 노출 시작, 10분후부터 PMMA용해 시작, 30분후 PNNA 주름이 발생, 1시간후 PMMA 급격히 용해, </li>
							<li>정제수에 5w% TiO2(pH 4.5) 초음파/교반처리 제조</li>
							<li>전처리된 POF를 교반된 TiO2 현탁액에 담근 후 24 시간 동안 공기 건조</li>
							<li>층 두께를 증가시키기 위해 다중 코팅 </li>
							<li>?? 촉매와 PMMA의 결합은 pH에 의한 ???</li>
							<li>?? 전처리된 POF를 현탁액에 침지한 시간은 ??</li>
							<li></li>
						</ul>
					<li>대기압 플라즈마 구동 코팅( Baba et al., 2017 )</li>
						<ul>
							<li><a href="https://pubs.acs.org/doi/10.1021/acsami.7b01398">Baba et al., 2017 ; 대기압 플라즈마를 이용한 고분자 광섬유의 광촉매 아나타제 TiO2 박막</a></li>
							
							<li>고분자 광섬유에 광촉매 아나타제 TiO2 코팅을 대기압 및 저온 증착</li>
							<li>아르곤이 공급되고 서파트론 장치를 통해 석영 튜브에서 생성된 MW 플라즈마 방전의 사용 </li>
							<li>POF 클래드를 제거하기 위해 아세톤을 용매로 사용 하였다.</li>
							<li><img src="../images/coating/1.jpeg" width={'600'} alt=''/></li>
							
							<li>?? 사용 불가능 ???</li>
						</ul>

					<li>딥 코팅( Lin et al., 2015 ).</li>
						<ul>
							<li><a href="https://www.sciencedirect.com/science/article/pii/S1010603015001379">Lin et al., 2015; Fe 도핑된 TiO 2 나노복합체 박막 으로 코팅된 측면 발광 광섬유를 사용하여 향상된 광촉매 작용</a></li>
							
							<li>측면 발광 광섬유(SOF) 누드 석영 유리 섬유를 코어</li>
							<li>PAHD(Polymer Assisted Hydrothermal Deposition) 방법 [42] 이며, 이는 PAD(Polymer Assisted Deposition)와 열수 방법을 결합한 것입니다  </li>
							<li>PAHD 는 저비용, 손쉬운 설정, 넓은 면적 코팅 등 박막 성장을 위한 다른 화학 솔루션 접근 방식 의 모든 장점</li>
							<li>?? 사용 불가능 ???</li>
						</ul>
					<li>정전기 상호작용 기반 방법은 POF 위에 다소 얇고 불안정한 광촉매 층을 형성한다( Joo et al., 2003 ; Nagakawa et al., 2020 )</li>
					<li>대기압 플라즈마 구동 코팅 방법은 안정적인 광촉매 코팅을 형성하지만 에너지 및 화학 비용이 많이 드는 복잡한 장비 및 절차가 필요합니다( Baba et al., 2017 )</li>
					<li>이 기술은 광촉매 로딩 및 다공성이 낮은 얇은 필름을 형성하여 물질 전달이 비효율적이고 반응성이 낮습니다. 폴리머 보조 딥 코팅 방법은 더 나은 안정성과 광범위한 광촉매에 적용 가능한 광촉매 코팅 POF를 제조하는 것으로 보고되었습니다( Lin et al., 2015 )</li>
					<li>이 방법은 광촉매 코팅 POF 1개를 제조할 때 경화 시간이 최대 36시간이 소요되므로 대량 생산에 적합하지 않습니다.</li>
					<li>현재의 제조 방법은 예외 없이 POF의 PVDF 클래딩을 제거하기 위한 추가적인 전처리를 포함한다( Joo et al., 2003 ; Nagakawa et al., 2020 ; Baba et al., 2017 ; Lin et al., 2015 )</li>
				</ol>

				<h5>++++ <u><b>수정된 광촉매로 코팅된 POF를 제조 방법</b></u> ++++</h5>
				<ol>
					<li>PVDF에 좋은 용매 가 클래딩을 용해하고 재응고시켜 POF의 PVDF 클래딩을 수정.</li>
					<li>PVDF의 재응고 과정에서 광촉매가 물리적 결합</li>
					<li>PVDF가 재응고 되면서 클래딩이 다공성으로 변화</li>
					<li>다공성 클래딩(메타물질)은 구조상 탁월한 특성을 가지고 있어 빛을 광촉매에 도달하도록 유도한다.</li>
					<li>다공성 클래딩으로 물(오염 물질)과 접촉하여 제거</li>
					<li>따라서 광촉매로 코팅된 POF를 제조하기 위해 POF의 PVDF 클래딩을 수정하기 위해 </li>
					<li>용매의 선택</li>
					<li>클레딩 만을 용해-재응고 방법</li>
					<li></li>
					<li></li>
				</ol>

				<br/><br/>
				<h5><u>1. 사용 용매</u></h5>
				<table  border="1" width ="500" align = "center">
					<th>Solvent</th><th>Acetone</th><th>Ethanol</th><th>Water</th>
					<tr>
						<td>Density (g/mL)</td><td>0.7899</td><td>0.789</td><td>1.0</td>
					</tr>
					<tr>
						<td>Mw</td><td>58.8</td><td>46.07</td><td>18</td>
					</tr>
					<tr>
						<td>Saturated Vapor Pressure (kPa)</td><td>24.0</td><td>5.67</td><td>2.34</td>
					</tr>
				</table>
				<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8122610/table/polymers-13-01354-t002/?report=objectonly">Known solvents for PVDF.</a></li>
				<br/><br/>
				<h5><u>2. 혼합 용매</u></h5>
				<table  border="1" width ="500" align = "center">
					<th>Solvent</th><th>Saturated Vapor Pressure (kPa)</th>
					<tr>
						<td>A100</td><td>24.0</td>
					</tr>
					<tr>
						<td>A80/E20</td><td>19.6</td>
					</tr>
					<tr>
						<td>A60/E40</td><td>15.6</td>
					</tr>
					<tr>
						<td>A80/W20</td><td>13.0</td>
					</tr>
					<tr>
						<td>A60/W40</td><td>8.1</td>
					</tr>
				</table>
				<p>The dielectric constants of solvent mixtures were calculated through Eq. S5 (Jouyban et al., 2004).</p>
				<p>εm = φ1ε1 + φ2ε2                Eq. S5</p>
				<p>Where εm, ε1 and ε2 are the dielectric constants of the mixture and solvents 1 and 2, respectively, φ1 and φ2 are the volume (weight or mole) fractions of solvents 1 and 2 in the mixture.</p>

				<br/><br/>
				<h5><u>3. 코팅 모식도</u></h5>
				<img src="../images/coating/1.PNG" width={'600'} alt=''/>
				<p><u>용매 현탁액에 3초 동안 담근 후, 10초 동안 공기 건조</u></p>

				<br/><br/>
				<h5><u>4. 용매에 따른 코팅량</u></h5>
				<img src="../images/coating/4.PNG" width={'600'} alt=''/>
				<p><u>아세톤을 사용하여 더 높은 질량 로딩이 달성, 용매의 포화 증기압 과 상당히 잘 일치하는 경향</u></p>
				
				<br/><br/>
				<h5><u>5. 코팅 메커니즘</u></h5>
				<img src="../images/coating/3.jpg" width={'900'} alt=''/>
				<ul>
					<li>1단계에서는 아세톤에 PVDF를 용해시킨 다음 아세톤의 높은 gC3N4 농도 구배를 기반으로 gC3N4 확산</li>
					<li>2단계에서는 아세톤이 겔형 gC3N4 -PVDF 매트릭스에서 증발하면서 연속 기공이 형성</li>
					<li>gC3N4 표면의 아세톤 표면 장력은 gC3N4 표면이 PVDF로 코팅되는 것을 방지</li>
					<li>PVDF가 gC3N4의 바인더 역할</li>
					<li>6, 10, 20, 30, 125, 200  w% gC3N4/PVDF</li>
					<li><img src="../images/coating/4.jpg" width={'900'} alt=''/></li>
					<li>6w% gC3N4/PVDF: 로딩량 0.074 mg/cm 로딩두께 1 um</li>
					<li>10w% gC3N4/PVDF: 로딩량 0.1 mg/cm 로딩두께 8 um</li>
					<li>20w% gC3N4/PVDF: 로딩량 0.189 mg/cm 로딩두께 10 um</li>
					<li>30w% gC3N4/PVDF: 로딩량 0.271 mg/cm 로딩두께 20 um</li>
					<li>125w% gC3N4/PVDF: 로딩량 0.67 mg/cm 로딩두께 40 um</li>
					<li>200w% gC3N4/PVDF : 로딩량 1.218 mg/cm 로딩두께 89 um</li>
					<li>g-C2N4	2.336	g/cm³ </li>
					<li>Acetone	784	g/L</li>
					<li>TiO2	4.23	g/cm³</li>
				</ul>
				<img src="../images/coating/10.PNG" width={'900'} alt=''/>

				<br/><br/>
				<h5><u>6. 회분식 실험</u></h5>
				<img src="../images/coating/3.PNG" width={'600'} alt=''/>
				<ul>
					<li>길이 7 cm 섬유 150개 다발,	시험수 100 mL가 채워진, 150 mL 반응기(직경 4 cm)사용, 5W 420nm LED 또는 16W 가시광 LED</li>
					<li>길이 40 cm 섬유 150개 다발, 시험수 600 mL가 채워진, 700 mL 반응기(직경 5 cm)사용</li>
					<li>반응기는 자기 교반 사용하여 연속적으로 혼합.</li>
				</ul>

				<br/><br/>
				<h5><u>7. LED 스펙트럼</u></h5>
				<img src="../images/coating/2.PNG" width={'600'} alt=''/>

				<br/><br/>
				<h5><u>8. 용매에 따른 SAM 사진</u></h5>
				<img src="../images/coating/5.PNG" width={'900'} alt=''/>


				<br/><br/>
				<h5><u>9. (a)POF 및 (b)gC3N4-POF 단면 SEM 이미지</u></h5>
				<img src="../images/coating/6.PNG" width={'900'} alt=''/>


				<br/><br/>
				<h5><u>10. gC3N4-POF의 SEM-매핑 이미지</u></h5>
				<img src="../images/coating/7.PNG" width={'900'} alt=''/>


				<br/><br/>
				<h5><u>11. (d)POF, (e)아세톤 처리된 POF, (f) gC3N4-POF의 표면 SEM 이미지</u></h5>
				<img src="../images/coating/8.PNG" width={'900'} alt=''/>


				<br/><br/>
				<h5><u>12. 순수POF, 아세톤 처리 및 gC3N4 코팅된 POF의 FTIR 스펙트럼</u></h5>
				<img src="../images/coating/9.PNG" width={'900'} alt=''/>

				<br/><br/>
				<h5>++++ <u><b>13. POF의 porus clad에 촉매부착 방법(정리)</b></u> ++++</h5>
					<ol>
						<li>POF/PVDF 광섬유 준비</li>
						<li></li>
						<li>아세톤+촉매 혼합액에 3초 동안 담근 후, 10초 동안 공기 건조</li>
						<li></li>
						<li>PVDF는 일반적으로 DMF, 디메틸 설폭사이드(DMSO), N-메틸피롤리돈(NMP) 또는 디메틸아세트아미드(DMAc)와 같은 극성 용매에 용해</li>
						<li>아세톤은 PVDF를 ~30%, 기껏해야 10%까지 용해</li>
					</ol>


				<h5>++++ PVDF 막관련 자료 ++++</h5>
				<ol>
					<li><a href="https://www.mdpi.com/2073-4360/11/7/1160">다공성 고분자막 제조에 대한 검토. 1부: 폴리설폰 및 폴리(불화비닐리덴)을 사용한 생산 기술</a></li>
						<ul>
							<li>PS과 PVDF의 다공성 고분자막(중공사 등) 제조법 정리</li>
							<li>비용매 유도 상분리(nonsolvent induced phase separation, NIPS)</li>
							<li>열 유도 상분리 공정(thermally Induced Phase Separation, TIPS)</li>
							<li>증기 유도 상 분리(VIPS)</li>
							<li>미세여과, 한외여과, 나노여과, 삼투, 각각 50-500 nm, 1-50 nm, ≤1 nm 및 0.3-0.6 nm</li>
							<li>고분자/희석제/용매 의 삼성분계 상분리</li>
							<li>고분자 : PS, PVDF(가장 널리 사용)</li>
							<li>용매 :아세톤(Ac), 테트라메틸우레아(TMU), 트리에틸 포스페이트(TEP), 트리메틸 포스페이트(TMP), DMF/Ac, 메틸 에틸 케톤(MEK) 및 테트라히드로푸란(THF), 디메틸아세트아미드(DMAc), 디메틸포름아미드(DMF), 디메틸술폭시드(DMSO), 헥사메틸 포스포아미드(HMPA), N-메틸-2-피롤리돈(NMP)</li>
							<li>첨가제: 폴리비닐피롤리돈(PVP), 폴리에틸렌 글리콜(PEG) 친수성 폴리머</li>
							<li>PVP 분자량 이 증가하면 막 스킨층 이 더 두꺼워 지는 반면 , 막 하위층은 거대 공극이 적은 조밀한 구조를 가지며 손가락 모양 거대 공극의 수가 점차 사라진다고 보고</li>
							<li>PEG 농도가 높을수록 막 표면 기공이 커지고 중량 다공성이 높아진다고 보고</li>
							<li>용매에 PVDF는 중량으로 15% 정도를 용해</li>
							<li></li>
						</ul>
					<li><a href="https://www.mdpi.com/2077-0375/8/1/14">향상된 물리적 특성을 갖는 TiO 2 /gC 3 N 4 /PVDF 복합막의 제조 및 특성 분석</a></li>
					<ul>
						<li>0.6g PFG-6000 + 21mL DMF -- 50°C에서 30분 동안 교반</li>
						<li>PVDF 3g + 실란 커플링제(SCA) 1.5mL -- 30분간 더 교반</li>
						<li>TiO2 0.75g 및 gC3N4 0.25g 를 첨가하고 4시간 동안 교반</li>
					</ul>
					
					<li><a href="https://pubs.acs.org/doi/full/10.1021/ie010553y">막 증류를 위한 폴리비닐리덴 플루오라이드 막의 제조 및 특성 분석</a></li>
					<li><a href="https://uwspace.uwaterloo.ca/bitstream/handle/10012/4722/Sun_Chenggui.pdf?sequence=1&isAllowed=y">Poly(vinylidene fluoride) membranes:Preparation, modification, characterization and applications</a></li>

				</ol>

			</div>
		</div>
	)
}

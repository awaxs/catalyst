import React from 'react';
import '../../styles/styles.css'

function MoS21TPOF() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MoS21TPOF;

function MainContents() {
	const title = 'A16_MoS2_iT_POF';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* D. 1T/2H-MoS2 @ nano particles TiO2(POF 코팅용) */}
			<div>
				<hr className='class-1'/>
				<h5><b><u>D. 1T/2H-MoS2 @ nano particles TiO2(POF 코팅용)</u></b></h5>	
				<p></p>

				<p><b><u>1. 시약</u></b></p>
					<ul>
						<li>A. 에서 합성한 TiO2</li>
						<li>Hexaammonium molybdate [(NH4)6Mo7O24]</li>
						<li>thiourea [CS(NH2)2]</li>
						<li>Acetic acid</li>
					</ul>	

				<p><b><u>2. nano TiO2에 MoS2 1T/2H 부착</u></b></p>
					<ol>
						<li>DI water 20 mL + acetic acid 10 mL 를 혼합하여 기수분해 혼합액을 만든다.</li>
						<li>(NH4)6Mo7O24 (0.0332 g) and CS(NH2)2 (0.0913 g)(Mo to S is 1:6)을 넣고 교반하여 용해한다.</li>
						<li>위 용액에 nano TiO2 particle을 아래 표의 조건으로 넣고 완전히 혼합한다.</li>
						<li>스테인레스 스틸 오토클레이브상기 용액에 넣고 180 °C에서 8시간 동안 용매열 반응</li>
						<li>오토클레이브 처리후 용액이 맑은 색이어야 한다.</li>
						<li>원심분리(5000~10000rpm)와 탈이온수 세척을 수회 반복한 다음 60 °C 오븐에서 24 hr동안 건조한다.</li>
					</ol>
						
					<p>1T-MoS2의 부착을 위한 최적 nano-TiO2 량을 결정하기 위한 합성 실험조건</p>
					<table className='table table-bordered'>
						<tr>
							<th>TiO2(g)</th>
							<th>DI water(mL)</th>
							<th>acetic acid(mL)</th>
							<th>(NH4)6Mo7O24(g)</th>
							<th>CS(NH2)2(g)</th>
						</tr>
						<tr>
							<td>0.2</td>
							<td>20</td>
							<td>10</td>
							<td>0.0332</td>
							<td>0.0913</td>
						</tr>
						<tr>
							<td>0.4</td>
							<td>20</td>
							<td>10</td>
							<td>0.0332</td>
							<td>0.0913</td>
						</tr>
						<tr>
							<td>0.6</td>
							<td>20</td>
							<td>10</td>
							<td>0.0332</td>
							<td>0.0913</td>
						</tr>
						<tr>
							<td>0.8</td>
							<td>20</td>
							<td>10</td>
							<td>0.0332</td>
							<td>0.0913</td>
						</tr>
						<tr>
							<td>1.0</td>
							<td>20</td>
							<td>10</td>
							<td>0.0332</td>
							<td>0.0913</td>
						</tr>
					</table>					
			</div>

			{/* E. 1T/2H-MoS2 @ nano TiO2 + POF */}
			<div>
				<hr className='class-1' />
				<h5><b><u>E. 1T/2H-MoS2 @ nano TiO2 + POF</u></b></h5>	
	
				<p></p>
					<h6><b><a href="https://www.sciencedirect.com/science/article/pii/S004313542300670X#bib0021" target='_blank' rel="">방법 1 논문</a></b></h6>
					<p><b><u>1. 시약 및 재료</u></b></p>
					<ul>
						<li>PMMA/PVDF 광섬유</li>
						<li>아세톤</li>
						<li>촉매(D. 1T/2H-MoS2 @ nano particles TiO2(POF 코팅용))</li>
						<li></li>
					</ul>
					<p><b><u>2. POF에 TiO2 부착</u></b></p>
					<ol>
						<li>별도의 아세톤 10mL에 촉매를 0.6g, 1g, 2g, 3g, 12.5g, 20.0g을 각각 넣는다</li>
						<li>위의 각 용액을 잘 혼합 분산시킨다.</li>
						<li>적당한 길이로 자른 POF를 용액에 <u><b>3 초</b></u> 동안 침지한 후 꺼내어 <u><b>10 초</b></u>동안에(열풍?) 건조 한다.</li>
						<li>에탄올과 증류수로 수회 세척한다.</li>
						<li></li>
					</ol>
				
					<table className='table table-bordered'>
						<tr>
							<th>혼합액(촉매g/아세톤 10mL)</th>
							<th>POF의 촉매량(mg/cm)</th>
							<th>POF의 촉매층두께(um)</th>
						</tr>
						<tr>
							<td>0.6</td>
							<td>0.074</td>
							<td>1</td>
						</tr>
						<tr>
							<td>1.0</td>
							<td>0.1</td>
							<td>8</td>
						</tr>
						<tr>
							<td>2.0</td>
							<td>0.189</td>
							<td>10</td>
						</tr>
						<tr>
							<td>3.0</td>
							<td>0.271</td>
							<td>20</td>
						</tr>
						<tr>
							<td>12.5</td>
							<td>0.67</td>
							<td>40</td>
						</tr>
						<tr>
							<td>20.0</td>
							<td>1.218</td>
							<td>89</td>
						</tr>
					</table>
					<p><b><u>코팅 모식도</u></b></p>
				<img src="../images/coating/1.PNG" width={'600'} alt=''/>
				<p><b><u>코팅 건조</u></b></p>
				<img src="../images/coating/3.jpg" width={'600'} alt=''/>
				<p><b><u>촉매 표면</u></b></p>
				<img src="../images/coating/5.PNG" width={'600'} alt=''/>
				<p><b><u>POF 단면단면</u></b></p>
				<img src="../images/coating/6.PNG" width={'600'} alt=''/>

					<p></p>
					<h6><b><a href="https://www.sciencedirect.com/science/article/pii/S2213343717301288" target='_blank' rel="">방법 2 논문</a></b></h6>
					<p><b><u>1. 시약 및 재료</u></b></p>
					<ul>
						<li>plastic optical fibers(POF) : PMMA core polyester corting (세양섬유 lumijella)</li>
						<li>TiO2 powder (Aeroxide P25) </li>
					</ul>
					<p><b><u>2. POF에 TiO2 부착</u></b></p>
					<ol>
						<li>POF 표면을 기계적 손상에 의해 긁힌 것을 이용.</li>
						<li>증류수에 0.5wt% TiO2 침지용액을 만든다.</li>
						<li>POF를 침지용액에 1분간 담근 후 25 °C에서 건조시켜 코팅 한다.</li>
						<li>코팅은 동일한 절차를 5~10회 반복 한다. </li>
						<li><u>50 °C에서 24시간 동안 열처리 한다 . </u></li>
						<img src="../images/paper/21.PNG" width={'600'} alt=''/>
					</ol>

					<p></p>
					<h6><b><a href="https://www.sciencedirect.com/science/article/pii/S0048969717325937" target='_blank' rel="">방법 3 논문</a></b></h6>
					<p><b><u>1. 시약 및 재료</u></b></p>
					<ul>
						<li></li>
						<li>TiO2 P90 </li>
					</ul>
					<p><b><u>2. POF에 TiO2 부착</u></b></p>
					<ol>
						<li>POF를 특수 마이크로 스트리퍼를 사용하여 수동으로 제거한 후, 벗겨진 섬유를 아세톤에 15분 동안 담가서 코팅 고분자 클래딩을 용해시킨다.</li>
						<li>1.0% TiO2 P90 분산액(10g/L) 침지용액을 만든다.</li>
						<li>광섬유를 분산 용액에 60 초 동안 침지한 다음 천천히 꺼낸다.</li>
						<li>코팅은 동일한 절차를 5~10회 반복 한다. </li>
						<li><u>100 °C에서 5 분간 열 건조 한다. </u></li>
						<img src="../images/paper/22.PNG" width={'600'} alt=''/>
					</ol>

					
					<p></p>
					<h6><b><a href="https://pubs.acs.org/doi/10.1021/acs.est.1c08031" target='_blank' rel="">방법 4 논문</a></b></h6>
					<p><b><u>1. 시약 및 재료</u></b></p>
					<ul>
						<li>OF는 코어 직경이 4mm, 외부 직경이 5mm, 폴리메틸 메타크릴레이트 플라스틱 OF</li>
						<li></li>
						<li></li>
						<li>TiO2 P90 </li>
					</ul>
					<p><b><u>2. POF에 TiO2 부착</u></b></p>
					<ol>
						<li>0.5g의 Zr-MOFs/rGO/Ag3PO4를 10g의 DI 물에 초음파 분산 했다.</li>
						<li>클래딩을 기계적으로 벗겨내어 광섬유(OF)를 전처리했다.</li>
						<li>OF를 현탁액에 10초 동안 담근 후 40°C에서 건조했다.</li>
						<li>침지-건조 절차를 10회 반복 했다.</li>
						<li>한편, DMAC 10g이 담긴 유리관에 PVP 0.3g과 PVDF 1g을 넣고 80℃에서 1시간 동안 교반하여 균일한 코팅액을 형성했다.</li>
						<li>코팅된 OFs를 코팅 용액에 20초 동안 담근 후, 섬유를 실온에서 12시간 동안 충분한 DI 수에 즉시 담갔다.</li>
						<li>OF를 코팅 용액에 20초 동안 담근 후, 코팅된 섬유를 즉시 충분한 탈이온수에 12시간 동안 담갔다. </li>
						<li>코팅된 섬유를 40℃에서 24시간 동안 건조하여 최종적으로 얻어졌다.</li>
						<li>코팅된 섬유를 40℃에서 24시간 동안 건조했다.</li>
						<img src="../images/strategy/23.PNG" width={'600'} alt=''/>
					</ol>

			</div>
			
		</div>
	)
}
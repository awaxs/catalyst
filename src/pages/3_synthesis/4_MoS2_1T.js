import React from 'react';
import '../../styles/styles.css'

function MoS21T() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MoS21T;

function MainContents() {
	const title = 'A4_MoS2_1T';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* 1T-MoS2 particle */}
			<div className='bky'>
				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>Base B. 1T-MoS2 </u></b></h5>
				
				<p><b><u>1. 시약</u></b></p>
					<ul>
						<li>Hexaammonium molybdate [(NH4)6Mo7O24]</li>
						<li>thiourea [CS(NH2)2]</li>
						<li>Acetic acid</li>
					</ul>	
				
					<p><b><u>2. 합성</u></b></p>
					<ol>
						<li>DI water 20 mL + acetic acid 10 mL 를 혼합</li>
						<li>(NH4)6Mo7O24 (0.0332 g) and CS(NH2)2 (0.0913 g) : Mo to S is 1:6</li>
						<li>Teflon-lined stainless-steel autoclave</li>
						<li>180 °C for 8 hr</li>
						<li>원심 분리 + DI 수와 에탄올로 여러 번 세척</li>
					</ol>	
					<img src="../images/strategy/16.PNG" width={'600'} alt=''/>
					<img src="../images/strategy/17.PNG" width={'600'} alt=''/>
					<img src="../images/strategy/18.PNG" width={'600'} alt=''/>
				<ul>
					<li>아시트산 0, 5 mL : 200~800 nm의 3차원 MoS 2 꽃구슬</li>
					<li>아세트산 10 mL(V산:V물=1:2) : 1T 우세, L(50~150 nm), D(5 nm) 층간 간격(50~200nm)</li>
				</ul>

				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894721016855">고효율 전기촉매 수소 발생을 위한 간단한 용매열 방법으로 제조된 높은 비율의 1 T 상 MoS 2</a></li>

			</div>

		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function MoN21TTm() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MoN21TTm;

function MainContents() {
	const title = 'A19_MoN2_1T_tm';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* C. 1T/2H-MoS2 + Anodized Titanum mesh */}
			<div className='bk'>
				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>C. 1T/2H-MoS2 + Anodized Titanum mesh</u></b></h5>	
					<p></p>

					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>Hexaammonium molybdate [(NH4)6Mo7O24]</li>
							<li>thiourea [CS(NH2)2]</li>
							<li>Acetic acid</li>
							<li>anodized titanum mesh</li>
						</ul>	

					<p><b><u>2. anodized titanum mesh에 MoS2-1T/2H 부착</u></b></p>
						<ol>
							<li>DI water 20 mL + acetic acid 10 mL 를 혼합</li>
							<li>(NH4)6Mo7O24 (0.0332 g) and CS(NH2)2 (0.0913 g) : Mo to S is 1:6</li>
							<li>50 mL Teflon-lined stainless-steel autoclave</li>
							<li>180 °C for 8 hr</li>
							<li>원심 분리 + DI 수와 에탄올로 여러 번 세척</li>												
						</ol>
			</div>

		</div>
	)
}

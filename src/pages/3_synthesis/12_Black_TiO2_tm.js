import React from 'react';
import '../../styles/styles.css'

function BlackTiO2Tm() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default BlackTiO2Tm;

function MainContents() {
	const title = 'A12_Black_TiO2_tm';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* Black TiO2 Titanum Mesh */}
			<div className='bky'>
				<hr className='hrstyle'/>
					<h5 className='h5style'><b><u>Base D. Black TiO2 Titanum Mesh</u></b></h5>
					
					<p><b><u>1. 시약</u></b></p>
					<ul>
						<li>Anodized Titanum Mesh</li>
					</ul>
					<p><b><u>2. 흑색 TiO2 나노 튜브 어레이 합성</u></b></p>
					<ol>
						<li>TiO2 NTA를 음극으로 사용하고 동일한 면적의 Ti(또는 Pt) 시트를 양극으로 한다. </li>
						<li>H2O(5 중량%) 및 NH4F(0.27 중량%)를 포함하는 에틸렌 글리콜 용액에 장치한다.</li>
						<li>전압(-30, -35, -40, -45 및 -50 V)에서 일정 시간(15, 20, 30, 60 및 120분) 동안 전기화학적 환원을 수행한다.</li>
						<li>40V, 20min 이 최적 조건</li>
						<li>에탄올에서 10분 동안 세척</li>
						<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/ra/c8ra02983k" target='_blank' rel="">양극산화에 의한 Black TiO2 합성(시간등 조건 변화), Black TiO2 nanotube arrays fabricated by electrochemical self-doping and their photoelectrochemical performance</a></li>

					</ol>
					<img src="../images/strategy/24.PNG" width={'600'} alt=''/>
			</div>
			
		</div>
	)
}

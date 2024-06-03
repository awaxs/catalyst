import React from 'react';

function 논문작성() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default 논문작성;


function Contents() {
	
	const title = 'Paper(연구논문)';

  return (
		// 여기에 내용을 넣는다
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			
			<div>

				<ul>
					<h5>++++ 우리가 해결해야할 것 ++++</h5>
						<ol>
							<li>최대로 넓은 광(에너지)을 흡수하는 촉매</li>
							<li>전자 정공의 재결합을 방지하는 방법</li>
							<li>빠른 전자의 이동</li>
							<li>많은 활성점 확보 방법</li>
							<li>기질의 빠른 흡착/탈착</li>
							<li>csdasdssa</li>

						</ol>
					<h5>++++ 서론에 들어가야할 내용 ++++</h5>
						<ol>
							<li></li>
							<li></li>
							<li></li>

						</ol>					
					<h5>++++ 포함되어야 할 촉매 특성 분석 ++++</h5>
						<ol>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ol>
					
					<h5>++++ MoS2 의 특징 ++++</h5>
						<ol>
							<li>높은 전기 전도성(10^5 ~ 10^7 배)</li>
							<li>높은 촉매 활동</li>
							<li>많은 활성 부위</li>
							<li>표면이 음으로 하전</li>
							<li>금속성 및 정공 전도성 특성에 기인</li>
							<li></li>
							<li></li>
							<li></li>
						</ol>
					
					<h5>++++ 앞으로 진행할 논문 ++++</h5>
						<ol>
							<li>*** 1T-MoS2 성능 최적화를 위한 합성 조건 결정를 위한 논문***</li>
							<li>solvothermal synthesis(solvent conc. vs 1T-MoS2 layers</li>
							<li>solvothermal synthesis 조건(solvent conc. vs 1T-MoS2 layers</li>
							<li></li>
							<li></li>
							<li>*** 스텐 철망 / TiO2 / 1T-MoS2 성능 검증를 위한 논문***</li>
							<li></li>
							<li>*** Nanotube Black TiO2(양극산화) / 1T-MoS2 성능 검증를 위한 논문***</li>
							<li>Nanotube Black TiO2 1T-MoS2</li>
							<li></li>
							<li></li>
							<li>*** 연속실험 및 CFD 논문(Nanotube Black TiO2 / 1T-MoS2 )***</li>
							<li></li>
							<li>*** 연속실험(Pilot Plant 제작) 및 CFD 논문(Nanotube Black TiO2 / 1T-MoS2 )***</li>
							<li></li>
						</ol>
						
				</ul>

			</div>
		</div>
	);
}	
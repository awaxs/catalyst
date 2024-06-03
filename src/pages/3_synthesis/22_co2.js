import React from 'react';
import '../../styles/styles.css'

function Co2() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default Co2;

function MainContents() {
	const title = 'A22_co2';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			
			<div>
				<ul>
					<h5>++++ 2. CO2 환원 ++++</h5>
					<ol>
						<li><a href="https://pubs.rsc.org/en/content/articlelanding/2021/nr/d0nr07716j">금속 할로겐화물 페로브스카이트를 광촉매에 적용하는 방법: 과제 및 개발</a></li>
						<li><a href="https://pubs.acs.org/doi/10.1021/acsanm.1c00990">MoS2–Nanosheets-Based Catalysts for Photocatalytic CO2 Reduction: A Review</a></li>
						<li><a href="https://pubs.acs.org/doi/10.1021/acscatal.0c02557">광촉매 CO 2 감소: Ab 초기 메커니즘, 동역학 및 멀티스케일 모델링 시뮬레이션 검토</a></li>
						<li><a href="https://pubs.acs.org/doi/full/10.1021/acs.energyfuels.1c03374">Research Progress on CO2 Photocatalytic Reduction with Full Solar Spectral Responses</a></li>
					
						<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/GC/D0GC01092H">Catalytic reduction of CO2 into fuels and fine chemicals</a></li>
						
						
						
						
						
						<li><a href="https://pubs.acs.org/doi/10.1021/acs.accounts.8b00444">2차원 다공성 고분자: 샌드위치 구조에서 층상 골격으로	</a></li>
						
						
						
						
						
						
						
						

					</ol>

				</ul>

			</div>
		</div>
	)
}

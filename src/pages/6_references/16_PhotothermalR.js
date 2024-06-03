import React from 'react';
import '../../styles/styles.css'

function PhotothermalR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default PhotothermalR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>16. 광열촉매(Photothermal-enhanced catalyst)</h3>
			<ul>

				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/SC/C6SC03239G#!divAbstract" target='_blank' rel="">Cu7S4 microsphere@zeolitic</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S246802571730064X" target='_blank' rel="">A review on photo-thermal catalytic conversion of carbon dioxide</a></li>
				<li><a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/cssc.201900175" target='_blank' rel="">환경에서의 열광 촉매UV / Vis / IR 분해</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/TA/C8TA01362D#!divAbstract" target='_blank' rel="">Co3O4 메조포러스 나노로드 공기중 벤젠 완전 분해(실험실 공기정화)</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/ta/c5ta07617j#!divAbstract" target='_blank' rel="">광/열촉매 활성이 뛰어난 초박형 메조포러스 Co3O4 나노시트</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S2211285519304860" target='_blank' rel="">Fe3Si assisted Co3O4</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169433219310852" target='_blank' rel="">NiCo2O4 - CuCo2O4 - FeCo2O4 - MnCo2O4</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/sm/d0sm00306a#!divAbstract" target='_blank' rel="">광열 변환 효율이 높은 폴리피롤 및 폴리아닐린 나노 복합물</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/acs.nanolett.9b01417" target='_blank' rel="">원자 적으로 얇은 자기 반도체 CrPS 4 의 광화학 및 광열 산화 사이의 교차</a></li>

			</ul>

		</div>
	)
}

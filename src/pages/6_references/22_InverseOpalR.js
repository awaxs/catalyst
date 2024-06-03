import React from 'react';
import '../../styles/styles.css'

function InverseOpalR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default InverseOpalR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>22. Inverse Opal</h3>
			<ol>
				<li><a href='https://pubs.rsc.org/en/content/articlelanding/2020/ta/d0ta05655c'>역오팔의 광 트래핑 최적화를 통해 향상된 광촉매 작용</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/acsomega.0c00833?fig=abs1&ref=pdf'>Multilayer TiO2 Inverse Opal with Gold Nanoparticles for Enhanced Photocatalytic Activity</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlehtml/2015/tc/c5tc01083g'>인공 오팔 광결정 및 역오팔 구조 – 광학에서 에너지 저장에 이르는 기본 및 응용</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0264127520304202'>가시광선 광촉매 활성을 위한 금 나노입자를 포함하는 다중 화합물 역오팔 구조</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0925838818328585'>TiO2 inverse opal photonic crystals: Synthesis, modification, and applications - A review</a></li>
				<li><a href='https://github.com/tiagovla/morpho.py'>PC Modeling Github, python</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/acsomega.0c00833'>향상된 광촉매 활성을 위한 금 나노입자를 포함하는 다층 TiO 2 역오팔</a></li>
				<li><a href='https://onlinelibrary.wiley.com/doi/10.1002/anie.202111048'>모양 제어 나노결정 빌딩 블록에서 합성된 고도로 정렬된 역오팔 구조</a></li>
				<li><a href='https://ieeexplore.ieee.org/document/6527934'>광결정 기반 광섬유 번들 및 응용</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/la702668p'>2 층상(140~554nm) : 유백색 헤테로 광결정에 대한 층 전이 접근법</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlelanding/2020/ta/d0ta05655c'>역오팔의 광 트래핑 최적화를 통해 향상된 광촉매 작용</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlehtml/2022/cc/d1cc05787a'>빛의 전달과 방출을 조정하기 위한 폴리머 기반 자가 조립 광결정</a></li>
			</ol>

		</div>
	)
}


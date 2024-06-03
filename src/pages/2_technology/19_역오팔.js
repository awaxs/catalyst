import React from 'react';
import '../../styles/styles.css'

function 역오팔() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 역오팔;

function MainContents() {
	const title = 'Inverse Opal';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. Opal / Inverse opal</h3>
			<ul>
				<li>Opal(오팔)
					<ul>
						<li>작은 실리카 구가 규칙적인 패턴으로 배열. 실리카 구 사이에는 물이 있다.</li>
						<li><img src="../images/photocatalyst/meta_10.jpg" width="600"  alt=''></img><br/></li>
						<li>구체는 백색광을 회절시켜 스펙트럼의 색상으로 분해</li>
						<li>큰 실리카 구로 구성 되어 있으면 모든 색상, 작으면 파란색 녹색 발현.</li>
						<li>화학 기호 : SiO2nH2O</li>
					</ul>
				</li>
				<li>inverse opal</li>
					<ul>
						<li><img src="../images/photocatalyst/meta_1.jpg" width="600"  alt=''></img><br/></li>
						<li>TiO2 역오팔 구조 의 템플릿 합성 .</li>
						
					</ul>
			</ul>

			<hr className='class-1'/>
			<h3>2. Inverse Opal(IO) structures</h3>
			<ul>
				<li>Opal :
					<ul>
						<li>오팔은 자연적으로 발생하는 광결정의 한 예입니다.</li>
						<li>오팔을 관찰하면 오팔을 구성하는 실리카의 구조로 인해 다양한 색상이 나타납니다.</li>
						<li>물질에 있는 구멍의 주기적인 배열은 결정 내에서 빛의 움직임을 제어합니다.</li>
						<li>질서 있고 반복적인 구조는 빛이 통과하는 방식에 영향을 미칩니다.</li>
						<li>예: 오팔이나 Blue Morpho 나비의 날개에서 볼 수 있습니다.</li>
						<li>오팔은 실리카의 작은 구체가 촘촘하고 규칙적인 배열로 배열되어 있다.</li>
					</ul>
				</li>
				<li>많은 활성점, 빠른 전자 전달, 넓은 표면적, 전하 분리 효율향상, 광여기 에너지를 확장, 광자 밴드 갭(PBG)으로 인해 IO로의 광 흡수 향상</li>
				<li><img src="../images/photocatalyst/meta_5.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>3. 역오팔의 광 트래핑 최적화(light-trapping optimization in inverse opals )</h3>
			<a href='https://pubs.rsc.org/en/content/articlelanding/2020/ta/d0ta05655c'>광가둠</a>
			<ul>
				<li><img src="../images/photocatalyst/meta_8.jpg" width="600"  alt=''></img><br/></li>
				<li>유전 상수(ε) 또는 굴절률의 공간적 주기 변화(간격)가 광자 밴드 갭(PBG)을 만든다고 생각한다.</li>
				<li>물과 접촉하는 내부 표면적이 크기 때문에 특정 유형의 광촉매에 유리합니다.</li>
				<li>이는 화학 흡착물에 더 많은 반응 부위를 노출시켜 이질적인 촉매 작용에 대한 부피 반응 속도를 높입니다.</li>
				<li>동시에, 광 트래핑은 산화환원 반응을 위한 전하 캐리어 생성 속도를 향상시킵니다.</li>
				<li><img src="../images/photocatalyst/meta_9.jpg" width="600"  alt=''></img><br/></li>
				<li>자연 방출 과정의 개략도.
					<ul>
						<li>(a) 원자는 에너지를 흡수하여 여기되고,광자로 에너지를 방출하고 원래상태로 돌아간다</li>
						<li>(b) 벌크 매체(점선)와 비교하여 광결정(실선)의 상태 밀도(DOS) 변화.</li>
						<li>DOS는 광결정의 스톱 갭 내부에서 0으로 감소하는 동안 벌크에 대한 포물선 의존성을 보여줍니다.</li>
						<li>DOS는 스톱 갭 가장자리에서 급격히 향상되는 것으로 관찰됩니다.</li>
					</ul>
				</li>
				<li>균질(단일)고체내에서의 빛의 속도보다 PC에서는 훨씬 느리므로,</li>
				<li>이는 전자-정공 쌍 생성을 위한 빛-물질(촉매) 간 접촉이 길어진다.</li>
				<li>fundamental photonic stop gap의 상하 edge 저조도(slow-light) 모드</li>
				<li>long-wavelength edge에서의 광자를 red-edge slow-light(빨간색 가장자리 느린광)이라고 하고,</li>
				<li>short-wavelength edge에서의 광자를 blue-edge slow-light(청색 가장자리 느린광)이라고 한다.</li>
			</ul>

			<hr className='class-1'/>

			<h3>참고문헌</h3>
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

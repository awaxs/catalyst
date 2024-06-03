import React from 'react';
import '../../styles/styles.css'

function 디칼코재나이트() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 디칼코재나이트;

function MainContents() {
	const title = 'Transition metal dichalcogenides(TMD)';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li>TMDC는 화학식 MX 2 의 화합물 입니다.</li>
				<li>M은 IV-VII B족(Mo, W, V, Nb, Ta, Ti, Zr, Hf, Tc 및 Re)의 전이 금속 원소</li>
				<li>X는 칼코겐 원소(S, Se, Te).</li>
				<li>XMX 단위층은 3개의 원자층으로 구성되며, 중심 원자층(M)이 두 개의 칼코겐 원자층(X) 사이에 끼워져 있습니다.</li>
				<li>TMDC는 흑연과 유사한 층상 구조를 차지합니다.</li>
				<li>중간층은 약한 반 데르 발스 힘에 의해 적층되어 박리를 통해 벌크 재료로부터 단층 또는 나노층이 형성됩니다</li>
				<li>TMDC는 여러 가지 장점
					<ul>
					<li>TMDC는 표면 대 부피 비율이 높습니다.</li>
					<li>TMDC는 적절한 밴드갭과 밴드 정렬을 제공하여 나노복합체의 광촉매 성능을 향상시키는 조정 가능한 밴드갭을 가지고 있습니다</li>
					<li>결함 엔지니어링은 2D 재료에서 쉽게 구현할 수 있으며 이는 TMDC에서 촉매 활동을 강화하는 효율적인 방법으로 확인되었습니다</li>
					<li>TMDC가 매우 다양하며(약40종) 자연에 풍부하게 존재하거나 합성이 가능하다는 점입니다. MoS2, WS2, MoSe2, ReS2</li>
					</ul>
				</li>

			</ul>

			<hr className='class-1'/>
			<h3>2. application</h3>
			<ul>
				<li>가스흡착 및 감지(VOC, CO, NO, NO2, SO2, H2S, NH3)</li>
				<li>폐수처리를 위한 흡착</li>
				<li>멤브레인 기술(해수 담수화)</li>
				<li>폐수 처리의 광촉매 기술</li>
			</ul>


			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7353444/'>오염 감소 적용을 위한 전이금속 디칼코게나이드</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}

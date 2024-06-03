import React from 'react';
import '../../styles/styles.css'

function 페로브스카이트() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 페로브스카이트;

function MainContents() {
	const title = 'Perovskite';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 개요</h3>
			<ul>
				<li>티탄산칼슘(CaTiO3)으로 칼슘 티타늄 산화물 광물입니다. 일반 화학식 A2+BB4+(X2-)3</li>
				<li>구조적 단순성, 산화환원 성능, 유연성, 전자 이동성, 열 안정성, 전자 전도성, 긴 전하 캐리어 수명, 
						전하 캐리어 이동성, 높은 흡광도 계수</li>
				<li><img src="../images/photocatalyst/perovskite_1.jpg" width="300"  alt=''></img><br/></li>
				<li>광촉매는 1.4 ~ 3.8eV 사이의 밴드 갭을 갖는 반도체</li>
				<li>전자-정공 쌍의 분리를 유도하는 효과적인 전기장은 전자-정공 재결합 가능성을 감소</li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}

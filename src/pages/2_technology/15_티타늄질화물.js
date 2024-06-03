import React from 'react';
import '../../styles/styles.css'

function 티타늄질화물() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 티타늄질화물;

function MainContents() {
	const title = 'titanium nitride (TiN)';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 개요</h3>
			<ul>
				<li>탁월한 전이금속 질화물(TMN)인 질화티타늄(TiN)은 뛰어난 특성과 다양한 응용분에로 확장 가능 하다.</li>
				<li>낮은 온도에서 플라즈몬 거동을 유지할 수 있는 능력으로 인해 TiN을 기존 플라즈몬 금속에 대한 유망한 대안으로 자리매김</li>
				<li>TiN은 가시광선과 근적외선에서 플라즈모닉하며 넓은 스펙트럼을 흡수하는 데 있어서 금과 은보다 우수합니다.</li>
				<li>높은 용융 온도, 인성, 높은 영률, 넓은 밴드 갭, 우수한 전기 전도성(금속), 뛰어난 열적, 화학적 안정성과 같은 특별한 특성</li>
				<li>전도성, 높은 전자 이동성 및 낮은 저항성을 비롯한 흥미로운 전기적 특성 및 열안정성, 기계적 강도에서 탁월한 물질이다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. TiN 나노입자 합성을 위한 Sol-Gel 기술</h3>
			<ul>
				<li>졸-겔 방법은 금속 알콕시드 전구체를 알코올 분해 또는 가수분해 를 통해 겔을 만든다.</li>
			</ul>

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6315645/'>Refractory Ultra-Broadband Perfect Absorber from Visible to Near-Infrared</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlehtml/2024/ma/d3ma00965c'>플라즈몬 금속의 유망한 대안인 질화티타늄(TiN): 합성 및 응용에 대한 포괄적인 검토</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlehtml/2003/jm/b301964k'>나노 구조의 질화 티타늄의 하이드라지드 졸-겔 합성: 전구체 화학 및 상 진화</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0257897221002632'>TiO2 졸-겔 코팅과 급속 열질화로 얻은 TiN 박막의 광학적, 전기적, 기계적 특성</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			



		</div>
	)
}

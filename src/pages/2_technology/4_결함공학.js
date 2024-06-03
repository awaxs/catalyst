import React from 'react';
import '../../styles/styles.css'

function 결함공학() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 결함공학;

function MainContents() {
	const title = '결함공학';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 개요</h3>
			<ul>
				<li>결정이란 내부 구조를 이루는 원자나 분자 혹은 이온 등이 공간에서 주기성을 가지고 규칙적으로 배열된 격자를 이루는 고체 물질입니다.</li>
				<li>결함들은 재료의 강도, 부식성, 전기전도도 등 재료의 성질에 큰 영향을 끼치게 되므로 매우 중요</li>
				<li><img src="../images/photocatalyst/결함_3.jpg" width="auto"  alt=''></img><br/>
					결정, 다결정, 비결정에서 원자의 배열</li>

				<li><img src="../images/photocatalyst/결함_1.jpg" width="auto"  alt=''></img><br/></li>
				<li><img src="../images/photocatalyst/결함_2.jpg" width="auto"  alt=''></img><br/>
					다결정과 결정 경계</li>
				<li>결함은 광촉매 활성에 긍정적인 영향뿐만 아니라 예상치 못한 또는 부정적인 영향을 가져올 수도 있습니다</li>
				<li>예를 들어, 외부 금속 원자 도핑은 산소 결손을 유도할 뿐만 아니라 격자 왜곡을 동반하여 재료 특성에 큰 영향을 미칩니다</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. The Types of Defect Disorders in Titania</h3>
			<ul>
				<li>O2 p는 넓은 밴드갭 산화물의 가전자대에 주로 기여하기 때문에, 광 이용률을 높이기 위해 더 높은 위치 에너지로 음이온을 도핑하여 가전자대를 높여 밴드갭을 줄이는 것이 가능합니다</li>
				<li>결함의 종류로는 점 결함(zero-dimensional defects), 선 결함(one-dimensional defects), 면 결함(two-dimensional defects), 그리고 체적 결함(three-dimensional defects)으로 나눈다</li>
				<li>점결함은 결정 배열에서 원자가 없거나 불규칙하게 배치된 곳입니다. 1차원 결함은 전위(모서리 또는 나사)로 인식됩니다. 평면 결함은 결정립 경계, 쌍정 경계 및 적층 결함의 세 그룹으로 나눌 수 있습니다.</li>
				<li>본질적인 결함(i)-(ii)의 형성은 Kröger-Vink 표기법을 사용하여 결함 평형(1)과 (2)를 통해 설명할 수 있습니다.</li>
				<li><img src="../images/photocatalyst/결함_4.jpg" width="auto"  alt=''></img><br/></li>
				<li>그림 1a에 표시된 것처럼 표면 산소 이온을 제거하면 산소 공극이 형성되는 반면,</li>
				<li>격자에서 두 개의 산소 이온을 제거하면 그림 1b에 표시된 것처럼 티타늄 격자가 형성됩니다.</li>
				<li>두 형성 모두 환원 조건에서 발생합니다.</li>
				<li>산화 조건을 고려하여 산소 흡착은 티타늄 공극의 형성을 유발합니다(식 (3))</li>
				<li><img src="../images/photocatalyst/결함_5.jpg" width="auto"  alt=''></img><br/></li>
				<li><img src="../images/photocatalyst/결함_6.jpg" width="auto"  alt=''></img><br/></li>
				<li>점 결함의 존재는 구조적 재배열의 공식화에 책임이 있으며, </li>
				<li>이는 Ti 팔면체의 국부적 대칭에 왜곡을 일으키고 전하 운반체의 수송에 영향을 미쳐 광촉매 과정의 효율성에 영향을 줄 수 있습니다. </li>
				<li>산소결손과 Ti3+ 사이의 상관관계는 복잡하다는 점을 강조해야 합니다. 이러한 관계의 세 가지 경우를 구분할 수 있습니다. </li>
				<li>
					<ul>
						<li>(i) TiO2에서 Ti3+ 종의 전하는 산소 결손 → Ti3+ 및 산소 결손이 동시에 나타나거나 사라지는 방식으로 균형을 이룰 수 있습니다. </li>
						<li>(ii) Ti3+ 및 산소 결손 외에도 일정량의 구조적 결함이 있음 → Ti3+와 산소 결손 사이의 불평등이 발생함 </li>
						<li>(iii) TiO2에 있는 Ti3+ 종의 전하는 양성자에 의해 균형을 이룹니다. → Ti3+는 산소 결손과 직접적인 관련이 없습니다 </li>
					</ul>
					<li>또한, 이온 결함이 TiO2의 전자 구조에서 공여체 및 수용체 수준의 형성에 책임이 있다는 점을 강조할 필요가 있습니다(그림 2). </li>
					<li></li>본질적인 결함의 유형에 따라 밴드 구성이 결정됩니다.</li>
					<li>티타니아의 전자적 특성에 영향을 미치는 중요한 문제는 점 결함의 위치입니다. 세 가지 주요 위치가 있습니다: </li>
					<ul>
						<li>(i) 표면(첫 번째 원자층), </li>
						<li>(ii)표면 아래(결정 슬래브), </li>
						<li>(iii)대량의 결정. </li>
					</ul>
					<li>또한 흥미롭고 어려운 점은 결함 쌍으로 설명되는 다양한 유형의 결함이 병렬로 형성된다는 것입니다. </li>
					<li>광촉매 메커니즘을 설명하는 역할은 주로 적절한 특성화의 어려움으로 인해 간과되는 경우가 많습니다.</li>
					<li><img src="../images/photocatalyst/결함_7.jpg" width="auto"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>3. Dopant-Free Defective Titania Nanomaterials—Preparation Strategies and Properties</h3>
			<img src="../images/photocatalyst/결함_8.jpg" width="auto"  alt=''></img><br/>
			<img src="../images/photocatalyst/결함_9.jpg" width="auto"  alt=''></img><br/>
			<ul>
				<li>공극 공학(vacancy engineering)은 결정 격자 에 결함이나 공극을 도입하여 반도체의 밴드 구조를 변형하는 데 사용됩니다 .</li>
				<li>완벽한 결정 격자에서 각 원자는 인접한 원자와 특정 위치 및 배위수를 갖습니다.</li>
				<li>공석이 생기면 빈 공간이 생겨 격자에 결함이 발생하고 반도체의 전자 특성이 바뀔 수 있습니다.</li>
				<li>공석의 도입은 항상 밴드 갭 내에 중간 갭 상태를 형성하여 반도체의 광 반응 능력과 광전자/열 능력을 수정하여 광열 촉매 처리량에 영향을 미칩니다.</li>
			</ul>

			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://pubs.acs.org/doi/10.1021/accountsmr.1c00201'>광촉매 및 광전극의 결함 공학</a></li>
				<li><a href=''>Defective Dopant-Free TiO2 as an Efficient Visible Light-Active Photocatalyst</a></li>
				<li><a href='https://pdfs.semanticscholar.org/6b6b/f287117b1d846c4c03748855258591f980e7.pdf'></a></li>
			</ol>
			


		</div>
	)
}


import React from 'react';
import '../../styles/styles.css'

function 전자밴드구조() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 전자밴드구조;

function MainContents() {
	const title = 'Electronic band structure';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>Electronic band structure(띠 구조)</h3>
			<ul>
				<li>단원자에 속한 전자들은 서로 다른 에너지 레벨을 갖는 atomic orbital을 점유합니다.</li>
				<li>그러나 두 개 이상의 원자가 결합하여 분자를 형성할 때, 원자들의 atomic orbital은 중첩됩니다.</li>
				<li>파울리의 배타 원리에 의하면 전자들은 같은 양자수를 가질 수 없으므로,</li>
				<li>중첩된 atomic orbital들은 서로 다른 에너지 레벨로 분리되며 molecular orbital을 형성하게 됩니다.</li>
				<li>더 많은 원자가 결합할수록 atomic orbital들은 더 많은 molecular orbital로 나뉘기 때문에 에너지 레벨 사이의 간격은 점점 감소하게 됩니다.</li>
				<li>따라서 주기함수 포텐셜에서 허용된 에너지 상태들은 매우 촘촘하게 분포해 있으므로 연속적인 띠로 간주할 수 있습니다.</li>
				<li>밴드 이론은 광흡수와 같은 물리적 특성 설명에 사용하며, 광촉매, 태양 전지 등 에 대한 이해를 위해 필요하다.</li>
				<li>N 개의 원자가 결정을 형성하면 원자의 원자 궤도가 옆 원자 들 궤도와 겹치게 된다.</li>
				<li>각 개별 에너지 준위는 N개 에너지 준위를 가지며, 각 준위는 서로 다른 에너지를 가집니다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드구조_1.png" width="800" alt=''/><br/>
				<li>많은 수의 탄소 원자가 모여 다이아몬드 결정을 형성할 때 밴드 형성에 대한 가상의 예이다.<br/>
				오른쪽 그래프는 원자 사이의 간격에 따른 에너지 수준을 보여준다.<br/>
				원자가 멀리 떨어져 있을 때(그래프 오른쪽) 고유 상태는 탄소의 원자 궤도이다.<br/>
				원자가 더 가까워지면(왼쪽) 오비탈은 서로 다른 에너지를 갖는 분자 오비탈로 혼성화된다.<br/>
				원자가 많기 때문에 궤도는 에너지가 매우 가깝고 연속적인 띠를 형성한다.<br/>
				Pauli 배제 원리는 단일 궤도의 전자 수를 2개로 제한하고 밴드는 가장 낮은 에너지부터 채워진다.<br/></li>
				그래프의 a 지점으로 표시된 실제 다이아몬드 결정 셀 크기에서는 5.5eV 밴드 갭으로 분리된 두 개의 밴드가 형성된다.</li>
				<li>밴드 이론은 고체의 양자 상태에 대한 근사치일 뿐이며, 이는 서로 결합된 많은 동일한 원자 또는 분자로 구성된 고체에 적용된다.</li>
				<li>띠 구조 (Band structure)는 결정 구조의 전자 에너지 레벨에 대한 정보를 Bloch 벡터 k와 밴드 인덱스 n, 두 양자수에 대해 서술하는 방법입니다.</li>
				<li>Band structure는 아주 강력한 도구로, 결정의 전기적, 광학적 특성 및 자기적 특성까지도 Band structure를 통해 설명할 수 있습니다.</li>
				<li>* Band structure로 알아보는 물질의 전기적 성질
					<br/><br/><img src="../images/photocatalyst/밴드구조_3.png" width="800" alt=''/><br/>
					<ul>
						<li>Hexagonal Diamond는 부도체입니다.</li>
						<li>보통 band gap이 2 eV 이상인 물질을 부도체 이다</li>
						<li>계산된 hexagonal diagmond의 band gap은 3.15520 eV이고 band gap 안에 fermi level이 있으므로 해당 구조가 부도체임을 알 수 있다.</li>
						<li>반면 금속인 Aluminum의 Band structure를 보면 Fermi level 근처에 간격이 없이 conduction band와 valence band가 중첩되어있으므로 도체인 것을 확인할 수 있습니다.</li>
						<li>Band structure와 DOS는 에너지 레벨에 관한 정보를 다른 방식으로 표현하는 두 방법이기 때문에, 두 그래프의 축을 겹쳐 함께 볼 수 있습니다. DOS의 x축과 band structure의 y축을 결합하면 Band gap이 같은 위치에서 나타나므로 두 그래프가 같은 정보를 나타낸다는 것을 명확히 알 수 있습니다. 두 그래프는 비슷한 정보를 담고 있지만, 전자 구조를 시각화하거나 band transition을 알아보는 데는 Band structure가 특히 유용합니다.</li>
					</ul>
				</li>
				<li>* Doping에 의해 발생하는 전자 구조의 변화
					<br/><br/><img src="../images/photocatalyst/밴드구조_6.png" width="800" alt=''/><br/>
					<ul>
						<li>Silicon의 Band structure를 보았을 때 Band gap이 존재하며 band gap 사이에 fermi level이 위치하는 것을 알 수 있습니다.</li>
						<li>그러나 P를 도핑하면 전자 하나가 많아지며 band gap이 fermi level 아래로 이동하였습니다.</li>
						<li>따라서 Silicon에 P 원자를 doping하면 전도성을 띠게 되는 것을 확인할 수 있습니다.</li>
						<li>반면 B를 도핑하였을 때는 전자 하나가 적어지며 band gap이 fermi level 위쪽으로 올라가게 되며</li>
						<li>역시 전도성을 띠게 되는 것을 확인할 수 있습니다.</li>
						<li>이때 오른쪽의 DOS 그래프에서도 band gap의 변화를 확인할 수 있습니다.</li>
						<li><a href='https://materialssquare.com/sample/band-2'>계산 결과 확인하기</a></li>
						<li><a href='https://edu.materialssquare.com/'>유료강의: 맷스큐 에듀의 시뮬레이션과 인공지능을 활용한 소재 설계 강의</a></li>
					</ul>
				</li>
			</ul>

			<hr className='class-1'/>
			<h3>브릴루앙 영역(Brillouin zone)</h3>
			<ul>
				<li>결정을 다루때 결정을 기본단위로 잘라서 생각한다. 이를 반복 하면 전체 결정을 설명할 수 있다.</li>
				<li>이러한 단위 공간을 위그너-자이츠 세포(Wigner-Seitz cell)라고 칭한다.</li>
				<li>브릴루앙 영역은 각 공간축의 파수에 해당하는 벡터를 축으로 하는 '역격자 공간(reciprocal space)'에서 만든 위그너-자이츠 세포를 말한다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드구조_2.png" width="400" alt=''/><br/>
				<img src="../images/photocatalyst/밴드구조_1.jpg" width="500" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>밀도-함수 이론(Density functional theory, DFT)</h3>
			<ul>
				<li>밀도범함수 이론(Density functional theory, DFT)은 물질, 분자 내부에 전자가 들어있는 모양과 그 에너지를 양자역학으로 계산하기 위한 이론의 하나이다.</li>
				<li>특정 분자의 모양과 성질 등등을 예측할 수 있다.</li>
				<li>가장 널리 쓰이는 양자역학 계산 분야 중 하나이다.</li>
				<li>물질의 성질을 공부하려면 (많은 원자핵)+(많은 전자)문제, 즉 다체 물제를 풀어야 한다.</li>
				<li>복잡한 분자의 경우 근사 방법을 이용하여 계산한다.</li>
				<li>밀도범함수이론에서는 많은 전자 문제를 단순히 전자들의 파동함수들대신 전자 밀도함수로 대체함으로 손쉽게 계산하도록 하고 있다.</li>
				<li>수많은 전자를 하나 하나의 움직임 대신에 전자 무더기를 한 덩어리로 따져 보는 것이다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드구조_5.jpg" width="400" alt=''/><br/></li>
				<li>Simulation Software : Python Materials Genomics(pymatgen) 파이썬 패키지, VASP (Vienna Ab initio Simulation Package) ....</li>
			</ul>

			<hr className='class-1'/>
			<h3>직접천이, 간접천이</h3>
			<ul>
				<li>* 직접천이 (direct bandgap)</li>
				<li>* 직접천이 (direct bandgap)</li>
				<li>반도체의 E-K 다이어그램에서 전도대의 최소값과 가전자대의 최대값이 일치하는 경우.</li>
				<li>직접천이는 전자의 이동이 빨라 전체 소자의 반응속도도 빨라지고 전자의 이동시 방출하는 에너지가 빛으로 방출되어</li>
				<li>발광 다이오드와 같은 소자에 이용됩니다.</li>
				<li>주로 화합물 반도체에서 찾아볼 수 있고 갈륨비소(GaAs),질화갈륨(GaN)등이 있습니다.</li>
				<li>* 간접천이 (indirect bandgap)</li>
				<li>반도체의 E-K다이어그램에서 전도대의 최소값과 가전자대의 최대값이 일치하지 않는 경우입니다.</li>
				<li>간접천이는 전도대의 전자가 가전자대로 이동할 때 바로 가지 못하고 어딘가를 거쳐갑니다.</li>
				<li>이 때문에 반응속도가 느리고 에너지를 빛이 아니라 열에너지의 형태인 포논(phonon)으로 방출합니다.</li>
				<li>간접천이는 이러한 특징으로 solar cell과 같은 곳에 쓰입니다.</li>
				<li>순수 반도체인 규소(Si), 저마늄(Ge)와 화합물 반도체인 질화알루미늄(AlN) 등이 있습니다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드구조_4.png" width="500" alt=''/><br/></li>
				<li>벌크 MoS2는 S 원자 사이에 Mo 원자가 삽입된 간접 밴드 갭(1.2 eV) 반도체이며 양자 구속으로 인해 단일층에서 에너지 1.9 eV의 직접 밴드 갭으로 전환됩니다.</li>
				<li>이 희귀한 특성으로 입사 가시광선을 흡수할 수 있습니다.</li>
				<li>또한, 층간 약한 반 데르 발스 힘 과 강한 층내 공유 결합은 효과적인 전하 수송에 유리하게 만듭니다. 층상 나노시트 형태의 MoS2 는 재결합 속도의 가속화된 억제를 유도하는 우수한 광촉매로 작용할 수 있으며 광촉매 활성 부위에 더 넓은 영역을 제공한다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드구조_5.png" width="300" alt=''/><br/></li>
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

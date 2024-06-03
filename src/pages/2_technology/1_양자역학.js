import React from 'react';
import '../../styles/styles.css'

function 양자역학() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 양자역학;

function MainContents() {
	const title = 'Quantum Mechanics';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 양자역학의 탄생</h3>
			
			<hr className='class-2'/>
			<h5>1.1. 1766, 캐번디시(Cavendish)</h5>
			<ul>
				<li>산 + 금속 - &gt; 기체(수소발견)</li>
				<li>영국 왕립학회, 1766년 논문에서 처음으로 수소를 독립된 원소로 보았으며, 이를 '가연성 공기'라고 불렀다.</li>
			</ul>

			<hr className='class-2'/>
			<h5>1.2. 1886, 오이겐 골드슈타인 (Eugen Goldstein)</h5>
			<ul>
				<li>낮은 압력의 기체가 들어있는 방전관에 높은 전압을 걸어주면 (-)극 쪽으로 이동하는 입자의 흐름을 발견.</li>
				<li>즉 '양극선'을 발견하였지만, 그 정체를 파악하지는 못했다.</li>
			</ul>

			<hr className='class-2'/>
			<h5>1.3. 1895, 뢴트겐(Röntgen)</h5>
			<ul>
				<li>"뢴트겐선"라 불리는 파장이 짧은 전자기파(X선의 발견)를 발견</li>
				<li>1901년 최초의 노벨 물리학상을 수상</li>
				<li><br/><img src="../images/photocatalyst/quantum_1.jpg" width="300" alt=''/><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>1.4. 1896, 베크렐(Becquerel)</h5>
			<ul>
				<li>인광 및 형광 현상을 연구 하던중 우라늄에서 방사선 방출을 발견</li>
				<li>퀴리가 연구를 이어나감.(우라늄광 속의 라듐 발견)</li>
			</ul>

			<hr className='class-2'/>
			<h5>1.5. 1897, 톰슨(Thomson)</h5>
			<ul>
				<li>음극선 발견(전자인지 모름)</li>
				<li>1901년 최초의 노벨 물리학상을 수상</li>
				<li><br/><img src="../images/photocatalyst/quantum_2.jpg" width="500" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/quantum_3.jpg" width="500" alt=''/><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>1.6. 1911, 러더퍼드(Rutherford)</h5>
			<ul>
				<li>원자모형은 최초로 원자핵의 존재를 밝혀낸 모형이다.</li>
				<li>라듐 + 금박(알파입자 실험, 알파 베타, 감마)</li>
				<li><br/><img src="../images/photocatalyst/quantum_5.jpg" width="300" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/quantum_4.jpg" width="300" alt=''/><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>1.7. 1897, 닐슨보어(Bohr)</h5>
			<ul>
				<li>양자역학의 시작점</li>
				<li>닐스 보아(양자성, 코펜하겐 학설)</li>
				<li>7개 궤도 까지 있다.</li>
				<li>보어는 원자의 보어 모형을 개발</li>
				<li>전자의 에너지 준위는 이산적이며, 전자는 원자핵 주위의 안정적인 궤도를 돈다.</li>
				<li>한 에너지 준위(또는 궤도)에서 다른 에너지 준위로만 이동할 수 있다고 제안했다.</li>
				
				<li><br/><img src="../images/photocatalyst/quantum_6.jpg" width="300" alt=''/><br/></li>
				<li>1 궤도 - 자외선</li>
				<li>2 궤도 - 가시광선</li>
				<li>3 궤도 - 적외선</li>
				<li>N - 알파선 - O + H(최초의 핵변환) proton(최초란 의미) 발견</li>
				
				<li><br/><img src="../images/photocatalyst/quantum_7.jpg" width="400" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/Hydrogen_transitions.jpg" width="600" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/Hydrogen_transitions2.jpg" width="600" alt=''/><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>1.8. 1911, 드브로이(de Broglie)</h5>
			<ul>
				<li>원자는 왜 불연속적인 성질을 가지는가. - 전자는 원자속에서 파동으로 존재하기 때문이다.</li>
				<li>리드버그 공식:각운동량의 양자화 - 정상파의 조건</li>
				<li>드브로이 물질파</li>
				<li><br/><img src="../images/photocatalyst/quantum_8.jpg" width="500" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/quantum_9.jpg" width="500" alt=''/><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>1.9 거리에 따른 퍼텐셜 에너지의 변화</h5>
			<ul>
				<li><br/><img src="../images/photocatalyst/quantum_10.jpg" width="600" alt=''/><br/></li>
				<li>두 입자가 무한히 멀리 떨어져 있는 경우, 즉 r → ∞인 경우에는 두 입자 사이에 아무런 상호작용이 존재하지 않는다. 이때의 에너지 값을 0 (---)으로 기준 잡았다. 따라서 두 원자가 각각 따로따로 존재할 때보다 불안정해지면, 퍼텐셜 에너지는 (+) 값을 갖고, 안정해지면 (-) 값을 갖는다.</li>
				<li>원자들은 정전기적 상호작용을 한다. 인력 상호작용은 퍼텐셜 에너지를 낮춰 안정화시키며, 반발력 상호작용은 퍼텐셜 에너지를 높여 불안정하게 만든다. 이 상호작용은 동시, 복합적으로 이루어진다.</li>
				<li>원자 간 상호작용(인력, 반발력)은 거리에 의존한다. 거리가 가까울수록(작은 r 값을 가질수록) 상호작용이 크게 나타난다. 상호작용에 의한 에너지(=힘*거리) 역시 거리에 의존한다.</li>
				<li>그래프의 모양은 아래로 움푹 파인 우물(well) 형태이다. 이는 원자 간 상호작용의 복합적인 결과이다. 전체 에너지 그래프(실선)를 상호작용 종류에 따라 인력에 의한 에너지 그래프(적색점선)와 반발력에 의한 에너지 그래프(청색점선)로 분리하면, 다음과 같다.</li>
				<li><br/><img src="../images/photocatalyst/quantum_11.jpg" width="600" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>
			<a href='https://blog.naver.com/jea2275/220895385986'>원자 관련</a>
			<h3>2. 원자의 구조</h3>
			<ul>
				<li>모든 움직이는 입자는 파동성질을 가지고 있습니다</li>
				<li>파동-입자 이중성(wave-particle duality)은 양자역학에서 모든 물질이 입자와 파동의 성질을 동시에 지니는 성질이다</li>
				<li><br/><img src="../images/photocatalyst/3.jpg" width="800" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>de Broglie 식(파동-입자 이중성)</h3>
			<ul>
				<li>오비탈에 대한 이해를 위해서는 모든 움직이는 입자는 파동성을 가지고 있음을 설명하는 de Broglie식과, Heisenberg의 불확정성 원리, 슈뢰딩거방정식에 대해 이해를 할 수 있어야 한다.</li>
				<li><br/><img src="../images/photocatalyst/4.jpg" width="300" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/5.jpg" width="600" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>4. 하이젠베르크 불확정성 원리(Heigenberg's uncertainty principle)</h3>
			<ul>
				<li>위치-운동량에 대한 불확정성 원리이며, 입자의 위치와 운동량을 동시에 정확히 측정할 수 없다는 양자역학적 원리이다.</li>
				<li>여러 번의 관찰로부터 얻어지는 기댓값과 같은 통계적인 예측만을 할 수 있다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>5. 슈뢰딩거의 파동방정식(Schrödinger equation)</h3>
			<ul>
				<li>전자를 핵 주위의 일정한 궤도를 도는 입자라 생각하는 대신, 파동(파동성을 강조한 입자)으로 모델링했다.</li>
				<li><br/><img src="../images/photocatalyst/26.png" width="600" alt=''/><br/></li>
				<li>파동함수 절댓값을 제곱한 값이 입자가 존재할 확률밀도를 의미한다.</li>
				<li>파동함수는 전자가 어디에 있는지 알려준다.</li>
				<li><br/><img src="../images/photocatalyst/27.png" width="400" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>6. 양자수와 원자 파동함수</h3>
			<ul>
				<li>슈뢰딩거의 파동모형에 따르면 원자오비탈은 세 가지 양자수의 조합으로 묘사된다.</li>
				<ul>
					<li>주양자수: 주양자수는 오비탈의 크기를 결정한다.</li>
					<li>각운동량 양자수: 각운동량 양자수는 오비탈의 모양(형태)을 결정한다.</li>
					<li>자기양자수: 자기양자수는 오비탈의 공간적 배향을 결정한다.</li>
					<li>주양자수(principal quantum number)</li>
				</ul>
				<ul>
					<li>전자의 에너지 준위를 나타내며, 전자 껍질수로 표현된다.</li>
					<li>오비탈의 크기를 결정하며, 양의 정수로 표현된다.</li>
					<li>수소 원자의 오비탈에서 각 오비탈의 에너지 준위를 결정하는 유일한 양자수이다.</li>
					<li>각운동량 양자수(angular momentum quantum number)</li>
				</ul>
				<ul>
					<li>부양자수라고도 불리며, 이는 주양자수 내에서 에너지적으로 좀 더 세분화된 상태를 나타낸다.</li>
					<li>전자부껍질(sub-shells)로 나타난다.</li>
					<li>오비탈의 모양의 결정한다.</li>
					<li>주양자수가 n일 때 n-1개로 표현되며, 각 매듭면의 개수를 의미한다.</li>
				</ul>
				<li><br/><img src="../images/photocatalyst/28.png" width="600" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/29.png" width="600" alt=''/><br/></li>
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


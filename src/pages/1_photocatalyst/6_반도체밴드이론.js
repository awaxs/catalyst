import React from 'react';
import '../../styles/styles.css'

function 반도체밴드이론() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 반도체밴드이론;

function MainContents() {
	const title = '반도체의 밴드 이론';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>

			<h3>1. 고체의 에너지 띠</h3>
			<ul>
				<li>단독 원자에서 전자가 갖는 에너지 준위가 불연속적이다.</li>
				<li>하나의 양자 상태에 2개의 전자가 있을 수 없다(베타 원리)</li>
				<li>2개의 원자가 가까이 있을 때 전자의 에너지 준위는 원자가 1개일 때와 다르게 미세한 차이를 두면서 두 개로 나뉘어 존재한다.</li>
				<li>원자가 많아지면 원자 사이의 간격이 가깝기 때문에 인접한 원자들이 전자의 궤도에 영향을 준다.</li>
				<li>원자의 수가 매우 많으면 수많은 에너지 준위가 매우 가깝게 존재하여 거의 연속적인 띠를 이룬다. 이를 에너지띠라고 한다.</li>
				<li>이는 고체에서만 가능한것으로 기체 액체는 원자간 거리가 멀어 서로 영향을 미치기다 어렵다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_30.png" width="800" alt=''/><br/></li>
				<li>단독 원자에서 나타나는 전자구조는 전자가 위치한 각각의 에너지 준위들이 서로 간격을 가지며 분리된 형태</li>
				<li>즉, 불연속적인 에너지 준위들을 가지는 형태로 존재한다.</li>
				<li>그러나 많은 원자들로 이루어진 고체(반도채 결정)에서는 전자구조가 에너지 밴드구조로 나타난다.</li>
				<li>그렇다면 에너지 밴드가 생기게 되는 원리란 무엇일까?</li>

			</ul>
			
			<hr className='class-1'/>

			<h3>2. 에너지 밴드의 형성원리</h3>
			<ul>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_1.png" width="800" alt=''/><br/></li>
				<li>이를 알기 위해서는 우선 에너지 밴드가 무엇인지 알고 갈 필요가 있다.</li>
				<li>원자들이 결합을 형성하게 되면 결합전의 고립된 원자가 갖던 하나의 에너지 준위가 원자수 만큼 갈라져나오게 된다.</li>
				<li>이때, 원자수가 충분히 많아(아보가드로 수 이상으로) 갈라져 나온 에너지 상태가 연속성을 띠게 된다면,</li>
				<li>우리는 이를 에너지 밴드라고 부를 수 있다.</li>
				<li>따라서 각각의 에너지 밴드의 기원은 고립된 원자계가 갖던 각각의 에너지 준위로부터 나온다는 사실을 알 수 있다.</li>

				<li>특히, 이웃한 원자간 거리가 좁을수록 에너지 준위는 더욱 큰 간격을 가지며 벌어지게 되는데,</li>
				<li>이때 이루어지는 에너지 준위의 분열은 높은 에너지 준위 순으로 진행된다.</li>
				<li>이는 높은 에너지 준위일수록 퍼텐셜 장벽에 의해 제한받는 원자핵으로부터의 거리범위가 커지기 때문이다.</li>
				<li>따라서 이웃한 두 원자가 가까워진다면, 각각의 원자가 갖던 원자가 전자 에너지 준위의 분열이 가장 먼저 일어나게 된다.</li>
				<li>한편, 낮은 에너지준위는 원자핵으로부터 짧은 거리에 해당하는 범위로 퍼텐셜장벽에 의해 제한받기 때문에 원자간 결합길이가 에너지 준위의 제한거리보다 길 경우,</li>
				<li>해당하는 낮은 에너지 준위는 원자결합이 이루어졌음에도 불구하고 에너지 준위의 분열이 이루어지지 않게 된다.</li>

			</ul>
			
			<hr className='class-1'/>

			<h3>3. 에너지 준위의 분열(안쪽 전자 오비탈)</h3>
			<ul>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_2.png" width="800" alt=''/><br/></li>
				<li>그렇다면, 고립 원자 계에서 갖던 에너지 준위는 왜 결합한 원자 수만큼 벌어지게 되는가?</li>
				<li>이는 원자가 전자와 안쪽 껍질을 채운 전자마다 원리가 다를 수 있다.</li>
				<li>먼저, 안쪽 껍질에 채워진 전자들의 경우, 전자가 위치해 있는 각각의 에너지 준위(오비탈)에는 두 개의 전자자리(up spin, down spin)가 이미 채워져 있는 상태이다.</li>
				<li>따라서 이웃한 두 원자가 결합하게 된다면, 각각의 원자로부터 동일한 종류의 오비탈이 만나게 될때,</li>
				<li>이 두 오비탈은 서로 통합되지 못하고 일정한 에너지 간격을 가지며 떨어져 존재하게 된다.</li>
				<li>이는 각각의 에너지 준위에 채워진 두 전자쌍이 파울리 배타원리를 따르는 페르미온이기 때문에 그렇다.</li>

				<li><br/><br/><img src="../images/photocatalyst/밴드이론_3.png" width="800" alt=''/><br/></li>
				<li>그러나 안쪽 전자껍질에 위치한 오비탈의 분리는 원자 결합길이 이하의 거리에서 이루어지기 때문에</li>
				<li>실제로 안정 상의 고체 계에서 나타나는 전자 밴드구조는 원자가 전자 오비탈에 의해서만 나타난다.</li>
				<li>탄소 결합에 관여하지 않는 1s2전자 오비탈은 원자 간 평형거리(결합길이) 보다 짧은 위치에서 분리되기 시작한다.</li>
			</ul>
			
			<h3>4. 에너지 준위의 분열(원자가전자 오비탈과 실리콘의 sp3혼성화)</h3>
			<ul>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_4.png" width="800" alt=''/><br/></li>
				<li>공유결합에 관여하는 원자가 전자의 경우에는 이웃한 두 원자 사이의 결합에 의해, 퍼텐셜 장벽이 제한하는 공간영역이 확장된다.</li>
				<li>이 덕에 원자가전자의 활동범위도 증가하게 되는데, 두 원자로부터 나온 원자가전자 오비탈을 슈뢰딩거 방정식을</li>
				<li>LCAO (Linear Combinations of the individual Atomic Orbitals)으로 가정하여 계산하게 되면</li>
				<li>원자 결합 형성시 만나게 되는 두 오비탈이 상쇄간섭(Anti-symmetric LCAO), 보강간섭(Symmetric LCAO)의 두 가지 해가 나옴을 알수있다.</li>
				<li>이때, 두 실리콘 sp3오비탈의 상쇄간섭으로 형성되는 전자 오비탈은 antibonding orbital이라 하고,</li>
				<li>두 실리콘 sp3오비탈의 보강간섭으로 형성되는 전자 오비탈을 bonding orbital이라 부른다.</li>
				<li>이 두 오비탈의 확률밀도를 각각 계산하게 되면, anitibonding orbital의 경우 두 원자 중간지점의 확률밀도 값이 0이 되어 전자가 존재하지 않음을 알 수 있지만,</li>
				<li>반면 bonding orbital의 경우에는 두 원자 중간지점의 확률밀도 값이 존재하므로 원자가 전자가 두 원자의 중간 위치에 자리잡고 있음을 알 수 있다.</li>
				<li>이는 곧 두 실리콘 원자사이의 공유결합을 의미한다.</li>
			</ul>
			
			<h3>5. Conduction band와 Valence band의 기원</h3>
			<ul>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_5.png" width="800" alt=''/><br/></li>
				<li>또한, 이 두 오비탈의 에너지 우위를 고려한다면 antibonding orbital의 에너지 준위가 bonding orbital의 에너지 준위보다 높게 존재한다.</li>
				<li>그 이유는 원자가전자가 낮은 에너지 준위인 bonding energy level부터 채워지기 때문이다.</li>
				<li>게다가 antibonding orbital의 중간지점 확률밀도 값이 0이라는 사실은 바닥 상태의 원자계에서 전자가 절대로 antibonding energy level에 도달할 수 없음을 의미하기 때문에 antibonding energy level과 bonding energy level사이의 에너지 차가 크게 존재한다는 사실까지도 알 수 있다.</li>
				<li>한편, N개의 동일 종류의 원자가 서로 결합하게 되면 마찬가지의 원리에 의해 Anti-bonding energy level과 bonding energy level이 각각 N-1개씩 분리된다.</li>
				<li>여기서 결합 원자수가 아보가드로 수 이상으로 무수히 크게 된다면(벌크),</li>
				<li>Anti-bonding energy level과 bonding energy level이 갖던 불연속적인 구조가 연속성을 갖게되어 각각 에너지 밴드를 형성하게 될 것이다.</li>
				<li>이때, Anti-bonding energy levels에 의해 생긴 에너지 밴드는 Condunction band(C.B)가 되고,</li>
				<li>Bonding energy levels에 의해 생겨난 에너지 밴드는 Valence band(V.B)가 된다.</li>
				<li>따라서 C.B와 V.B사이에 존재하는 Band gap은 곧 Bonding energy band와 antibonding energy band사이의 에너지 간격이 된다.</li>
			</ul>
			
			<h3>6. 밴드 갭 에너지(Quantum confinement effect, 원자결합 세기)</h3>
			<ul>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_6.png" width="800" alt=''/><br/>
				<br/><br/><img src="../images/photocatalyst/밴드이론_7.png" width="800" alt=''/><br/>
				그림: 절대영도(0K)에서의 바닥상태의 고체가 갖는 전자 밴드구조 비교</li>
				<li>밴드 갭 에너지의 크기는 원자결합의 세기에도 밀접한 관련이 있다.</li>
				<li>대체로 원자결합이 셀수록 밴드 갭 에너지의 크기는 증가한다.</li>
				<li>이는 V.B에서 C.B로 전자를 여기시키는 과정이 곧 원자결합에 관여하는 원자가전자를 antibonding orbital로 보낸다는 사실을 의미하기 때문이며,</li>
				<li>이는 결과적으로 bonding orbital에 갇혀있던 원자가전자가 결합의 힘을 극복했음을 의미하기 때문이라 할 수 있다.</li>
				<li>따라서 원자결합 중 가장 약한 결합인 금속결합의 경우,</li>
				<li>금속에서 보이는 밴드 갭 에너지는 존재하지 않거나 혹은 0에 가까운 아주 작은 값을 가지는 반면,</li>
				<li>공유결합성이 높은 반도체의 경우는 중간크기의 밴드 갭을, 이온결합성이 큰 절연체의 경우에는 큰 크기의 밴드 갭을 각각 가지게 된다.</li>
				<li>하지만 이는 공유결합과 이온결합으로 이루어진 세라믹에 한정된 전자구조일 뿐이다.</li>
				<li>한편, 도체로 분류되는 금속에서 나타나는 바닥상태에서의 에너지 밴드구조는 전자가 덜 채워진 V.B를 갖는 유형과 혹은 V.B와 C.B가 서로 중첩되는 유형의 두가지로 나타난다.</li>
				<li>V.B에 전자가 덜채워지는 원인은 본래 금속 원자가 갖는 원자가전자의 오비탈자리에 전자 빈자리가 존재하기 때문이고 대표적으로 s1원자가 전자를 갖는 알칼리 금속이 이에 해당한다.</li>
				<li>한편, C.B와 V.B가 서로 중첩된 밴드구조를 갖는 경우의 금속은 semi-metal로 분류되는데, sp2결합을 갖는 탄소동소체, 마그네슘과 같은 알칼리 토금속류가 이에 해당한다.</li>
				<li>서로 다른 유형의 전자밴드구조를 가짐에도 불구하고 이 두 유형의 도체들은 공통적으로, filled state와 empty state가 서로 연속을 이룬다.</li>
				<li>즉, 두 전자상태 간의 에너지 갭(밴드 갭 에너지)은 은 0에 가까운 아주 작은 값을 갖거나 존재하지 않음을 의미한다.</li>
				<li>물론, 금속의 밴드갭 에너지가 0 또는 0에 가까운 매우 작은 값을 가진다는 의미는 곧 금속결합이 다른 원자결합에 비해 상당히 약하다는 이야기가 된다.</li>
				<li>그 예로, 금속결합의 bonding nature는 서로 결합하는 두 양이온 원자핵 사이에 맴도는 전자구름(혹은 sea of electrons)이 외부 전기장(작은 에너지)을 인가해주게 되면 쉽게 자유전자로 여기되어 전도성을 띠게 된다.</li>
				<li>한편, 원자결합 중 가장 센 결합력을 지닌 이온결합은 이온화에너지(Ionization energy)가 작은 금속의 양이온과 전자음성도(electronegativity)가 큰 비금속의 음이온 사이에 정전기적 인력(쿨롱 인력)과 두 원자핵 간 반발력이 평형을 이룸으로써 형성된다.</li>
				<li>따라서 두 원자 갖의 결합에서 이온결합이 공유결합과 다른점은 공유결합을 형성하는 두 원자사이에는 결합에 관여하는 전자의 수가 원자가전자 두 개이지만, 이온결합을 형성하는 두 원자사이에 결합에 관여하는 전자의 수는 이온사이의 전하량 차이에 따라 다르다는 것이다.</li>
				<li>예를 들어 NaCl의 경우에는 각 결합에 관여하는 전자 수는 하나가 된다.</li>
				<li>또한, 두 원자사이의 전기음성도는 음이온 원자핵이 우세하기 때문에 결합 오비탈에 위치한 전자는 음이온 원자핵 쪽으로 치우친다.</li>
				<li>이는 결합에 관여하는 전자가 결합뿐만 아니라 음이온의 원자핵에 강한 정전기적 인력에 의해서도 속박됨을 의미한다.</li>
				<li>따라서 이온결합은 공유결합보다도 강한 결합력을 가지게 되는 것이고,</li>
				<li>이온결합 형성시 anti-symmetric LCAO와 symmetric LCAO로 구해지는 antibonding orbital과 bonding orbital사이의 에너지 차이는 공유결합에 비해 아주 큰 차이를 보이게 된다.</li>
				<li>따라서 이온결합성이 높은 *세라믹인 절연체의 경우에는 반도체에 비해 큰 밴드갭을 가지게 된다.</li>
				<li>주요 반도체의 밴드 갭 에너지 비교(Ge, Si, GaAs)</li>

				<li>➀ 다이아몬드 구조를 갖는 4족 반도체(Ge 와 Si)</li>

				<li>초창기에는 Ge를 반도체 기판으로써 사용되었었지만, Ge가 갖는 작은 밴드 갭 때문에 valence band의 일부전자가 conduction band로 쉽게 여기되는 문제와 비싼 원가문제로 인해 현재 반도체 기판으로는 저렴하며 큰 밴드 갭을 갖는 실리콘을 주로 사용한다.</li>
				<li>300K에서 Ge와 Si의 밴드 갭 에너지는 대체로 각각 0.66eV, 1.11eV이다.</li>
				<li>그러나 주기율표상에서 같은 14족에 위치해있는 Ge와 Si는 결정구조 적으로 유사한 특징들을 갖는다.</li>
				<li>예를 들면, Ge와 Si의 결정구조는 둘 다 sp3 혼성화 공유결합으로 이루어진 다이아몬드 구조를 가진다는 점이다.</li>
				<li>그럼에도 불구하고 Ge가 Si보다 작은 밴드 갭을 가지는 이유는 무엇일까? 이는 Ge 원자가전자가 위치한 전자껍질이 Si 원자가전자보다 더 큰 반경을 갖기 때문이다.</li>
				<li>즉, 이 둘에서의 결정적인 차이는 원자가전자의 주양자수라고 할 수 있다.</li>
				<li>4의 주양자수를 갖는 Ge의 원자가전자 4s2 4p2는 3s2 3p2에 보다 원자핵으로부터 멀리 떨어져 있으며,</li>
				<li>안쪽에 채워진 전자들에 의해 *Screening effect를 받음에 따라, 4s2 4p2가 받는 유효핵전하는 3s2 3p2에 비해 매우 작다.</li>
				<li>더군다나, 높은 주양자수는 곧 높은 에너지 준위를 의미하기 때문에 Ge의 일함수는 실리콘보다 작은 값을 가지게 된다.</li>
				<li>마찬가지의 원리로 4sp3 오비탈 에너지 준위가 3sp3오비탈 에너지 준위보다 높은 위치에 존재하게 된다.</li>
				<li>*Screening effect: 안쪽 전자껍질에 위치한 전자들(원자가전자보다 작은 주양자수를 갖는 전자들)은 원자핵과 원자가전자사이의 경로를 차단하는 역할을 한다.</li>
				<li>이에 따라 실질적으로 원자가전자에 전달되는 원자핵으로부터의 양전하는 작은 값을 갖게 된다.</li>
				<li>또한, Ge의 결합에서 4sp3도 실리콘 결합처럼 오비탈 준위가 갈라져 antibonding orbital과 bonding orbital을 얻게 된다.</li>
				<li>그런데, 이 두 오비탈은 vacuum level과 3p오비탈 준위 사이에 존재해야만 한다. 즉, 결합에 의해 갈라져서 존재할 수 있는 antibonding energy level과 bonding energy level의 에너지 범위가 실리콘에 비해 큰 제한을 받게 된다.</li>
				<li>따라서 Ge결정이 벌크에 이르게 되면 Ge결정에서 나타나는 밴드 갭은 실리콘에 비해 작은 값인 0.66eV를 갖게 되는 것이다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_8.png" width="800" alt=''/><br/></li>

				<li>➁ Compound S/C, GaAs</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_9.png" width="800" alt=''/><br/></li>

				<li>홑원소물질로 이루어진 결정이 아닌 이상, 서로 다른 종류의 원자로 결합이 이루어진 결정화합물은 기본적으로 이온결합을 어느 정도 가진다.</li>
				<li>그 이유는 원소별로 갖는 전기음성도가 서로 다르기 때문이다. 따라서 이온결합성이 높은 반도체 화합물은 대체로 Si, Ge 보다 높은 밴드 갭을 가지며, 결합의 이온결합성이 높을수록 밴드 갭은 크게 나타난다.</li>
				<li>예를 들어, 이온결합성이 0%인 실리콘은 상온(300K)에서 1.11eV의 밴드 갭을 갖지만, 3.92%의 이온결합성을 가지는 GaAs는 상온에서 더 큰 1.43eV의 밴드 갭을 가진다. 더 나아가, 6.06%의 더 높은 이온결합성을 가지는 GaP는 상온에서 2.25eV의 더더욱 큰 밴드 갭을 가짐을 위 그림에서 확인할 수 있다.</li>
			</ul>
			
			<hr className='class-1'/>

			<h3>7. 전자구조의 해석(1): E-k diagram with Brillouin zone</h3>
			<ul>
				<li>지금까지 우리는 고체(도체, 반도체, 절연체)가 가지는 전자 에너지 밴드구조의 형성원리와 각각의 특성들을 살펴보았다.</li>
				<li>그렇다면 이번에는 고체 계가 갖는 전자 에너지 구조를 분석해봄으로써 고체(특히, 반도체)가 갖는 전기적 및 광학적 특성들을 예측하는 분석의 기본원리를 살펴볼 차례이다.</li>
				<li>특히, 우리가 지금까지 고려한 고체의 전자 구조는 결정을 이루는 원자들의 결합 형태를 LCAO(Linear Combination of Atomic Orbitals)로 가정한 경우에 해당한다.</li>
				<li>하지만 전기적 특성을 비롯한 결정이 가지는 3차원공간상의 물성은 결정의 방향에 따라 다른 크기를 갖기 마련이다.</li>
				<li>따라서 결정이 가지는 전자 에너지 구조(밴드)의 방향별로 나타내는 차이를 알기위해서는 평면파로 진행하는 전자의 파수벡터(wave vector)를 x축으로 정하여,</li>
				<li>결정 격자의 1st Brillouin zone내에 존재하는 전자 에너지 밴드(y축)가 위치한 방향을 구분하면 된다.</li>
				<li>이러함으로써 우리는 E-k 다이어그램을 통해 전자에너지 밴드구조를 갖는 격자의 주기성을 결벙 방향에 따라 다르게 나타낼 수 있다.</li>
				<li>Brillouin zone은 결정 격자내 bragg's law를 따르는 전자가 위치할수있는 영역 즉, 실제 격자 내에서 물리적인 의미가 통하는 격자 영역이라 보면 된다.</li>
				<li>Brillouin zone은 원래 결정 내 한 격자점을 기준으로 이웃한 격자 사이의 중간 지점에 수직으로 존재하는 평면(2차원의 경우 선)으로 이루어진 역격자라고 볼 수 있다.</li>
				<li>다만, 기준이 되는 격자점을 중심으로 멀리 떨어질수록, 멀리 떨어진 격자와 원점이 되는 격자사이에 존재하는 평면 또한 멀어지게 되는데,</li>
				<li>해당 면으로 갇히게 되는 공간영역은 원점 격자점에 가까운 순위에 따라 brillouin zone의 차수를 받게 된다.</li>
				<li>따라서 이웃한 Brillouin zone사이에는 차수의 차가 존재한다. 이에 따라 두 brillouin zone경계가 생기기 마련인데,</li>
				<li>해당 경계는 forbidden zone이라고 해서 전자가 존재하지 않는다. 따라서 가끔식 E-k다이어그램을 찾다보면 전자의 에너지 밴드 곡선이 불연속적으로 나타나기도 한다.</li>
				<li>앞으로 다루게 될 반도체(특히, 실리콘과 GaAs)의 E-k 다이어그램에서는 가능하면 1차 Brillouin zone내의 에너지 밴드구조 위주로 다룰것이다.</li>
				<li>보다시피 Brillouin zone에 대한 개념은 직관적으로 쉽게 받아들여지지 않는 개념이며 이해하기 또한 어렵다.</li>
				<li>이후 명확히 설명할 수 있는 수준이 되면 곧 따로 포스팅하도록 노력하겠다.</li>
				<li>우리가 주로 관심 있게 볼 반도체는 다이아몬드구조 및 Zinc blende구조를 갖기 때문에 FCC 브라베 격자를 중심으로 한 1차 Brillouin zone을 E-k 다이어그램의 base로 삼을 것이다.</li>
				<li>Bravais lattice의 한 종류인 FCC의 first Brillouin zone에서 정의되는 k 벡터 지점은 다음과 같다. (관련 사이트 링크도 함께 걸어두겠다.</li>
				<li><br/><br/><img src="../images/photocatalyst/밴드이론_10.png" width="800" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>

			<h3>8. 전자구조의 해석(2): Direct Band Gap Semiconductors VS Indirect Band Gap Semiconductors</h3>
			<ul>
				<li>반도체는 E-k diagram에서 나타나는 형상에 따라 다양하게 분류될 수 있다.</li>
				<li>그 중에서도 first Brillouin zone에서 나타나는 minimum conduction band energy curve의 최소지점과 maximum valence band energy curve의 최대지점의 위치관계에 따라서도 반도체가 Direct band gap semiconductor 혹은 Indirect band gap semiconductor로 분류될 수 있다.</li>
				<li></li>
			</ul>

			<h5>(1). Direct band gap semiconductor</h5>
			<br/><br/><img src="../images/photocatalyst/밴드이론_11.png" width="900" alt=''/><br/>

			<h5>(2). Indirect band gap semiconductor</h5>
			<br/><br/><img src="../images/photocatalyst/밴드이론_12.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_13.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_14.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_15.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_16.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_17.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_18.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_19.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_20.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_21.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_22.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_23.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_25.png" width="900" alt=''/><br/>
			<br/><br/><img src="../images/photocatalyst/밴드이론_26.png" width="900" alt=''/><br/>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://blog.naver.com/joon9497/221683905446'>반도체 공학 Chapter 3.1부(에너지 밴드 형성원리, Direct & Indirect S/C, E-k diagram, charge carriers and 유효질량)</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}


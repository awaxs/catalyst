import React from 'react';
import '../../styles/styles.css'

function Principle() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default Principle;

function MainContents() {
	const title = 'Environmental Photocatalyst';

	return (
		<div>
			<a href='https://awaxs.github.io/catalyst/1_photocatalyst/A목차'>목차</a>
			
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			<a href='https://pubs.acs.org/doi/10.1021/cr5001892'>Understanding TiO2 Photocatalysis: photocatalyst and Materials</a>
      <p><u><b>1. Introduction</b></u></p>
			<p>
				환경 오염과 파괴, 청정 천연 에너지 자원의 부족은 현재 전 세계적으로 직면하고 있는 가장 심각한 문제 중 일부입니다. 
				세계 인구의 증가와 규제되지 않은 산업 성장으로 인해 에너지 소비가 가속화되었으며, 독성 물질과 산업 폐기물이 공기와 수로로 끊임없이 방출되어 오염 관련 질병, 
				지구 온난화 및 비정상적인 기후 변화가 발생했습니다. 
				또한, 2011년 3월 11일 일본 후쿠시마 원자로를 마비시킨 지진-쓰나미는 전력 수급 문제와 방사성 물질로 오염된 핵폐기물 및 냉각수로 인한 
				환경 오염에 대한 심각한 우려를 불러일으켰습니다. 따라서 오늘날 과학자들이 직면하고 있는 가장 시급한 과제인 환경적으로 조화롭고, 
				생태학적으로 깨끗하고, 안전하고, 지속 가능하며, 에너지 효율적인 화학 기술의 개발에 기여하는 것이 우리의 목표가 되어야 합니다.
			</p>
			<p>
				무한히 풍부하고 깨끗하며 안전한 태양 에너지를 지속 가능하고 위험하지 않으며 경제적으로 실행 가능한 기술에 활용할 수 있는 
				광촉매는 이러한 방향에서 큰 발전입니다. 다양한 유형과 형태의 산화티타늄 물질은 화학적 안정성, 무독성 및 높은 반응성으로 인해 
				다양한 중요한 반응에 이상적이고 강력한 광촉매로서 큰 잠재력을 보여주었습니다. 잘 정의된 광촉매 반응 시스템과 다양한 분자 분광학을 사용한 
				상세한 반응 메커니즘 및 동역학에 대한 조사를 통해 다양한 Ti-산화물 기반 광촉매 물질이 개발되었습니다. 특히, 광촉매는 오염된 물과 공기의 정화, 
				.독특한 광유도 초친수성을 지닌 Ti-산화물 물질로 코팅된 자가 세척 유리, 타일, 텐트, 
				광기능화된 티타늄을 이용한 뼈 이식 고정 등 중요한 응용 분야에 사용되어 왔습니다. 몇 가지 예를 들면, 빠르고 완전한 뼈-티타늄 통합입니다. 
				화학적 도핑 및 물리적 이온 주입 방법을 통해 양이온 및 금속 산화물과 같은 소량의 성분을 추가하여 가시광 반응형 Ti-산화물 광촉매 개발에 대한 연구가 수행되었습니다. 
				또한, 자연광 조사 하에서 자외선뿐만 아니라 가시광선 파장 영역의 빛을 효과적으로 흡수할 수 있는 Ti-산화물 광촉매를 제조하는 것도 가능해졌습니다.
			</p>
			<p>
				순수한 H2 와 O2 의 분리된 진화를 위한 H2O 분해 역시 태양광 조사 하에서 가시광 반응형 산화티타늄 
				박막 광촉매를 사용하여 개발되고 있습니다. 더욱이, 제올라이트 골격 내에 구축된 Ti-산화물 단일 지점 광촉매는 
				H2O 로 CO2 의 환원을 유도하여 탄화수소와 O2를 형성 할 수 있다는 것이 보고되었습니다 . 
				현재 과학자들은 이러한 광촉매 반응의 효율성과 선택성을 높이는 방법을 조사하고 있습니다. 
				이 리뷰의 목적은 광촉매의 미래 개발과 환경 복원 및 기타 환경 개선을 위한 태양 에너지의 사용에 대한 통찰력을 얻기 위해 
				자체 연구를 포함하여 Ti-산화물 기반 광촉매에 대해 수행된 연구의 진행 상황을 요약하는 것입니다. 
				유용한 시스템과 프로세스.
			</p>

			<p><u><b>2 Progress in TiO2 Photocatalysis: A Short Historical Overview</b></u></p>
			<ul>
				<li>1960년대 초에 많은 연구 그룹에서는 UV 광 조사 하에서 TiO 2 및 ZnO와 같은 반도체 고체에 진행되는 광유도 현상을 연구했습니다. </li>
				<li>O 2 및 H 2 O와 같은 일부 분자는 UV 조명 하에서 각 표면 조건에 따라 고체 반도체 표면에 흡착되거나 탈착되는 것으로 나타났습니다 .</li>
				<li>이러한 현상은 이미 반도체의 띠이론으로 설명되어 잘 이해되고 있습니다.</li>
				<li>Kato와 F. Masuo는 1964년에( Kogyo Kagaku Zasshi 저널에 ) UV 조사된 TiO2를 광촉매로 사용하여 액상에서 테트랄린의 산화 반응을 보고했습니다 .</li>
				<li>이 논문은 아마도 UV 조사 하에서 TiO 2 에 대한 광촉매 반응을 보고한 최초의 논문 중 하나로 간주될 수 있습니다 . </li>
				<li></li>
				<li>1972년 K. Honda와 A. Fujishima는 Pt 금속 전극을 음극으로 사용하고 TiO 2 광양극을 UV 광으로 조사 하여 H 2 O를 H 2 및 O 2 로 전기분해하기 위한 TiO 2 전극의 감광 효과를 발견했습니다. </li>
				<li>그들은 TiO 2 전극에 UV 광을 조사하면 H 2 O 의 전기분해가 일반 전기분해에 비해 훨씬 낮은 바이어스 전압에서 진행된다는 사실을 발견했습니다.</li>
				<li>1977년에 GN Schrauzer와 TD Guth는 소량의 Pt 또는 Rh 금속 입자가 탑재된 분말형 TiO 2 광촉매에서 H 2 O 의 광촉매 분해를 보고했습니다 .</li>
				<li>이로 인해 이러한 Pt/ TiO2 촉매에서 TiO2 에서 광형성된 전자가 Pt 금속 부위로 이동하여 환원 반응을 유도하는 반면, 광형성된 정공은 TiO2 입자에 남아 그 위치로 이동한다는 기계적 그림이 개발되었습니다.</li>
				<li>산화 반응을 일으키는 표면.(14, 15)따라서 전자와 정공의 전하 분리는 반도체 물질을 이용한 광촉매 작용, 즉 소위 광전기화학적 메커니즘에서 가장 중요한 과정임은 의심의 여지가 없다.
					Honda/Fujishima 및 Schrauzer/Guth의 선구적인 연구 이후, 다양한 반도체를 사용하는 광촉매는 많은 연구자들의 집중적인 연구의 초점이 되어 왔습니다.</li>
				<li>H2O 를 H2 와 O2 로 분해 하는 것과 같이 빛을 화학 에너지로 변환하는 높은 효율을 나타내는 광촉매 시스템의 설계에 많은 노력이 기울여 왔습니다.</li>
				<li>관련 반응도 마찬가지다.(23, 24)일부 연구그룹에서는 양자화 효과가 기대되는 극히 작은 크기의 입자인 콜로이드 반도체에 주목해 왔고,다공성 유리 및 제올라이트와 같은 불활성 지지체에 통합된 반도체에서도 마찬가지입니다.</li>
				<li></li>
				<li>낮은 배위의 표면 이온이 불균일 촉매 작용에서 중요한 역할을 한다는 것이 확립되었지만 광촉매 작용에서 이들의 정확한 역할은 여전히 ​​불분명합니다.</li>
				<li>이러한 반응을 일으키는 메커니즘을 조사하기 위해 표면을 기능화하는 화학적 처리를 사용하여 표면 이온의 배위 불포화 정도를 제어할 수 있습니다. </li>
				<li>이 문제에 초점을 맞춘 Anpo et al. Ti-산화물 단일 부위가 다공성 Vycor 유리에 고정되어 있으면 벌크 반도체 TiO2 에서는 관찰되지 않는 독특한 광촉매 반응이 높은 효율로 일어날 수 있다는 일련의 획기적인 논문에서 보고되었습니다 .</li>
				<li>이러한 단일 부위 촉매의 이러한 특별하고 높은 광촉매 반응성은 ESR, 광발광, XAFS 및 FT-IR과 같은 다양한 분자 분광학을 사용하는 연구를 통해 Ti-산화물 단일 부위의 전자-정공 쌍 상태의 높은 반응성에 기인합니다. .</li>
				<li></li>
				<li>한편, 바나듐과 같은 다양한 전이 금속 산화물에 대해 산화물 단일 부위 촉매의 유사한 특성이 보고되었습니다.</li>
				<li>몰리브덴,(55-57)그리고 크롬.(58)이러한 산화물 단일 부위 촉매에 대한 광촉매 반응은 이후 다양한 연구 그룹, 예를 들어 Anpo, Matsuoka 및 Horiuchi 등에 의해 조사되었습니다.</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<p><u><b>3 광촉매 공정의 시간 분해 분석: 펨토초에서 마이크로초까지</b></u></p>
			<p>반도체가 광자를 흡수하면 표면에서 광촉매 반응(예: 물 분해 또는 유기 화합물 분해)이 유발됩니다. 
				다른 반도체 광촉매와 비교하여 이산화티타늄(TiO 2 )은 더 높은 광반응성(보통 ζ(광자 효율) = 10 %) 
				가격이 저렴하고 독성이 없으며 화학적, 생물학적으로 불활성이며 광안정성이 있습니다.(70)
				광촉매의 상세한 메커니즘은 오염 물질에 따라 다르지만, 
				광촉매 효과를 담당하는 주요 반응은 반도체 촉매가 충분한 에너지의 빛에 노출될 때 생성되는 
				전자와 정공의 계면 산화환원 반응이라는 것이 일반적으로 동의됩니다.(71-73)(그림 4 참조 )</p>
			<p>
				<img src="../images/photocatalyst/principle_1.jpg" width={'800'} alt=''/><br/>
				촉매 반응의 반응속도(ps(피코 세컨): 10<sup>-12</sup>초(1/1조), fs(펨토 초): 10<sup>-15</sup>초(1/천조).)
			</p>

			

			<p><u><b>3.1 Dark Processes in TiO2</b></u></p>
			<ul>
				<li><img src="../images/photocatalyst/principle_2.jpg" width={'600'} alt=''/><br/></li>
				<li>UV 광선에 노출되기 전의 상황을 이해해야 합니다.</li>
				<li>접합부 또는 인터페이스 근처에서, 반도체의 전자 벌크 구조는 예를 들어 band bending(밴드굽힘) 현상이 발생하여 전하 이동 이 일어난다.</li>
				<li><u><b>band bending 설명</b></u>
					<ul>
						<li>접합부 또는 인터페이스 근처에서 위 또는 아래로 휘어지는 과정을 의미합니다. 이는 물리적(공간적)이 아닌 전위(에너지) 공간에서 나타난다. </li>
						<li>반도체 경계면 주변의 전자(자유 전하 캐리어)의 전기화학적 전위가 서로 다를 때 , 전하 캐리어는 평형 상태에 도달하여 전위차가 사라질 때까지 두 물질 사이를 이동합니다.</li>
						<li>밴드 굽힘은 금속-반도체, 반도체-반도체, 반도체표면(bulk-surface) 등에서 일어난다</li>
						<li>금속과 반도체가 접촉하면 일함수 차이로 인해 전하 캐리어 (즉, 자유 전자 와 정공)가 두 물질 사이를 이동합니다.<br/>
							금속 일함수(ф_m)는 반도체(ф_s), 그건 ф_m &gt; ф_s, 전자는 반도체에서 금속으로 흘러 반도체의 페르미 준위를 낮추고 금속의 페르미 준위를 증가시킵니다. <br/>
							평형 상태에서 일함수 차이는 사라지고 페르미 준위는 인터페이스 전체에 걸쳐 정렬됩니다.<br/>
							이러한 정전기 유도 로 인해 금속은 음전하를 띠고 반도체는 양전하를 띠게 됩니다 . <br/>
							<img src="../images/photocatalyst/principle_3.jpg" width={'600'} alt=''/><br/>
						</li>
						<li>표면 상태에 의한 밴드 굽힘 
							밴드 굽힘은 이러한 표면 상태의 에너지 밴드에서도 유도될 수 있습니다.<br/>
							표면 상태 밴드는 벌크의 중간 갭 에너지에 위치한 페르미 준위로 절반이 채워진 것으로 가정합니다.<br/>
							<br/>
							<br/>
							<img src="../images/photocatalyst/principle_4.jpg" width={'600'} alt=''/><br/>
						</li>
					</ul>
				</li>				
				<li>깨끗한 표면, 즉 진공과 접촉하는 결정질 반도체의 경우에도 전자 구조를 크게 변경하는 표면 상태가 형성됩니다.</li>
				<li>일반적으로 표면 상태는 이온 상태(Tamm 상태)와 공유 표면 상태(Shokley 상태)의 두 가지 유형으로 구분됩니다.</li>
				<li>이온 상태(Tamm 상태) CdS 또는 ZnS와 같이 이온 상호 작용이 강한 반도체에서 주로 발견됩니다. <br/>
				표면 상태는 이온 상태(Tamm 상태)에서는 결합의 이핵 분할, 즉 강한 극성 결합의 형성으로 인해 밴드 가장자리에 가깝게 위치하는 표면 상태가 형성되므로 밴드 굽힘이 나타나지 않습니다. <br/>
				Shockley 상태는 Ge 및 Si와 같이 공유 결합된 반도체의 표면에 주로 분포하며 댕글링 결합(dangling bond)으로 설명할 수 있습니다.
				</li>
				<li>이러한 표면 상태는 밴드갭 중간에 추가 에너지 준위를 도입합니다.</li>
				<li>표면과 벌크 사이의 전자 평형을 이루기 위해, 중간 밴드갭 전자 중 일부가 표면 상태로 이동하기 때문에 양으로 하전된 공간 전하 층이 n형 반도체 표면 바로 아래에 형성됩니다.</li>
				<li>따라서 페르미 준위와 전도대 사이의 에너지 거리가 표면에서 증가하여 해당 밴드 굽힘이 발생합니다.</li>
				<li>깨끗한 표면을 가진 TiO2 의 경우 광 방출 실험에서 평평한 밴드가 발견되었습니다.</li>
				<li>그러나 일반적으로 n형 TiO2 에서는 광촉매 시스템에 자주 사용되므로 표면에 많은 결함이 포함되어 있으며 가장 일반적인 결함은 O_v 입니다 .</li>
				<li>이러한 표면 결함은 초기에 O_2p 오비탈에 위치했다가 해당 산소 원자가 제거되어 Ti_3d 오비탈에 의해 형성된 전도대로 이동된 짝을 이루지 않은 전자로 이해될 수 있습니다.</li>
				<li>그러나 이 효과의 부호는 표면 구성의 세부 사항에 크게 좌우된다는 점을 인식하는 것이 중요합니다.</li>
				<li>표면에 전자가 축적되면 TiO 2 의 표면 화학이 결정됩니다 . </li>
				<li>반도체 표면에서 발생하는 모든 과정은 페르미 준위 전위와 흡착물의 화학적 전위 사이의 평형을 이루기 위해 구동되며, 페르미 준위의 위치는 반도체의 일함수와 동일합니다.</li>
				<li> TiO2 표면의 흡착질 흡착 거동에 대한 과잉 전자의 영향을 정의하기 위해 밀도 범함수 이론을 사용하여 계산을 수행했습니다 .</li>
				<li>이러한 계산에 따르면, 흡착물의 전기음성도가 TiO2 의 표면 전기음성도인 χ TiO2 를 초과하는 경우 환원된 표면에서 흡착물로의 전하 이동이 발생합니다 (그림 7a 참조 ).
					 전기음성도가 낮은(&lt;4.5eV) 종을 흡착하면 전자 이동이 발생하지 않습니다(그림 7b 참조 ).
					 그림 7c 는 흡착물의 전기음성도 , 즉 산소 결손 Ov를 포함하는 표면과 화학양론적 표면 사이의 전기음성도 차이(ΔEads=Eads)의 함수로서 다양한 종에 대한 흡착 에너지 의 플롯 을 보여 줍니다 .
					 ΔEads = Eads-Ov - Eads-clean ΔEads 의 큰 음수 값은 강화된 전하 전달로 인해 과잉 전자가 흡착물 결합 에너지에 미치는 강한 영향을 나타내는 반면, ΔEads의 작은 값은 표면 - 흡착물 전하 이동이 전혀 발생하지 않거나 거의 발생하지 않습니다.</li>
				<li><img src="../images/photocatalyst/principle_5.jpg" width={'600'} alt=''/><br/>
				그림 7. 전기음성도가 흡착 에너지에 미치는 영향</li>
				<li>촉매 표면의 산화 상태를 조정함으로써 TiO 2 의 표면 화학을 제어할 수 있다</li>
				<li>흡착물이 전자를 주거나 받을 수 없을 때 전하 이동이 일어나지 않으며 상호 작용 강도가 표면의 산화 상태에 의존하지 않는다</li>
				<li>흡착된 종의 전기 음성도에 따라 더 강한 하향 밴드 굽힘, 밴드 평탄화 또는 심지어 위쪽 밴드 굽힘이 예상된다는 결론을 내릴 수 있습니다.</li>
				<li>TiO 2 의 페르미 준위보다 더 음의 위치에 있는 LUMO(최저 비점유 분자 궤도)를 갖는 가스 분자의 흡착에 의해 전자는 TiO 2 에서 흡착된 분자로 이동하여 상향 밴드 굽힘이 발생합니다. </li>
				<li>이러한 전하 이동은 LUMO 궤도가 채워지고 페르미 준위가 LUMO 에너지 준위로 감소하는 동안 발생합니다(그림 8 참조 ). 기본적으로 밴드 벤딩은 반도체의 전극 전위(페르미 준위)와 플랫 밴드 전위, 즉 반도체 밴드가 평탄해지는 전극 전위(반도체의 공간 전하 0)의 차이로 정의됩니다.</li>
				<li>n형 반도체에서 밴드 굽힘 전위는 흡착된 분자의  전기음성도(χ<sub>분자</sub>)와 표면의 일함수 W<sub>TiO<sub>2</sub></sub> 사이의 차이로 근사화될 수 있습니다.(</li>
				<li>일함수 W<sub>TiO<sub>2</sub></sub>의 실험값은 감소 정도에 따라 5.8에서 4.4eV까지 확장됩니다.</li>
				<li>예를 들어, χ<sub>O2</sub> = 6.3 eV 인 산소 분자의 흡착에 의해 0.5~1.9eV 사이의 밴드 굽힘 전위가 예상될 수 있습니다.</li>
				<li><img src="../images/photocatalyst/principle_6.jpg" width={'600'} alt=''/><br/>
				그림 8. 수용체 유사 분자(E), 예를 들어 물이 있을 때 TiO2 의 표면 밴드 굽힘에 대한 개략도 .</li>
				<li>물 분자는 UV 광으로 반도체를 조명할 때 전자 공여체 역할을 하여 하이드록실 라디칼을 형성하는 것으로 잘 알려져 있습니다. </li>
				<li>그러나 여기 없는 TiO 2 의 밴드 굽힘에 대한 물 분자의 영향은 무엇입니까 ? <br/>
					이 경우 원자가 밴드가 채워지고 물이 TiO 2 에 전자를 주입할 수 없기 때문 입니다. <br/>
					이 질문에 대답하려면 TiO2 표면 의 수분 흡착 과정을 고려해야 합니다.<br/>
					TiO2가 주변 대기에 노출 되 자마자 물의 흡착이 발생합니다. <br/>
					물 흡착 과정은 이미 많은 리뷰 기사에서 널리 논의되었으며, 가장 논란이 되는 측면은 H2O 흡착이 분자, 혼합 또는 해리 과정으로 발생할 수 있다는 것입니다.<br/>
					물이 TiO2 표면에 분자적으로 흡착되는 경우, 그림 7 에 표시된 방식에 따르면 전하 이동이 예상되지 않습니다. <br/>
					그럼에도 불구하고 아나타제(101)에 대한 분자 수분 흡착은 Ti<sub>5c</sub> 사이트에서 전하 밀도의 감소로 이어지며 이는 표면에서 흡착물 전하 이동을 나타냅니다.<br/>
					해리성 수분 흡착은 일반적으로 강한 전자 수용체 역할을 하는 표면 Ti 원자와 OH 그룹의 상호 작용으로 설명되며, H 원자는 전자 공여체 역할을 하는 가교 산소 원자와 결합을 형성합니다. <br/>
					화학량론적 TiO2 표면에서 물이 흡착되는 동안 O 원자는 0.84 e<sup>-</sup> 를 받아들이고 두 개의 H 원자는 0.80 e<sup>-</sup> 를 기부 하여 0.04 순 전자가 고체에서 각 물 분자로 전달된다는 것을 보여주었습니다.<br/>
					그러나 실험에 따르면 물 분자는 Ov 사이트에서 주로 해리되어 쌍 을 이루는 수산기 그룹이 형성되며, 이는 이론적 계산에 의해 뒷받침되는 결과입니다.<br/>
					rutile (110) 표면에 대한 Car-Parrinello 분자 역학(CPMD) 시뮬레이션에 따르면, 물 해리는 표면 산소 결손이 있는 경우에만 발생하며, 이는 Ti<sup>3+</sup> 오비탈에서 OH의 분자 π-오비탈로의 전하 이동에 의해 구동되는 프로세스입니다.<br/>
					밴드갭 조명이 없는 경우 TiO2 표면에서 물이 흡착되면 이 표면에 음전하를 띤 종의 형성으로 인해 위쪽 밴드 굽힘이 발생하고 이에 따라  그림 8과 같이 표면 근처 영역에서 전하 캐리어 밀도가 감소합니다.</li>
			</ul>
			<p><u><b>3.2 광유도 전하 캐리어 생성과 소멸</b></u></p>
			<ul>
				<li>TiO<sub>2</sub>가 울트라밴드갭 조명에 노출되면  UV 광의 침투 깊이 δ<sub>p</sub> (δ<sub>p</sub> ≒ 160 nm) 로 인해 재료의 외부 표면 영역에 전자-정공 쌍이 생성됩니다.<br/>
				공간 전하 영역에서는 광생성 전하 캐리어가 표면 근처 전기장으로 인해 서로 다른 방향으로 이동하기 때문에 전자-정공 재결합이 지연됩니다.<br/>
				지속적인 조명은 이 전기장의 소멸, 즉 밴드 평탄화를 초래합니다.<br/>
				자유 전자가 벌크로 이동하고 음전하가 중성화된 표면에 자유 정공이 축적되기 때문에 표면에서 밴드 이동에 의해 이 밴드가 편평해지는 모습을 설명했습니다(그림 9b 참조).<br/>
				그러나 밴드 평탄화는 조명 시 벌크에서 전자 수가 증가하기 때문에 벌크 영역에서 밴드 이동으로 설명될 수도 있습니다(그림 9c 참조).<br/>
				결과적으로, 시스템 내 전자의 평균 에너지로 간주될 수 있는 페르미 준위는 벌크에서 더욱 음이 됩니다.<br/>
				특히 헬름홀츠 층의 커패시턴스가 공핍층의 커패시턴스보다 상당히 높을 때 표면 상태의 에너지는 일반적으로 고정됩니다. 이는 대부분의 경우에 해당됩니다.<br/>
				</li>
				<li><img src="../images/photocatalyst/principle_7.jpg" width={'600'} alt=''/><br/>
				그림 9. 순수 TiO2의 광유도 밴드 편평화에 대한 개략도. <br/>
				a. 공간 전하층에서 전자-정공 쌍의 광생성. <br/>
				b. 표면의 구멍 축적으로 인한 밴드 편평화로 인해 표면에서 밴드 이동이 발생합니다. <br/>
				c. 벌크 영역의 전자 축적으로 인한 밴드 평탄화로 인해 벌크에서 밴드 이동이 발생합니다.</li>
				<li>TiO2 표면에 축적된 광생성 전하 캐리어를 검출하기 위해 다양한 실험 방법을 적용할 수 있습니다.<br/>
					예를 들어, 주사 터널링 현미경(STM)을 사용하여 광여기 상태의 국부적 축적으로 인해 TiO2(110) 표면의 나노 규모에서 국부적 표면 구조의 변화를 관찰했습니다.<br/>
					시간 분해 광학 SHG(2차 고조파 생성)는 펄스 UV 조명 하에서 유도된 정전기 표면 장의 변화를 조사하는 데 종종 사용되는 추가 기술입니다.<br/>
					n-TiO2(001) 전극을 사용하여 경계면에서 광생성 정공의 정상 상태 집단 생성으로 인해 UV 조명 시 SHG 신호가 급격하게 감소한다는 것을 입증했습니다.<br/>
				  광유도 밴드 평탄화는 SHG 강도가 정상 상태 수준으로 돌아간다는 사실에서 알 수 있듯이 3-4ns의 시간 범위 내에서 발생하는 것으로 나타났습니다. <br/>
					왜냐하면 표면의 과도한 정공이 전기화학적 전하 이동 및 표면 재결합 프로세스에 의해 제거되기 때문입니다.</li>
			</ul>
			<p><u><b>3.2.1 전하 캐리어 재결합</b></u></p>
				<ul>
					<li>TiO2 광촉매의 광촉매 활성은 일반적으로 광생성된 전자-정공 쌍의 빠른 재결합에 의해 제한됩니다.</li>
					<li>전하 캐리어의 재결합은 비조사 경로를 통한 열 방출 시 발생하거나 조사 경로를 통한 빛 방출을 동반할 수 있습니다.</li>
					<li>광발광(PL) 분광법은 TiO2에서 광생성 전하 캐리어의 irradiative recombination 을 추적하고 중간 밴드갭 상태의 에너지 분포를 결정하는 데 널리 사용됩니다.
						일반 PL 장비는 여기원과 PL 강도를 측정하는 광파워미터 또는 분광 광도계로 구성됩니다.
						적절한 파장의 빛으로 반도체를 조명하면 전자가 전도대로 여기되어 가전자대에 정공이 생기고, 광생성 전하 캐리어는 이후에 재결합됩니다. 
						그러나 이러한 재결합은 트랩 상태(trap states)의 존재로 인해 다른 경로를 통해 진행될 수 있습니다.
						간접 밴드갭을 갖는 반도체이기 때문에 TiO2는 전도대 전자와 가전자대 정공의 재결합 시 매우 약한 밴드갭 방출만을 나타내는 반면, 트랩 상태를 포함하는 조사 재결합은 광학적으로 허용됩니다.
						아나타제에 대해 넓은 가시 PL 밴드가 관찰되었으며, 이는 이동 전자와 트랩된 홀(1 PL)의 재결합 및 트랩된 전자와 가전자대(2 PL)의 홀 재결합의 조합으로 해석되었습니다(그림 10a).
					</li>
					<li><img src="../images/photocatalyst/principle_8.jpg" width={'600'} alt=''/><br/>
					그림 10.<br/>
					(a) 아나타제의 트랩 상태 광발광 모델. 물결선과 직선은 각각 비방사성 전환과 방사성 전환을 나타냅니다.<br/>
					anatase 의 광발광은 각각 공간적으로 분리된 정공과 전자 트랩을 포함하는 유형 1과 유형 2 PL의 조합으로 간주됩니다.<br/>
					음영 처리된 영역은 PL 스펙트럼에 걸쳐 있는 파장으로부터 추정된 트랩의 에너지 분포를 나타냅니다. 허가를 받아 수정되었습니다.<br/>
					(b) HF_5 및 HF_12에 대한 오래 지속되는 PL 성분(A3τ3)과 포름산 분해의 표면 정규화 광촉매 반응 속도 사이의 상관 관계(F/Ti 공칭 백분율 몰비가 각각 5와 12인 불소 도핑된 TiO2)<br/>
					</li>
					<li>각각의 PL 데이터를 보면, 아나타제의 표면에 갇힌 전자는 산소 결손을 참조하여 전도대 가장자리 아래 약 0.7~1.6eV에 위치하는 것으로 나타났으며, trapped holes은 전도대 가장자리 아래 약 1.8-2.5eV에 위치합니다.</li>
					<li>
						<ul>
						<u><b>trap</b></u>
							<li>전자와 정공의 재결합은 두 캐리어가 서로를 소멸시키는 과정입니다.</li>
							<li> 전자의 초기 상태와 최종 상태 사이의 에너지 차이가 ​​방출됩니다. </li>
							<li>이 에너지는 광자의 형태로 방출, 운동 에너지의 형태로 다른 전자에 전달</li>
							<li></li>
							<li><img src="../images/photocatalyst/principle_9.jpg" width={'800'} alt=''/><br/></li>




						</ul>
					</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>Electronic band structures, K-Γ-M</b></u></p>
				<ul>
					<li><img src="../images/photocatalyst/principle_10.jpg" width={'600'} alt=''/><br/></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>3.2.2 Hole Trapping</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>3.2.3 Electron Trapping</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>3.3 Photoinduced Electron Transfer at the TiO2 Surface</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>3.3.1 Photoinduced Reduction Reactions at the TiO2 Surface</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>3.3.2 Photoinduced Oxidation Reactions at the TiO2 Surface</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>4 Novel Mechanistic Aspects of TiO2 Photocatalysis</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>5 Synthesis of TiO2 Nanoparticles and Nanoparticulate Structures</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6 Preparation and Properties of Doped TiO2 Photocatalysts</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.1 Preparation of Visible Light-Responsive TiO2 Photocatalysts by Chemical Doping</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.1.1 Metal Ion Doping</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.1.2 Nonmetal Ion Doping</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.1.3 Codoping of TiO2</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.2 Preparation of Visible Light-Responsive TiO2 Photocatalysts by Doping Using Physical Methods</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.2.1 Transition Metal Ion-Implantation</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.2.2 Anion-Implantation</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>


			<p><u><b>6.3 Preparation of Visible Light-Responsive TiO2 Photocatalysts by Other Doping Methods: Plasmon Enhanced Photocatalysis and Metal Organic Frameworks (MOF)</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.3.1 Plasmon Enhanced Photocatalysis with TiO2</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>6.3.2 Metal Organic Frameworks (MOF)</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7 Titanium-Based Single-Site Photocatalysts</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7.1 Local Structure of a Single-Site Photocatalyst</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7.2 Decomposition of Harmful Organic Compounds</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>7.3 Decomposition of NO</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7.4 Photocatalytic Reduction of CO2 with H2O</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7.5 Other Single-Site Photocatalysts with Different Metal Centers</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7.6 Surface Functionality of Single-Site Photocatalyst Thin Films</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>7.7 Platform for the Formation of Fine Metal Nanoparticles</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>8 Applications of Visible Light-Responsive TiO2 Thin Films: Solar Water Splitting, Solar Cells, and Photofuel Cells</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>8.1 Visible Light-Responsive TiO2 Photocatalyst Thin Films</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>8.2 Evolution of H2 and O2 by Visible Light-Induced Water Splitting</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>8.3 Design of Solid Thin Film Solar Cell without Use of Any Dye Sensitization</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>8.4 Photofuel Cells Based on Vis-TiO2</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			<p><u><b>9 Photoinduced Surface Wettability Changes</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.1 Introduction</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.2 Preparation of TiO2 and TiO2-Based Binary Oxide Films by the Ionized Cluster Beam (ICB) Deposition Method</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.3 Photoinduced Surface Wettability of TiO2-Based Binary Oxide Thin Films</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.4 Proposed Mechanism of Photoinduced Wettability Changes on TiO2 Photocatalyst Surfaces</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.4.1 Effect of UV Irradiation on the Microstructure of H2O Clusters Adsorbed on the TiO2 Surface</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.4.2 Photocatalytic Reactivity versus Wettability Control of TiO2 Surfaces</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>9.4.3 Mechanism of the Wettability Control on TiO2 Surfaces</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b>10 Conclusions</b></u></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			<p><u><b></b></u></p>





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


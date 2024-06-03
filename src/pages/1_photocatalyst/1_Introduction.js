import React from 'react';
import '../../styles/styles.css'

function Introduction() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default Introduction;

function MainContents() {
	const title = 'Introduction';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<h3>1. 서론</h3>
			<p>환경 오염과 파괴, 청정 천연 에너지 자원의 부족은 현재 전 세계적으로 직면하고 있는 가장 심각한 문제 중 일부입니다. 
				세계 인구의 증가와 규제되지 않은 산업 성장으로 인해 에너지 소비가 가속화되었으며, 
				독성 물질과 산업 폐기물이 공기와 수로로 계속 방출되면서 오염 관련 질병, 지구 온난화 및 
				비정상적인 기후 변화가 발생했습니다. 또한, 2011년 3월 11일 일본 후쿠시마 원자로를 마비시킨 
				지진-쓰나미는 전력 수급 문제와 방사성 물질로 오염된 핵폐기물 및 냉각수로 인한 환경 오염에 대한 
				심각한 우려를 불러일으켰습니다. 따라서 오늘날 과학자들이 직면하고 있는 가장 시급한 과제인 환경적으로 조화롭고, 
				생태학적으로 깨끗하고, 안전하고, 지속 가능하며, 
				에너지 효율적인 화학 기술의 개발에 기여하는 것이 우리의 목표가 되어야 합니다.</p>
			<p>무한히 풍부하고 깨끗하며 안전한 태양 에너지를 지속 가능하고 위험하지 않으며 경제적으로 실행 가능한 기술에 
				활용할 수 있는 광촉매는 이러한 방향에서 큰 발전입니다. 다양한 유형과 형태의 산화티타늄 물질은 화학적 안정성, 
				무독성 및 높은 반응성으로 인해 다양한 중요한 반응에 이상적이고 강력한 광촉매로서 큰 잠재력을 보여주었습니다. 
				잘 정의된 광촉매 반응 시스템과 다양한 분자 분광학을 사용한 상세한 반응 메커니즘 및 동역학에 대한 조사를 통해 
				다양한 Ti-산화물 기반 광촉매 물질이 개발되었습니다. 특히, 광촉매는 오염된 물과 공기의 정화, 독특한 광유도 초친수성을 
				지닌 Ti-산화물 물질로 코팅된 자가 세척 유리, 타일, 텐트, 광기능화된 티타늄을 이용한 뼈 이식 고정 등 중요한 응용 분야에 
				사용되어 왔습니다. 몇 가지 예를 들면, 빠르고 완전한 뼈-티타늄 통합입니다. 화학적 도핑 및 물리적 이온 주입 방법을 통해 양이온 
				및 금속 산화물과 같은 소량의 성분을 추가하여 가시광 반응형 Ti-산화물 광촉매 개발에 대한 연구가 수행되었습니다. 
				또한, 자연광 조사 하에서 자외선뿐만 아니라 가시광선 파장 영역의 빛을 효과적으로 흡수할 수 있는 Ti-산화물 광촉매를 
				제조하는 것도 가능해졌습니다.</p>
			<p>순수한 H2 와 O2 의 분리된 진화를 위한 H2O 분해 역시 태양광 조사 하에서 가시광 반응형 산화티타늄 박막 광촉매를 사용하여 
				개발되고 있습니다. 더욱이, 제올라이트 골격 내에 구축된 Ti-산화물 단일 지점 광촉매는 H2O 로 CO2 의 환원을 유도하여 탄화수소와 
				O2를 형성 할 수 있다는 것이 보고되었습니다 . 현재 과학자들은 이러한 광촉매 반응의 효율성과 선택성을 높이는 방법을 조사하고 있습니다.</p>

			<ul>
				<li>광촉매는 빛 흡수, 전하 이동, 유리한 전자 구조 등 반도체 특성을 지닌 나노입자(NP)입니다.</li>
				<li>광활성 NP 는 지속 가능한 에너지 생산 및 환경 개선 을 포함한 다양한 응용 분야 에서 촉매 역할 을 합니다.</li>
				<li>반도체 기반 광촉매는 전 세계 환경 및 에너지 문제를 해결하는 데 기여할 수 있는 잠재력으로 인해 최근 수십 년 동안 큰 주목을 받아 왔습니다.</li>
				<li>벌크 재료와 비교할 때 광촉매는 뛰어난 구조와 더 높은 표면적 대 부피 비율을 가지므로 작용이 향상됩니다</li>
				<li>결과적으로, 나노 규모 범위에서 광촉매 물질의 모양과 크기를 제어하면
				혁신적인 응용 분야에 사용하기에 적합한 물질을 생성하고 제조할 수 있습니다.</li>
				<li>광촉매 작용 은 일반적 으로 반도체 와 같은 고체 표면 에서 의 광화학 반응 의 촉매 작용 으로 간주 됩니다.</li>
				<li>두 가지 반응이 동시에 일어나야 한다.</li>
				<li>첫 번째 반응은 광생성 정공의 산화와 관련된 반응이고,두 번째 반응은 광생성 전자의 환원 반응입니다.</li>
				<li>결국 촉매의 기본 요구 사항 중 하나인 광촉매 자체가 변화하지 않도록 하려면 두 공정 모두 정확하게 균형을 이루어야 합니다.</li>
				<li>광촉매 공정의 성능을 향상시키는 대안 중 하나는 다른 화합물을 희생 분자로 사용하여 전자 공여체 역할을 하여 양성자 환원을 위한 
				전자를 제공하는 것입니다.</li>
			</ul>

			
			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://pubs.acs.org/doi/10.1021/acsaem.8b01345'>Photocatalysis: From Fundamental Principles to Materials and Applications</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/acsomega.0c02145'>반도체 광촉매의 기본 원리에 대한 새로운 통찰력</a></li>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/aenm.201700841'>Photocatalysis: Basic Principles, Diverse Forms of Implementations and Emerging Scientific Opportunities</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function 광열촉매() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 광열촉매;

function MainContents() {
	const title = 'Photothermal catalysis';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 개요</h3>
			<ul>
				<li>태양 에너지를 유용한 형태로 변환하는 경로에는 두 가지 가 있습니다.</li>
				<li>태양 에너지를 EHC(solar-to-energetic hot carriers)와 LTE(photo-to-localized thermal energy) 이다.</li>
				<li>그러나 광촉매의 낮은 반응 속도(Rphoto ∝ I0.5, I는 빛의 강도, 30%)떄문에 촉매 활성의 최대화 및 에너지 손실을 최소화 하는 광촉매 개발이 필요한다.</li>
				<li>광축매는 빛을 이용할 수 있는 광화학 공정과 광 유도 열을 이용하는 광열 공정을 하나의 촉매로 통합하여 최대의 시너지 효과를 얻어야 한다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. 광열촉매의 기초</h3>
			<ul>
				<li>촉매가 광자를 흡수하면 태양 에너지를 EHC와 LTE의 두 가지 필수 구성 요소로 변환합니다</li>
				<li>EHC는 산화환원 반응을 위한 반응물의 최고 점유 분자 궤도(HOMO) 및 최저 비점유 분자 궤도 (LUMO)에 직접 주입하거나 열촉매 공정에 필요한 특정 결합 에너지를 낮추는 데 도움을 줄 수 있습니다</li>
				<li>뜨거운 캐리어의 냉각으로 얻은 LTE는 광화학 공정에서 반응 개시를 방지하거나 반응 역학 및 광여기 전하 역학을 가속화하는 에너지 장벽을 극복하는 데 활용될 수 있습니다</li>
				<li><img src="../images/photocatalyst/광열촉매_1.jpg" width="900"  alt=''></img><br/>
				(a,b,c) EHC 여기<br/>
				(d,e,f) 반응물의 HOMO/LUMO 주입에 대한 EHC 제한<br/>
				(g,h,i) EHC 열화를 포함한 광열 촉매 작용<br/>
				(a)반도체 기반 촉매의 EHC 생성 메커니즘<br/>
				(bc)플라즈몬 나노금속의 EHC 여기 경로: 광여기 플라즈몬 금속에서 전자 유도 반응물 분자 해리에 대한 메커니즘 제안. Ea는 해리에 대한 활성화 장벽으로 작용합니다<br/>
				(df) 반도체 및 흡착물에 EHC를 주입하기 위한 요건<br/>
				(g) 플라즈몬 나노금속<br/>
				(h) 반도체의 광열 효과<br/>
				(i) 탄소 기반 및 유기 물질의 광열 효과<br/>
				</li>
			</ul>

			<hr className='class-1'/>
			<h3>3. 광화학 과정</h3>
			<ul>
				<li>광전자 공정은 태양 에너지를 전기 에너지로 변환하는 과정</li>
				<li>광전자 과정은 반도체 또는 플라즈몬 금속 나노입자에 광자(빛 에너지)의 흡수가 일어나, 전자가 여기되어 전류의 흐름이 밸샹하는 과정이다</li>
				<li>반도체 기반 광촉매는 밴드갭과 같은 에너지(빛)를 흡수할 때 전자-정공 쌍이 만드러진다.</li>
				<li>결과적으로 여기된 전자와 정공은 촉매에 흡착된 분자(처리대상 물질)와 화학 반응이 일어난다.</li>
				<li>전자와 정공은 분리되어 광촉매 표면으로 이동하고, 표면에 흡착된 분자와 산화환원 반응을 일으킨다.</li>
				<li>반도체 기반 광촉매의 약한 내부 전기장은 항상 약한 전하 캐리어와 EHC의 짧은 확산 길이로 인해 광전자 변환 효율이 떨어진다 .</li>
				<li>국소 표면 플라즈몬 공명(LSPR) 효과는 플라즈몬 촉매작용에서 중요한 역할을 하며 일반 반도체 기반 광촉매작용과는 차이가 있다.</li>
				<li>햇빛이 플라즈몬 나노금속에 흡수되어 광자의 에너지가 금속의 일함수와 일치하면 에너지가 전도대 전자의 집단 공명 진동에 저장되어 LSPR 효과가 발생한다.</li>
				<li>광여기된 열전자의 아주 작은 부분만 이 복사 방출의 형태로 방출되고, 대부분의 전자는 Landau감쇠 라는 것으로 대역 내 또는 대역 간 소멸을 통해 광여기 전하 캐리어가 생성된다</li>
				<li>이러한 뜨거운 캐리어는 에너지가 반응물 분자의 LUMO를 초과하기에 충분할 경우 촉매 반응을 유도할 수 있습니다.</li>
				<li>플라즈몬 핫 캐리어 유도 촉매작용은 일시적 음이온(TNI) 메커니즘을 따릅니다</li>
				<li>착물은 바닥 상태의 전위 에너지 표면 에서 시작하여 전자 산란이 뒤따라 TNI가 형성됩니다(그림 b)</li>
				<li>흡착물은 TNI의 위치 에너지 표면을 따라 이동하고 반응 좌표를 따라 운동 에너지를 얻습니다.</li>
				<li>짧은 시간이 지나면 전자는 다시 금속 페르미 준위 로 붕괴되고 흡착물은 증가된 진동 에너지와 함께 바닥 상태 위치 에너지 표면으로 돌아갑니다(그림c)</li>
				<li>일반 광촉매와 비교하여, 플라즈몬 광촉매는 플라즈몬 나노입자가 가시광선 및 근적외선 영역에 이르는 전체 스펙트럼 햇빛 활용을 가능하게 한다는 것입니다.</li>
				<li>플라즈몬 광촉매 반응 속도는 (Rphoto ∝ In, I는 빛의 강도, n &gt; 1)</li>
				<li><u><b>질화티타늄(TiN)</b></u>은 우수한 태양광 수확 효율 과 만족스러운 촉매 성능을 나타내는 유망한 플라즈몬 물질 로 등장 합니다 .</li>
				<li>TiN을 활용함으로써 플라즈몬 광촉매는 환경 및 확장성 문제를 해결하면서 효율적인 광 흡수 및 촉매 작용을 달성할 수 있습니다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://pubs.acs.org/doi/10.1021/acs.nanolett.0c00594'>고온 이종 촉매작용을 위한 태양열 열플라즈몬 나노로드</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/acscatal.0c00343'>Determining Plasmonic Hot Electrons and Photothermal Effects during H2 Evolution with TiN–Pt Nanohybrids</a></li>
				<li><a href='https://www.degruyter.com/document/doi/10.1515/nanoph-2022-0073/html'>광열 촉매작용을 위한 플라즈몬 메타표면의 과제와 전망</a></li>
			</ol>
			


		</div>
	)
}

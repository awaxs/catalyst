import React from 'react';
import '../../styles/styles.css'

function TMoN() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default TMoN;

function MainContents() {
	const title = 'A5_TMoN';

	return (
		<div id ="section">
			<h2><b><u>{title}</u></b></h2>

			<h5>++++ 전이금속 질소화물(Transition Metal Nitrides, TMNs)의 특징 ++++</h5>
				<ul>
					<li>전이금속 격자 내에 질소 원자가 도입되어 생 긴 화합물</li>
					<li>원래의 금속과는 전혀 다른 특성</li>
					<li>융점, 경도, 내마모성, 초전도성, 그리고 부식 저항성과 같은 우수한 물리적 특성</li>
					<li>최근에는 HER, OER 반응, 산소 환원 반응(Oxygen Reduction Reaction, ORR), 메탄올 산화 반응(Methanol Oxidation Reaction, MOR) 폭넒게 연구되고 있다.</li>				<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<img src="../images/catalyst/8.PNG" width={'600'} alt=''/>
				<p><b><u>MoN2 의 특징</u></b></p>
				<ul>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0375960115010531" target='_blank' rel="">새로운 2차원 물질인 몰리브덴 이질화물의 전자적 특성에 관한 이론적 연구</a></li>
					<li>단층 전이 금속 디칼코게나이드(TMD)</li>
					<li>전이 금속 질화물은 해당 산화물 및 황화물보다 더 많은 공유 결합 및 금속 특성을 보유하여 여러 측면에서 우수한 특성을 부여하는 경우가 많습니다</li>
					<li>2D 단층 MoS2 는 벌크의 간접 밴드 갭에서 직접 밴드 갭으로 이동할 수 있습니다</li>
					<li>2D TMD(MX2 , M = Mo, W, X = S, Se, Te)의 밴드 갭 범위는 화학적 조성, 층 수 및 외부 변형을 조정하여 약 1.0 ~ 1.9 eV입니다.</li>
					<li>TMD의 이러한 매력적인 특성은 촉매 작용, 에너지 저장, 전계 효과 트랜지스터, 논리 회로 등을 포함한 다양한 해당 분야에서 잠재적인 응용</li>
					<li>그럼에도 불구하고 중요한 전자기 파장 범위인 ~8μm에서 시작하는 장파장 적외선 영역은 여전히 ​​위의 2D 재료에 의해 효과적으로 음영 처리될 수 없습니다.</li>
					<li>이 특정 파장 범위는 LIDAR 시스템을 사용한 범위 찾기와 같은 일부 기술 분야에서 매우 중요합니다.</li>
					<li> Wang et al. 새로운 몰리브덴 이질화물 MoN2 을 합성했습니다 .</li>
					<li>Mo 기반 물질은 Pt 기반 촉매에 필적 하는 조정 가능한 나노 구조 와 높은 촉매 성능</li>
					<li>Mo 기반 재료는 넓은 pH 범위에서 높은 안정성, 넓은 pH 범위의 산성, 알칼리성 및 중성 전해질을 사용하여 물 분해에 대한 높은 전기촉매 활성 과 안정성을 나타냅니다.</li>
					<li>Mo의 d 전자 구조는 Pt의 구조와 유사하여</li>
					<li>N 원자의 삽입은 양전하를 띤 Mo 원자 주변의 구조와 전자 환경을 변화시켜 d 밴드 수축을 유도하고 이에 따라 금속 수소(Mo-H) 결합의 강도를 최적화</li>
					<li>2D gC 3 N 4 는 수소 흡착을 위한 풍부한 활성 부위를 갖고 있</li>
					<li>높은 전기음성도를 나타내며, 이는 강한 Mo-H 결합을 유도</li>
					<li>질화몰리브덴에 Ni 나노입자를 도입하면 중성 조건에서 양성자 공급을 촉진하는 데 도움이 됩니다</li>
					
					<li></li>
					<li></li>
					<li></li>
					<li>대규모 합성, 낮은 셀 전압과 높은 및/또는 초고전류 밀도(500/1000mA이상의 cm-2)해결필요, 엣지 사이트의 최대화, 수년의 수명, 가스 수집방법, 하폐수등 이용</li>
				</ul>

				<p><b><u>MoS2 의 특징</u></b></p>
				<ul>
					<li>높은 평면 내 전자 이동도 (200~ cm-2V-1s-1 ), 높은 활성, 우수한 광학적 및 기계적 특성 으로 인해 Pt 촉매 의 유망한 대체물로 간주됩니다.</li>
					<li>금속 전도성과 활성 기저면을 갖는 1T 상 MoS 2 는 Pt 기반 촉매와 비교되는 활성을 나타냅니다</li>
					<li>2H형이 우세하고 더 안정적</li>
					<li>2H에서 1T 상으로 부분적으로 상전이되도록 하여 전도성을 크게 향상시키고 더 많은 활성 사이트를 노출</li>
					<li>1T-2H MoS 2 이종구조는 알칼리 조건 하에서 250 mV에서 65 mV dec -1 의 낮은 Tafel 기울기 와 13.14H 2 s -1 의 높은 TOF 값을 제공하여 1T-2H MoS 2 의 우수한 전기화학적 촉매 활성을 입증</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>Urea를 이용한 합성</u></b></p>
				<ul>
					<li>우레아는 나노입자의 크기를 조절하는 안정화제 역할도 할 수 있다. 
						용액 전구체로부터 용매의 급격한 방출을 방지하려면 초기 가열 속도를 낮은 수준으로 제어하는 ​​것이 필요합니다.</li>
					<li>MoCl5(0.5mmol 273.21g/L) + Urea(25mmol) + 용매로서 10 mL 메탄올</li>
					<li>Co(NO3)2·6H2O(1mmol) + NH4F(5mmol) + 우레아(5mmol) + 12mL 탈이온수, 테프론 라이닝 오토클레이브에 120°C에서 6시간</li>
					<li>MoCl5(3.66mmol)를 2.53mL 에탄올에 용해시킨 후, 5.49mmol 요소(요소/Mo 몰비 = 1.5)를 요소가 완전히 용해될 때까지 1시간 동안 교반하면서 용액에 첨가하였다. 용액을 Ni 폼(Goodfellow) 조각이 있는 알루미나 보트로 옮기고 흐르는 N 2 가스(100 sccm) 하에서 600 °C(3.3 °C min -1 에서 램핑)에서 3시간 동안 어닐링하여 Ni 2 Mo를 제조 했습니다 .</li>
					<li></li>
					<li></li>
					<li></li>
					<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201707512" target='_blank' rel="">연질 우레아 전략을 통한 고엔트로피 금속 질화물의 기계화학적 보조 합성</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337320306974" target='_blank' rel="">강화된 pH-보편적 수소 발생 반응을 향한 산소 공극 유도 CeO 2 /Co 4 N 헤테로구조</a></li>
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2021/TA/D0TA10090K" target='_blank' rel="">수소 발생을 위한 매우 활성적이고 안정적인 니켈-몰리브덴 질화물(Ni2Mo3 N) 전기촉매</a></li>

				</ul>
			<h5>++++ MoN ++++</h5>
				<ul>
					<li><a href="https://www.ceramist.or.kr/journal/view.php?number=973" target='_blank' rel="">수소 생산 반응을 위한 바이메탈릭 전이금속 질소화물의 최근 연구 동향</a></li>
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2014/SC/C4SC02019G" target='_blank' rel="">Atomically-thin molybdenum nitride nanosheets with exposed active surface sites for efficient hydrogen evolution</a></li>
					<li><a href="https://pubs.acs.org/doi/10.1021/ic025564d" target='_blank' rel="">몰리브덴 질화물 Mo2N 을 향한 <u><b>새로운 단일 소스 합성</b></u></a></li>
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2017/TA/C7TA06981B" target='_blank' rel="">Well-dispersed molybdenum nitrides on a nitrogen-doped carbon matrix for highly efficient hydrogen evolution in alkaline media</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0360319923013277" target='_blank' rel="">몰리브덴 기반 전기촉매에 대한 최근 진행 상황과 전망</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S2211285520309526" target='_blank' rel=""> Zhang et al. 니켈-몰리브덴 질화물 나노와이어 어레이</a></li>
					
					<li><a href="https://www.nature.com/articles/s41467-020-17628-0" target='_blank' rel="">표면 강화 라만 산란을 위한 플라즈몬 몰리브덴 질화물 <u><b>나노시트의 저온 합성</b></u></a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S246802572200108X" target='_blank' rel="">전이금속 질화물 나노구조체의 합성 및 에너지 관련 응용에 대한 고찰</a></li>

				</ul>			
		</div>
	)
}

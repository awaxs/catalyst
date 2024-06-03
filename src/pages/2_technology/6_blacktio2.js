import React from 'react';
import '../../styles/styles.css'

function Blacktio2() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default Blacktio2;

function MainContents() {
	const title = 'BlackTiO2';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 서론</h3>
			<ul>
				<li>2011년 Chen et al.이 발견한 이후 과학계의 주목을 받았습니다.</li>
				<li>White TiO2는 밴드갭이 3.0~3.2eV으로, 넓은 밴드 갭은 전체 태양 스펙트럼의 이용에 제한적이다.</li>
				<li><img src="../images/photocatalyst/blacktio2_1.jpg" width="600"  alt=''></img><br/></li>
				<li>Black TiO2 나노 물질은 태양 스펙트럼의 전체 범위를 흡수할 수 있는 잠재력을 가지고 있습니다.</li>
				<li>밴드 갭(1.54eV)의 낮은 값으로 인해 근적외선 영역에서도 빛의 흡광도가 나타났습니다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. 특징</h3>
			<ul>
				<li>Ti3+ 종은 표면에서 물 분자의 흡착뿐만 아니라 유기 분자의 광산화 에 중요한 역할을 하는 것으로 보고되었습니다</li>
				<li>흰색 TiO2가 결함의 정도에 따라 다양한 색을 띈다. 변형의 정도는 수소화 정도, 수산화 확장, 도핑, 사용된 환원제 종류
						( 예: Al, Zn, NaBH4 , Ar, N2 )의 양과 같은 다양한 합성 매개변수, 환원 온도, 기간 등 다양한 요인에 의해 결정됩니다.</li>
				<li><img src="../images/photocatalyst/blacktio2_2.jpg" width="900"  alt=''></img><br/>
				Al분말을 이용한 환원방법을 제조한 B-TiO2 의 광 파장별 반사율(환원시간은 0~50분)</li>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3>합성<a href='https://www.mdpi.com/2079-4991/13/3/468'>[ref]</a></h3>
			<ul>
				<li>두 가지 주요 접근법, 즉 고온 수소화 환원 및 고체상 환원으로 나눌 수 있다.</li>
				<li>고온 수소화 방법은 종종 수소 또는 수소 함유 가스 혼합물을 사용하여 고온에서 샘플을 처리합니다 .</li>
				<li>고상환원법에 사용되는 물질은 일반적으로 NaBH4, CaH2, Mg분말, 기타 환원성 물질로 처리한다.</li>
			</ul>

			<hr className='class-2'/>
			<h5>3.1. 고온 수소화</h5>
			<ul>
				<li>고압 또는 저압에서 순수한 H2 가스, H2/Ar 또는 H2/N2 혼합물 의 환원으로 처리한다.</li>
				<li>Zhouet al. 대기압 하에서 고온(500°C)에서 수소화<a href='https://pubs.acs.org/doi/10.1021/ja504802q'>[ref]</a></li>
				<li>Yanget al. 수소화 3시간 300, 400 및 500°C, 서로 다른 산소 결손<a href='https://www.sciencedirect.com/science/article/pii/S0021979720314119?via%3Dihub'>[ref]</a></li>
				<li>Li et al. 수소 분위기에서 400°C에서 3시간<a href='https://www.sciencedirect.com/science/article/pii/S0021979721004161?via%3Dihub'>[ref]</a></li>
				<li>Wuet al. 500°C에서 4시간 수소화 반응, 2차원 초박형 메조다공성 아나타제 TiO2<a href='https://www.sciencedirect.com/science/article/pii/S0021979721004161?via%3Dihub'>[ref]</a></li>
				<li><img src="../images/photocatalyst/blacktio2_3.jpg" width="900"  alt=''></img><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>3.2. 고체상 환원</h5>
			<ul>
				<li>고온 수소화와 비교하여 고상 환원 방법(Solid Phase Reduction)은 확실한 장점을 가지고 있습니다.(외부에서 내부로 결손반응이 확산)</li>
				<li>고체상 환원법은 보다 완전하고 강렬한 반응을 제공할 수 있으며 동시에 일련의 도핑을 생성할 수 있습니다.</li>
				<li>단점은 결함이 너무 많으면 광촉매 성능에 해로울 수 있으므로 고상 반응에서 환원제의 비율과 투여량을 합리적으로 제어해야 합니다.</li>
				<li>Xiaoet al. 산소 결손, 특정 비율의 수소화붕소나트륨, N2 분위기 의 관형로에서 가열</li>
				<li><a href=''></a>[ref]</li>
				<li>Zhu et al. CaH2, 400°C에서 환원</li>
				<li>Sinhamahapatraet al. Mg 분말, 5% H2/Ar 650°C 5시간</li>
			</ul>

			<hr className='class-2'/>
			<h5>3.3. Hot-Wire Annealing Method</h5>
			<ul>
				<li>턴스텐 와이어(tungsten wires with 600 mm length and 0.53 mm diameter)를 이용한 잔체제작 로를 사용</li>
				<li>수소화 방법(저압: 1 Pa, 저온: 265°C, 단시간: 20분)</li>
				<li><img src="../images/photocatalyst/blacktio2_4.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>3.4. Anode Oxidation Method**</h5>
			<ul>
				<li>흑색 TiO2 를 합성하는 간단하고 효율적인 방법입니다 .</li>
				<li>Dong et al. 2단계 양극 산화 방법을 사용[ref]
					<ul>
					<li>0.25wt.% NH4F 및 2vol.% 증류수를 함유한 에틸렌 글리콜에서 60V에서 Ti 호일(0.2mm 두께, 99.96%)</li>
					<li>에탄올과 증류수로 헹구고, 유기종을 완전히 제거하기 위해 150℃에서 건조하였다.</li>
					<li>대기에서 1시간 동안 450°C에서 소결</li>
					<li>상단 산화물 층을 제거한 후, 검은색 TiO 2 내부 층이 기판 위에 노출</li>
					</ul>
				</li>

			</ul>

			<hr className='class-2'/>
			<h5>3.5. Plasma Treatment</h5>
			<ul>
				<li>Zhu et al. 온화한 조건에서 1단계 용액 플라즈마 방법을 통해 검은색 TiO2나노입자를 제조 했습니다</li>
				<li>Tenget al. P25 사용하고, H2를 환원 가스로 사용하는 HFCVD(Hot Filament Chemical Vapor Deposition) 장치를 사용</li>
			</ul>


			<hr className='class-2'/>
			<h5>3.6. Sol-Gel Combustion***</h5>
			<ul>
				<li>Ullattilet al. 티타늄 부톡사이드, 디에틸렌 글리콜 및 물을 전구체로 사용하여 원팟 겔 연소 공정을 통해 흑색 아나타제 TiO 2-x 광촉매를 제조했습니다[ref]
					<ul>
					<li>0.2M 티타늄(IV) 부톡사이드(6.8g)를 50ml 디에틸렌 글리콜(DEG)과 혼합한 후 1200rpm에서 30분간 교반하여 노란색 티타늄 글리콜레이트 겔을 형성했습니다.</li>
					<li>충분한 수산화를 촉진하기 위해 14.4 ml(8 몰배)의 물을 첨가했는데, 이는 과잉 수산화가 흑색 TiO2로 향할 수 있기 때문입니다.</li>
					<li>또한, 수성 매개 반응은 상대적으로 낮은 소성 온도에서 결정상 형성을 유도합니다.</li>
					<li>추가로 15분 동안 계속 교반하였다.</li>
					<li>형성된 수화된 티타늄 글리콜레이트 겔을 머플로에서 300°C에서 2시간 동안 보관했습니다.</li>
					</ul>
				</li>

				<li>Campbellet al. 또한 티타늄 테트라이소프로폭시드를 전구체로 사용하여 졸-겔을 300°C까지 올리고 5시간 연소 방법을 통해 검정색 TiO2를 합성했습니다[ref]</li>
			</ul>



			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S1385894718300858'>검은색 TiO2 나노 물질: 최근 발전에 대한 검토</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/ja3012676'>흑색 TiO2 나노입자의 밴드갭 축소에 대한 결함의 특성 및 위치의 영향</a></li>
				<li><a href='https://www.mdpi.com/2079-4991/13/3/468'>Recent Advances in Black TiO2 Nanomaterials for Solar Energy Conversion</a></li>
			</ol>
			


		</div>
	)
}

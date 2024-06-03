import React from 'react';
import '../../styles/styles.css'

function History() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default History;

function MainContents() {
	const title = 'History of photocatalysts';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<h3>1 개요</h3>

			<ul>
				<li>반도체 광촉매의 전자 이동을 자극하여 태양 에너지를 활용하여 오염 물질을 산화하거나 감소시킬 수 있습니다.</li>
				<li>이 기술에서 가장 중요한 요소는 태양에너지를 화학에너지로 변환해 오염물질을 파괴하는 광촉매다</li>
				<li>광촉매 공정은 일반적으로 전하 생성, 분리 및 소비의 세 단계로 구성됩니다</li>
			</ul>

			<br/><br/><img src="../images/photocatalyst/history_1.jpg" width="600" alt=''/><br/><br/>

			<ul>
				<li>1단계 : 1960년대부터 1993년까지의 기간 동안 우리는 주로 오염물질의 광촉매 제거 발견</li>
				<li>2단계 : 1994~2000년 기간 동안 우리는 광촉매 분해 메커니즘의 개발, 변형된 TiO2에 대한 연구(예: 금속 이온 도핑, 복합 광촉매)</li>
				<li>3단계 : 2001~2010년 기간 동안 나노기술의 응용, TiO2 기반 개질 방법(예: 비금속 도핑, 형태 제어, 반도체 이종접합), 
					비TiO2 기반 광촉매 개발 (예: ZnO, WO3, BiVO4 , BiOCl, gC3N4), 재활용, 가시광 구동 광촉매 및 신 오염 물질 처리</li>
				<li>4단계 : 2011년부터 현재까지의 광촉매 개발(예: 플라즈몬 기반 광촉매, 금속-유기 골격 광촉매, 광촉매 설계), 
					광촉매 결합 시스템(예: 광전자 촉매) 및 기존 문제(예: 독성)</li>
				<li></li>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3>1단계 : 1960~1993</h3>

			<ul>
				<li>1972년에 획기적인 사건이 발생. Fujishima와 Honda는 UV 광 조사와 함께 TiO2 전극을 사용하여 물에서 수소 발생을 발견</li>
				<li>태양 에너지를 화학 에너지로 변환하는 방법</li>
				<li>광촉매의 기본 원리 이해 , 광촉매 효율 향상, 광촉매 시스템 및 응용 범위 확장에 중점</li>
				<li>ZnO, NiO, WO3, CdS, ZnS 및 SrTiO3 금속 산화물 , 황화물 및 복합 금속 산화물이 연구</li>
				<li>빛의 조사 에너지가 TiO2 입자의 밴드갭 전이 에너지(λ &lt; 380 nm)보다 클 경우 VB에서 CB로 전자를 여기시키고 VB에 전자-정공 쌍을 생성</li>
			</ul>
			<br/><br/><img src="../images/photocatalyst/history_2.jpg" width="300" alt=''/><br/><br/>

			<hr className='class-1'/>
			<h3>2단계 : 1994~2000</h3>

			<ul>
				<li>반도체 밴드 이론과 분석기술(SEM, TEM, XPS, ESR, EIS 등)의 발전으로 광촉매 현상과 메커니즘에 대한 이해가 점차 깊어졌다.</li>
				<li>UV만 흡수(햇빛의 5% 이하), 전자-정공의 재결합(효율 감소) 등을 해결 필요</li>
				<li>광촉매 효율을 향상시키기 위해 연구자들은 TiO 2 를 변형하기 시작</li>
				<li>1. Dye-Sensitization</li>
				<li><br/><br/><img src="../images/photocatalyst/history_3.jpg" width="300" alt=''/><br/>
				organic dyes such as erythrosine B(ErB), eosin Y(EY), rhodamine B(RhB), and rose bengal(RB)<br/></li>
				<li>2. Metal-ion doping</li>
				<li><br/><br/><img src="../images/photocatalyst/history_4.jpg" width="300" alt=''/><br/><br/></li>
				<li>3. Composite photocatalysts</li>
				<li><br/><br/><img src="../images/photocatalyst/history_5.jpg" width="300" alt=''/><br/><br/></li>
				<li>광촉매에 의한 물 속 오염물질 제거 메커니즘을 집중적으로 연구</li>
				<li>h+ 정공이 오염물질을 직접 산화시킬 수 있다는 사실을 발견</li>
				<li>TiO2 및 기타 촉매(염료 감응, 금속 이온 도핑, 복합 광촉매) 의 변형을 사전 조사 하고 광촉매의 성능을 향상</li>
				<li>촉매 활성이 미흡하고, 가시광선 활용도가 낮은 등 해결해야 할 문제</li>
			</ul>

			<hr className='class-1'/>
			<h3>3단계 : 2001~2010</h3>

			<ul>
				<li>2000년부터 나노기술이 큰 주목을 받았으며 물 오염 제거를 위한 다양한 나노미터 광촉매가 개발로 광촉매 연구에 새로운 시대 시작</li>
				<li>나노 크기의 광촉매는 더 큰 전하 수송 속도, 증가 된 비표면적, 더 많은 활성 부위 노출 등의 장점을 갖고 있어 광촉매 활성 이 향상</li>
				<li>광촉매 나노결정화 연구 급속도로 발전</li>
			</ul>

			<hr className='class-2'/>
			<h5>TiO2 개질 : 비금속 도핑</h5>
			<ul>
				<li>금속 이온 도핑에는 여러 가지 장점이 있지만 TiO2 결정 구조의 열적 불안정성을 초래할 수 있다</li>
				<li>금속 이온 도핑을 대체할 수 있는 비금속 도핑(VB의 상향 이동과 산소 결핍 부위의 형성)을 연구</li>
				<li><br/><br/><img src="../images/photocatalyst/history_6.jpg" width="900" alt=''/><br/><br/>
				(a). 비금속 도핑, (b). p-n 이종 접합, (c). p-n이 아닌 이종 접합, (d). 단일 사이트 광촉매</li>
				<li>비금속 음이온 도핑은 나노미터 TiO2 단위로 전자-정공 쌍 재결합을 효과적으로 지연시킬 수 있다.</li>
				<li>금속 도핑과 달리 비금속 도핑은 TiO2 의 VB를 조정하는 것입니다.</li>
				<li>비금속의 전자 상태가 TiO2 VB 가장자리 위에 있기 때문에 TiO2 도핑 시 TiO2의 VB 위에 비금속 불순물 특성을 발휘한다.</li>
				<li>이는 TiO 2 의 광 흡수 및 전자-정공 쌍 분리 효율을 증가시킵니다 .</li>
				<li>다양한 비금속 도핑 원소 : P, S, N, B, Si, F, I, Cl ....</li>
			</ul>

			<hr className='class-2'/>
			<h5>TiO2 개질 : 형태(Morphology) 제어</h5>
			<ul>
				<li>활성을 향상위해 TiO2의 형태나 결정 구조를 변형시키는 것</li>
				<li>nanofibers, mesoporous hollow shells(다공성 중공 껍질), 아나타제형 nanowires</li>
				<li>형태 의 변형은 광생성된 전자-정공 쌍의 분리에 영향을 미칠 수 있습니다.</li>

				<li><br/><br/><img src="../images/photocatalyst/history_1.png" width="300" alt=''/><br/><br/></li>

				<li>결정면에 따라 TiO2의 (001)면은 유기 오염물질 의 산화적 분해에 대해 (101)면보다 반응성이 더 높다.</li>
				<li>중금속의 제거나 아세트알데히드의 분해에는 (101)면의 활성이 (001)면보다 크다</li>
				<li>이는 TiO2 의 서로 다른 면이 광촉매 반응에서 서로 다른 효과를 갖는다는 것을 의미합니다.</li>
				<li>(001)은 광촉매 산화에 참여하는 면이고 (101)은 광촉매 환원에 참여하는 면입니다</li>
				<li>루틸과 아나타제 결정상 조합은 전하 분리를 효과적으로 향상</li>
				<li>결정 구조를 제어하면 가시광선 조사에서 광촉매 특성을 향상시킬 수도 있다.</li>
				<li>층상 및 나노규모 구조를 갖는 페로브스카이트 물질(예: La-NaTaO3)은 환원 부위와 산화 부위가 분리된다</li>
			</ul>


			<hr className='class-2'/>
			<h5>TiO2 개질 : 반도체 이종접합(heterojunction)</h5>
			<ul>
				<li>p-n 반도체 이종 접합 시스템에서는 pn 접합의 경계면에 공간 전하 영역이 형성된다.</li>
				<li>공간 전하 영역은 전자와 정공을 반대 방향으로 이동시키는 내부 전기장이 생성된다.</li>

				<li><br/><br/><img src="../images/photocatalyst/history_2.png" width="600" alt=''/><br/><br/></li>
				<li><br/><br/><img src="../images/photocatalyst/history_3.png" width="600" alt=''/><br/><br/></li>

				<li>pn 이종접합의 전자 전이가 빛에 의해 여기될 때 전자-정공 쌍을 빠르게 분리할 수 있다</li>
				<li>전기장의 영향으로 정공은 p형 반도체의 VB로 더 쉽게 이동하고 전자는 n형 반도체의 CB로 더 쉽게 이동 한다 .</li>
				<li>전자-정공 쌍은 쉽게 분리되고,<br/>
						전하는 광촉매로 빠르게 이동할 수 있으며,<br/>
						전하 캐리어의 수명은 더 길고,<br/>
						환원 및 산화 반응은 다양한 반도체 표면에서 발생한다.</li>
				<li>이러한 특성은 pn 헤테로구조의 향상된 광촉매 성능을 제공한다.</li>
				
				<li><br/><br/><img src="../images/photocatalyst/history_8.jpg" width="600" alt=''/><br/><br/></li>

				<li>비p-n 유형 이종접합, TiO2 의 CB 수준은 ZnS의 수준보다 낮으며,<br/>
						ZnS의 CB에 있는 전자는 빛에 의해 여기되면 TiO 2 의 수준으로 이동할 수 있다.<br/>
						TiO2 의 VB 수준은 ZnS의 VB 수준보다 낮다.<br/>
						따라서 TiO2 VB의 정공은 더 적은 장벽을 사용하여 ZnS의 정공으로 이동될 수 있다.<br/>
						따라서, 내부 장에 의해 광생성 캐리어의 분리 및 이동이 촉진될 수 있으며,<br/>
						이는 전자-정공 재결합 가능성을 감소시킬 수 있다.<br/>
						ZnS 표면에는 많은 양의 정공이 축적되고, TiO2 표면에는 전자가 축적된다 .<br/>
						광촉매 표면의 전자와 정공은 광산화-환원 반응에 참여하여 직간접적으로 유기 오염물질을 분해 하거나 중금속을 환원시켜 광촉매 반응을 크게 향상시킨다</li>

			</ul>

			<hr className='class-2'/>
			<h5>TiO2 반응기에 촉매의 투여량 : TiO2 loading</h5>
			<ul>
				<li>미세 입자상의 suspended 촉매는 많으면 반응은 비레적으로 증가하나,</li>
				<li>광투과를 방해하여 실제 반응효과는 낮아진다. 또, 촉매가 유출수와 함께 유출되는 문재점이 있다.</li>
				<li>따라서 나노촉매 입자를 특정 지지체에 고정하는 것이 좋다.</li>
				<li>지지체 : 금속망, 탄소섬유, 광섬유, 활성탄, glass, carbon, zeolite, ceramic, polymer, silica gel, and others....</li>
			</ul>

			<hr className='class-2'/>
			<h5>Non-TiO2 Non-TiO2 기반 광촉매 개발 :</h5>
			<ul>
				<li>TiO2 광촉매 한계(낮은 가시광 활용도, 양자 효율 , 약한 광환원 능력 등)</li>
				<li>Non-TiO2 기반 광촉매: 
					<ul>
						<li>2원 산화물(binary oxides) : ZnO, Cu2O, WO3 , V2O5</li>
						<li>2원 황화물(binary sulfides) : CdS, ZnS, Sb2S</li>
						<li>3원 산화물(ternary oxide) : BiVO4 , Ag3VO4 , ZnWO4 , SrTiO3</li>
						<li>비스무트 옥시 할라이드(bismuth oxyhalides) : BiOCl, BiOBr, BiOI</li>
					</ul>
				</li>
				<li>2원 산화물에 의한 유기 오염물질의 분해 효율이 UV광 하에서 TiO2 보다 우수하다는 것을 발견</li>
				<li>황화물은 TiO2 보다 밴드갭이 작고 광환원 성능이 뛰어나며 가시 광선 흡수</li>
				<li>비스무트 옥시할로겐화물 TiO2보다 더 높은 가시광선 활성</li>
				<li>가시광선 반응형 광촉매를 개발하기 위해서는 광촉매의 에너지 밴드 구조를 튜닝하는 것이 필요</li>
				<li>넓은 밴드갭 반도체와 좁은 밴드갭 반도체를 고용체를 형성하는 방법이 제안</li>
				<li>이 방법에서는 좁은 밴드갭 반도체와 넓은 밴드갭 반도체의 조성비를 변화시킴으로써 에너지 밴드의 위치와 밴드갭을 조정할 수 있었다.</li>
				<li>Non-TiO2 예 : Cd1-xZnxS, BaBi2Mo4-xWxO16 ....</li>
				<li>의약품 및 개인 위생용품(PPCP), 내분비 교란 물질(EDC)등 신오염물질 제거에 광촉매 기술이용 연구 유행</li>
			</ul>

			<hr className='class-1'/>
			<h3>4단계 : 2010~현재</h3>
			<ul>
				<li>나노물질 사용의 경제성 및 생물안전성 문제로 인해 점점 더 많은 관심을 받았다 .</li>
				<li>가시광선 구동 광촉매를 다수 개발했다.</li>
				<li>Black TiO2 , 플라즈몬 기반 광촉매, Non-TiO2 기반 이종접합</li>
			</ul>

			<hr className='class-2'/>
			<h5>Black TiO2</h5>
			<ul>
				<li>2011년에는 약 1.5eV의 좁은 밴드갭을 갖는 Black TiO2가 전체 스펙트럼 햇빛 흡수 및 광촉매 활성을 향상시키는 것으로 보고</li>
				<li>Black TiO2 나노물질의 출현은 실질적으로 향상된 태양광 흡수와 개선된 광촉매 활성으로 인해 전 세계적으로 연구 관심</li>
				<li>Black TiO2의 향상된 광촉매 활성 은 일반적으로 더 좁은 밴드갭, 표면 Ti-OH 그룹, 표면 Ti-H 그룹, 
						Ti3+ 이온, 향상된 전하 분리, 더 많은 산소 결손, 향상된 전하 분리 및 가능한 경우의 존재에 기인</li>
			</ul>

			<hr className='class-2'/>
			<h5>Recycling</h5>
			<ul>
				<li>가시적인 광촉매 활성이 높고 처리된 물에서 쉽게 회수할 수 있는 광촉매를 만드는 것이 현재 연구의 목표</li>
				<li>나노 광촉매를 적용하면 물에서 이러한 물질을 효율적으로 분리하고 회수하는 것이 점점 더 어려워지고 있다.</li>
				<li>제올라이트, 유리, 폴리머, 세라믹, 모래 및 기타 고체 담체에 고정되어 이러한 광촉매를 쉽게 분리할 수 있다.</li>
				<li>그러나 고정된 광촉매는 쉽게 분리되었으나, 광촉매의 표면적 감소, 반응 매질과의 상호작용 부족, 빛 노출 제한으로 인해 광촉매 활성이 크게 감소하였다</li>
				<li>연구진은 광촉매 특성을 유지하고 쉽게 분리할 수 있도록 외부 자기장을 이용해 물과 쉽게 분리할 수 있는 자성 나노입자 에 주목했다.</li>
			</ul>

			<hr className='class-2'/>
			<h5>Plasmon based photocatalysts</h5>
			<ul>
				<li>1857년에 Faraday는 처음으로 표면 플라즈몬의 광학 현상을 발견</li>
				<li>최근에는 나노기술과 결합된 표면 플라즈몬이 광촉매 분야에서 널리 사용</li>
				<li>금속 나노구조, 특히 Ag 및 Au와 같은 귀금속은 빛을 국부적인 전기장으로 변환하거나 표면 플라즈몬 공명 에서 빛의 흡수를 향상시킬 수 있다</li>
				<li>광촉매에 플라즈몬을 적용하면 광촉매의 가시광선 및 근적외선 영역의 흡수가 향상될 수 있다</li>
				<li>표면의 귀금속도 전자-정공쌍의 분리를 가속화할 수 있다</li>
			</ul>

			<hr className='class-2'/>
			<h5>non-TiO2 based heterojunctions photocatalysts</h5>
			<ul>
				<li>강력한 가시광선 흡수, 오염 물질 제거에 대한 효율성 및 안정성, 넓은 적용 범위로 인해 최근 매우 인기를 얻고 있다</li>
				<li>전자 밴드 구조가 일치하는 두 광촉매 사이에 잘 ​​정의된 이종 접합이 형성되면 광 생성된 전자와 정공 의 재결합을 효과적으로 억제할 수 있다 .</li>
				<li>예 : gC3N4/Co3O4, WO3/Bi3O4Cl, Pr2Zr2O7, Nd2Zr2O7-Nd2O3, BiPO4/Bi2MoO6 ....</li>
			</ul>

			<hr className='class-2'/>
			<h5>MOF(Metal organic framework photocatalysts)</h5>
			<ul>
				<li>금속유기골격체(MOF)가 적용되어 왔다.</li>
				<li>독특한 다공성, 높은 표면적 및 물 안정성을 갖춘 MOF는 독성 오염물질을 흡수 하고 빛 여기 및 전자 전달을 통해 유기 오염 물질과 중금속을 제거할 수 있다.</li>
				<li>여기 된 클러스터는 광촉매 반응의 주요 활성 부위이기 때문에 높은 광촉매 특성을 갖는 MOF를 구성하려면 적합한 클러스터를 선택하는 것이 중요하다</li>
				<li>금속산화물, 그래핀, 탄소나노튜브 , 양자점 , 금속나노입자 등의 다른 물질도 안정적인 MOF 나노입자를 제조하는 데 사용되어 왔으며,
						이들의 성능은 MOF에 비해 괄목할 만한 향상을 보여주었다.</li>
				<li>1~3차원 구조를 형성하기 위해 유기 리간드에 배위된 금속 클러스터로 구성된 다공성 폴리머 이다 .</li>

				<li><br/><br/><img src="../images/photocatalyst/history_4.png" width="600" alt=''/><br/><br/></li>
			</ul>

			<hr className='class-2'/>
			<h5>맞춤 광촉매 설계 및 제작</h5>
			<ul>
				<li>이상적인 광촉매 효율은 햇빛 활용을 개선하고 전자-정공 쌍의 분리를 촉진하는 두 가지 순차적 핵심 단계가 완전히 완료된 경우에만 달성될 수 있습니다.</li>
				<li>광촉매의 밴드갭 폭을 좁힐수록 전자-정공 쌍의 재결합이 증가하는 것이 현실이다.</li>
				<li>환원 특성이 필요한 경우 무기 이온 도핑으로 VB를 조절합니다.</li>
				<li>산화 특성이 필요한 경우 금속 이온 도핑으로 CB를 조절합니다.</li>
				<li><br/><br/><img src="../images/photocatalyst/history_9.jpg" width="300" alt=''/><br/><br/></li>
				<li>예를 들어, TiO2와 좁은 밴드갭 황화물의 결합은 가시광 흡수 능력이 향상되고 황화물의 CB가 더 negative이기 때문에 Cr(VI)을 줄이는 데 탁월한 효과가 있습니다.</li>
				<li><br/><br/><img src="../images/photocatalyst/history_6.png" width="900" alt=''/><br/><br/></li>
				<li>BiOCl과 Bi2WO6은 더 positive VB 위치로 인해 TiO2 보다 오염 물질을 산화하는 능력이 더 강합니다 .</li>
				<li><br/><br/><img src="../images/photocatalyst/history_5.png" width="900" alt=''/><br/><br/></li>
				<li>염료를 분해할 때 주요 활성 라디칼은 전자 정공입니다</li>
			</ul>

			<hr className='class-2'/>
			<h5>Development of photocatalytic-coupling systems(결합 시스템 개발)</h5>
			<ul>
				<li>최근 광촉매 결합 시스템(예: 광전자 촉매, 소노 광촉매, 광열 촉매)은 높은 효율성으로 인해 새로운 주목을 받고 있습니다.</li>
				<li>흡착 기술
					<ul>

					</ul>
				</li>
				<li>광촉매 표면의 유기 오염물질 흡착은 광촉매 분해 동역학에 영향을 미치는 중요한 요소입니다.</li>
				<li>오염물질은 다양한 물리적, 화학적 상호작용(예: 정전기적 상호작용, 소수성 효과, 산-염기 효과, π-π 상호작용 및 수소 결합)을 통해 흡착제 표면에 흡착되어 유기 오염물질의 국지적 농도를 증가시킵니다.</li>
				<li>멤브레인 기술
					<ul>

					</ul>
				</li>
				<li>광촉매 막 결합 기술은 광촉매를 막에 장착하거나 내장하여 막을 변형시키는 광촉매 막 반응기(PMR)를 활용합니다.</li>
				<li>광전기촉매 기술
					<ul>

					</ul>
				</li>
				<li>전기화학적 고급 산화 공정(EAOP)은 최근 몇 년 동안 빠르게 발전</li>
				<li>높은 에너지 효율, 용이한 자동화, 간단한 장비</li>
				<li>전극에서 직접적인 전기화학적 반응을 거치는 것뿐만 아니라,</li>
				<li>전극 표면에서 생성된 고체 산화 ROS를 사용하는 산화환원 반응에 의해 오염 물질이 변형됩니다.</li>
				<li>EAOP는 전기분해 시스템에서 OH가 형성되는 방식 에 따라 직접 또는 간접으로 분류됩니다</li>
				<li>직접 EAOP는 화학물질 첨가 없이 물을 직접 산화시켜 OH를 생성</li>
				<li>간접 EAOP는 OH를 생성하기 위해 현장 전기화학적 생성이나 화학종(H 2 O 2 또는 Fe 2+ ) 첨가 를 필요로 합니다 .</li>
				<li>낮은 바이어스 전압을 가해 e - 및 h + 생성, 전달 및 분리를 촉진합니다.</li>
				<li>오존화 기술
					<ul>

					</ul>
				</li>
				<li>오존처리와 광촉매작용을 결합하면 두 공정 사이에 시너지 효과를 제공</li>
				<li>펜톤 산화 기술
					<ul>

					</ul>
				</li>
				<li>1894년 영국의 과학자 Fenton은 H2O2가 산성 조건에서 Fe2+의 촉매 효과로 타르타르산을 효과적으로 산화시킬 수 있음을 발견했습니다.</li>
				<li>1차 활성종(•OH) 의 형성을 증가시킵니다 .</li>
				<li>과황산염 산화 기술
					<ul>

					</ul>
				</li>
				<li>과황산염 기반 고급 산화 기술은 유기 오염물질을 제거하는 유망한 수단으로 떠올랐습니다.</li>
				<li>과황산염 활성화는 오염 물질 분해를 촉진하는 황산염 라디칼(SO4•−)을 생성합니다.</li>
				<li>넓은 적용 범위, 간단한 조작, 빠른 반응, 우수한 분해 효과로 인해 큰 주목을 받고 있습니다.</li>
				<li>사용되는 과황산염은 일반적으로 퍼옥시모노황산염(PMS)과 퍼옥시디황산염(PDS)이다</li>
				<li>SO4•−는 •OH 보다 산화력이 강하고 이동 수명이 길다 .</li>
				<li>광열촉매 기술
					<ul>
						<li>광촉매는 저온에서 발생할 수 있기 때문에 광열 촉매에 광촉매와 열촉매를 결합하면 이러한 기술의 각각의 한계를 극복할 수 있습니다.</li>
						<li>열에너지를 사용하여 촉매 활성을 향상시키고, 물질의 이동을 가속화하며, 담체 여기 및 분리를 향상시켜 활성 물질의 수율을 높입니다.</li>
						<li>적외선 에너지를 효과적으로 활용하고 가시광선 활용도를 향상</li>
						<li>촉매/반응물 경계면의 국지적 온도를 증가시켜 반응성을 자극하고 이동 속도를 증가시켜 분자간 반응을 촉진합니다.</li>
					</ul>
				</li>
				<li>플라즈마 기술
					<ul>
						<li>플라즈마는 고체, 액체, 기체에 이어 제4의 물질 형태로 알려져 있습니다. 온도 변화에 영향을 받습니다</li>
						<li>광촉매 저온 플라즈마 기술은 자유 라디칼 산화, UV 광분해, 고온 열 효과, 액체 전기 캐비테이션 및 초임계수 산화 의 복합 작용으로 유기 오염 물질을 분해합니다 .</li>
						<li>방전 유도 캐리어는 물 속의 유기 오염물질을 빠르게 분해하는 OH , O 및 O 3 와 같은 산화 라디칼을 다량 생성합니다.</li>
						<li>플라즈마가 광촉매의 구동원으로서 UV 광을 대체할 수 있고 UV 광촉매의 많은 단점을 극복할 수 있음을 보여주었습니다.</li>
					</ul>
				</li>
				
				<li>초음파 기술
					<ul>
						<li>초음파 캐비테이션과 광촉매 분해는 모두 자유 라디칼 과정이며 전파 매체와 에너지 수준은 다르지만 기본 원리는 매우 유사합니다.</li>
						<li>초음파 캐비테이션에 의해 생성된 고온 및 고압 국부 환경은 화학 반응의 고유 속도를 가속화합니다.</li>
						<li>초음파 조사는 용액의 국소 온도와 압력을 빠르게 변화시키고 자유 라디칼 생성을 촉진하는 캐비테이션을 통해 작은 기포를 생성합니다</li>
						<li>캐비테이션 기포에서 생성된 유난히 높은 온도는 그 안에 갇힌 분자의 화학 결합을 깨뜨려 휘발성 및 소수성 유기 화합물을 분해할 수 있습니다.</li>
						<li>초음파 진동은 또한 입자 충돌 가능성을 높이고 광촉매를 효과적으로 분산 및 청소하여 더 많은 활성 부위를 노출시키고 광촉매와 오염 물질 사이의 접촉을 촉진합니다</li>
					</ul>
				</li>
				
				<li>Piezo-photocatalysis technology
					<ul>
						<li>기계적 작용이 압전 재료에 적용되어 내장된 전기장을 통해 표면의 양쪽 끝에서 전하를 생성하는 새로운 촉매 기술</li>
						<li>분극된 전기장은 전하 캐리어의 생성, 분리, 전송 및 재결합을 조절할 수 있습니다.</li>
						<li>압전재료는 초음파의 기계적 진동을 통해 압전 전위를 유도하고,</li>
						<li>에너지 밴드가 휘어져 내부 전기장을 형성함으로써 기계적 에너지를 전기에너지로 변환시키는 것을 실현한다.</li>
						<li>e-와 h+의 반대 방향으로의 이동을 효과적으로 촉진할 수 있습니다</li>
					</ul>
				</li>
				
				<li>magnetic technology
					<ul>
						<li>자기장 촉매작용은 스핀 분극과 전자기라는 두 가지 메커니즘에 의해 작동</li>
						<li>스핀 분극에는 스핀 전자 분극과 음의 자기 저항이 포함되는 반면 전자기에는 로렌츠 힘과 자기 유도가 포함됩니다.</li>
						<li>전자의 스핀은 궤도 운동과 별개인 고유의 각운동량입니다.</li>
						<li>소량의 에너지가 입력되거나 방출되면 스핀 상태가 반전됩니다</li>
						<li>e- 와 h+ 가 반대 스핀 상태를 가지면 재결합이 더 어려워져 e-, h+ 분리 속도가 향상됩니다</li>
					</ul>
				</li>
			</ul>


			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0304389420305884'>Historical development and prospects of photocatalysts for pollutant removal in water</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S187220672364536X'>폐수 처리를 위한 광촉매 결합 기술의 최신 발전</a></li>
				<li><a href='https://www.mdpi.com/2073-4344/12/9/1042'>외부 물리적 장에 의한 광촉매 결합의 최근 발전</a></li>
			</ol>
			


		</div>
	)
}

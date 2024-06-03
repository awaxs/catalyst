import React from 'react';
import '../../styles/styles.css'

function BlackTiO22DSolgel() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default BlackTiO22DSolgel;

function MainContents() {
	const title = 'A3_Black_TiO2_2D_solgel';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* Black TiO2 Titanum Mesh */}
			<div className='bky'>
				<hr className='hrstyle'/>
					<h5 className='h5style'><b><u>Base D. Black TiO2 Titanum Mesh</u></b></h5>
					
					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>titanium isopropoxide (C12H28O4Ti, TTIP) (≥99%)</li>
							<li>hydrochloric acid</li>
							<li>ethylene glycol (EG)</li>
							<li>absolute ethanol </li>
							<li>polyethylene oxide - polypropylene oxide - polyethylene oxide (PEO20-PPO70-PEO20, P123)</li>
							<li>Sodium molybdate dihydrate (Na2MoO4·2H2O) (≥99%)</li>
							<li>thioacetamide (C2H5NS) (≥ 99%)</li>
							<li>Triton x-100</li>
							<li>304 stainless steel mesh (300 mesh)</li>
						</ul>
						<img src="../images/application/1.png" width={'600'} alt=''/>
						<ol>
							<li> (a) 용액으로부터 초박형 2D TiO2 나노시트의 분자 자기조립에 대한 개략도</li>
							<li> (b) 합성된 초박형 2D TiO2 나노시트의 형태에 대한 SEM 이미지</li>
							<li>(c) 초박형 2D TiO2 나노시트의 TEM 이미지</li>
							<li>(d) 나노시트의 단결정 특징과 가장자리 구성을 보여주는 초박형 2D TiO2 나노시트의 HRTEM 이미지</li>
							<li>(e) 초박형 2D TiO2 나노시트의 AFM 이미지 및 두께 프로파일</li>
							<li>(d)의 삽입 그림은 "L" 선을 따라 강도 프로파일을 나타내며, 초박형 TiO2 나노시트의 단층 사이에 0.62 nm의 층간 간격을 나타냅니다.</li>
							<li>(e)의 삽입은 "1"과 "2"선을 따라 높이 프로파일을 보여 주며 각각 3.3nm와 2.7nm의 두께를 나타냅니다.</li>
							<li>TTIP=1ml, HCl=0.454ml, P123=0.182857g, EtOH=3.47439ml</li>
						</ol>
					<p><b><u>2. 2D ultrathin TiO2 nanosheets(문헌방법)</u></b></p>
						<ol>
							<li>bottle A, 격렬하게 교반하면서 TTIP(밀도 0.96g/ml) 1.05g(1.09375 ml)을 HCl(밀도 1.49g/ml) 용액 0.74g(0.497 ml)에 첨가</li>
							<li>bottle B, P123(밀도 1.018g/ml) 0.2g을 에탄올(밀도 0.78945 g/ml) 3.0g(3.8ml)에 용해, 15분간 교반한 후</li>
							<li>bottle B의 용액을 bottle A에 첨가</li>
							<li>30분간 교반</li>
							<li>20mL EG를 포함하는 2.5mL의 생성된 TTIP 용액을 45mL 오토클레이브로 옮긴다</li>
							<li>100-160 oC에서 20시간 동안 가열</li>
							<li>heated at 100-160 oC(150oC) for 20 h</li>
							<li>milk 같은 용액이 만들어진다, 원심분리한 후 에탄올로 3회 세척</li>
							<li>80oC에서 24시간 동안 건조시킨 후 흰색 분말을 수집</li>
							<li>추가 특성화를 위해 일부 분말을 초음파 처리를 통해 에탄올에 재분산</li>

						</ol>

						<p><b><u>2. 스테인레스 메쉬에 2D ultrathin TiO2 nanosheets 코팅(나의 방법)</u></b></p>
						<ol>
							<li>스테인레스 메쉬를 아세톤, 에탄올, 증류수로 10분간 초음파 세척한 후 건조, 보관</li>
							<li>100mL비이커에 50 mL의 <u>무수 에탄올</u>을 자기 교반(저속)</li>
							<li>3 mL의 티타늄 이소프로폭시드(TTIP, 밀도0.96 g/mL)를 1분 동안 방을로 첨가</li>
							<li>이때 공기중 수준 흡수 조심</li>
							<li>3분 교반(저속)</li>
							<li>Triton x-100(3 방울)을 첨가하고 3분 동안 저속 교반을 유지한다.(A용액)</li>
							<li>100mL비이커에(A용액)을 초음파 욕조에 옮겨서 초음파 진동을 유지하면서, </li>
							<li>초음파 욕조에 있는 100mL비이커에(A용액)에 전처리된 스테인레스 메쉬를 넣고 5분간 처리한다</li>
							<li>100°C 오븐에 100 mL 비이커에 증류수 20 mL를 넣고 가열한다.</li>
							<li>위의 오븐내 비이커 위에 스테인레스 메쉬를 올려 놓는다. (수증기에 의한 가수준해, 자기 조립 및 응축이 일어난다)</li>
							<li>(7.8.9.10)과정을 수회(4회) 반복하여 로딩량을 증가시킨다.</li>
							<li>실온에서 1시간 동안 건조</li>
							<li>450°C 머플로에 넣고 온도 상승 속도는 5°C/분으로 2시간동안 어널링한다.</li>												
						</ol>

					<p><b><u>2. 스테인레스 메쉬에 nano TiO2 코팅</u></b></p>
					<ol>
							<li>스테인레스 메쉬를 아세톤, 에탄올, 증류수로 10분간 초음파 세척한 후 건조, 보관</li>
							<li>100mL비이커에 50 mL의 <u>무수 에탄올</u>을 자기 교반(저속)</li>
							<li>3 mL의 티타늄 이소프로폭시드(TTIP)를 1분 동안 방을로 첨가</li>
							<li>이때 공기중 수준 흡수 조심</li>
							<li>3분 교반(저속)</li>
							<li>Triton x-100(3 방울)을 첨가하고 3분 동안 저속 교반을 유지한다.(A용액)</li>
							<li>100mL비이커에(A용액)을 초음파 욕조에 옮겨서 초음파 진동을 유지하면서, </li>
							<li>초음파 욕조에 있는 100mL비이커에(A용액)에 전처리된 스테인레스 메쉬를 넣고 5분간 처리한다</li>
							<li>100°C 오븐에 100 mL 비이커에 증류수 20 mL를 넣고 가열한다.</li>
							<li>위의 오븐내 비이커 위에 스테인레스 메쉬를 올려 놓는다. (수증기에 의한 가수준해, 자기 조립 및 응축이 일어난다)</li>
							<li>(7.8.9.10)과정을 수회(4회) 반복하여 로딩량을 증가시킨다.</li>
							<li>실온에서 1시간 동안 건조</li>
							<li>450°C 머플로에 넣고 온도 상승 속도는 5°C/분으로 2시간동안 어널링한다.</li>												
						</ol>
					
					<p><b><u>Pluronic P123</u></b></p>
						<ol>
							<li>폴리( 에틸렌 옥사이드 )(PEO)와 폴리( 프로필렌 옥사이드 )(PPO)를 교대로 선형 방식으로 포함하는 대칭형 삼블록 공중합체 (PEO-PPO-PEO)입니다.</li>
							<li>288K 이상의 온도에서는 소수성 이고 288K 이하의 온도에서는 물에 용해되는 PPO 블록의 독특한 특성 으로 인해 PEO-PPO-PEO 삼중 블록 공중합체로 구성된 미셀이 형성됩니다 .</li>
							<li>일부 연구에 따르면 소수성 코어에는 PPO 블록이 포함되어 있고 친수성 코로나는 PEO 블록으로 구성되어 있습니다. </li>
							<li>30wt% 수용액에서 Pluronic P123은 큐빅 겔 상을 형성합니다.</li>
							<li>HO(CH2CH2O)20 (CH2CH(CH3)O)70 (CH2CH2O)20 H이며, 이는 약 5800 g/mol의 분자량에 해당합니다. </li>
							<li>PEO-PPO-PEO 사슬을 기반으로 한 삼중블록 공중합체는 일반적으로 폴록사머로 알려져 있습니다 .</li>
							<li>폴록사머는 탄화수소 계면활성제 와 유사한 거동을 가지며 물과 같은 선택적 용매에 넣으면 미셀을 형성합니다 . </li>
							<li>구형 및 원통형 미셀을 모두 형성할 수 있습니다.</li>
							<li>P123은 FDU-14를 포함한 메조다공성 물질의 합성에 사용되었습니다 .</li>
							<li>용해된 P-123은 SBA-15와 같은 구조화된 메조다공성 물질을 만들기 위한 백본으로 사용되는 미셀을 형성합니다.</li>
							<li></li>
						</ol>
						<p><b><u>촉매 증착 전 스텐철망 전처리</u></b></p>
						<ol>
							<li>SUS 304(5x5 cm) 로 제작된 능직 직조 400 메쉬 스테인레스 스틸 메쉬</li>
							<li>스테인레스 메쉬를 무수 에탄올에서 15분간 초음파 처리</li>
							<li>스테인레스 메쉬를 무수 묽은 염산 (1wt %)에서 15분간 초음파 처리</li>
							<li>스테인레스 메쉬를 탈이온수로 3회 1분간 초음파 처리</li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ol>
						<p><b><u>촉매 증착 </u></b></p>
						<ol>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li>전처리된 스테인레스 메쉬를 표면의 핵 생성을 촉진하기 위해 약 1시간 동안 상기 용액에 담근 후</li>
							<li>용액을 120 ℃에서 12 시간 동안 환류시켰다. </li>
							<li>그 후, 용액 내의 필름과 입자를 수집하고 무수 에탄올과 탈이온수로 헹구고 60 °C에서 오븐 건조시켰다. </li>
						</ol>
						<p><b><u>전도성 증가(PANI,polyaniline 코팅 공정) </u></b></p>
						<ol>
							<li>PANI 코팅 공정은 침지 과정 대신 현장 산화중합으로 구현</li>
							<li>어닐링된 CBD 필름을 과 황산암모늄 (APS) 용액 에 담갔습니다 .</li>
							<li>1.2 mol/L HCl 250 mL(중합반응을 위한 산화제 용액)에 아닐린 0.30 mL를 혼합하여 아닐린 코팅액(녹흑색)을 재조</li>
							<li></li>
							<li></li>
							
						</ol>
			
						<ol>
							<li>양극산화 조건에 따른 설명</li>
							<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894719333339" target='_blank' rel="">Black TiO 2 : 그 특성과 상충되는 경향에 대한 검토</a></li>
							<li><a href="https://www.sciencedirect.com/science/article/pii/S2468606916300454" target='_blank' rel="">단결정 초박형 2D TiO2 나노 시트: 우수한 광전지 장치를 향한 다리</a></li>
							<li><a href="https://pubs.rsc.org/en/content/articlelanding/2023/qi/d2qi02596e" target='_blank' rel="">효율적인 태양광 구동 광촉매 수소 발생을 위한 높은 안정성을 갖춘 초박형 검정색 TiO2 나노 시트 조립 미세구</a></li>
							<li><a href="https://pubs.rsc.org/en/content/articlehtml/2023/cc/d3cc00989k#cit59" target='_blank' rel="">기계 학습 통합 광촉매: 진행 상황과 과제</a></li>
							<li><a href="https://www.nature.com/articles/s41524-021-00669-4" target='_blank' rel="">광촉매의 신속한 검색을 위한 화학적 경도 기반 해석 가능한 기계 학습 접근 방식</a></li>
							<li><a href="https://github.com/ritesh001/HT-iML_Photocatalysis" target='_blank' rel="">ritesh001/HT-iML_Photocatalysis</a></li>
							<li><a href="https://www.hindawi.com/journals/jnm/2016/6547271/" target='_blank' rel="">TiO2 나노결정체 형성에 대한 HCl의 영향</a></li>
							<li><a href="https://www.nature.com/articles/ncomms4813" target='_blank' rel="">확장 가능한 2차원 전이금속 산화물 나노시트의 일반화된 자가 조립</a></li>
							<li><a href="https://www.degruyter.com/document/doi/10.1515/ntrev-2023-0150/html" target='_blank' rel="">고도산화공정용 나노 TiO2 제조 시 졸-겔법 검토</a></li>
							<li><a href="" target='_blank' rel=""></a></li>
							<li><a href="" target='_blank' rel=""></a></li>
						</ol>
			
			
			</div>

		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function MoS2TiO2Sm() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MoS2TiO2Sm;

function MainContents() {
	const title = 'A14_MoS2TiO2_sm';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* B. 1T/2H-MoS2 @ TiO2 + stainless steel mesh */}
			<div className='bk'>
				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>B. 1T/2H-MoS2 @ TiO2 + stainless steel mesh</u></b></h5>	
					<p></p>

					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>titanium isopropoxide (C12H28O4Ti, TTIP) (≥99%)</li>
							<li>Sodium molybdate dihydrate (Na2MoO4·2H2O) (≥99%)</li>
							<li>thioacetamide (C2H5NS) (≥ 99%)</li>
							<li>Triton x-100</li>
							<li>304 stainless steel mesh (300 mesh)</li>
						</ul>	

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

					<p><b><u>2. nano TiO2에 MoS2-1T/2H 부착</u></b></p>
						<ol>
							<li>(무수에탄올 40mL + 탈이온수 40mL) 에 몰리브덴산나트륨(Na2MoO4 - 2H2O) 0.4g 과 티오아세트아미드(C2H5NS)0.72g를 넣고 완전하 용해될 때까지(2시간) 강한 교반</li>
							<li><img src="../images/paper/13.PNG" width={'600'} alt=''/></li>
							<li>스테인레스 스틸 오토클레이브상기 용액에 넣고 200 °C에서 24시간 동안 용매열 반응</li>
							<li>탈이온수와 에탄올로 세척하고 건조</li>
						</ol>
						<img src="../images/paper/14.PNG" width={'600'} alt=''/>
						<img src="../images/paper/15.PNG" width={'600'} alt=''/>
			</div>

		</div>
	)
}

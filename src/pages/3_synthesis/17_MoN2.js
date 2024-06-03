import React from 'react';
import '../../styles/styles.css'

function MoN2() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MoN2;

function MainContents() {
	const title = 'A17_MoN2';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* Molybdenum Nitride */}
			<div className='bky'>
				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>Base E. Molybdenum Nitride</u></b></h5>	
					<p></p>
					<p><b><u><a href='https://www.nature.com/articles/s41467-020-17628-0' target='_blank' rel="">방법 1(δ-MoN 나노시트의 합성)</a></u></b></p>
					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>MoCl3</li>
							<li>Li3N</li>
							<li>두 전구체 모두 가수분해되기 쉽기 때문에 화학적 성질이 상대적으로 불활성인 o-자일렌을 반응 용매로 선택합니다. </li>
							<li>2차원(2D) 나노구조를 얻기 위해 EDA는 구조 유도제로 반응 시스템에 첨가</li>
						</ul>
					<p><b><u>2. 합성 </u></b></p>
						<ol>
							<li>o-자일렌(40 mL)과 EDA(5 mL)의 혼합 용액을 만든다.</li>
							<li> MoCl3 1 mmol 과 Li3N 1 mmol을 첨가하고 글러브 박스 안에서 질소 보호 분위기에서 상온에서 2시간 동안 천천히 교반하였다.</li>
							<li>테플론 라이닝 오토클레이브에 밀봉하고 20시간 동안 3°C min-1 의 속도로 270°C로 가열합니다 . </li>
							<li>검은색 생성물을 원심분리하여 분리하였다.</li>
							<li>에탄올, N,N-디메틸포름아미드(DMF), 증류수로 3회 세척한 후 건조하였다.</li>
							<li></li>
							<li></li>
							<li></li>
						</ol>
						<td><img src="../images/strategy/26.PNG" width={'500'} alt=''/></td>
						<td><img src="../images/strategy/27.PNG" width={'500'} alt=''/></td>

					<p></p>
					<p><b><u><a href='https://pubs.rsc.org/en/content/articlelanding/2014/SC/C4SC02019G' target='_blank' rel="">방법 2</a></u></b></p>
					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>Ammonium molybdate tetrahydrate, (NH4)6Mo7O24·4H2O</li>
							<li>hexamethylenetetramine</li>
							<li></li>
							<li></li>
						</ul>
					<p><b><u>2. 합성 </u></b></p>
					<p><b><u>2. 합성 </u></b></p>
						<ol>
							<li>1차로 MoN 벌크를 합성한다.</li>
							<li>Ammonium molybdate tetrahydrate( (NH4)6Mo7O24·4H2O ) 3.5g 를 증류수 50mL에 용해한다.</li>
							<li>hexamethylenetetramine 6g (HMT, C6H12N4)를 증류수 50mL에 용해한다</li>
							<li>두 용액을 자석교반가로 혼합</li>
							<li>ammonium-HMT molybdate mixed salt의 수 시간 혼합 하여 무색의 결정을 만든다. </li>
							<li>수시간 방치하여 침전 한후 침전물을 물로 세척한 후, 실온에서 공기 중에서 건조시켰다. </li>
							<li>석영 튜브 내부의 암모니아 흐름(50 mL min -1 ) 하에서 6시간 동안 650°C(가열 속도 10°C min -1 )에서 어닐링되었습니다</li>
							<li>어두운 회색의 MoN 벌크 재료가 얻어졌습니다.</li>
							<li>2차로 액체 박리하여 MoN 나노시트의 합성한다.</li>
							<li>벌크 MoN과 20mL의 N-메틸피롤리돈(NMP) 를 총 용량이 20mL인 계량 병에 넣었습니다.</li>
							<li>8시간 동안 초음파 처리한 후, 생성된 분산액을 3000rpm에서 원심분리(박리되지 않은 잔여 MoN 입자를 제거)</li>
							<li>12,000rpm에서 3분간 고속 원심분리</li>
							<li>에탄올로 세척</li>
						</ol>

					<p></p>
					<p><b><u><a href='' target='_blank' rel="">방법 3(나의 방법, 검증 안됨)</a></u></b></p>
					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>Ammonium molybdate tetrahydrate, (NH4)6Mo7O24·4H2O</li>
							<li>melamine(C3H6N6, 멜라민) 상온의 물에는 약간 녹지만, 수온이 높아지면 비교적 잘 녹는다.</li>
							<li>N,N-dimethylformamide N,N-디메틸포름아미드(DMF)</li>
							<li>또는 melamine formaldehyde resin solution</li>
							<li>멜라민 요소 포름알데히드 수지</li>
							<li>멜라민포름알데히드(MF)수지는 포름알데히드 수용액과 멜라민을 증류수와 가열교반하면서 반응시켜 얻은 무색 투명한 고분자입니다</li>
							<li></li>
						</ul>
					<p><b><u>2. 합성 </u></b></p>
						<ol>
							<li>(NH4)6Mo7O24·4H2O 0.20g, melamine 멜라민 0.15g 을 N,N-디메틸포름아미드(DMF) 5mL에 12시간 동안 교반하면서 용해시켰습니다.</li>
							<li></li>
							<li></li>
							<li></li>

						</ol>


						
			</div>
		</div>
	)
}

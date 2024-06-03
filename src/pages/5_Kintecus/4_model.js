import React from 'react';
import '../../styles/styles.css'

function ModelDescription() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default ModelDescription;

function Contents() {
	const title = 'The Model Description Spreadsheet';

	return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<hr className='class-1'/>		
			
			<h5><u><b>다음은 모델 설명 스프레드시트의 각 필드가 Kintecus에서 어떻게 사용되는지에 대한 자세한 설명입니다.</b></u></h5>
		
			
			<h4><u><b>비가역 반응</b></u></h4>
			<p>반응 필드에는 비가역적 반응에 대해 가역적(단일 "="로 표시됨) 또는 비가역적({"==>"}로 표시됨) 반응이 포함됩니다.</p>
			<p className='text1'>kf, A+B+C {'==>'} D+E+F+G+H+I+J+K+L+N, Optional Comment</p>
			<p className='text1'>A, m, Ea, A+B+C{'==>'}D+E+F+G+H+I+J+K+L+N, Optional Comment</p>
			<p>좋은 방법은 아니지만 모델 전체에서 위의 두 가지 형식을 혼합하는 것이 가능하다. 
				A, m, Ea 를 나나태는 실제 데이터 간에는 TAB 키를 사용한다.
				Excel을 사용하여 반응을 입력하는 경우 구분 기호는 TAB입니다. 
				M은 [M]과 관련된 third-body reactions을 나타내므로 해 이름을 명시적으로 사용해야 하고 
				third-body 가스 반응에 익숙하지 않은 한 Speciies에 "M"이라는 이름을 사용하지 마십시오.</p>
			<ul>
				<li>반응 라인 최대 3개의 고유한 반응물과 최대 10개의 고유한 생성물만 사용할 수 있습니다.</li>
				<li>종의 다양성은 A+A+A+A+A 또는 98H2O 또는 4.2343E-23H2O를 나타내기 위해 5A와 같은 수치 계수를 사용하여 표현됩니다.</li>
				<li>기호는 Cl------- 또는 H3O+와 같은 종에 사후 고정될 수 있습니다.</li>
				<li>C8H15P+-(전체 전하가 없음)와 같은 일리드 및 양성이온도 입력할 수 있습니다.</li>
				<li>모든 반응은 질량 및 전하 균형을 확인합니다(해제 가능).</li>
				<li>+M[….] 또는 +S[…], fall-off reactions 및 special reactions, REACTANTS로 Count 하지 말것!</li>
				<li>아래 표현은 반응을 정확히 표현한 예이다.</li>
			</ul>
			<p className='text1'>A + B + C + M[-O2(1);-N2(1) ;H2(1);-Ar(1); -HO2(1);-CO2(1)] {'==>'}
D + 2E + 3F + 9G + 9.431H + 6I + 17J + K + 92L + 92.3N</p>

			<h4><u><b>가역 반응</b></u></h4>
			<img src="../images/kinetics/11.PNG" width={'900'} alt=''/><br/>
			<ul>
				<li>가역 반응(단일 "="로 표시)의 경우 역방향 속도는 항상 1, "1" 이다.</li>
				<li>그러나 열역학 모드를 사용하는 경우 역방향 속도 상수 kb 는 평형 상수 Kc 및 순방향 속도 상수 kf: kb=kf/Kc를 통해 계산한다.</li>
				<li>가역적 반응의 예는 아래그림 샘플 반응 1로 표시되어 있다.</li>
				<li></li>
				<li></li>
			</ul>

			<h4><u><b>third-body</b></u></h4>
			<p>third-body는 다음 형식을 사용하여 표현될 수 있습니다</p>
			<p className='text1'>Reactants + M[SPECIES (enhancement); SPECIES (enhancement);…] {'==>'} Products</p>
			<img src="../images/kinetics/13.PNG" width={'600'} alt=''/><br/>
			<ul>
				<li>alpha는  third body species 값을 의미한다.</li>
				<li>방정식에 표시된 합계는 기체 species에만 해당된다.</li>
				<li>종 이름 끝에 {'{g}'}가 붙어 있습니다(예: Ar{"{g}"}).</li>
				<li>모든 species이 하나의 phase (예: 기체 또는 액체)에 있는 경우 각 species 이름에 phase  설명자를 추가할 필요가 없다</li>
				<li>M이 계산되면 kf에 이를 곱한다.</li>
				<li>SPECIES 앞에 ("-")를 붙인다.</li>
			</ul>
			<p className='text1'>Reactants+M[-SPECIES(enhancement); -SPECIES(enhancement);…] {'==>'} Products</p>
		</>
	);
}	

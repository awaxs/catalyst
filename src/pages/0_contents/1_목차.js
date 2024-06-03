import React from 'react';
import '../../styles/styles.css'

function A목차() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default A목차;

function MainContents() {
	const title = 'Contents';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			<ol>
				<li><h3>광촉매</h3>
					<ol>
						<li>개요</li>
						<li>반도체의 밴드갭</li>
					</ol>
				</li>
				<li><h3>빛의 흡수</h3>
					<ol>
						<li>태양에너지</li>
						<li>기시광선 구동</li>
						<li>적외선 구동</li>
						<li>Hetero Junction</li>
						<li>Z-Scheme</li>
						<li>Quantum Dot</li>
						<li>Defect Eng.</li>
						<li>Two-dimensional materials</li>
						<li>Dichalcogenides(TMDC)</li>
					</ol>
				</li>
				<li><h3>전자/정공의 생성</h3>
					<ol>
						<li>양자역학과 반도체 광촉매</li>
						<li>밴드갭 에너지의 조정</li>
						<li></li>
						<li></li>
					</ol>
				</li>
			
				<li><h3>전자정공의 트래핑, 재결합, 전달</h3>
					<ol>
						<li>Dichalcogenides(TMDC)</li>
						<li>Two-dimensional materials</li>
						<li>Quantum Dot</li>
						<li>Z-Scheme</li>
						<li>전도성 물질 도핑</li>
					</ol>
				</li>
				<li><h3>기타 효율 증대 신기술</h3>
					<ol>
						<li>janus</li>
						<li>Photothermal</li>
						<li>표면 플라스몬 공명(Plasmon Resonance)</li>
						<li>자기력 이용(Lorentz Force)</li>
						<li>광자 상향 변환 현상(anti-Stokes emissions)</li>
						<li>광자 사태(Photon avalanche)</li>
						<li>titanium nitride (TiN)</li>
						<li>양극산화-나노튜브</li>
						<li>C6 TiO2</li>
						<li>Ti3C2 MXenes</li>
						<li>촉매의 3D printing</li>
						<li>전도성 물질 도핑</li>
					</ol>
				</li>
			
				<li><h3>물질의 산화 환원</h3>
					<ol>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ol>
				</li>
			
				<li><h3>물질의 흡탈착</h3>
					<ol>
						<li>광촉매로 흡착</li>
						<li></li>
						<li>광촉매로부터 탈착</li>
						<li>중간 생성물의 탈착에 대한 용매의 영향</li>
					</ol>
				</li>
				<li><h3>광촉매 반응기 설계</h3>
					<ol>
						<li>광촉매 반응기의 예측 설계</li>
						<li>광촉매 현탁액과 필름의 광학적 특성</li>
						<li>반응기 내부의 방사선장</li>
						<li>광촉매 효율</li>
						<li>운동 모델링</li>
						<li>물질수지 방정식</li>
						<li>큰 광촉매 반응기로 공정 확장</li>
						<li></li>
					</ol>
				</li>
			
				<li><h3>광촉매 반응기 모델링</h3>
					<ol>
						<li>방사선장 평가</li>
						<li>방출 모델(램프)</li>
						<li>태양 방출 모델</li>
						<li>광자 흡수-산란 모델: 광자 흡수의 국부 부피 비율(LVRPA) 평가</li>
						<li>태양광 CPC 및 FPR 원자로에 SFM 적용</li>
						<li>광촉매 반응 역학 모델</li>
						<li>운동 매개변수 최적화</li>
						<li>물에서 유기화합물의 광촉매 분해에 대한 모델</li>
						<li>유기 혼합물의 광분해</li>
						<li></li>
					</ol>
				</li>
			
				<li><h3>참고문헌</h3>
					<ol>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ol>
				</li>
			

			</ol>

		</div>
  )
}

import React from 'react';

function 책목차() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
  )
}
export default 책목차;

function MainContents() {
	const title = 'Book Contents';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			<ol>
				<li>Introduction</li>
				<li>Historical overview
					<a href='https://www.sciencedirect.com/science/article/pii/S0167572908000757#b236'>ref</a></li>
				<li>TiO2 광촉매 의 발전
					<a href='https://pubs.acs.org/doi/10.1021/cr5001892'>ref</a></li>
				<li>광촉매 반응의 메커니즘
					<a href='https://link.springer.com/article/10.1007/s41061-023-00444-7#Sec2'>ref</a></li>
				<li>광촉매 및 광전기화학 전지
					<a href='https://pubs.rsc.org/en/content/articlehtml/2015/cy/c4cy00974f'>ref</a>
					<ol>
						<li>광촉매와 광전기화학전지의 개념과 시험</li>
						<li>광촉매 및 광전극 재료 요구사항
							<ol>
								<li>광흡수 스펙트럼 범위가 넓습니다. </li>
								<li>적합한 밴드 에너지.</li>
								<li>높은 전하 이동도와 긴 전하 캐리어 확산 길이</li>
								<li>강력한 촉매 활성</li>
								<li>좋은 안정성</li>
								<li>지속 가능성과 저렴한 비용</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>재료의 전자 구조를 밝히는 Band structure
					<a href='https://www.materialssquare.com/blog/12-band-structure'>ref</a>
					<ol>
						<li>Band structure의 정의</li>
						<li>Band structure로 알아보는 물질의 전기적 성질 </li>
						<li>Doping에 의해 발생하는 전자 구조의 변화</li>
					</ol>
				</li>
				<li>전하전달 메커니즘: 광촉매의 개념과 관련성
					<a href='https://www.mdpi.com/2073-4344/10/8/901'>ref</a>
					<ol>
						<li>Charge Recombination</li>
						<li>Band Gap and Band Structure Determination</li>
					</ol>
				</li>
				<li>광촉매 공정의 시간 분해 분석: 펨토초에서 마이크로초까지 
					<a href='https://pubs.acs.org/doi/10.1021/cr5001892'>ref</a>
					<ol>
						<li>TiO2 의 암흑공정</li>
						<li>광유도 전하 캐리어 생성과 운명
							<ol>
								<li>전하 캐리어 재결합</li>
								<li>홀 트래핑</li>
								<li>전자 트래핑</li>
							</ol>
						</li>
						<li>TiO 2 표면 에서의 광유도 전자 이동
							<ol>
								<li>TiO 2 표면 에서의 광유도 환원 반응</li>
								<li>홀 트래핑</li>
								<li>TiO 2 표면 에서의 광유도 산화 반응</li>
							</ol>
						</li>
					</ol>
				</li>
			
				<li>전하 이동 메커니즘: 
					<a href='https://www.mdpi.com/2073-4344/10/8/901'>ref</a>
					<ol>
						<li>Sensitization</li>
						<li>직접 Z 방식</li>
						<li>유형 II 이종접합</li>
						<li>Z-scheme 메커니즘</li>
						<li>S-scheme 메커니즘</li>
						<li>기존의 이종접합 </li>
						<li>p–n 이종접합</li>
						<li>표면 이종접합</li>
						<li>직접 Z-구성표 이종접합</li>
						<li>반도체/그래핀 이종접합</li>
					</ol>
				</li>
				<li>나노구조 광촉매
					<a href='https://link.springer.com/article/10.1007/s41061-023-00444-7#Sec2'>ref</a></li>
				<li>NP 합성을 위한 다양한 접근법 
					<a href='https://link.springer.com/article/10.1007/s41061-023-00444-7#Sec2'>ref</a></li>
				<li>TiO2나노막대의 광촉매 활성에 대한 C60의 영향
					<a href=''>ref</a></li>
				<li>페라이트 구조 Ferrites
					<a href='https://www.mdpi.com/2227-9717/11/6/1727'>ref</a></li>
				<li>페라이트 및 그 나노복합체 합성 방법
					<a href='https://www.mdpi.com/2227-9717/11/6/1727'>ref</a></li>
				<li>페라이트 및 나노복합체의 광촉매 활성에 대한 영향 매개변수
					<a href='https://www.mdpi.com/2227-9717/11/6/1727'>ref</a>
					<ol>
						<li>Effect of pH</li>
						<li>Effect of Catalyst Dose</li>
						<li>Effect of Surface Area of Photocatalyst</li>
						<li>Effect of Substrate Concentration</li>
						<li>Effect of Irradiation Intensity and Time</li>
						<li>Effect of Doping</li>
						<li>소멸제의 효과Effect of Quenchers</li>
						<li>광분해 메커니즘</li>
						<li></li>
						<li></li>
						<li></li>
					</ol>
				</li>
				<li>TiO2 광촉매의 새로운 기계적 측면
					<a href='https://pubs.acs.org/doi/10.1021/cr5001892'>ref</a></li>
				<li>TiO2 나노입자 및 나노입자 구조의 합성</li>
				<li>도핑된 TiO2 광촉매의 제조 및 특성</li>
				<li>티타늄 기반 단일 현장 광촉매</li>
				<li>가시광선 반응형 TiO2 박막의 응용: 태양광 물 분해, 태양전지, 광연료전지
					<a href='https://pubs.acs.org/doi/10.1021/cr5001892'>ref</a></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>

				<a href='https://pubs.acs.org/doi/10.1021/acs.chemrev.9b00232'>book2</a>


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
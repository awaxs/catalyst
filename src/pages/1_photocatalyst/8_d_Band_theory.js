import React from 'react';
import '../../styles/styles.css'

function DBandTheory() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default DBandTheory;

function MainContents() {
	const title = 'd_Band_theory';

	return (
		<div>
			<h1 className='title'>{title}</h1>
				
			<hr className='class-1'/>
			<h3>표면 화학</h3>
			<a href='https://www.cheric.org/PDF/NICE/NI27/NI27-5-0557.pdf'>연료전지 성능을 지배하는 촉매의 전자구조</a>
			<ul>
				<li>촉매표면과 유기물 분자사이의 화학적 결합은 촉매표면의 반응성을 이해하는 기본 기초입니다.</li>
				<li>d 밴드 모델은 Bjørk Hammer와 Jens Nørskov가 거의 30년 전에 전이 금속 표면과 흡착질의 상호 작용 경향을 설명하기 위해 제안했다.</li>
				<li>촉매 연구: 활성점 및 반응속도 해석</li>
				<li>촉매활성(활성점)의 본질은 흡착 특성을 결정하는 촉매의 전자구조(핵에 속박된 전자의 에너지상태)에 대한 연구</li>
				<li>전자구조 : 물리학적/양자화학적 개념(역격자, 운동량 공간, 전자 파동 함수)- 고분해능 전자분광(core level이 아닌 valence 부분), X선 흡수 실험(white line 해석) 등이 촉매연구를 위해 흔히 사용되는 이론 및 분석방법으로는 한계가 있다.</li>
				<li>따라서, 촉매의 전자구조 해석 및 활성과의 연관성에 대한 연구는 이론물리학 이용을 이용하게 되었다.</li>
				<li>제일원리 계산결과를 바탕으로 금속의 d-band center model이 촉매의 전자구조 효과를 정리하였다</li>
				<li>전자 에너지 상태밀도(Density of State, DOS)의 변화에 대한 해석에 d-band center model를 이용한다.</li>
				<li>컴퓨터의 발전으로 밀도범함수이론(Density Functional Theory, DFT)의 본격적인 활용에 의해 이론물리 분야에서의 전자구조 해석은 점점 더 그 정밀도를 높여갔다.</li>
				<li>DFT는 다전자 문제의 해결을 위해 오랫동안 사용되어 왔지만 복잡한 계산으로 악명 높았던 Hartree-Fork 방법의 전자 파동함수를 전자 밀도함수로 대체함으로써 종전에는 불가능했던 벌크 재료의 해석을 가능하게 한 획기적인 이론이다. (Prof.Kohn 1998 노벨화학상)</li>
			</ul>

			<h5>제일원리 계산, d-band center position, 흡착세기(Binding Energy)</h5>
			<ul>
				<li>촉매의 d-band center가 페르미 레벨로부터 멀어질수록(ε-εF가 클수록) 흡착이 약해지며,</li>
				<li>가까울수록(ε-εF가 작을수록) 흡착이 강해진다.</li>
				<li>따라서, d-band center position이 흡착세기(Binding Energy, BE)를 결정하는 가장 중요한 파라미터 이다.</li>
				<li>촉매와 물질(산소, 수소 등)의 activation barrier를 줄이기 위해 흡착세기를 줄여야 한다.</li>
				<li>이를 위해서는 d-band center를 페르미 레벨로부터 멀리하는 설계 전략이 필요하다.</li>
				<li>훕착을 약하게 하기 위해서는 전자구조를 조절해야 한다.</li>
				<li>전자구조를 조절방법은 전이금속과의 합금을 형성하는 방법이며 2원계 합금부터 심지어 4원계 합금까지 수많은 연구 결과가 있다.</li>
			</ul>
			
			<h5>표면 화학 및 촉매 작용의 밀도 범함수 이론</h5>
			<ul>
				<li><a href='https://www.pnas.org/doi/10.1073/pnas.1006652108'>표면 화학 및 촉매 작용의 밀도 범함수 이론</a></li>
				<li>표면 화학은 고체, 액체, 기체 사이의 경계에서 발생하며 흡착, 응집의 물리화학적 해석에 이용한다.</li>
				<li>Hammer와 Nørskov의 d-band center 모델은 전이 금속(TM) 표면의 촉매 활성을 이해하고 예측하는 데 널리 사용되고 있다.</li>
			</ul>
			
			<h5>표면 화학의 밀도 함수 이론 계산</h5>
			<ul>
				<li>d-밴드 모델은 전이 금속 표면에서의 결합 형성에 대한 대략적인 설명입니다 .</li>
				<li>흡착 원자가 상태와 전이 금속 표면의 s 및 d 상태 사이의 상호 작용을 설명</li>

				<li><a href='https://www.nature.com/articles/srep35916'>An improved d-band model of the catalytic activity of magnetic transition metal surfaces</a></li>
			</ul>


			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function 제일원리() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 제일원리;

function MainContents() {
	const title = 'First principles(제일원리)';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li>제1원리계산 (ab initio)는 “from the beginning”이라는 뜻의 라틴어에서 유래된 말로, 오직 기본 물리법칙과 상수 및 입자들에 대한 기본적인 정보만으로 물질의 모든 물리적, 화학적 성질을 계산하는 방법을 뜻한다.</li>
				<li><b>제일원리계산(first principles calculation)</b>은 실험적 혹은 경험적 사실에 의존하지 않고 <b><u>양자역학의 기본원리</u></b>를 사용하여 계산한다.</li>
				<li>물질이란 원자핵들이 공간적으로 배열되어 있고 원자핵들 주위에 전자들이 분포되어 이루어진 집합체이다.</li>
				<li>원자핵과 전자, 전자와 전자의 상호작용을 이해애야 원자와 원자간의 결합을, 전자들의 행동을 이해할수 있다.</li>
				<li>물질의 특성이 서로 다른이유는 원자, 전자간의 상호작용이 다르기 때문이다.</li>
				<li>따라서, 물질의 특성이해는 원자, 전자간의 상호작용 특히 전자간의 상호작용 이해해야 한다.</li>
				<li><b>전자 움직임을 기술한 학문체계가 양자역학이다.</b></li>
				<li>양자역학은 몇가지 가설을 통해 널리 알려진 <b>슈뢰딩거 방정식(Schrödinger equation)</b>을 풀어가며 우리가 원하는 물질에 관련된 정보를 얻도록 해준다.</li>
				<li>구조적, 열역학적, 전자기적 및 광학 성질 등을 얻을 수 있는 방법이 제일원리 계산이다.</li>
				<li>파동함수에 적용시키면 우리가 찾고자 하는 전자들의 에너지준위 및 파동함수, 전자밀도 등을 얻게 된다.</li>
				<li>이것을 수학적 형태로 표현하면 슈뢰딩거 방정식이 되며 2차 미분방정식 형태로 표현되어 이것을 풀어 전자들의 에너지준위 및 파동함수, 전자밀도 등을 얻게 되는 것이다. </li>
				<li>이러한 해밀토니안은 전체에너지를 의미하므로 원자핵들 및 전자들의 운동에너지,</li>
				<li>원자핵과 원자핵들 사이의 반발에너지,</li>
				<li>전자들이 원자핵으로부터 느끼는 인력에너지,</li>
				<li>전자와 전자들 사이에 반발에너지로 구성된다.</li>
				<li>수많은 원자들과 전자들을 포함해 구성된 슈뢰딩거 방정식을 풀어간다는 것은</li>
				<li>해밀토니안을 슈뢰딩거 방정식을 풀기 가능한 형태로 어떻게 단순화시키느냐하는 것이다. </li>
				<li>슈뢰딩거 방정식은 전자들만을 고려하여 대폭 단순화되었지만</li>
				<li>전자들간의 상호작용은 여전히 많은 수의 전자를 다루어야 하기 때문에 풀기 어려웠다.</li>
				<li>one electron approximation 일전자 근사법, Hartree 근사법, Hartree-Fock 근사법, <b><u>밀도범함수</u></b>이론으로 나누어진다.</li>
				<li>밀도범함수이론(density functional theory)은 고체를 대상으로 한 양자역학 계산에 사용되어왔다.</li>
				<li></li>
				<li></li>
				<li></li>
				<li><a href="https://m.blog.naver.com/gir5101/40108730315" target='_blank' rel="">제1원리계산과 광촉매설계 (3/3)</a></li>
			</ul>

			<h4>VASP (Vienna Ab initio Simulation Package)를 이용한 계산</h4>
			<h6><a href="https://iopscience.iop.org/article/10.1088/2053-1591/ac9779" target='_blank' rel="">MoS2/TiO2 van der Waals heterostructures for promising photocatalytic performance: a first-principles study</a></h6>

				<ui>
					<li>광촉매의 설계를 위하여 사용한 전산모사 방법은 밀도 범함수을 이용한 양자 역학적 전자구조 계산</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ui>
				<h4>Burai로 Quantum Espresso 계산 Windows</h4>
				<ui>
					<li><a href="https://www.youtube.com/watch?v=iJSRwenStfs" target='_blank' rel="">Youtube Burai로 Quantum Espresso 계산 Windows에서 돌리기</a></li>
					<li><a href="https://burai.readthedocs.io/en/latest/" target='_blank' rel="">BURAI</a></li>
					<li>Quantum ESPRESSO
					<img src="../images/photocatalyst/제일원리_1.png" width="auto"  alt=''></img>
					</li>
				</ui>

				<ui>
					<p></p>
					<img src="../images/analysis/6.PNG" width="auto"  alt=''></img>
					<li>(a)MoS2/TiO2(100) 헤테로구조의 밴드 구조</li>
					<li>(b)MoS2/TiO2(001) 헤테로구조 의 밴드 구조:빨간색과 파란색은 TiO2와 MoS2 를 나타낸다. </li>
					<li>(c) MoS2/TiO2(100) 헤테로구조 의 밴드 정렬에 대한 도식적 플롯 . </li>
					<li>(d) MoS2/TiO2(001) 헤테로구조 의 밴드 정렬에 대한 도식적 플롯 .</li>
					<li></li>
				</ui>
				<ui>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ui>
			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>


			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>





			<h3>참고문헌</h3>
			<ol>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}


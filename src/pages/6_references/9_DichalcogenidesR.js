import React from 'react';
import '../../styles/styles.css'

function DichalcogenidesR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default DichalcogenidesR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>9. Dichalcogenides(TMDC)</h3>
			<ol>
				<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7353444/">MoS2에 대한 내용 Transition Metal Dichalcogenides for the Application</a></li>
				<li><a href="https://iopscience.iop.org/article/10.1088/2515-7639/ab7c57">야누스 전이 금속 디칼 코게 나이드 : 광촉매 물 분리를위한 우수한 플랫폼</a></li>
				<li><a href="https://pubs.acs.org/doi/full/10.1021/acsnano.0c06783">울산 과학 기술원: 효율적인 전기 화학적 활성을 향한 액상 합성을 통한 전이 금속 Dichalcogenides 에서 결함 유발 원자 도핑</a></li>
			</ol>

		</div>
	)
}

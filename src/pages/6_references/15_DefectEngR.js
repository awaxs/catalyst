import React from 'react';
import '../../styles/styles.css'

function DefectEngR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default DefectEngR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>15. 결함 공학(Defect Engineering)</h3>
			<ol>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/ta/d0ta04297h#divAbstract" target='_blank' rel="">2020 광촉매의 결함 공학 : 형성, 화학, 광전자 공학 및 인터페이스10</a></li>
						
				<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201606434" target='_blank' rel="">2 차원 재료의 원자 결함 : 단일 원자 분광학에서 광전자 공학, 나노 자기 및 촉매 작용에 이르기까지</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S2211285518306207" target='_blank' rel="">광촉매 결함 공학</a></li>
						
			</ol>

		</div>
	)
}


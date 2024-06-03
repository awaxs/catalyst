import React from 'react';
import '../../styles/styles.css'

function 트래핑재결합전달() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 트래핑재결합전달;

function MainContents() {
	const title = 'Charge carrier trapping, recombination and transfer';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>


			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0920586118315177#bib0385'>TiO 2 광촉매 작용 중 전하 캐리어 트래핑, 재결합 및 전달 : 개요</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}

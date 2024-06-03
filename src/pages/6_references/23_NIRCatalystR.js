import React from 'react';
import '../../styles/styles.css'

function NIRCatalystR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default NIRCatalystR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>24. 근적외선 광 구동 광촉매</h3>
			<ol>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/adma.202307759'>광자 여기에 중점을 둔 근적외선 광 구동 광촉매: 개념, 재료 및 응용</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>

		</div>
	)
}


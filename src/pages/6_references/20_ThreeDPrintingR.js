import React from 'react';
import '../../styles/styles.css'

function ThreeDPrintingR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default ThreeDPrintingR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>20. 촉매의 3D printing</h3>
			<ul>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ul>

		</div>
	)
}


import React from 'react';
import '../../styles/styles.css'

function MetaMaterialsR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MetaMaterialsR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>25. Meta Materials</h3>
			<ul>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ul>

		</div>
	)
}

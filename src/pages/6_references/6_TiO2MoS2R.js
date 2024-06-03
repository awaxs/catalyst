import React from 'react';
import '../../styles/styles.css'

function TiO2MoS2R() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default TiO2MoS2R;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>5. 페로브스카이트</h3>
			<ul>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ul>

		</div>
	)
}


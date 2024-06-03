import React from 'react';
import '../../styles/styles.css'

function UpConversionR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default UpConversionR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>광자 상향 변환 Photon Up-Conversion(anti-Stokes emissions)</h3>
			<ol>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169433219336566">Nb, Yb, Tm -Visible/near-infrared upconversion nanoparticles/g-C3N4</a></li>
			</ol>

		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function XPS() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default XPS

function MainContents() {
	const title = 'XPS(X-ray Photoelectron Spectroscopy)';

  return (
    <>
      <h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

      <p>------------------------------------------------------------------------</p>
      <h4>XPS</h4>
      
      <p><u><b>X선을 이용한 전자구조 측정</b></u></p>
      <img src="../images/analysis/10.PNG" width={'auto'} alt=''/>

      <p><u><b>XPS spectra of white and black TiO2.</b></u></p>
      <img src="../images/analysis/11.PNG" width={'auto'} alt=''/>
      <ul>
        <li>(a) 635 eV X선 조명 3시간 전후의 백색 및 수소화된 흑색 TiO2의 Ti 2p XPS 스펙트럼.</li>
        <li>(b) 635 eV X선 조명 3시간 전후의 백색 및 수소화된 흑색 TiO2의 가전자대(VB) XPS 스펙트럼.</li>
      </ul>
      <img src="../images/analysis/12.PNG" width={'auto'} alt=''/>
      <br/>
			<a href="https://www.nature.com/articles/srep01510" target='_blank' rel="">Properties of Disorder-Engineered Black Titanium Dioxide Nanoparticles through Hydrogenation</a>
			<br/>
      <img src="../images/analysis/13.PNG" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/14.PNG" width={'auto'} alt=''/>
      <br/>
			<a href="https://www.sciencedirect.com/science/article/pii/S0926337320301508" target='_blank' rel="">Role of titanium dioxide (TiO2) structural design/morphology in photocatalytic air purification</a>
			<br/>
			<p>------------------------------------------------------------------------</p>
			<h4>XPS : MoS3</h4>

			<p>------------------------------------------------------------------------</p>
			<h4>XPS : TiO2/MoS3</h4>


    </>
  );
}	

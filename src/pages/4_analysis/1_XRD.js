import React from 'react';
import '../../styles/styles.css'

function XRD() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default XRD

function MainContents() {
	const title = 'Structural Phase Analysis';

  return (
    <>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<p>------------------------------------------------------------------------</p>
			<h4>XRD</h4>
			<p>XRD analysis분석 조건은 Bruker make diffractometer, Cu-Kα X-rays of wavelength (λ)=1.5406 Å
			를 사용하였고, 10°~70°의 2θ 범위에 대해 0.1972°간격으로 데이터를 수집한다.
			</p>

			<p>------------------------------------------------------------------------</p>
			<h4>XRD : TiO2</h4>
			<p>TiO2는 anatase, brookite, rutile form이 있다. 이들 phases은 
			high refractive index(anatase = 2.488, rutile = 2.609, brookite = 2.583), 
			가시광선 및 근적외선 스펙트럼 영역에서 낮은 absorption 및 낮은 dispersion, 
			높은 화학적 및 열적 안정성을 특징으로 합니다.</p>

			<a href="https://arxiv.org/ftp/arxiv/papers/1307/1307.1091.pdf" target='_blank' rel="">Titanium dioxide(TiO2) Nanoparticles-XRD Analyses–An Insight </a>
			<br/>
			<img src="../images/analysis/7.PNG" width={'auto'} alt=''/>
			<br/>
			<a href="https://pubs.rsc.org/en/content/articlelanding/2015/ee/c5ee01398d" target='_blank' rel="">Achieving overall water splitting using titanium dioxide-based photocatalysts of different phases</a>
			<br/>

			<p>------------------------------------------------------------------------</p>
			<h4>TiO2 Nanotubes</h4>
			<a href='https://www.nature.com/articles/s41598-018-29247-3' target='_blank' rel="">Evolution of rough-surface geometry and crystalline structures of aligned TiO2 nanotubes for photoelectrochemical water splitting</a>
			<img src="../images/analysis/8.PNG" width={'auto'} alt=''/>

			<p>------------------------------------------------------------------------</p>
			<h4>XRD : MoS2</h4>
			<img src="../images/analysis/9.PNG" width={'auto'} alt=''/>
			<ul>
				<li>2θ 14°, 33°, 40°, 50° 및 59°에서 Hexoganal 위상의 (002), (100), (103), (105) 및 (110) 평면이 보인다.</li>
				<li>박리된 MoS2와 변형된 MoS2에 대한 2θ 값에는 큰 변화가 없다. </li>
				<li>그러나 MoS2의 특징적인 피크(002)의 강도는 어느 정도 감소한 것으로 보이며</li>
				<li>나머지 피크 강도(100), (103),(105) 및 (110)은 증가 한다.</li>
			</ul>
			
			
			 
			<a href='https://www.ijrte.org/wp-content/uploads/papers/v8i2S3/B10270782S319.pdf' target='_blank' rel="">Evolution</a>


			<p>------------------------------------------------------------------------</p>
			<h4>XRD : MoS2/TiO2</h4>

			<a href='https://doi.org/10.1021/acs.jpcc.1c01922'>Controlled Loading of MoS2 on Hierarchical Porous TiO2 for Enhanced Photocatalytic Hydrogen Evolution </a>
			<br/>
			<ol>
				<li>XRD회절 피크(101),(103),(200),(105),(211),(204): 2θ값 25.3°, 38.1°, 48.1°, 54.1°, 55.3°, 62.9°</li>
				<li>MoS2 의 소수층 나노시트: (002),(100),(110) 14.1, 33.5, 59.3°</li>
				<li>MoS2의 로딩증가:회절 피크 강도 비례적으로 증가, 반면 MoS2 (002) 평면은 감소</li>
			</ol>
			<img src="../images/analysis/2.jpeg" width={'900'} alt=''/>
			
			<p>보충자료 S1 내용</p>
			<ol>
				<li>generator voltage of 40kV and current 30 mA using Cu-Kα radiation (λ = 1.5406Å).</li>
				<li>scanned in the range of 2θ = 10-80° with the scan rate 1s/step</li>
				<li>MoS2의 로딩증가:회절 피크 강도 비례적으로 증가, 반면 MoS2 (002) 평면은 감소</li>
			</ol>

			<p>------------------------------------------------------------------------</p>
			<br/>
			<a href='https://www.mdpi.com/2079-4991/8/9/666' target='_blank' rel="">TiO2 Nanotubes/Ag/MoS2 Meshy Photoelectrode with Excellent Photoelectrocatalytic Degradation Activity for Tetracycline Hydrochloride </a>
			<ol>
				<li>순수한 TiO2 회절 피크 (101),(004),(200),(105),(211),(204),(220),(301)</li>
				<li>아나타제 25.3°에 위치한 주요 피크 (101)</li>
				<li>아나타제 TiO 2 의 열역학적으로 가장 안정적인 결정면</li>
			</ol>
			<img src="../images/analysis/3.jpg" width={'auto'} alt=''/>
			
			<p>------------------------------------------------------------------------</p>
			<br/>
			<a href="https://www.youtube.com/@user-fo8cq1xe8b" target='_blank' rel="">XPS 그래프 그리는 법 유튜브</a>
					
		</>

  );
}	

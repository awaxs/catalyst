import React from 'react';
import '../../styles/styles.css'

function KintecusRef() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default KintecusRef;

function Contents() {
	const title = 'Kinetecus';
  return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
      
        <h5><b><u>A. Kinetecus</u></b></h5>	
        <ol>
          <li><a href="http://www.kinetic.com/user.htm" target='_blank' rel="">600개 논문 :Kinetecus, Cites-Papers 로 이동</a></li>
          
          <li><a href="https://www.mdpi.com/2073-4441/14/18/2811" target='_blank' rel="">UV/Peroxydisulfate 공정에서 미세 오염물질의 자유 라디칼 시너지 분해의 동역학, 이론적 모델 및 메커니즘에 대한 통찰 </a></li>
          <li>
            <ul>
              <li><a href="https://pubs.acs.org/doi/10.1021/acs.est.0c02698" target='_blank' rel="">GIST : 논문</a></li>
              <li><a href="../images/kinetics/GIST.pdf" target='_blank' rel="">GIST 참고문서 : GIST.pdf</a></li>
              <li><a href="../images/kinetics/GIST.hwp" target='_blank' rel="">GIST 참고문서 : GIST.hwp</a></li>
              <li><a href="../images/kinetics/GIST.xlsm" target='_blank' rel="">GIST kinetics Excel file</a></li>
            </ul>
          </li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S2666821121001095" target='_blank' rel="">Self-built field induces surface electrons to reduce H+ to atomic H* for photocatalytic hydrodechlorination of 2-chlorophenols</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S1381116916300115" target='_blank' rel="">Enhanced visible-light photocatalytic activity of a TiO2 hydrosol assisted by H2O2: Surface complexation and kinetic modeling</a></li>
          
          <li><a href="" target='_blank' rel=""></a></li>
          <li><a href="" target='_blank' rel=""></a></li>
          
        </ol>	
      <h5><b><u>B. Chemical Reference Data</u></b></h5>	
      <ul>
        <li><a href="../images/kinetics/물질별 반응 속도상수 (방사선연구소).pdf" target='_blank' rel="">Journal of Physical and Chemical Reference Data 17, 513 (1988);</a></li>
        <li><a href="../images/kinetics/Reactivity of the Hydroxyl Radical in Aqueous Solutions, 1973.pdf" target='_blank' rel="">Reactivity of the Hydroxyl Radical in Aqueous Solutions, 1973.pdf</a></li>
      </ul>
		</>
	);
}	


import React from 'react';
import '../../styles/styles.css'

function 계산화학() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default 계산화학

function MainContents() {
  const title = '촉매 계산과학(DFT, VESTA)';
  return (
		<>
      <h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

      <h5>++++ 촉매 계산과학(DFT, VESTA) ++++</h5>

        <h5><b><u>A. VESTA</u></b></h5>	
        <ol>
          <li><a href="https://jp-minerals.org/vesta/en/download.html" target='_blank' rel="">VESTA Home page(download)</a></li>
          <li><a href="https://next-gen.materialsproject.org/materials" target='_blank' rel="">**** Materials Explorer *****</a></li>
          <li><a href="http://rruff.geo.arizona.edu/AMS/periodictable.php" target='_blank' rel="">American Mineralogist Crystal Structure Database(미국 광물결정 구조데이터베이스)</a></li>
          <li><a href="http://crystallography.net/cod/">Crystallography Open Database</a></li>


        </ol>	

		</>
	);
}	

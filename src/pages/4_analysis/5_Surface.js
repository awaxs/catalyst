import React from 'react';
import '../../styles/styles.css'

function Surface() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default Surface

function MainContents() {
	const title = 'Surface Analysis(BET, BJH)';

  return (
    <>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

      <p>------------------------------------------------------------------------</p>
      <h5>22</h5>
      <p></p>
      <p></p><a href='https://doi.org/10.1021/acs.jpcc.1c01922' target='_blank' rel="">Controlled Loading of MoS2 on Hierarchical Porous TiO2 for Enhanced Photocatalytic Hydrogen Evolution </a>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <img src="../images/analysis/8.gif" width={'auto'} alt=''/>


    </>

  );
}	
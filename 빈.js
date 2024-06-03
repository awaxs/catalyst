import React from 'react';
import '../../styles/styles.css'

function 목차() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default 목차

function MainContents() {
	const title = 'Contents';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>


		</div>
  )
}

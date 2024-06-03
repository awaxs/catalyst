import React from 'react';
import '../../styles/styles.css'

function FitdataDescription() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default FitdataDescription;

function Contents() {
	const title = 'The Fitdata Description Spreadsheet';

	return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<hr className='class-1'/>

			
		</>
	);
}	

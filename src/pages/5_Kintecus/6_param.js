import React from 'react';
import '../../styles/styles.css'

function ParamDescription() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default ParamDescription;

function Contents() {
	const title = 'The Param Description Spreadsheet';

	return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<hr className='class-1'/>

		</>
	);
}	

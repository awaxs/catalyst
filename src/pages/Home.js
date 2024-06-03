import React from 'react';

import '../styles/styles.css'
function Home() {
  return (
    <>
    <h1 className='home'>Environmental Catalyst</h1>
    <MainContents />
    </>
  );
}
export default Home;

function MainContents() {
	
	const title = 'Home';

  return (
    <>
      <h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
      
    </>
  );
}	
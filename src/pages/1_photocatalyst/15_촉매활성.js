import React from 'react';
import '../../styles/styles.css'

function 촉매활성() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 촉매활성;

function MainContents() {
	const title = '촉매활성';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			<a href='https://pubs.acs.org/doi/10.1021/ja5051555'>혼합 금속 산화물 촉매에 대한 프로펜 산화에 대한 촉매 활성의 설명자로서의 밴드갭 에너지</a>


			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}

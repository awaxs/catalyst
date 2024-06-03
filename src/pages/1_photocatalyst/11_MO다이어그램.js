import React from 'react';
import '../../styles/styles.css'

function MO다이어그램() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MO다이어그램;

function MainContents() {
	const title = 'Molecular orbital diagram';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			<h3>Molecular orbital diagram</h3>
			<ul>
				<li>원자가 결합하여 분자를 만들어지면, 원자의 전자수의 원자 궤도가 결합하여 동일한 수의 분자 궤도를 형성한다는 것입니다 .</li>
				<li>Molecular orbital diagram을 알아야 분자의 물리적 성절에 대해 설명할 수 있다.</li>
				<li>H2O의 Molecular orbital diagram
				<br/><img src="../images/photocatalyst/MO다이어그램_1.jpg" width="900" alt=''/><br/>
				</li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://en.wikipedia.org/wiki/Molecular_orbital_diagram'>wikipedia, Molecular orbital diagram</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}

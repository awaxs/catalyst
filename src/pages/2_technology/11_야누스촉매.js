import React from 'react';
import '../../styles/styles.css'

function 야누스촉매() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 야누스촉매;

function MainContents() {
	const title = 'Janus Catalyst(Particles)';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 서론</h3>
			<ul>
				<li>야누스 입자는 두 개 이상의 서로 다른 물리적 또는 화학적 기능을 반대편에 결합한 독특한 입자(계면활성제 분자처럼) 
					그룹을 나타냅니다</li>
				<li>경질(무기), 연질(유기 또는 고분자) 및 하이브리드(유기/무기) JP의 세 가지 하위 그룹으로 나눌 수 있습니다.</li>
				<li><img src="../images/photocatalyst/janus_1.jpg" width="300"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>2. 야누스 입자의 환경적 적용 측면</h3>
			<ul>
				<li>감지 및 모니터링(금속이온 탐지, DNA 검출, 박테리아 검출, 독소 검출)</li>
				<li>물 오염 제거(유기 성분의 분해, 오일 제거 및 회수, 금속이온 제거, 박테리아 제거, 미세플라스틱 제거)</li>
				<li>수소 생산 및 물 분해</li>
				<li>TiO 2 -Fe 마이크로모터</li>
				<li><img src="../images/photocatalyst/janus_2.jpg" width="600"  alt=''></img><br/></li>
				<li><img src="../images/photocatalyst/janus_3.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>3. 미래 전망과 과제</h3>
			<ul>
				<li>다양한 오염물질을 감지하고 제거할 수 있는 광범위한 가능성을 제공</li>
				<li>자체 추진형 Janus 마이크로, 나노 모터는 작동 거리, 작동속도로 보면 응용 분야 확대 가능</li>
			</ul>

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://link.springer.com/article/10.1007/s00396-020-04601-y'>야누스 입자: 컨셉부터 친환경 소재, 지속 가능한 적용까지</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}


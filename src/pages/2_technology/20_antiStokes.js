import React from 'react';
import '../../styles/styles.css'

function AntiStokes() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default AntiStokes;

function MainContents() {
	const title = 'Anti Stokes';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 빛의 대표적인 현상</h3>
			<ul>
				<li>투과(Transmission), 흡수(Adsorption), 산란(scattering), 반사(Reflection)</li>
				<li><img src="../images/photocatalyst/antiStokes_1.jpg" width="600"  alt=''></img><br/></li>
				<li>산란은 빛의 파장보다 입자의 크기가 작을 때 일어난다.</li>
				<li>파란하늘은 레일리 산란(Rayleigh scattering) 때문이다</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. Rayleigh, Raman scattering</h3>
			<ul>
				<li>Rayleigh scattering(레일리 산란)​: 전자기파가 파장보다 매우 작은 입자에 의하여 탄성 산란되는 현상을 말합니다.</li>
				<li>레일리 산란은 산란 전 후 빛의 파장의 변화가 없다.</li>
				<li>Raman scattering(라만 산란)은 산란 전 후의 빛의 파장이 서로 다르다.</li>
				<li><img src="../images/photocatalyst/antiStokes_2.jpg" width="600"  alt=''></img><br/></li>
			</ul>
	
			<hr className='class-1'/>
			<h3>3. 스톡스 시프트(Stokes Sheft)</h3>
			<ul>
				<li>빛을 훕수 방출하는 광정에서 흡수에너지 &gt; 방출에너지 인 경우(즉, 흡수파장은 짧고 방출 파장은 길어진다)</li>
				<li><img src="../images/photocatalyst/antiStokes_3.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>4. 반스토크스 이동(anti-Stokes Shift)</h3>
			<ul>
				<li>흡수에너지 &lt; 방출에너지 갖는 경우(즉, 흡수파장은 짧고 방출 파장은 짧아진다)</li>
				<li>에너지가 증가한다. 청색 천이 발생</li>
			</ul>

			<hr className='class-1'/>
			<h3>5. 반스토크스 방출(anti-Stokes emissions)</h3>
			<ul>
				<li>두 개 이상의 광자가 순차적으로 흡수되어 여기 파장보다 짧은 파장 의 빛이 방출 되는 과정입니다 .</li>
				<li>예를 들면 적외선을 가시 광선 으로 변환하는 것입니다 .</li>
				<li><img src="../images/photocatalyst/antiStokes_4.jpg" width="600"  alt=''></img><br/></li>
				<li>반스토크스 방출은 광자 상향 변환(Photon upconversion) 현상으로 나타난다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://link.springer.com/article/10.1186/s11671-024-03991-0'>국부적인 표면 플라즈몬 공명을 통해 유도되는 여기 전력 반응형 반스토크 방출 파장 전환 및 에너지 절약 개발</a></li>
				<li><a href='https://m.blog.naver.com/qkrdlswns34/223015859617'>Raman vs. FT-IR</a></li>
				<li><a href='https://en.wikipedia.org/wiki/Photon_upconversion'>광자 상향 변환</a></li>
			</ol>
			


		</div>
	)
}


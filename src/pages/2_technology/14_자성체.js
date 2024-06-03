import React from 'react';
import '../../styles/styles.css'

function 자성체() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 자성체;

function MainContents() {
	const title = '자성체';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 자기력 이용(Lorentz Force)</h3>
			<ul>
				<li>로런츠 힘(Lorentz force)은 전하를 띤 물체가 전자기장 안에서 받는 힘이다. 물체는 전기장 안에서 qE의 힘을 받고, 자기장 안에서 qv x B의 힘을 받는다. 로런츠 힘은 이 두 힘의 합이다.</li>
				<li>즉, F = q (E + v x B)</li>
				<li>여기서 E는 전기장, B는 자기장이고, q 입자의 전하량이며, v는 입자의 속도이다. 또한 x 는 벡터곱을 뜻한다.</li>
				<li>따라서 양전하를 띤 입자는 전기장 안에서 가속되며, 자기장을 통과할 때에는 벡터곱 때문에, 오른손 법칙에 따라 나선형을 그리며 움직이게 된다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>광촉매 시스템에서 로렌츠 힘을 통한 광유도 전하 재결합 억제</h3>
			<ul>
				<li>광촉매 공정에 자기장이 작용한다면 전자와 정공은 반대 전하로 인해 반대 힘을 받게되고 반대 방향으로 이동하게게 될 것이다. </li>
				<li>이 메커니즘을 이영한다면 자기장에 의해 전하 재결합을 억제할 수 있다고, 전하 분리에 대한 새로운 사고 방식으로 생각할 수 있다.</li>
				<li>광촉매 반응기 아래에만 영구 자석을 배치함으로써 MO의 광촉매 분해가 26% 개선되었다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/advs.201901244'>자성체를 이용 전자정공 재결합 방지</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0926337320308353'>Applied Catalysis B: Environmental 2021</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S2468519419301983'>자성촉매 review</a></li>
			</ol>
			



		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function 양자점() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 양자점;

function MainContents() {
	const title = 'Quantum Dot(양자점)';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<ul>
				<li>결정형 고체의 크기가 작아지면 에너지 준위가 매우 좁아지는데,</li>
				<li>나노로 되면 밴드가 아닌 단일한 에너지를 갖는 에너지 준위들로 바뀌는 "양자화(Quantization)"에 이르게 된다.</li>
				<li>나노 입자가 다량 섞여 있으면 벌크 형태와 마찬가지로 넓은 범위의 빛을 흡수 또는 방출하게 된다.</li>
				<li>고체 결정 내에서는 파울리의 배타원리에 따라 에너지 준위들이 불연속적으로 분리된다.</li>
				<li>많은 원자들이 결합을 이루기 때문에 에너지 준위가 연속적인 띠처럼 보이게 된다. 이를 에너지 밴드라고 한다.</li>
				<li>결정을 이루는 원자의 개수가 매우 작아지게 되면 밴드의 두께가 달라지게 된다.</li>
				<li>VB와 CV 에너지 준위 간격를 조절함에 따라 에너지를 선택적으로 흡수 또는 방출하게 된다.</li>
				<li>따라서, 물질의 종류를 달리하는 것이 아닌 입자의 크기만을 설정하여 방출, 흡수 가능한 빛의 진동수, 파장을 효율적으로 바꿀 수 있다.</li>
			</ul>


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

import React from 'react';
import '../../styles/styles.css'

function Energy() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default Energy;

function MainContents() {
	const title = 'A21_energy';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			
			<div>
			<ul>
				<h5>++++ water split reaction ++++</h5>
				<li>잉여 전력을 화학 에너지로 전환하는 유망한 방법</li>
				<h5>산화환원반응(redox reaction)</h5>
					<ul>
						<li>HER(수소 발생 반응,환원 반응) 4H<sup>+</sup> + 4e<sup>-</sup>→ 2H<sub>2</sub></li>
						<li>OER(산소 발생 반응,산화 반응) 2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup>  + 4e<sup>-</sup> </li>
					</ul>
				<h5>산화환원반응(redox reaction)</h5>
					<ul>
						<li>4개의 전자를 이동해야 하므로 더 복잡한 반응</li>
						<li>반응을 억제하는 큰 활성화 장벽 존재</li>
						<li>즉, 과전압의 필요 발생</li>
					</ul>
				<li></li>
				<li></li>
			</ul>
				<h5>++++ 물 분해 반응 ++++</h5>
					<ol>
						<li><a href="https://encyclopedia.pub/entry/32575" target='_blank' rel="">물 분해 반응의 기본</a></li>
						<li><a href="https://www.nature.com/articles/s41467-019-12385-1" target='_blank' rel="">실플랜트, 무스케빈저, 270°C: 고온에서 탁월한 양자 효율을 보이는 MgO(111)에서 N-TiO 2 에 의한 광촉매 물 분해</a></li>
						<li><img src="../images/energy/1.PNG" width={'auto'} alt=''/></li>

					</ol>
					
				<h5>++++ Water Splitting, 산화환원반응(redox reaction) ++++</h5>
					<ol>
						<li><a href="https://pubs.acs.org/doi/10.1021/acscatal.7b02662" target='_blank' rel="">광촉매 물 분해: 광촉매 설계에 대한 정량적 접근 방식</a></li>
						<li><a href="https://pubs.rsc.org/en/content/articlelanding/2007/cc/b711747g" target='_blank' rel="">A photocatalytic water splitting device for separate hydrogen and oxygen evolution</a></li>

						<li><a href="https://pubs.acs.org/doi/10.1021/acsomega.8b03271" target='_blank' rel="">극성 니오브산 리튬 표면에서의 물 분해 반응</a></li>


					</ol>
				<h5>++++ Hydrogen evolution reaction(HER) ++++</h5>
					<ol>
						<li><a href="https://pubs.rsc.org/en/content/articlelanding/2019/sc/c9sc03831k" target='_blank' rel="">수소 발생 반응: 물질에서 계면 설명자까지</a></li>
						<li><a href="https://pubs.acs.org/doi/10.1021/acscatal.6b01211" target='_blank' rel="">Mechanism of Hydrogen Evolution Reaction on 1T-MoS2 from First Principles</a></li>
						<li><a href="https://pubs.acs.org/doi/10.1021/jacs.8b10016" target='_blank' rel="">Reaction Mechanism for the Hydrogen Evolution Reaction on the Basal Plane Sulfur Vacancy Site of MoS2 Using Grand Canonical Potential Kinetics</a></li>


					</ol>
				<h5>++++ Artificial Photosynthesis ++++</h5>
					<ol>
						<li><a href="https://ieeexplore.ieee.org/document/6020873" target='_blank' rel="">Linbo3 / TiO2- 인공 광합성을 위한 신소재</a></li>


					</ol>


			</div>

		</div>
	)
}

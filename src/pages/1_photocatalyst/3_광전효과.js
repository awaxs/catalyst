import React from 'react';
import '../../styles/styles.css'

function 광전효과() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 광전효과;

function MainContents() {
	const title = '광전 효과(Photoelectric effect)';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<h3>광전 효과(Photoelectric effect)</h3>

			<ul>
				<li>빛의 입자설 증명</li>
				<li>금속에 빛을 비추면 표면에서 전자가 튀어나오는 현상이다.</li>
				<li>에너지를 얻은 전자는 원자핵으로부터 멀어지는 궤도로 올라간다.</li>
				<li>에너지를 방출하면 다시 가까운 궤도로 내려온다.</li>
				<li>원자핵으로부터 거리가 먼 전자들(최외각 전자)은 약한 에너지만 받아도 바로 궤도를 이탈하여 자유전자가 된다.</li>
				<li>도체는 자유전자가 많으며, 부도체는 자유전자가 적다.</li>
				<li>전자는 원자핵의 양전하에 의한 전기력에 의해 속박(궤도)되어 있다.</li>
				<li>빛을 비추면(광자 충돌) 광자의 운동에너지를 전자가 얻게 된다.</li>
				<li>전자가 확보한 에너지가 일정 수준을 넘어가면, 속박(궤도)를 벗어나서 튀어나오게 된다.</li>
			</ul>

			<br/><br/><img src="../images/photocatalyst/광전효과_1.png" width="600" alt=''/>
			<img src="../images/photocatalyst/광전효과_2.png" width="600" alt=''/>
			<img src="../images/photocatalyst/광전효과_3.png" width="600" alt=''/>
			<img src="../images/photocatalyst/광전효과_4.jpg" width="600" alt=''/><br/><br/>

			<ul>
				<li>지구는 지구의 대기 위쪽에서 174PW(1천조W, 10^15)의 태양 복사를 받는다.</li>
				<li>광촉매는 고전적인 열촉매반응과는 다르게 빛과 열에 모두 반응한다는 특징이 있다.</li>
				<li>빛이 흡수되면 광촉매(반도체)의 가전자대(VB) 또는 전도대(CB)에서 전자 전이를 자극합니다.</li>
				<li>생성된 전자와 정공은 후속 재결합을 거쳐 수용체로 전달됩니다.</li>
				<li>그림의 1B는 밴드 전위, 전자 수용체의 환원 전위, 정공 수용체의 산화 전위를 보여줍니다.</li>
				<li>음의 CB 전위와 양의 정공 전위가 높을수록 전자와 정공이 환원 및 산화 효과를 일으킬 수 있습니다.</li>
				<li>물에서 수소와 산소가 발생하는 것과 같은 것입니다</li>
				<li><a href='https://www.youtube.com/watch?v=sSo005x9hCc'>Artificial Leaf Generates Electricity From Light</a></li>
			</ul>
			<br/><br/><img src="../images/photocatalyst/광전효과_5.jpg" width="300" alt=''/><br/><br/>

			<ul>
				<li>반도체 물질의 CB 와 VB 사이에는 에너지 밴드 갭이 존재하며 , 이 갭은 물질이 흡수할 수 있는 빛의 파장에 영향을 미칩니다.</li>
				<li>따라서 밴드 조절은 재료가 빛에 노출되는 정도를 결정하는 데 중요한 역할을 합니다.</li>
				<li></li>
				<li></li>
				<li></li>
				<li>(I)전자-정공 쌍을 생성하는 광 흡수</li>
				<li>(II)여기된 전하의 분리</li>
				<li>(III)광촉매 표면으로 전자와 정공의 이동</li>
				<li>(IV)산화환원 반응을 위한 표면 전하의 활용</li>
				<li>세 번째 단계에서는 전자-정공 쌍의 상당 부분이 표면으로 가는 도중이나 표면 부위에서 재결합 하고, 이로 인해 광반응 효율이 저하된다.</li>
			</ul>



			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://pubs.acs.org/doi/10.1021/acsaem.8b01345'>Photocatalysis: From Fundamental Principles to Materials and Applications</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/acsomega.0c02145'>반도체 광촉매의 기본 원리에 대한 새로운 통찰력</a></li>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/aenm.201700841'>Photocatalysis: Basic Principles, Diverse Forms of Implementations and Emerging Scientific Opportunities</a></li>
			</ol>
			



		</div>
	)
}


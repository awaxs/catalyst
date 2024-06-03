import React from 'react';
import '../../styles/styles.css'

function 태양에너지() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 태양에너지;

function MainContents() {
	const title = '태양에너지';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<h3>태양에너지를 이용한 광합성 및 광촉매</h3>
			<br/><br/><img src="../images/photocatalyst/태양에너지_1.jpg" width="600" alt=''/><br/><br/>

			<ul>
				
				<li>지구는 지구의 대기 위쪽에서 174PW(1천조W, 10^15)의 태양 복사를 받는다.</li>
				<li>약 30%가 우주로 반사되고 70%가 대기, 바다, 육지에 흡수된다.</li>
				<li>지구 표면에 도달한 태양에너지의 5%가 자외선, 43%가 가시광선, 52%가 적외선이다.</li>
				<li>우리가 태양에너지를 효과적으로 이용하기 위해서는 가시광선 및 적외선을 이용하는 기술을 개발해야만 한다.</li>
			</ul>

			<br/><br/><img src="../images/photocatalyst/태양에너지_2.jpg" width="600" alt=''/><br/><br/>

			<ul>
				<li>광촉매는 자연적인 광합성에서 영감을 얻었습니다</li>
				<li>빛을 흡수로부터 시작되는 프로세스는 "Z-방식"이라고 하며, 여기서 가장 중요한 두 개의 광 시스템(PSI 및 PSII)으로 구분한다.</li>
				<li>빛을 받으면 PSII의 엽록소는 최대 파장이 680nm(P680)인 광자를 흡수하여 에너지를 PSII로 전달합니다.</li>
				<li>그런 다음 에너지는 H2O에서 전자를 추출하는 데 사용되어 물 산화 촉매(WOC)에 의해 O2를 생성한다.</li>
				<li>전자는 분리되어 PSI로 전달되며, 여기서 엽록소는 최대 파장 700nm(P700)의 광자를 흡수한다.</li>
				<li>새로 흡수된 광자의 에너지는 PSII에서 전달된 전자를 더욱 자극하여 니코틴아미드 아데닌 디뉴클레오티드 인산염(NADP + → NADPH)을 감소시킬 수 있을 만큼 에너지를 생성한다.</li>
				<li>공정 중에 생성된 양성자 구배와 함께 NADPH는 캘빈 회로에 의해 CO 2 와 같은 하류 변환을 탄화수소로 유도합니다.</li>
				<li>자연 광합성의 가장 중요한 본질은 광학에너지를 이용하여 화학반응을 일으키는 능력이다.</li>
				<li>식물의 광합성을 참고한 인공광합성 분야가 연구되고 있다.</li>
				<li>인공광합성 기술은 자연 광합성을 모방해 식물처럼 햇빛을 받아 이산화탄소를 에틸렌, 메탄올, 에탄올 등과 같은 고부가가치 화합물로 전환하는 기술이다.</li>
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

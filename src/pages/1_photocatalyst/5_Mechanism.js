import React from 'react';
import '../../styles/styles.css'

function Mechanism() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default Mechanism;

function MainContents() {
	const title = 'Mechanism';

	return (
		<div>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<h3>Mechanism</h3>
			<ul>
				<li>(I) 광 흡수, (II) 전하 분리, (III) 전하 이동, (IV) 전하 재결합 및 (V) 산화환원 반응의 5가지 주요 과정이 발생합니다.</li>
				<li>반도체가 밴드 갭 에너지 ( Eg ) 보다 큰 에너지를 가진 광자를 흡수하면 전자는 전도대로 여기되고 가전자대에는 정공이 남습니다.</li>
				<li>분리된 전자와 정공은 반도체를 통해 반도체/전해질 계면으로 이동하며, 여기서 산화환원 반응이 일어나 연료를 생성합니다.</li>
				<li>그러나 광생성 전하 운반체를 모두 수집하여 최종적으로 연료 생성에 기여할 수는 없습니다.</li>
				<li>실제로, 광생성 전하 캐리어의 일부는 벌크 및 표면에서 재결합되어 포논 생성 등을 통해 에너지를 열적으로 소산합니다.</li>
				<li>전하 재결합은 여기된 전하 운반체의 주요 손실이며 반도체 광촉매의 태양-화학 에너지 변환 효율을 제한하는 중요한 요인으로 여겨집니다.</li>
				<li>전하 운반체는 약 10-9초 정도의 재결합 시간을 갖는 반면, 흡착된 종과의 화학적 상호작용은 10-8~10-3초 사이에서 더 긴 시간 규모 를 갖 습니다 .</li>
				<li>연구에 따르면 전하 재결합은 생성 후 10ns 내에 최대 90%까지 일어난다는 것으로 나타났습니다.</li>
			</ul>

			<hr className='class-1'/>

			<h3>광촉매의 표면화학</h3>
			<ul>
				<li>수중 광촉매에 빛을 비추면 광생성 전하가 촉매/물 계면을 이동하여 화학 반응이 일어날 수 있다.</li>
				<li>대부분의 불균일 촉매반응에서 그렇듯, 촉매/반응물 경계면이 가장 중요합니다.</li>
				<li>원활한 광반응을 위해, 촉매에 반응물이 계속 공급되어야 하고, 반응 부위(촉매)로 생성물이 확산되어야 하고, 광촉매의 재생(반응물 등이 촉매에서 떨어져)이 계속되어야 원활한 반응이 일어난다.</li>
				<li>
						<br/><br/><img src="../images/photocatalyst/mechanism_1.jpg" width="600" alt=''/><br/><br/>
				</li>
				<li>물과의 상호작용
					<ul>
						<li>대부분의 광촉매 반응은 수용액에서 수행됩니다.</li>
						<li>TiO2에 대한 TiO2에 대한 두 가지 물 산화 메커니즘은 친핵성 공격(nucleophilic attack, NA)과 산화환원 광산화(redox photooxidation, RP)으로 나누어진다.</li>
						<li>NA 메커니즘은 정공이 TiO2표면의 삼중 배위 산소에 의해 갇히게 된다.</li>
						<li>물 산화는 물 분자(루이스 염기)에 의해 NA에서 브리징 O의 표면에 갇힌 구멍(루이스 산)으로 시작된 다음 Ti-O 결합이 끊어져 Ti-O·HO-Ti를 형성한다. (그림 (a))</li>
						<li><br/><br/><img src="../images/photocatalyst/mechanism_2.jpg" width="800" alt=''/><br/><br/></li>
						<li>RP 메커니즘은 OHads 라디칼이 만든, 광생성된 정공이 H2Oads로 계면 이동되어 물이 산화되기 시작 한다.(그림 (b) )</li>
						<li>분자 수준에서는 다르지만, 두 메커니즘은 몇 가지 중요한 공통 기능이 있다. 첫째, 물 산화가 산소 연결 부위에서 시작되어 표면 결합 수산기 종(Ti-OH·, 또는 Ti-O·HO-Ti)을 형성하며,</li>
						<li>둘째, 둘 다 표면 결합된 과산화물 종의 형성한다.</li>
						<li>셋째, 양성자는 전자 전달과 결합되어 특히 pH &li; 13 조건에서 물 산화에 중요한 역할을 한다.</li>
						<li>또 다른 현상인 광유도 친수성이 있다.</li>
						<li>CO 2 광환원 에서 양성자의 역할은 그림에서 볼 수 있다.</li>
						<li><br/><br/><img src="../images/photocatalyst/mechanism_3.jpg" width="800" alt=''/><br/>
						처음 단계는 TiO2 에서 CO2와 protons(OH2+)으로의 경쟁적으로 전자가 이동한다.<br/>
						이 과정에서 O=C=O 결합이 끊어지고 H 원자가 부착되어 HCOO- 가 형성된다.</li>
					</ul>
				</li>
				<li>물과의 상호작용
					<ul>
						<li>반응물질이 촉매반응에 관여하기 위해서는 반드시 촉매 표면에 반응물이 흡착 여부가 중요하다.</li>
						<li><br/><br/><img src="../images/photocatalyst/mechanism_4.jpg" width="600" alt=''/><br/></li>
						<li>TiO2 에 대한 다양한 반응물의 상호작용 모드</li>
						<li>(a) 벤젠 물리흡착<br/>
							(b) 페놀 화학흡착<br/>
							(c) 및 페놀 물리흡착<br/>
							(d) 실선: 공유 결합</li>
						<li>점선: 반데르발스 힘과 같은 약한 상호작용.</li>
					</ul>
				</li>
			
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

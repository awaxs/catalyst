import React from 'react';
import '../../styles/styles.css'

function HJunction() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default HJunction;

function MainContents() {
	const title = 'Hetero Junction';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>소개</h3>
			<ul>
				<li>광촉매 이종접합은 광 흡수 범위 확장, VB, CB 를 조정, 전하 캐리어 분리를 위한 효율적인 전략이다.</li>
				<li>반도체는 입사된 광자의 에너지가 밴드 갭(Eg) 이상일 때 에너지를 흡수한다 .</li>
				<li>이에 따라 전자는 가전자대(VB)에서 반도체의 전도대(CB)로 여기됩니다. VB의 남은 구멍과 함께 엑시톤이 형성됩니다</li>
				<li><br/><img src="../images/photocatalyst/H-junction_1.png" width="600" alt=''/><br/></li>
				<li>CB 최소값 더 음의 전위를 갖는 경우 환원반응이 일어나며, VB의 최대값이 더 양인 경우 산화반응이 일어난다.</li>
				<li><br/><img src="../images/photocatalyst/H-junction_1.jpg" width="600" alt=''/><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>I형 이종접합 광촉매</h3>
			<ul>
				<li>반도체 A의 전도대(CB)와 가전자대(VB)는 각각 반도체 B의 해당 밴드보다 높고 낮 습니다 .</li>
				<li>전자는 반도체 B의 CB에, 정공은 반도체 B의 VB에 축적됩니다.</li>
				<li>전자와 정공이 하나의 반도체에 축적되기 때문에 유형 I 이종접합 광촉매의 경우 전자-정공 쌍을 효과적으로 분리할 수 없습니다.</li>
				<li>산화환원 전위가 낮은 반도체에서는 산화환원 반응이 일어나 이종접합 광촉매의 산화환원 능력이 크게 저하된다.</li>
			</ul>


			<hr className='class-1'/>
			<h3>II형 이종접합 광촉매</h3>
			<ul>
				<li>반도체 A의 CB 및 VB 수준은 반도체 B의 해당 수준보다 높습니다.</li>
				<li>따라서 광생성된 전자는 반도체 B로 이동, 정공은 반도체 A로 이동하여 전자-정공 쌍이 공간적으로 분리됩니다.</li>
				<li>Type-I 이종접합과 유사하게, Type-II 이종접합 광촉매의 산화환원 능력도 감소할 것입니다.</li>
				<li>왜냐하면 환원 전위가 낮은 반도체 B와 산화 전위가 낮은 반도체 A에서 환원 반응과 산화 반응이 일어나기 때문입니다.</li>
			</ul>


			<hr className='class-1'/>
			<h3>유형 III 이종접합 광촉매</h3>
			<ul>
				<li>밴드갭이 겹치지 않는다</li>
				<li>전자-정공 쌍의 분리를 향상시키는 데 적합 하지 않습니다 .</li>
			</ul>

			<hr className='class-1'/>
			<h3>p-n 이종접합</h3>
			<ul>
				<li><br/><img src="../images/photocatalyst/H-junction_2.jpg" width="600" alt=''/><br/></li>
				<li>II형 이종접합이 이상적으로 공간에서 전자-정공 쌍을 분리할 수 있지만</li>
				<li>전자-정공 분리의 향상된 향상은 반도체의 초고속 전자-정공 재결합을 극복하기에 충분하지 않습니다.</li>
				<li>p형 반도체와 n형 반도체를 결합하면 효과적인 p-n 이종접합 광촉매를 얻을 수 있다.</li>
				<li>광 조사 전에 p-n 인터페이스 근처의 n형 반도체 위의 전자는 p형 반도체로 확산되어 양으로 하전된 종을 남기는 경향이 있습니다</li>
				<li>한편, p-n 경계 근처의 p형 반도체 정공은 n형 반도체로 확산되어 음으로 하전된 종을 남기는 경향이 있습니다.</li>
				<li>전자-정공 확산은 시스템의 페르미 준위 평형이 달성될 때까지 계속됩니다.</li>
				<li>결과적으로 p-n 인터페이스에 가까운 영역이 충전되어 "충전된" 공간 또는 소위 내부 전기장이 생성됩니다.</li>
				<li>p형 반도체와 n형 반도체에 밴드갭 값 이상의 에너지를 갖는 입사광을 조사하면 p형 반도체와 n형 반도체가 모두 여기되어 전자-정공쌍이 생성됩니다.</li>
				<li>p형 반도체와 n형 반도체에서 광생성된 전자와 정공은 내부 전계의 영향을 받아 각각 n형 반도체의 CB와 p형 반도체의 VB로 이동하게 됩니다.</li>
<li>전자-정공 쌍의 공간적 분리. p형 반도체의 CB와 VB는 일반적으로 p-n 이종접합 광촉매에서 n형 반도체보다 높게 위치하기 때문에 이러한 전자-정공 분리 과정은 열역학적으로 실현 가능하다</li>
			</ul>

			<hr className='class-1'/>
			<h3>표면 이종접합</h3>
			<ul>
				<li>(001) 면의 CB 및 VB 수준은 아나타제 TiO2의 (101) 면의 해당 수준보다 높습니다.</li>
				<li><br/><img src="../images/photocatalyst/H-junction_3.jpg" width="600" alt=''/><br/></li>
			</ul>


			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201601694'>이종접합 광촉매</a></li>
				<li><a href=''>광촉매 수소 생성을 위한 반도체 이종접합 및 Z 방식의 최근 발전</a></li>
				<li><a href='https://link.springer.com/article/10.1007/s41061-022-00406-5'></a></li>
			</ol>
			

		</div>
	)
}

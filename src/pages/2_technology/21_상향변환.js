import React from 'react';
import '../../styles/styles.css'

function 상향변환() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 상향변환;

function MainContents() {
	const title = 'Photon upconversion';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 광자 상향 변환(Photon upconversion)</h3>
			<ul>
				<li>광자 상향 변환은 저에너지 광자가 고에너지 광자로 변환되는 반스토크스 이동으로 생긴다.</li>
				<li>두 개 이상의 광자가 순차적으로 흡수되어 여기 파장보다 짧은 파장 의 빛이 방출 되는 과정입니다 .</li>
				<li>예를 들면 적외선을 가시 광선 으로 변환하는 것입니다 .</li>
				<li><img src="../images/photocatalyst/antiStokes_4.jpg" width="600"  alt=''></img><br/></li>
				<li>장파장의 광자를 2개 이상을 흡수하여 상대적으로 에너지가 높은 단파장의 빛을 방출하는 현상을 말한다.</li>
				<li>희토류 금속(rare-earth metal) 혹은 란탄족 금속(lanthanides)의 발광에 대한 현상이 활발히 연구되어 왔다.</li>
				<li>2000년대 이후 업컨버전 나노입자가 합성되면서 제2의 도약기를 맞이하였다.</li>
				<li>란탄족 원자들의 여기 수명이 매우 길어서, 일광자 여기 이후에 이광자 흡수까지 오랜 기간동안 유지할 수 있기 때문이다.</li>
				<li><img src="../images/photocatalyst/upconversion_1.jpg" width="600"  alt=''></img><br/></li>
				<li>여기 상태 흡수(excited-state absorption, ESA), 에너지 전달 상향변환(energy transfer upconversion, ETU), 광자 사태(photon avalanche,PA), 에너지 이전 상향변환(Energy migration upconversion)</li>
				<li>상향변환 나노입자(UCNP)는 광자 상향변환을 나타내는 나노크기 입자 (직경 1~100nm) 입니다 .</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. 희토류 원소(란탄족)을 사용하는 이유</h3>
			<ul>
				<li>내부 준위 구조 (Energy Level Structure):란탄족은 다단계의 에너지 준위를 가지고 있어, 다양한 에너지의 광자를 흡수할 수 있고, 그 에너지를 단계적으로 높은 에너지 상태로 이동시킬 수 있기 때문이다.</li>
				<li>높은 형광 효율 (High Fluorescence Efficiency): 많은 란탄족 이온들은 높은 형광 효율을 가지고 있어, 흡수된 광자를 효율적으로 방출할 수 있습니다.</li>
				<li>긴 수명 (Long Lifetimes): 란탄족 이온들은 일반적으로 에너지 준위에서의 긴 수명을 가지기 때문에, 에너지 전달 과정에서 손실을 최소화하고 효율적이다.</li>
				<li>다양한 흡수 및 방출 파장: 란탄족 이온들은 넓은 범위의 흡수 및 방출 파장대를 가지고 있어, 다양한 파장의 광자를 다룰 수 있습니다. 이는 특히 다중 파장 광원이 필요한 응용 분야에서 유리합니다.</li>
			</ul>

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://onlinelibrary.wiley.com/doi/10.1002/anie.202219214'>g-C3N4-결손: 획기적인 효율을 가진 광촉매를 위한 구조적 결함에 의해 유도된 종료 상태 흡수 상향 변환</a></li>
				<li><a href='https://en.wikipedia.org/wiki/Photon_upconversion'>광자 상향 변환</a></li>
				<li><a href=''></a></li>
			</ol>
			

		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function ZScheme() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default ZScheme;

function MainContents() {
	const title = 'Z_scheme';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>소개</h3>
			<ul>
				<li>광촉매 Z-schemes은 광 흡수 범위 조정, VB, CB 를 조정, 전하 운반체의 공간적 분리를 위한 효율적인 전략이다.</li>
				<li>광촉매의 성능을 제한하는 두 가지 조건:</li>
				<ul>
					<li>(a) 이용 가능한 광자의 에너지(hv)는 광촉매의 에너지 갭(Eg) 보다 커야 합니다 .</li>
					<li>(b) 반응물의 산화환원 전위는 광촉매의 전도대하단(BCB)과 가전자대상단(TVB) 사이에 위치해야 합니다.</li>
				</ul>

				<li>이종접합 광촉매의 필요 이유:</li>
				<ul>
					<li>광촉매의 넓은 밴드 갭은 태양광 흡수에 불리하다.</li>
					<li>단일성분 광촉매는 넓은 광흡수 범위와 강한 산화환원 능력을 동시에 갖기가 어렵다.</li>
					<li>단일 성분 광촉매에서는 CB의 전자가 VB의 정공으로 돌아는 재결합이 쉽게 일어나므로 반응 효율이 감소된다.</li>
					<li>이를 극복하기 위해서 적절한 이종 광촉매 시스템이 필요하다.</li>
				</ul>
			</ul>

			<hr className='class-1'/>
			<h3>이종접합형 광촉매</h3>
			<ul>
				<li>이종접합형 광촉매 시스템:
					<ul>
						<li>1단계 광여기에 의한 물 분해, 태양 전지, 오염물질 분해, CO2 환원의 광촉매 메커니즘.</li>
						<li><br/><img src="../images/photocatalyst/z-scheme_1.jpg" width="600" alt=''/><br/></li>
					</ul>
				</li>
				<li>이종접합형 광촉매 시스템에서의 전하 이동.
					<ul>
					<li><br/><img src="../images/photocatalyst/z-scheme_5.jpg" width="600" alt=''/><br/></li>
					</ul>
				</li>
				<li>식물의 광합성 Mechanism.
					<ul>
					<li><br/><img src="../images/photocatalyst/z-scheme_3.jpg" width="600" alt=''/><br/></li>
					<li>첫째, PS-II로 표시된 산소 발생 복합체의 HOMO(최고점유분자궤도, highest occupied molecular orbital)에 있는 전자는 태양 빛 아래에서 최저 LUMO(최저비점유분자궤도, lowest unoccupied molecular orbital)로 여기됩니다.</li>
					<li>그런 다음 PS-II의 LUMO에서 광생성된 전자는 전자 매개체를 통해 광계I(PS-I)로 표지된 페레독신-NAPD 환원효소의 HOMO로 전달됩니다.</li>
					<li><br/><img src="../images/photocatalyst/z-scheme_1.png" width="600" alt=''/><br/></li>
					<li>PS-I의 HOMO에 있는 전자는 LUMO로 여기됩니다.</li>
					<li>그 결과, 광생성된 전자와 정공은 PS-I의 LUMO와 PS-II의 HOMO에 각각 남게 된다.</li>
					<li>이 과정은 앞서 언급한 이종접합형 전하 이동 메커니즘과 다르다.</li>
					<li>마지막으로, PS-I의 LUMO에서 생성된 전자는 CO2 를 환원시키는 데 사용되고 PS-II의 HOMO에서 생성된 정공은 H2O를 산화시키는 데 사용됩니다.</li>
					<li>따라서, Z-scheme 광촉매 시스템은 PS-I의 강한 환원력, PS-II의 강한 산화력을 보여준다.</li>
					<li>두 개의 좁은 밴드갭 반도체를 결합한 Z-scheme 광촉매 시스템은 가시광선 흡수에 유리하면서, 우수한 산화환원 능력을 얻을 수 있을 것이다.</li>

					</ul>
				</li>
			</ul>
			
			<hr className='class-1'/>
			<h3>인공 Z-scheme 시스템</h3>
			<ul>
				<li>인공 Z-scheme 시스템(전자 수용체/공여체(A/D))</li>
				<li>PS-II와 PS-I 사이에는 물리적 접촉(직접적 접합)이 존재하지 않는 방식이다 .</li>
				<li>첫째, 전자 수용체(A)는 PS-II의 CB로부터 광생성된 전자를 흡수한 후 전자 공여체가 된다(환원된다). 그런 다음 생성된 전자 공여체(D)는 PS-I의 VB에서 광 생성된 정공에 의해 전자 수용체가 된다(산화된다).</li>
				<li>PS-II와 PS-I 사이에 전자-정공은 A/D에 의해 간접적으로 전달된다.</li>
				<li>사용되는 A/D 쌍은 IO3-/I-, Fe3+/Fe2+, [Co(bpy)3]3+/2+, [Co(phen)3]3+/2+ 및 NO3-/NO2-</li>
				<li>A/D 쌍도 광흡수가 일어나므로 촉매가 흡수하는 광자가 감소할 수 있고, pH에 영향을 받는 문제가 있다.</li>
				<li>이종접합형 광촉매 시스템과 유사하게 인공 Z-방식 광촉매 시스템은 전자-정공을 공간적으로 격리하여 전자-정공 재결합이 감소한다.</li>
				<li>PS-I의 CB에는 광생성된 전자가 많이 모이게되어 환원이 일어날 수 있다.</li>
				<li>PS-II의 VB에는 광생성된 정공이 많아져서 산화가 일어날 수 있다.</li>
				<li>PS-I 광촉매는 광환원에 강한 촉매를, PS-II 광촉매는 광산화에 강한 촉매를 선택해야 한다.</li>
				<li><br/><img src="../images/photocatalyst/z-scheme_4.jpg" width="600" alt=''/><br/></li>
				<li>PS-A/D-PS(photosystem-acceptor/photosystem-donor) 시스템에서 Z-방식 전자 이동의 개략도.</li>
				<li>all-solid-state Z-scheme 시스템(PS-C-PS), conductor(C) as the electron mediator</li>
				<li>PS-II와 PS-I 사이에는 물리적 접촉 방식이다 .</li>
				<li>Z- 방식 전자 전달 거리를 줄입니다. 게다가 A/D 쌍이 없기 때문에 앞서 언급한 역방향 반응이 완벽하게 방지됩니다.</li>
				<li>따라서 PS II의 VB에 있는 광생성 정공과 PS I의 CB에 있는 전자는 각각 순방향 산화 및 환원 반응을 위해 대부분 사용된다.</li>
				<li>A/D 쌍에 의해 조사된 입사광의 차폐 효과도 제거할 수 있습니다.</li>
				<li>A/D 쌍의 제한 없이 PS-C-PS 시스템은 기체상 및 액체상 환경 모두에서 작동할 수 있습니다.</li>
				<li>따라서, PS-C-PS 시스템의 적용 범위는 물 분해에서 태양 전지, 오염 물질 분해 및 CO2 전환등에 모두 사용할 수 있다.</li>
				<li><br/><img src="../images/photocatalyst/z-scheme_5.jpg" width="600" alt=''/><br/></li>
			</ul>
			
			<hr className='class-1'/>
			<h3>산화환원전위(ORP 또는 Redox Potential)</h3>
			<ul>
				<li>전자를 잃고 산화되거나 또는 전자를 받고 환원되려는 경향의 강도를 나타내는 것을 말합니다</li>
				<li><br/><img src="../images/photocatalyst/z-scheme_10.jpg" width="600" alt=''/><br/></li>
				<li><br/><img src="../images/photocatalyst/z-scheme_11.jpg" width="600" alt=''/><br/></li>
			</ul>
			
			<hr className='class-1'/>
			<h3>PS-C-PS 시스템(Electron Mediators)</h3>
			<ul>
				<li>Z-scheme TiO2-Au-CdS system 이 2006년에 발표된 전고체 PS-C-PS 시스템의 첫 번째 사례입니다.</li>
				<li><br/><img src="../images/photocatalyst/z-scheme_6.jpg" width="600" alt=''/><br/></li>
			</ul>
			
			<hr className='class-1'/>
			<h3>PS-PS Systems(solid-solid contact)</h3>
			<ul>
				<li>고체-고체 접촉 계면의 특성은 전자 이동의 저항 수준을 결정하며, 이는 접촉 계면의 형성 방법에 크게 좌우됩니다.</li>
				<li><br/><img src="../images/photocatalyst/z-scheme_7.jpg" width="600" alt=''/><br/></li>
			</ul>
			
			<hr className='class-1'/>
			<h3>PS-PS의 최적 질량비</h3>
			<ul>
				<li>Z 방식의 광촉매 반응 메커니즘에 따르면, PS II의 CB에서 생성된 광전자는 고체-고체 접촉 경계면에서 PS I의 VB에서 생성된 동일한 양의 정공과 결합합니다.</li>
				<li>한 광계의 광생성 전하 캐리어 수가 다른 시스템의 광촉매 수보다 클 경우, 이러한 전하 캐리어의 잉여 수는 아마도 대량으로 재결합되어 Z 방식 광촉매 반응에 기여하지 않을 것입니다.</li>
				<li>따라서 이상적인 상황은 PS II와 PS I이 동일한 수의 광생성 전하 캐리어를 생성한다는 것입니다.</li>
				<li>이는 PS II와 PS I의 질량(몰) 비율을 최적화하여 달성할 수 있습니다.</li>
				<li>그러나 PS II와 PS I의 최적 질량(몰) 비율은 PS-PS 시스템의 기하학적 구조와 밀접한 관련이 있습니다.</li>
				<li>Ru/SrTiO3:Rh = 1:1 의 질량비, C3N4/TiO2 의 질량비가 3:22일 때 가장 높은 활성을 나타냈습니다.</li>
				<li><br/><img src="../images/photocatalyst/z-scheme_8.jpg" width="600" alt=''/><br/></li>
			</ul>
			
			<hr className='class-1'/>
			<h3>PS-C-PS 시스템 예</h3>
			<ul>
				<li><br/><img src="../images/photocatalyst/z-scheme_9.jpg" width="600" alt=''/><br/></li>
			</ul>
			

			<hr className='class-1'/>
			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201400288'>전고체 Z-Scheme 광촉매 시스템</a></li>
				<li><a href=''></a></li>
				<li><a href=''></a></li>
			</ol>
			
		</div>
	)
}


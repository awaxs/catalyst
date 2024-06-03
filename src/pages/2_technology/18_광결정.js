import React from 'react';
import '../../styles/styles.css'

function 광결정() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 광결정;

function MainContents() {
	const title = '광결정(photonic crystals(PhCs))';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 서론</h3>
			<a href='https://pubs.rsc.org/en/content/articlelanding/2020/ta/d0ta05655c'>빛 가두기</a>
			<ul>
				<li>햇빛에 의한 전하 캐리어(전자)의 효율적인 광생성, 전자와 정공의 분리, 촉매 표면에서의 산화환원반응(redox reaction) 점에 대해 기술한다.</li>
				<li>강력한 광화학적 활성, 용액의 높은 안정성, 용액에서의 비부식성(noncorrosiveness), 생물학적 안전성, 비용 효율성으로 등으로 인해 TiO2가 각광을 받는다.</li>
				<li>그러나 TiO2는 3.1~3.6eV(즉, 345~400nm)의 넓은 전자 밴드 갭으로 인해 결정인 문제가 있다.</li>
				<li>탬플릿 구의 크기를 조절하여 inverse opal(invop) 구조를 최적화함으로써 광흡수를 증대시켜 이를 해결하고자 한다.</li>
				<li>invop의 광흡수를 증대 메커니즘은 파동 간섭(wave-interference)에의해 일어나는 light trapping(광 가둠 현상)에 있다.</li>
				<li>파동의 간섭은 빛의 속도가 느려지는 현상의 경우(slow-light modes)</li>
			</ul>
			<table className='table  table-bordered'>
					<tbody>
					<tr className='table-primary'>
						<th></th>
						<th>반도체</th>
						<th>광결정</th>
					</tr>
					<tr className='table-warning'>
						<th>개요</th>
						<td>외부 에너지(전기, 광)의 입출입에 의한 현상을 이용한다.
							전자의 흐름을 조절한다.</td>
						<td>빛의 진행에 대한 제어로 어떤 주파수의 빛을 반사(reflection), 투과(transmition), 가둠(trapping) 등을 이용한다.
							빛의 흐름을 조절한다.</td>
					</tr>
					<tr className='table-info'>
						<th>구조	</th>
						<td>원자간 결합으로 결정을 만듬</td>
						<td>반도체결정내 원자 처럼, 나노미터 크기의 물체가 반도체 결정속의 원자처럼 주기적으로 배치되어 있다.
							이러한 구조는 빛의 경로를 변화시키고,
							특정 주파수의 빛을 차단하거나 반사합니다.
							특정 주파수의 빛이 통과하지 못하게 하는 광밴드 갭을 형성합니다.</td>
					</tr>
					<tr className='table-warning'>
						<th>응용</th>
						<td>광촉매
							태양전지
							전자기기</td>
						<td>광촉매
							광파 가이드, 필터, 레이저
							특정 파장의 빛을 감지하거나 반사하는 센서와 디스플레이</td>
					</tr>
					<tr className='table-info'>
						<th>작동 원리</th>
						<td>전자가 VB에서 CV로 이동할 때 필요한 에너지 차이인 밴드 갭을 통해 전류가 흐르도록 조절합니다.</td>
						<td>주기적인 나노구조가 특정 주파수의 빛을 반사하거나 차단하여 빛의 전파를 제어합니다.</td>
					</tr>
				</tbody>

			</table>

			<hr className='class-1'/>
			<h3>2. 광결정(Photonic Crystal):</h3>
			<ul>
				<li>광결정은 주기적인 구조를 가진 물질로,</li>
				<li>광결정의 격자 배치형상, 크기 및 간격 등의 조절함으로서 빛의 투과 또는 반사를 조정할 수 있다.</li>
				<li>빛이 통과하지 못하는 '광밴드 갭'을 형성합니다.</li>
				<li>광결정의 구조는 특정 크기(즉, 주파수)의 빛만 통과할 수 있게 하고 나머지 빛은 반사한다.</li>
				<li>구조적 대칭성이 광밴드갭을 만들고, 광밴드갭의 위치가 결정된다.</li>
				<li>이는 특정 대칭성 조건에서 새로운 밴드 갭이 형성될 수 있는 위치를 결정하며,</li>
				<li>일부 대칭성 설정에서는 밴드 갭의 형성에 대한 위상학적 장애물(topological obstruction)이 발견되기도 합니다​</li>
				<li>광결정의 구조를 최적화하여 광촉매 효율을 향상시킬 수 있습니다.</li>
				<li>예를 들어, 특정 밴드 갭 가장자리에 있는 슬로우 라이트 모드를 활용하여 촉매 반응을 극대화할 수 있습니다</li>
				<li>광결정의 격자 배치형상, 크기 및 간격 등의 조절함으로서 빛의 투과 또는 반사를 조정할 수 있다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>3. 광밴드갭(Photonic Band Gap):</h3>
			<ul>
				<li>특정 주파수의 빛을 차단하거나 반사합니다. 이로 인해 광밴드갭이 형성됩니다.</li>
				<li>광결정에서 특정 주파수의 빛이 반사되는 주파수 구간</li>
			</ul>

			<hr className='class-1'/>
			<h3>4. 광정공(Photonic Crystal Defect, Cavity):</h3>
			<ul>
				<li>광결정 내에 의도적으로 만든 결함입니다.</li>
				<li>이 결함은 빛이 특정 위치에 갇히거나 원하는 방식으로 유도되도록 합니다.</li>
				<li>특정 부분만 주기성을 깨뜨리면 그 부분을 통해 빛이 이동하거나 머물 수 있습니다.</li>
				<li>이렇게 광정공은 빛의 이동과 제어를 가능하게 하여 다양한 기술적 응용이 가능합니다.</li>
				<li>광결정은 빛의 흐름을 통제하기 위해 주기적인 구조를 가지고 있습니다.</li>
				<li>특정 위치에 결함을 만들어 빛이 그 부분을 통과하거나 갇히도록 합니다.</li>
				<li><img src="../images/photocatalyst/meta_12.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>5. 광결정 도핑(Photonic Crystal Doping):</h3>
			<ul>
				<li>광정공에 대응되는 개념</li>
				<li>반도체 내에 불순물을 첨가하여 전기적 특성을 변화시킵니다.</li>
				<li>이를 통해 전자의 이동을 더 쉽게 하거나 더 어렵게 만들 수 있습니다.</li>
				<li>이렇게 광정공은 빛의 이동과 제어를 가능하게 하여 다양한 기술적 응용이 가능합니다.</li>
				<li><img src="../images/photocatalyst/meta_13.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>6. 광파 도파관(Waveguide):</h3>
			<ul>
				<li>파(波)를 가두어 유도시켜 전파하는 임의의 구조체(Waveguide Filter)</li>
				<li>광정공을 이용해 특정 경로로 빛을 유도하여 이동시키는 장치입니다.</li>
				<li>이는 광통신에서 빛의 신호를 효율적으로 전송하는 데 사용됩니다.</li>
				<li>금속 도파관, 유전체 도파관, 광섬유 도파관</li>
				<li><img src="../images/photocatalyst/meta_14.jpg" width="600"  alt=''></img><br/></li>
			</ul>

			<hr className='class-1'/>
			<h3>7. 광 메모리(Optical Memory):</h3>
			<ul>
				<li>광정공을 통해 빛을 특정 위치에 가두어 메모리 역할을 할 수 있습니다.</li>
				<li>이는 정보를 저장하는 데 사용됩니다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>8. optical stop gap</h3>
			<ul>
				<li>반도체의 밴드갭에너지에 해당한다.</li>
				<li>특정 주파수 범위의 빛이 광결정을 통과하지 못하고 반사되거나 흩어지는 주파수 범위이다.</li>
				<li>즉, 광결정(Photonic Crystal)을 통과할 수 없는 빛의 주파수 범위을 의미한다.</li>
				<li>반도체의 전자 밴드갭과 유사하게, 광결정에서도 광밴드갭(optical band gap)이 있다.</li>
				<li>이 구조는 특정 주파수의 빛이 전파되지 못하게 하는 을 형성한다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>9. 밴드 갭 가장자리(Band Gap Edge):</h3>
			<ul>
				<li>밴드 갭의 경계 부분으로, 특정 주파수의 빛이 통과할 수 있거나 없게 되는 경계 지점을 의미합니다.</li>
				<li>밴드 갭 가장자리는 빛이 거의 전파되지 않거나 매우 느리게 전파되는 주파수 영역을 말합니다.</li>
				<li>광결정의 밴드 갭 가장자리는 빛의 주파수를 제어하는 데 중요한 역할을 한다</li>
			</ul>

			<hr className='class-1'/>
			<h3>10. 슬로우 라이트 모드(Slow Light Mode):</h3>
			<ul>
				<li>슬로우 라이트 모드는 빛이 매우 느리게 이동하는 현상입니다.</li>
				<li>광밴드 갭 가장자리(Band Gap Edge)에서 빛은 속도가 느려지는 것도 이다.</li>
				<li>이는 빛의 속도가 급격히 줄어들어 빛과 물질 사이의 상호작용 시간이 증가하므로 이것을 응용하여 효율을 높일 수 있다.</li>
			</ul>

			<hr className='class-1'/>
			<h3>11. 촉매 반응 극대화 방법:</h3>
			<ul>
				<li>빛의 흡수 효율 증가:
					<ul>
						<li>슬로우 라이트 모드에서는 빛이 물질 내에서 느리게 이동하기 때문에, 빛과 물질의 상호작용 시간이 증가합니다.</li>
						<li>이로 인해 빛의 흡수 효율이 높아집니다.</li>
					</ul>
				</li>

				<li>촉매 활성화 에너지:
					<ul>
						<li>슬로우 라이트 모드에서는 빛의 흡수 효율이 증가한다.</li>
						<li>따라서, 더 많은 전자가 들뜨게 되어 촉매 반응이 더욱 활발하게 일어납니다</li>
					</ul>
				</li>
			</ul>
				<li><img src="../images/photocatalyst/meta_8.jpg" width="600"  alt=''></img><br/></li>
				<li><img src="../images/photocatalyst/meta_9.jpg" width="600"  alt=''></img><br/></li>

			<hr className='class-1'/>
			<h3>12. 빛 가두기(Light-trapping)</h3>
			<ul>
				<li>빛을 광결정 또는 나노구조의 특정 위치에 가둬두는 현상을 말한다.</li>
				<li>광결정 구조 내부에서 계속 반사되면서 빠져나가지 못하고 특정 위치에 머무는 것과 유사합니다.</li>
				<li><img src="../images/photocatalyst/meta_15.jpg" width="600"  alt=''></img><br/></li>
				<li>광결정은 매우 정교한 주기적 나노 구조를 가지고 있다. 이 구조는 빛의 경로를 변화시키고,</li>
				<li>특정 주파수의 빛을 반사하거나 산란시켜 빛이 구조 내부에 갇히도록 만든다.</li>
				<li>광결정 내에 의도적으로 결함(결정구조의 변형)을 만들면, 이 결함 부분에 빛이 가두어질 수 있다.</li>
				<li>이는 결함이 없는 완벽한 주기적 구조에 비해 빛이 더 오래 머물게 된다.</li>
				<li>결과적으로 슬로우 라이트 모드와 같이 빛의 흡수 효율이 높아지고 촉매의 성능을 높이는 원인이 된다.</li>
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

import React from 'react';
import '../../styles/styles.css'

function 전자전달() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 전자전달;

function MainContents() {
	const title = 'Electron Transfer in Photocatalysis';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 개요</h3>
			<ul>
				<li>광 여기에 의해 전자/정공 쌍이 생성되면 대부분은 재결합하여 열을 발생시킵니다.</li>
				<li>극히 일부만이 성공적으로 인터페이스로 전달되어 산화환원 반응을 시작할 수 있습니다.</li>
				<li>계면 전자 이동의 시간 척도와 광생성 전하 캐리어의 수명이 광촉매 공정의 효율성을 결정합니다.</li>
				<li>전자 광생성, 재결합, 전자 수송은 빛 에너지를 유용한 전하 캐리어로 전환시키는 기본 과정입니다.</li>
				<li>따라서 반도체 나노입자의 전하 분리/수송 효율을 높이는 것은 광촉매에서 해결해야 할 주요 문제 중 하나입니다.</li>
				<li>전하 캐리어 이동은 광촉매 공정에서 중추적인 역할을 하기 때문에 매우 중요하다고 널리 알려져 왔습니다</li>
			</ul>

			<hr className='class-1'/>
			<h3>2. 전하 캐리어 trapping, recombination</h3>
			<br/><img src="../images/photocatalyst/electrontransfer_3.jpg" width="400" alt=''/><br/>
			<br/><img src="../images/photocatalyst/electrontransfer_2.jpg" width="400" alt=''/><br/>
			<ul>
				<li>광자 에너지가 밴드 갭보다 크면 밴드 간 전이가 지배적이며, fs 시간 척도에서 원자가 밴드에서 전도 밴드로 전자를 여기시킵니다(식 1)</li>
				<li>전자와 정공이 광촉매 표면으로 무작위로 이동하여 ps 이하의 시간 단위로 거기에 갇혀 있다고 제안했습니다(식 2a).</li>
				<li>또한 벌크 포획 사이트(식 2b, 2c)에 포획될 수 있습니다.</li>
				<li>전자가 에너지적으로 동일하고 아마도 전도대 가장자리에 매우 가깝기 때문에 평형 상태에 있는 표면과 벌크 트랩 사이에서 이동할 수 있다고 제안했습니다.</li>
				<li><br/><img src="../images/photocatalyst/electrontransfer_1.jpg" width="400" alt=''/><br/>
				표면 relaxation 역학에서 제안된 표면에 갇힌 전자와 벌크 전자의 에너지 준위를 보여줍니다.
				</li>
				<li>광촉매 표면에서 포획된 전자와 정공은 표면에서 재결합하거나(식 3) 각각 수용체(A) 또는 공여체(D) 분자로 전달되어 이들과 반응할 수 있습니다(식 4).</li>
				<li>환원된 수용체와 정공 또는 산화된 공여체와 전자 사이의 전하 이동 후 반응은 표면에 강하게 흡착될 때 발생할 수 있습니다</li>
				<li>위의 메커니즘에 따르면 계면 전하 이동 효율은 두 가지 중요한 프로세스, 즉 전하 재결합과 트래핑(포획 상태)간의 경쟁에 이어 포획된 캐리어 재결합과 계면 전하 이동 간의 경쟁에 의해 제한됩니다.</li>
			</ul>


			<hr className='class-1'/>
			<h3>3. 반도체 입자의 갇힌 대 자유 전하 캐리어</h3>
			<ul>
				<li>전도대와 포획 상태 사이의 전하 캐리어 분포는 중요한 현상입니다.</li>
				<li>이종 광화학 전하 이동 반응은 벌크 및 표면에 트랩핑 사이트를 포함하는 반도체 나노입자를 사용하여 수행되는 경우가 많습니다.</li>
				<li>정공 제거제(스케빈저)가 없으면 산소(즉, 전자 제거제)에서 전하를 분리 시켜서, 정공이 물을 산화시켜 흡착된 하이드록실 라디칼을 생성 한다.</li>
			</ul>


			<hr className='class-1'/>
			<h3>4. 전하 이동에 대한 시공간 이미징</h3>
			<ul>
				<li>광촉매에서 촉매 표면 부위로의 광 유도 전하 이동은 광촉매 효율에 영향을 미치는 중요한 인자이다.</li>
				<li>그러나 나노미터에서 마이크로미터, 펨토초에서 초까지 분해하고, 넓은 공간 범위에 걸쳐서 측정하는 것은 어렵습니다 .</li>
				<li>정상 상태 전하 분포는 현미경 기술러는 광촉매에서 시공간적으로 진화하는 전하 이동 프로세스 광촉매 입자는 추적할 수 없다.</li>
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

import React from 'react';
import '../../styles/styles.css'

function AnodizingMk() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default AnodizingMk;

function MainContents() {
	const title = 'A8_Anodizing_mk';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* Anodizing */}
			<div className='bky'>
				<hr className='hrstyle'/>
					<h5 className='h5style'><b><u>Base C. Anodizing</u></b></h5>
					
					<p><b><u>1. 시약</u></b></p>
					<ul>
						<li>아세톤, 에탄올, 탈이온수</li>
						<li>옥살산</li>
						<li>HF, HNO3</li>
						<li>NH4F, 에틸렌 글리콜</li>
						<li>titanume mesh</li>
					</ul>
					<p><b><u>2. 합성</u></b></p>
					<ol>
						<li className='blue' ><u><b>옥살산 이용한 방법 1(안전)</b></u></li>
						<li>[탈지]아세톤, 에탄올, 탈이온수에서 각각 3분 동안 순차적으로 초음파 탈지 처리한다.</li>
						<li>[에칭]옥살산 수용액(10%, 80 °C)에 2시간 동안 에칭 한다.(이 산용액은 재사용한다)</li>
						<li>[세척]탈이온수로 잘 씻어낸다.</li>
						<li>[건조]N2를 불어서 건조한다.</li>
						<li>[전해액]NH4F(0.27wt%)와 H2O(5wt%)가 포함된 에틸렌 글리콜 전해액을 만든다.</li>
						<li>[전극연결]메쉬를 양극에 연결한다. 상대전극(음극은 동일한 크기의 티타늄망)을 연결한다.</li>
						<li>[전극간격]전해질에 3cm 간격으로 수직으로 한다.</li>
						<li>[1차 양극산화]상온(25°C)에서 2시간 동안 일정한 전위(40V)를 유지하였다.</li>
						<li>10V: 색이 변함, 20V 옅은 보라, 30V: 약한 청색, 40V: 은색, 50V: 금색(약한 노랑), 60V: 핑크</li>
						<li>[산화막제거]탈이온수에서 초음파 처리하여 산화된 표면 산화막을 제거한다.</li>
						<li>[건조]N2를 불어서 건조</li>
						<li>[2차 양극산화]건조된 티타늄 기판(1차 산화하고 박리한)을 40V에서 30분 동안 동일한 전해액에서 2차 산화한다.</li>
						<li>[세척]NTA를 에탄올에서 10분 동안 세척하고</li>
						<li>[건조]N2를 불어서 건조</li>
						<li>[결정화]주변 조건 하에서 400°C에서 2시간 동안 하소시켰다.</li> 
					</ol>
					<ol>
						<li className='red' ><u><b>HF 이용한 방법 2(위험)</b></u></li>
						<li>[탈지]아세톤, 에탄올, 탈이온수에서 각각 3분 동안 순차적으로 초음파 탈지 처리한다.</li>
						<li>[에칭]HF/HNO3/H2O(1:4:5 in volume)의 혼합물에서 40초 동안 에칭 한다.(이 산용액은 재사용한다)</li>
						<li>[세척]탈이온수로 잘 씻어낸다.</li>
						<li>[건조]N2를 불어서 건조한다.</li>
						<li>[전해액]NH4F(0.25wt%)와 탈이온수(2vol%)를 포함하는 에틸렌글리콜의 혼합 전해액을 만든다.</li>
						<li>[전극간격]메쉬를 양극에 연결한다. 상대전극(음극은 동일한 크기의 티타늄망)을 연결한다.</li>
						<li>[전극간격]양극 음극의 메쉬 간격은 2cm로 한다.</li>
						<li>[1차 양극산화]상온(25°C)에서 2시간 동안 일정한 전위(40V)를 유지하였다.</li>
						<li>[산화막제거]탈이온수에서 초음파 처리하여 산화된 표면 산화막을 제거한다.</li>
						<li>[건조]N2를 불어서 건조</li>
						<li>[2차 양극산화]건조된 티타늄 기판(1차 산화하고 박리한)을 60V에서 2시간 동안 동일한 전해액에서 2치 산화한다.</li>
						<li>[세척]NTA를 에탄올에서 10분 동안 세척하고</li>
						<li>[건조]N2를 불어서 건조</li>
						<li>[결정화]주변 조건 하에서 400°C에서 2시간 동안 하소시켰다.(승온조건 5°C/1분)</li> 
						</ol>

					<p><b><u>2. Anodizing NT-TiO2 생성 메카니즘</u></b></p>
					<ul>
						<li>1세대: HF 수용액, 0.5μm, 제대로 조직되지 않은 자체 조직, 골이 있음</li>
						<li>2세대:불소염 수용액(0.1~0.5wt%, NH4F), 5μm, 자체 조직형, 리브형</li>
						<li>3세대:에틸렌 글리콜+불소염(NH4F, 0.1~0.5wt%)+소량의 물(0.1~5wt%)함유한 유기용액, 100~1000μm,자체 조직화됨,매끄러움</li>
						<li>4세대:에틸렌 글리콜+불소염(NH4F, 0.1~0.5wt%)+소량의 물(보통 0.1~5wt%)함유한 유기용액, 최대 100~1000μm길이,고도로 자체 조직화됨,매끄러움,양극 산화 처리 조건의 미세 조정 또는 다단계 접근 방식</li>
						<li>NT 성장 매개변수(인가 전위, 전해질 유형(유기, 수성), 유기 용액의 수분 함량, 불소 농도, 양극 산화 처리 시간, Ti 기판의 전처리(연마))</li>
						<li>Ti(1 1 1) 사이트 에서 우선적으로 NT 형성</li>
						<li>NT(TiO2) 두께는 전위에 따라 결정</li>
						<li>수성 용액의 불소 이온은 유기 매질보다 훨씬 공격적 이다.(이것이 NT의 성장이 수 마이크론의 길이로 제한되는 이유)</li>
						<li>유기 전해질의 양극 산화 과정에서 물은 산소 공급원이다 .</li>
						<li>유기 전해질의 양극 산화는 잘 정돈되고 더 긴 NT를 생성한다. </li>
						<li>유기 전해질에서 물이 없는 산화물의 형성은 고르지 못한 반면,수분 함량이 ≥0.7wt%인 경우 잘 정렬된 NT가 형성된다  .</li>
						<li>전해액을 계속 재사용하면 TiF6−2이온이 축적되어 산화능력(Ti용해도 감소)이 소실 된다.(전해질의 '노화')</li>
						<li>전류를 모니터링하는 등의 정전위 조건에서 수행되어야 한다.</li>
						<li>인가된 전위는 일반적 으로 수성 5~30V, 유기 전해질 10~60V 범위이다</li>
						<li>전기장 강도는 나노튜브 직경에 영향을 미친다.</li>
						<li>NT 베이스의 장벽층 두께를 넘을 수 있는 전압이 필요하다.</li>
						<li>양극산화 시간은 일반적으로 TiO2결정이 스스로 재배열되고 자기 질서도를 높이기 위해 30 분에서 2 시간 사이이다.  </li>
						<li>전기장이 증가하면 NT 가 분리될 수 있다.</li>

						<li><a href='https://www.sciencedirect.com/science/article/pii/S0927796X13000971#bib0425'>양극산화된 TiO2 나노튜브 review 참조</a></li>
						<li><a href='https://www.hindawi.com/journals/jnm/2015/295126/'>양극 이산화티타늄 형성에 대한 다양한 연마 방법의 효과</a></li>
						<img src="../images/strategy/19.PNG" width={'600'} alt=''/>
						<img src="../images/strategy/20.PNG" width={'600'} alt=''/>
						
						<p>0.3wt% NH4F, 2vol% H2O, 에틸렌 글리콜 전해질에서 17시간 양극 산화</p>
						<table className='tablecss'>
							<tr className='trcss'>
								<th>전압(V)</th>
								<th>내경(nm)</th>
								<th>외경(nm)</th>
								<th>길이(μm)</th>
							</tr>
							<tr className='trcss'>
								<td>20</td>
								<td>45</td>
								<td>65</td>
								<td>5</td>
							</tr>
							<tr className='trcss'>
								<td>40</td>
								<td>70</td>
								<td>115</td>
								<td>30</td>
							</tr>
							<tr className='trcss'>
								<td>50</td>
								<td>90</td>
								<td>140</td>
								<td>45</td>
							</tr>
							<tr className='trcss'>
								<td>60</td>
								<td>105</td>
								<td>155</td>
								<td>165</td>
							</tr>
							<tr className='trcss'>
								<td>65</td>
								<td>123</td>
								<td>185</td>
								<td>105</td>
							</tr>
						</table>
					</ul>
			</div>

		</div>
	)
}


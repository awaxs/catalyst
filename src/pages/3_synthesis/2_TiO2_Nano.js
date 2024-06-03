import React from 'react';
import '../../styles/styles.css'

function TiO2Nano() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default TiO2Nano;

function MainContents() {
	const title = 'A2_TiO2_Nano';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			
			<h6><a href="https://pubs.acs.org/doi/10.1021/cr500201c">합성법 총정리, Three-Dimensional Titanium Dioxide Nanomaterials</a></h6>
					
			{/* Sol-gel Synthesis of TiO2 Nanoparticles */}
			<div className='bky'>

				<h5><b><u>Base A. TiO2 Nanoparticles(Sol-gel method)</u></b></h5>	
					<p></p>

					<p><b><u>1. 시약</u></b></p>
						<ul>
							<li>Titanium isopropoxide (C12H28O4Ti, TTIP) (≥99%)</li>
							<li>Absolute Ethanol (EtOH, 99.5%)</li>
							<li>Nitric Acid (HNO3, 65% in water)</li>
							<li>Deionized water (DI water)</li>
						</ul>
					<p><b><u>2. 합성 </u></b></p>
						<ol>
							<li>(A용액)50~60°C EtOH 30 mL 에 10 mL TTIP 를 첨가하고 60분 동안 교반 </li>
							<li>(B용액)150 mL Di water에 2 mL HNO3를 넣는다(촉매 가수분해 용액)</li>
							<li>A용액에 B용액을 뷰렛을 이용하여 4시간 동안 천천히 적하한다.</li>
							<li>A용액과 B용액의 혼합액을 약 2시간 동안 교반한다.</li>
							<li>고점도의 흰색 현탁액이 생성될 때까지 60°C 에서 1시간동안 교반한다.</li>
							<li>전기오븐에서 100°C 로 24 시간 가열 건조한다.</li>
							<li>450°C 전기로에 넣고 온도 상승 속도는 5°C/분으로 2시간동안 어널링한다.</li>
						</ol>
					<table>
						<tr >
							<td><img src="../images/strategy/2.JPG" width={'300'} alt=''/></td>
							<td>---</td>
							<td><img src="../images/strategy/3.JPG" width={'300'} alt=''/></td>
							<td>---</td>
							<td><img src="../images/strategy/4.JPG" width={'300'} alt=''/></td>
						</tr>
						<tr >
							<td>60분 동안 교반</td>
							<td></td>
							<td>촉매 가수분해 용액</td>
							<td></td>
							<td>4시간 동안 천천히 적하</td>
						</tr>
					</table>
					<img src="../images/strategy/25.PNG" width={'500'} alt=''/>
					<br></br>
					<table>
						<tr>
							<td><img src="../images/strategy/5.JPG" width={'500'} alt=''/></td>
							<td>---</td>
							<td><img src="../images/strategy/6.JPG" width={'500'} alt=''/></td>
						</tr>
						<tr>
							<td>100°C, 24 hr 가열 건조 / 450°C 2 hr 어널링</td>
							<td></td>
							<td>SAM 사진</td>
						</tr>
					</table>

			</div>
			<br></br>

		</div>
	)
}

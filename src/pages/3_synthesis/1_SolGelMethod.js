import React from 'react';
import '../../styles/styles.css'

function SolGelMethod() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default SolGelMethod;

function MainContents() {
	const title = 'A1_SolGelMethod';

	return (
		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			{/* Black TiO2 Titanum Mesh */}
			<div className='bky'>
				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>TiO2 Sol-Gel반응의 전구체(TiO2 precursor)</u></b></h5>
				<hr className='hrstyle'/>

				<p><b><u>1. TiO2 전구체(TiO2 precursor) </u></b></p>
				<ul>
					<li><img src="../images/application/9.jpg" width={'600'} alt=''/><br/>
					<img src="../images/application/11.jpg" width={'400'} alt=''/><br/>
					(a)titanium isopropoxide(TIP), (b)titanium tetrabutoxide(TBO), (c)titanium ethylhexoxide(TEO), (d)titanium diisopropoxide bis(acetylacetonate)(TDB)</li>
				</ul>			
				
				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>알코올의 반응</u></b></h5>
				<hr className='hrstyle'/>

				<p><b><u>1. 알코올 </u></b></p>
				<ul>
					<li><img src="../images/application/4.png" width={'100'} alt=''/><br/></li>
					<li> 하이드록시기(-OH)의 숫자에 따라 1가 알코올, 2가 알코올, 3가 알코올 등으로 분류한다.</li>
					<li>1가 알코올로는 메탄올, 에탄올 등이 있다. </li>
					<li>2가 알코올은 글리콜(glycol)이라는 총칭으로 불리기도 하며, 2가 알코올은 에틸렌글리콜, 프로필렌글리콜 등이 있다</li>
					<li> 알킬기(일반식 R)의 수에 따라 0차 알코올, 1차(primary) 알코올, 2차(secondary) 알코올, 3차(tertiary) 알코올로 분류하기도 한다.</li>
					<li>메탄올만이 0차 알코올,  1차 알코올은  에탄올, 프로판올</li>
					<li></li>
					<li></li>
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>2. 금속과의 반응</u></b></p>
				<ul>
					<li>알코올은 나트륨과 같은 알칼리 금속이나 알칼리 토금속과 반응하여 수소 기체(H2)를 발생시킨다. </li>
					<li>2C2H5OH + 2Na → 2C2H5ONa + H2</li>
					<li>이렇게 알코올과 금속이 반응하여 생성된 물질을 알콕사이드(alkoxide)라고 부른다. </li>
					<li>나트륨메톡사이드(Natrium-Methoxide) = Natrium(metal) + <u>Meth</u>ane(alkanes) + oxide(산화물)</li>
					<li><img src="../images/application/TTIP.png" width={'200'} alt=''/><br/>
					Titanium Tetra Isopropoxide(TTIP)</li>
					<li></li>
					<li><a href="" target='_blank' rel=""></a></li>					
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>3. 에스터화 반응</u></b></p>
				<ul>
					<li>에스터는 알코올과 카복실산으로부터 합성할 수 있는데, 이 반응을 에스터화 (에스테르화) 반응이라고 한다.</li>
					<li>R-OH + R'-COOH → R-COO-R' + H2O</li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>4. 산화 반응</u></b></p>
				<ul>
					<li>1차 알코올은 최대 두 번 산화될 수 있으며, 알데하이드(R-CHO)나 카복시산(R-COOH)이 생성된다.</li>
					<li>2차 알코올은 한 번 산화되어 케톤(RR'C=O)을 생성된다.</li>
					<li>3차 알코올은 거의 산화되지 않는다.</li>
					<li><img src="../images/application/16.jpg" width={'800'} alt=''/><br/></li>
					<li></li>
					<li></li>
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>5. 탈수 반응</u></b></p>
				<ul>
					<li>탈수 반응은 1차 알코올의 경우 비교적 고온에서 일어나지만 알코올의 차수가 높아지면 실온 정도의 온도에서도 일어난다. </li>
					<li><img src="../images/application/17.jpg" width={'800'} alt=''/><br/></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<hr className='hrstyle'/>
				<h5 className='h5style'><b><u>Sol Gel 반응</u></b></h5>
				<hr className='hrstyle'/>

				<p><b><u>1. Sol Gel 반응의 기초</u></b></p>
				<ul>
					<li>금속 알콕사이드(M-OR)의 가수분해(hydrolysis)와 응축(condensation) 반응을 통하여 주로 금속 산화물을 만드는 반응</li>
					<li>Sol: 액체상에 고체 입자가 콜로이드 상태로 분산되어 있는 상태</li>
					<li>콜로이드란 1-1000 nm의 미세입자로 표면전하 혹은 응집력의 큰 물질이며 상대적으로 중력의 영향이 작아 매체 내에서 분산 혹은 부유하는 상태</li>
					<li>기체 aerosol, 액체 emulsion</li>
					<li>Gel: 연속적인 골격을 유지한 상태의 콜로이드 상태를 의미한다.</li>
					<li>분산매체가 물 hydrogel or aquagel, 알코올 alcogel, 공기 aerogel 이라한다.</li>
					<li>젤내부에 있는 액체를 제거한 형태를 xerogel</li>
					<li></li>
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>2. 금속 알콕사이드</u></b></p>
				<ul>
					<li>Alkoxide: M(OR)n</li>
					<li>알코올의 히드록시기 －OH의 수소원자를 금속원자로 치환한 화합물</li>
					<li>M : 금속원자, R : 알킬사(alkyl chain), n: 알콕사이드의 반복수</li>
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>3. 졸의 제조</u></b></p>
				<ul>
					<li>Ti 유기 화합물인 알콕사이드 M(OR)m 는 X-OH 종과 반응</li>
					<li>Ti(OR)m + nHOH → Ti(OR)m-n (OH)n + nROH</li>
					<li>가수분해반응(Hydrosis) : <br/>
					Ti-OR + HO-H → M-OH + ROH</li>
					<li>알콜축합반응(Condensation) : <br/>
					Ti-OH + Ti-OH → Ti-O-Ti + H2O<br/>
  				Ti-OH + Ti-RO → Ti-O-Ti + R-OH
					</li>
					<li></li>
					<li></li>
				</ul>
				<hr className='hrstyle'/>

				<p><b><u>4. TTIP 가수분해에서 물과 알콕사이드(OR,O(CH3)2)의 양론적 검토</u></b></p>
				<ul>
					<li>Ti(O(CH<sub>3</sub>)<sub>2</sub>)<sub>4</sub> + 4H<sub>2</sub>O → Ti(OH)<sub>4</sub> + 4 C<sub>2</sub>H<sub>5</sub>OH<br/>
					(O(CH<sub>3</sub>)<sub>2</sub>)<sub>4</sub>로 (알콕사이드,OR) 4몰 이므로 H<sub>2</sub>O도 4몰 필요하다</li>
					<li>(알콕사이드,OR) 4몰, H<sub>2</sub>O 4몰의 균형이 맞지 않아도 반응은 일어난다.<br/>
					</li>H<sub>2</sub>O 이 4몰 이상인 경우는 (RO) 농도가 희석되어 젤(Ti(OH)<sub>4</sub>) 형성에 시간이 길어진다.
					<li>TTIP 같은 전구체의 알킬사슬의 갈이가 길어지면 가수분해속도가 느려진다.<br/>
					titanium tetraisopropoxide(TTIP) &#62; (b)titanium tetrabutoxide(TTBO) &#62; titanium ethylhexoxide(TEO) &#62; titanium diisopropoxide bis(acetylacetonate)(TDB)</li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>5. 물과 알콕사이드의 비율 </u></b></p>
				<ul>
					<li>TTIP 같은 알콕사이드 전구체들은 약한 소수성 물질이므로 물과 잘 섞이지 않는다. </li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>5. </u></b></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>5. </u></b></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>5. </u></b></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>5. </u></b></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>5. </u></b></p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p><b><u>참고문헌</u></b></p>
				<ol>
					<li><a href="" target='_blank' rel=""></a></li>
					<li><a href="" target='_blank' rel=""></a></li>
				</ol>


			</div>


		</div>
	)
}


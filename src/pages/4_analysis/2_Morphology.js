import React from 'react';
import '../../styles/styles.css'

function Morphology() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default Morphology

function MainContents() {
	
	const title = 'Morphology analysis(SEM, TEM)';

  return (
    <>
      <h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

      <p>------------------------------------------------------------------------</p>
      
      <p></p>
      <p></p><a href='https://doi.org/10.1021/acs.jpcc.1c01922' target='_blank' rel="">Controlled Loading of MoS2 on Hierarchical Porous TiO2 for Enhanced Photocatalytic Hydrogen Evolution </a>
      <ol>
        <li>d = 0.354 nm로 아나타제 TiO2의 (101) 평면과 일치 하고 다른 하나는 d=0.65nm로 아나타제 TiO2의 (002) 평면과 일치.</li>
        <li></li>
        <li></li>
      </ol>
      <img src="../images/analysis/4.gif" width={'auto'} alt=''/>


      <img src="../images/analysis/5.gif" width={'auto'} alt=''/>


      <p>------------------------------------------------------------------------</p>
      <h4><u><b>TiO2의 형상에 따른 차이(structural design/morphology)</b></u></h4>
      <br/>
			<a href="https://www.sciencedirect.com/science/article/pii/S0926337320301508" target='_blank' rel="">Role of titanium dioxide (TiO2) structural design/morphology in photocatalytic air purification</a>
			<br/>

      <img src="../images/analysis/16.jpg" width={'600'} alt=''/>
        <table class="table">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th>solid spheres</th>
              <th>mesoporous pheres</th>
              <th>hollow spheres</th>
              <th>nanosheets</th>
              <th>nanotubes</th>
              <th>3-D sea urchi-like</th>
              <th>3-D hierarchically porous</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <th scope="row">1</th>
              <td>
                100 mL 무수에탄올에<br/> 
                potassium chloride(0.1 M)를 <br/>
                0.4 mL 천천히 첨가<br/>
                titanium tetra isopropoxide(TTIP)를<br/>
                2.5 mL 적하<br/>
               </td>
              <td>
                H2SO4 2M 80mL 에<br/>
                titanium tetrabutoxide(TBOT)<br/>
                1.4mL를 천천히 첨가<br/> 
              </td>
              <td>
                증류수 80mL에<br/>
                Ti(SO4)2 0.4160g을 녹인 후 <br/>
                15분간 교반<br/>
                0.0177g NH4F를 <br/>
                격렬하게 혼합하면서 첨가<br/>
              </td>
              <td>
                14.56mL TTIP<br/>
                2.0g TiF4<br/>
                4.88mL 2-프로판올<br/>
                1.2mL H2O<br/>
                0.4mL HCL<br/>
              </td>
              <td>
                NaOH 7.5M 80mL에 <br/>
                P25 분말 2g 첨가<br/>
              </td>
              <td>
                TBOT 0.5mL 와<br/>
                NaOH 1M(수용액) 26mL를 혼합<br/>
              </td>
              <td>
                질산 0.01M 와<br/>
                TBOT를 천천히(~2ml/min) 첨가<br/>
                상온에서 24시간 동안 숙성<br/>
              </td>
            </tr>
            <tr className="table-warning">
              <th scope="row">2</th>
              <td>
                20분 동안 교반한 후 <br/>
                상온에서 24시간 동안 숙성<br/>
                원심분리<br/>
                증류수와 에탄올로 3회 세척<br/>
                120°C에서 20시간 동안 건조<br/>
                무정형 TiO2 형성<br/>
              </td>
              <td>
                20분 동안 교반한 후<br/>
              </td>
              <td>
                20분 동안 교반<br/>
              </td>
              <td>

              </td>
              <td>
                30분간 교반<br/>
              </td>
              <td>
                10분 동안 교반<br/>
                5분간 초음파 처리<br/>
                53mL의 에틸렌 글리콜을 용액에<br/>
                위 용액 첨가 후<br/>
                10분간 격렬 교반<br/>
              </td>
              <td>

              </td>
            </tr>
            <tr className="table-info">
              <th scope="row">3</th>
              <td>
                오토클레이브(180°C, 12시간)
              </td>
              <td>
                오토클레이브(160°C, 6시간)<br/>
              </td>
              <td>
                오토클레이브(180°C, 12시간)<br/>
              </td>
              <td>
                오토클레이브(180°C, 24시간)<br/>
              </td>
              <td>
                오토클레이브(160°C, 24시간)<br/>
              </td>
              <td>
                오토클레이브(180°C, 12시간)<br/>
              </td>
              <td>
                오토클레이브(180°C, 6시간)<br/>
              </td>
            </tr>
            <tr className="table-danger">
              <th scope="row">4</th>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td>
                0.1M HCl과 증류수로 세척<br/>
                여과<br/>
                450°C에서 2시간 하소
              </td>
              <td>
                550°C에서 2시간하소
              </td>
              <td>
                350°C에서 6시간 하소
              </td>
            </tr>
          </tbody>
        </table>

      <img src="../images/analysis/15.PNG" width={'auto'} alt=''/>
      <br/>
      <br/>

      <h5><u><b>1. TiO2 solid microspheres (TSMS)</b></u></h5>
      <br/>
      <img src="../images/analysis/4.jpg" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/5.jpg" width={'auto'} alt=''/>
      <br/>
      <ul>
        <li>직경이 약 300-800nm 거친 표면을 가진 고체구</li>
        <li>TiO2의 좋은 결정화와 TiO2 결정의 성장을 의미</li>
        <li>결정형성 과정에, 표면 에너지를 낮추기 위해 핵화된 입자는 다양한 기하학적 구조를 가진 덩어리를 형성하는 경향이 있습니다.</li>
        <li>구형 응집체를 형성하면 최소 표면 대 부피 비율이 유지되므로 최소 표면 자유 에너지를 기진 결정으로 성장</li>
        <li>Ti, O, C 원소를 함유</li>
        <li>O 1s, Ti 2p 및 C 1s의 고해상도 스펙트럼</li>
        <li>Cl은 미량 함유, 이는 KCl 사용으로 인해 발생 </li>
        <li>O1s 피크는 많은 양의 표면 수산기 그룹(531.78eV의 강한 피크)을 보유하고 있음을 보여준다. </li>
        <li> Ti 2p 스펙트럼은, 464.8 및 459.1 eV의 피크는 각각 Ti 4+ 2p 1/2 및 Ti 4+ 2p 3/2 에 기인</li>
        <li>이는 Ti 원소의 산화 상태가 벌크 TiO 2 와 유사함을 나타낸다.</li>
        <li>457.9 eV에 위치한 작은 피크는 Ti 3+ 에 기인한다.</li>
        <li>2p 3/2. 피크의 존재는 표면에 두 가지 유형의 티타늄 종이 있음을 나타낸다.</li>
        <li>Ti(III) 산화물은 TiO2 에 비해 밴드 갭이 더 작으며 에너지 준위는 TiO2 의 VB 및 CB 내에 속한다 .</li>
        <li>Ti(III) 산화물의 VB에 있는 전자가 TiO 2 의 CB로 여기 되어 우수한 e - -h + 분리 및 가시광선 활성을 나타낼 수 있다고 제안</li>
        <li>C 1s 영역의 스펙트럼에서는 286.9eV에서 상대적으로 강한 피크가 발견된다.</li>
        <li>이 결합 에너지의 피크는 일반적으로 수산기 탄소(C\u2012OH)에 기인하며</li>
        <li>이는 수열 반응 중 이소프로판올의 합성 또는 방출 중 에탄올의 사용으로 인해 발생했을 수 있다.</li>
      </ul>

      <h5><u><b>2. TiO2 mesoporous microspheres (TMMS)</b></u></h5>
      <br/>
      <img src="../images/analysis/6.jpg" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/7.jpg" width={'auto'} alt=''/>
      <ul>
        <li>평균 직경이 약 3.5μm인 구형 형태</li>
        <li>표면이 수많은 작은 정사각형 나노플레이트로 덮여 있다.</li>
        <li>내부구조를 확인하기 위해 샘플을 막자사발에서 갈아서 미소구체를 부수고 내부 영역을 검사했다.</li>
        <li>깨진 미소구체의 단면 SEM 이미지를 보면 구가 중심에서 방사상으로 정렬된 1차원 나노 막대 로 구성되어 있음을 알수있다. </li>
        <li>표면 나노플레이트는 크기가 다양하며 11nm에서 17nm 사이이다. </li>
        <li>[101] 반사 피크를 사용하여 평균 아나타제 결정 크기는 16.6 nm로 추정되었으며 이는 HR-TEM 이미지에서 볼 수 있는 결정 크기와 잘 일치한다. </li>
        <li>TBOT 전구체의 높은 가수분해 속도를 고려하면 핵 생성 및 성장이 매우 빠르며 큰 침전물이 형성될 수 있다. </li>
        <li>열수 용액에 황산을 사용하면 가수분해 및 티타니아 성장 속도가 느려지고 결과적으로 형태를 더 잘 제어할 수 있다. </li>
        <li>이는 혼합 과정(20분 동안 지속) 동안 반응 용액이 완전히 투명하고 고체 입자가 보이지 않았기 때문에 준비 단계에서 시각적으로 입증되었다.</li>
        <li>XPS 스펙트럼은 열수 처리된 샘플에 Ti, O 및 C만 포함되어 있으며 황산투여에 의한 황 오염 징후가 없음을 보여준다. </li>
        <li>O1s 영역의 고해상도 스펙트럼은 TSMS와 비교하여 TMMS가 표면 수산기를 나타내는 531.8eV에서 덜 강렬한 피크를 가짐을 보여준다.</li>
        <li>반면, Ti 2p 스펙트럼의 deconvolution은 Ti 3+ 대 Ti 4+ 비율이 TSMS에 비해 TMMS에서 훨씬 높다</li>
      </ul>


      <h5><u><b>3. TiO2 hollow spheres (THS)</b></u></h5>
      <br/>
      <img src="../images/analysis/8.jpg" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/9.jpg" width={'auto'} alt=''/>
      <ul>
        <li>직경이 약 1μm인 다수의 마이크로 크기 구체, 벽은 9-22 nm 범위의 크기</li>
        <li>미세구의 다공성 구조와 속이 빈 내부를 명확하게 봏수있다.</li>
        <li> NH4F 없이 제조하면 고체 TiO2 집합체가 생성된다.즉 중공사를 위해서는 불소 이온의 존재가 필수적이다.</li>
        <li>XPS스펙트럼은 Ti, O, C 및 F 원소가 포함</li>
        <li>684 eV의 작은 피크는 준비 중에 NH4F에서 나오는 F 1s 에 기인한다.</li>
        <li>이 피크 는 불소와 표면 수산기 사이의 리간드 교환(즉, 물리적으로 흡착된 F-)에 의해 형성(표면 Ti F의 삼중결합, 결합 에너지 ~688.5 eV)</li>
        <li>Ti(III) 피크의 무시할 수 있는 면적은 속이 빈 구의 표면에 산소 결손이 적다는 것을 의미</li>
        <li>Ti4+ 와 Ti3+ 종 사이의 몰비는 산소 결함(결손) 농도의 척도로 볼수있다.</li>
      </ul>


      <h5><u><b>4. TiO2 nanosheets (TNS)</b></u></h5>
      <br/>
      <img src="../images/analysis/10.jpg" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/11.jpg" width={'auto'} alt=''/>
      <ul>
        <li>TiO2 나노시트는 상대적으로 낮은 온도에서 용매열 경로를 통해 합성되며, 높은 결정성과 종횡비를 가진다.</li>
        <li>측면 치수가 약 50-70nm인 직사각형, 시트의 두께는 약 4.5~6.5 nm</li>
        <li>아나타제의 [001]과 [101] 격자 평면 사이의 이론적 각도(68.3 ± 0.3°)와 일치</li>
        <li>460(Ti 2p), 531(O 1s), 685(F 1s) 및 285 eV(C 1s)의 결합 에너지에서 나타난다.</li>
        <li>표면 수산기와 관련된 O 1s 피크는 다른 형태에 비해 준비된 나노시트에서 매우 작다.</li>
      </ul>


      <h5><u><b>5. TiO2 nanotubes (TNT)</b></u></h5>
      <br/>
      <img src="../images/analysis/12.jpg" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/13.jpg" width={'auto'} alt=''/>
      <ul>
        <li>O 1s 영역의 고해상도 스펙트럼으로 판단하면 고온에서의 최종 소성은 표면 OH 그룹의 상당 부분을 제거한다. </li>
        <li>Ti(III) 2p 3/2 피크의 낮은 강도</li>
        <li>Cl은 조사 스펙트럼에서 발견되는데, 이는 아마도 HCl을 사용한 산 세척 단계에서 나온 것일 가능성이 높다.</li>
      </ul>


      <h5><u><b>6. TiO2 sea-urchin (TSU)</b></u></h5>
      <br/>
      <img src="../images/analysis/14.jpg" width={'auto'} alt=''/>
      <br/>
      <img src="../images/analysis/15.jpg" width={'auto'} alt=''/>
      <ul>
        <li>530.5 및 531.8 eV의 강한 피크는 각각 격자 산소 및 표면 OH 그룹에 기인</li>
        <li>이는 이러한 OH기가 표면에 강하게 결합되어 있음을 시사</li>
      </ul>


    </>

  );
}	
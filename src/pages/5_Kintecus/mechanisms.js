import React from 'react';
import '../../styles/styles.css'

function Mechanisms() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default Mechanisms;

function Contents() {
	const title = 'Quantum Yield Kinetcs Analysis';

	return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<hr className='class-1'/>
			<h5 className='h5style'><b><u>heterogeneous kinetics</u></b></h5>	
			<ul>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2021/cy/d1cy01657a" target='_blank' rel="">g-C3N4 kinetics modelling</a></li>
				<li><a href="../images/kinetics/반응 참고자료.hwp" target='_blank' rel="">g-C3N4 kinetics modelling 첨부문서 hwp</a></li>

			</ul>

			<hr className='class-1'/>
			<h5 className='h5style'><b><u>Quantum Yield</u></b></h5>	
			<ul>
				<li><a href="../images/kinetics/라디칼의 형성 해석 정리.hwp" target='_blank' rel="">Quantum, 라디칼 정리 hwp</a></li>
				<li><a href="https://pubs.acs.org/doi/full/10.1021/jp9505800" target='_blank' rel="">Determination of the Quantum Yield for the Photochemical Generation of Hydroxyl Radicals in TiO2 Suspensions</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1010603021004962" target='_blank' rel="">TiO 2 에 대한 As(III)의 광촉매 산화 중 산화 속도 및 양자 수율 결정</a></li>
				<li><a href="" target='_blank' rel=""></a></li>
			</ul>

			<hr className='class-1'/>
			<h5 className='h5style'><b><u> reversed double-beam photoacoustic spectroscopy (이중 빔 광음향 분광기, RDB-PAS)</u></b></h5>	
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0013468617327342?via%3Dihub" target='_blank' rel="">Reversed double-beam photoacoustic spectroscopy of metal-oxide powders for estimation of their energy-resolved distribution of electron traps and electronic-band structure</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/CC/C9CC09988C" target='_blank' rel="">Energy-resolved distribution of electron traps for O/S-doped carbon nitrides by reversed double-beam photoacoustic spectroscopy and the photocatalytic reduction of Cr(vi)</a></li>
				<li><a href="https://www.mdpi.com/2073-4344/9/12/1010" target='_blank' rel="">Correlation of the Photocatalytic Activities of Cu, Ce and/or Pt-Modified Titania Particles with their Bulk and Surface Structures Studied by Reversed Double-Beam Photoacoustic Spectroscopy</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0920586117308398?via%3Dihub" target='_blank' rel="">Identification and characterization of titania photocatalyst powders using their energy-resolved distribution of electron traps as a fingerprint</a></li>
			
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/CC/C6CC04999K" target='_blank' rel="">A fingerprint of metal-oxide powders: energy-resolved distribution of electron traps</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/acs.jpclett.1c00262" target='_blank' rel="">전자 상태의 밀도 결정을 위한 결합된 분광학적 방법: 확산 반사 분광전기화학과 역 이중빔 광음향 분광학의 비교 분석</a></li>
				
				<li><a href="https://pubs.acs.org/doi/10.1021/acsomega.3c00820" target='_blank' rel="">Defective TiO2 Nanotube Arrays for Efficient Photoelectrochemical Degradation of Organic Pollutants</a></li>
				<li><a href="" target='_blank' rel=""></a></li>
				
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0360319920312234#fdk4" target='_blank' rel="">물-메탄올 현탁액에서 TiO 2 와 결합된 MoS 2 “무기 풀러렌” : 축적된 전자 전달을 통해 작동하는 고활성 수소 생산 광촉매</a></li>
				<li><a href="" target='_blank' rel=""></a></li>
				
			</ul>
			<hr className='class-1'/>
			<h5 className='h5style'><b><u>광촉매의 1차활성종 분석을 위한 분광학적 방법</u></b></h5>
			<a href="https://www.mdpi.com/1420-3049/19/11/18248" target='_blank' rel="">광촉매 메커니즘의 분광학적 조사</a>
			<p>광촉매 메커니즘을 명확히 하기 위해서는 광촉매 시스템에서 전자, 정공, •O2- 및 •OH와 같은 1차 활성종(primary active species)을 적절하고 신뢰성 있게 검출하는 것이 필요하다.</p>
			<h6>1. ESR(전자 스핀 공명, Electron Spin Resonance Spectroscopy) 분광법</h6>
			<ul>
				<li>ESR 분광법은 일반적으로 짝을 이루지 않은 전자를 검출하는 데 사용한다.</li>
				<li>광촉매 반응은 광여기된 전자에 의한 반응물의 환원과 정공에 의한 반응물의 산화라는 두 가지 반응에 의해 진행된다.</li>
				<li>TiO2 광촉매 시스템에서는 흡수된 광자에서 두 종류의 활성종(광여기된 전자와 정공)이 생성됩니다.</li>
				<li>전자와 정공 중 일부는 Ti와 O 원자에 갇혀 각각 Ti3+ 와 O- 가 된다 .</li>
				<li>따라서 서로 다른 파장의 빛을 조사하여 ESR 분광법을 사용하여 이러한 포획된 전자와 정공을 검출함으로써 여기된 종의 생성 거동을 조사할 수 있다. </li>
				<li>또한, 광촉매와 조촉매 사이의 전자 이동도 조사할 수 있는데, 이는 전자 이동이 일어나면 광 조사 전후에 조촉매 내 짝을 이루지 않은 전자의 양이 변화해야 하기 때문이다. </li>
				<li>따라서 ESR 분광법은 광촉매 반응 메커니즘을 밝히는 데 매우 유용합니다.</li>
			</ul>
			<h6>2. 화학발광 측광법(Chemiluminescence Photometry)</h6>
			<ul>
				<li>슈퍼옥사이드 라디칼(•O2-) 및 H2O2와 같은 환원된 산소 분자는 루미놀(LH2 , 아미노디아자벤조퀴논) 을 사용한 화학발광으로 검출할 수 있다 . </li>
				<li>1전자 산화 상태의 루미놀(•L-)은 •O2- 와 반응하여 들뜬 상태의 3-아미노프탈산을 형성하여 알칼리성 용액에서 형광을 방출합니다</li>
				<li>여기서 L- 는 산화에 의해 LH2 에서 형성됩니다. •O2-로. •O2- 는 알칼리 용액에서 비교적 안정하므로 광촉매 조사를 중단한 후 루미놀을 주입하여 화학발광 강도로 •O 2 - 의 양을 측정합니다.</li>
				<li>LH2 의 2전자 산화 상태인 L과의 반응에 의해 H2O2 에서도 동일한 화학발광이 얻어졌다 .</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<h6>3. 형광 프로브 방법(Florescence Probe Method)</h6>
			<ul>
				<li>•OH 검출을 위해 우리는 쿠마린을 사용 OH와 반응하여 강한 형광을 방출하는 7-OH 쿠마린(umbelliferone)을 생성합니다</li>
				<li>광촉매 분말이 포함된 쿠마린 수용액에 일정 시간 조사한 후, 용액 내 형광생성물(umbelliferone)의 형광세기를 측정하</li>
				<li>•OH 농도는 방사선 화학 데이터의 도움을 받아 umbelliferone의 농도로부터 계산할 수 있습니다</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<h6>4. NMR(핵자기공명,Nuclear Magnetic Resonance) 분광학</h6>
			<ul>
				<li>1 H-NMR 분광법은 광촉매 시스템에서 반응물 분자의 거동을 조사하는 효과적인 기술</li>
				<li>먼저, 용매에 용해된 유기분자의 1 H-NMR을 측정한다.</li>
				<li>그런 다음 일정량의 광촉매가 용액에 추가한다.</li>
				<li>해당 반응물 분자의 1 H-NMR 피크 강도의 초기 감소로부터 흡착량을 추정할 수 있다. </li>
				<li>그런 다음 다양한 광조사 시간에 따른 반응물 분자의 강도 감소를 측정하여 반응물의 광분해 속도를 추정할 수 있다</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</>
	);
}	

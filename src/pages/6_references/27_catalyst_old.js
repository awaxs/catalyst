import React from 'react';
import '../../styles/styles.css'

function CatalystOld() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default CatalystOld;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h5>------ 촉매 특성 분석 ------------------------------</h5>
			<ol>
			<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6756545/" target='_blank' rel="">촉매 특성분석 자세한 설명 논문</a></li>
			</ol>
			<h3>박리</h3>
			<ol>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2019/cp/c8cp06855k#divAbstract" target='_blank' rel="">열 화학적 박리 비교</a></li>
			</ol>
			<h3>1. g-C3N4 NO3 NH4 동시제거</h3>
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894718309380" target='_blank' rel="">티오우레아 NO3 NH4 동시제거 </a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/acsomega.8b00677" target='_blank' rel="">ZnFe2O4/AC  아연 페라이트 / 활성 탄소 하이브리드 촉매</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0304389418308409?via%3Dihub" target='_blank' rel="">질산염과 암모니아 동시 제거를위한 전기 화학 시스템의 메커니즘 및 최적화</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169433219326236" target='_blank' rel="">ZnFe2O4 gC3N4 Methylene blue</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894718314128" target='_blank' rel="">Visible-light-driven photocatalytic degradation of ciprofloxacin by a ternary Mn2O3/Mn3O4/MnO2 valence state heterojunction</a></li>
			</ul>
			<h3>페라이트 + 흡착 -- PO4-2 제거</h3>
			<ul>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp0732763">ZnFe2O4 자성체</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894716313377?via%3Dihub">ZnFe2O4 자성체 제조방법</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894718302249">Fe Zn 자기장이용 인산염 흡착</a></li>
			</ul>
			<h3>페라이트 + 중금속 이온 제거</h3>
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0021979715005354?via%3Dihub">g-C3N4 for heavy metal ions from aqueous solutions</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894719320030">자성 CoFe-LDH / gC3N4에 의한 Cr(VI)의 제거</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0025540814001706">Solvothermal synthesis in ethylene glycol and adsorption property of magnetic Fe3O4 microspheres</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1226086X17300722">TiO2 코팅된 자성 폴리아크릴아미드+키토산 그래프트 중공합</a></li>

			</ul>
			<h5>--------- 층상 이중 수산화물 (LDH) 흡착제로의 검토- 점토-------------------------------------------------------</h5>
			<ol>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/mh/c9mh01494b#divAbstract">기능화 된 층상 이중 수산화물</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/CS/C5CS00758E#divAbstract">Tuning two-dimensional nanomaterials by intercalation: materials, properties and applications</a></li>
				<li><a href="https://www.nature.com/articles/nature12385">Van der Waals 이종 구조</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0043135407006914">음이온 제거를위한 층상 이중 수산화물</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169131708000963">입자 크기 제어(열수합성,글리세롤)</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/ra/c6ra12727d#divAbstract">인 흡착제 및 광촉매</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894713001368?via%3Dihub">G–MgAl-LDH</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/cr200434v">Synthesis and Application of LDH 리뷰 </a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/ta/c9ta13522g#divAbstract">*****AOP + LDH*****</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337318309536?via%3Dihub">g-C3N4 + LDH ( 10분 99%)</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169131719301826?via%3Dihub">g-C3N4 + Mg–Al LDH/MMO</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/dt/c8dt01045e#divAbstract">photocatalytic activity of mixed-metal oxides derived from NiCoFe ternary layered double hydroxides</a></li>
				
			</ol>
			<h5> ---------------- 플라즈몬 공명 ---------------------------------------------------</h5>
			<ol>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/TA/C7TA10375A#divAbstract">플라스 몬 매개 광촉매의 최근 개발과 선택성 조절의 잠재력</a></li>
			</ol>
			<h5>--------- In-Site 합성  -------------------------------------------------------</h5>
			<ol>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S092702481630232X">함침 방법Z-scheme g-C3N4/TiO2 nanotube arrays</a></li>
			</ol> 
			<h5>----------- 전도성(폴리아닐린, 재결합억제, 화학적 안정성, 재활용, 폐수의 정화잠재력) 관련 논문 --------------------------</h5>
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S2666821120300478">수처리 용 광촉매 인 CP review</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2011/jm/c0jm02699a#divAbstract">다양한 나노 모양의 PANI 합성법</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337316300108?via%3Dihub">폴리아닐린 공액 그래 핀 나노 복합체의 광촉매 활성</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0920586113006676">광촉매를위한 시너지 효과를 가진 흑연 질 탄소 질화물 시트상의 폴리아닐린 나노로드 어레이의 계층 적 나노 복합물</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp810748u">단층 폴리아닐린과의 혼성화를 통한 산화 아연의 광 부식 억제 및 광활성 향상</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1001841707003622">TiO 2 / polyaniline 메틸렌 블루</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/ra/c6ra24079h#divAbstract">TiO 2 / polyaniline 메틸렌 블루 해석 잘되어 있슴</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp9067729">Spindle-like PANI / BiVO 4 RhB와 페놀</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/ie400739e">삼원 티타니아-코발트 페라이트-폴리아닐린 나노 복합체 </a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0920586113006354?via%3Dihub">PANI / Bi2WO6 스텐철망</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S129325581400226X?via%3Dihub">Polyaniline nanotubes coated with TiO2&γ-Fe2O3@graphene oxide </a></li>
			</ul>		 
			<ol>

				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/RA/C5RA24676H#divAbstract">MoS2/gC3N4 MB염료 기계 합성</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337313007935?via%3Dihub">WO3/gC3N4 아세트알데히드(1000ppm) 기계적 교반	</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/RA/C6RA12861K#divAbstract">WO3/gC3N4 RHB (1.0×10−5 molL−1 ) 고체 합성</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337315300102?via%3Dihub">V2O5/gC3N4 RhB (10mg/L); TC (10 mg/L) 고체 합성</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2014/RA/C4RA00693C#divAbstract">MO3/gC3N4 MO(20ppm) 고체 합성 </a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2014/NR/c3nr05271k#divAbstract">ZnO/gC3N4 RhB(5mg/L) 기계적 교반</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0927024815000525?via%3Dihub">SnO2-x/gC3N4 RhB (10mgL-1 ) 고체 합성</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0025540816301866?via%3Dihub">SnS2/Ag3PO4  MO(10mgL-1 ) 열수</a></li>
				
				<li><a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/ejic.201500552">ZnS/gC3N4 MO(10mgL-1 ); 페놀(13 mgL-1 ) 열수</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0021979716310724?via%3Dihub">OK SnS2/BiOBr RhB (10mg  L -1 ) 증착-강수</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/RA/C5RA21506D#divAbstract">OK SnS2/gC3N4 MO (10mg  L -1 ) 증착-강수</a></li>
				<li><a href="https://link.springer.com/article/10.1007/s10853-014-8733-y">OK Ag2CO3/gC3N4 RhB (  5mg  L -1 ) 증착-강수	</a></li>
				
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169433216315409?via%3Dihub">Ag2WO4/gC3N4 MO (10mg  L -1 ) 증착-강수</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/RA/C6RA18648C#divAbstract">OK Ag2WO4/gC3N4 RhB (  5mg  L -1 ) 증착-강수</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2015/RA/C5RA18096A#divAbstract">OKOK Ag3PO4/gC3N4 MB (10mg  L -1 ) 기계적 교반</a></li>
				<li><a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/chem.201404284">OKOK Ag3PO4/gC3N4 에틸렌 ( 450 mL 반응기에서 90 μL C2H4 ) 기계적 교반</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337317300383?via%3Dihub">OKOKOK AgBr/MoO3 RhB (10mg  L -1 ) 증착-강수	</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2015/NJ/C4NJ01433B#divAbstract">AgBr/gC3N4 MO (10mg  L -1 ) 열수	</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2015/DT/C4DT03905J#divAbstract">BiVO4/gC3N4 RhB (1 × 10 −5 mol  L −1 ) 고체 합성	</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0304389414007183?via%3Dihub">Bi2O3/gC3N4 MB(1.1×10-5 molL-1 ); RhB (1.0×10−5 molL−1 ) 고체 합성</a></li>

				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894719329195">MoO3/Ag/C3N4 테트라사이클린 분해 한국 (CEJ 2020)</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894720321896">Pd 매개 Z-scheme Bi 2 MoO 6 / gC 3 N 4 광촉매에 의한 동시 설파 메타 진 산화 및 브롬산염 환원 : 시너지 메커니즘 및 분해 경로</a></li>
				
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0021979716303460?via%3Dihub">TiO2/gC3N4 MO 염료 자기 조립 </a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337313003366?via%3Dihub">S-TiO2/gC3N4 아세트알데히드(500ppmv) 기계</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0169433216313745?via%3Dihub">P25-TiO2/gC3N4 프로필렌 (600  ppmv)기계</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894715009602?via%3Dihub">nono-TiO2/gC3N4 OH 라디칼 측정 기계</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2013/CP/c3cp53131g#divAbstract">nono-TiO2/gC3N4 포름 알데히드 (170 ± 10 ppm)기계</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337314005773?via%3Dihub">TiOF2/gC3N4 X3B 염료 Solvothermal</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337316307433?via%3Dihub">금홍석,루틸r-TiO2/gC3N4 RhB 염료 고체 합성</a></li>
				<li><a href="https://www.degruyter.com/view/journals/gps/7/6/article-p493.xml?language=en">삼원 gC 3 N 4 / Bi 2 MoO 6 / TiO 2 나노 튜브 복합 광촉매</a></li>
			</ol>
			<h5> Z‐scheme  기타 시스템</h5>
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926860X0900372X?via%3Dihub">AgBr-Ag-Bi2WO 수중MX-5B를 분해 TOC 확인 35</a></li>
				<li><a href="https://www.nature.com/articles/nmat1734">CdS–Au–TiO2</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1566736712000593?via%3Dihub">AgI/Ag/AgBr 36</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337313003858?via%3Dihub">AgCl/Ag/γ-TaON 표면프라즈몬 공명(SPR) 현상37</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/nn2006738">Pt/CdS/Au/TiO2</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2014/TA/C3TA13687F#divAbstract">graphene oxide/Ag@AgCl</a></li>
				<li><a href="https://pubs.acs.org/doi/abs/10.1021/jp406508y">Ag3PO4/AgI</a></li>
				<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/aenm.201100528">ZnO–CdS@Cd</a></li>
				<li><a href="https://aip.scitation.org/doi/10.1063/1.2266237">WO3∕W∕PbBi2Nb1.9Ti0.1O9</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp2037476">h5WO4·h5O/Ag/AgCl</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp311996r">Ag–AgCl@Bi20TiO32</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/cs300213m">Ag/AgX/BiOX</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp906195f">CaFe2O4/WO3  공기중 아세트알데히드의 CO2로 완전산화</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/ja203296z">O2-evolving photocatalyst (BiVO4)</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337309001313?via%3Dihub">CdS–Au–TiO2</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0360319913010173?via%3Dihub">CdS/Au/TiO2</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2013/TA/c3ta01476b#divAbstract">CdS/Au/ZnO</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp109718v">α2-K10P2W17O61·15h5O</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/ja311541a">CO2 Ag/TaON–RuBLRu′</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/ja204881d">CO2 InP/[MCE2-A+MCE4]</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2013/EE/c3ee24317f#divAbstract">CO2 r-STO//InP/[RuCP])</a></li>
				


			</ul>
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0920586115000620?via%3Dihub">Magnetic field effect on heterogeneous photocatalysis</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2015/NR/C5NR01079A#divAbstract">Bi 1− x Dy x FeO 3 미립자 및 섬유 나노 구조 에서 대체 및 치수 유도 자기 기원 및 밴드 굽힘 매개 광촉매 강화</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jp037232f">초 미세 TiO 2 입자 와의 광촉매 반응에 대한 자기장 효과</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0272884215005052?via%3Dihub">Nd 도핑 된 BiFeO 3 다 강의 졸-겔 합성 및 그 특성</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2010/JM/c0jm00729c#divAbstract">Room-temperature ferromagnetic/ferroelectric BiFeO3 synthesized by a self-catalyzed fast reaction process</a></li>
				<li><a href="https://ceramics.onlinelibrary.wiley.com/doi/full/10.1111/j.1744-7402.2010.02577.x">희토류 도핑 BiFeO 3 세라믹 연구</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894717322593">N-BFO 나노 제조법magnetic bisphenol visible light</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0925838815012153?via%3Dihub">N-BFO 설명</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894718301219">g-C3N4/Bi2O2CO3/CoFe2O4</a></li>
				
			</ul>
			<h5>  g-C3N5 시트의 합성 </h5>
			<ul>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0009261419308437"> 초고 활성을 갖는 새로운 AgCl로드 gC 3 N 5 합성</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S092777572030176X">고 활성 신규 CeTi 2 O 6 / gC 3 N 5 광촉매</a></li>
				<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ange.201811061">Ordered Mesoporous C3N5 with a Combined Triazole and Triazine Framework and Its Graphene Hybrids for the Oxygen Reduction Reaction</a></li>
				
			</ul>
			<h5>g-C3N6 g-C3N7 시트의 합성</h5>
			<ul>
				<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201903572">열역학적으로 안정된 메조 다공성 C 3 N 7 및 C 3 N 6 구조를 가지며 산소 감소 반응에 대한 우수한 성능</a></li>
				
				
			</ul>
		</div>
	)
}


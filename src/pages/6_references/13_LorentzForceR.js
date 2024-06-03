import React from 'react';
import '../../styles/styles.css'

function LorentzForceR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default LorentzForceR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>13. 자기력 이용(Lorentz Force)</h3>
			<ul>
				<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/advs.201901244">자성체를 이용 전자정공 재결합 방지</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0926337320308353">Applied Catalysis B: Environmental 2021</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S2468519419301983">자성촉매 review</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0920586115000620" target='_blank' rel="">이종 광촉매에 대한 자기장 효과(H. Okumura)</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0021979715303672">gC3N4 / Fe3O4 / BiOI </a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0022024804019463">Fe3O4 나노입자 (Fe2+) 및 철(Fe3+) 이온의 공침</a></li>
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/ew/c9ew00858f#divAbstract">페라이트 합성특성 폐수처리 흡착제 </a></li>
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/ra/c8ra04599b#divAbstract">0. BiFeO3 제조법</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0272884207001289?via%3Dihub">1. BiFeO3 제조법</a></li>
					<li><a href="https://pubs.acs.org/doi/10.1021/jp910401u">2. BiFeO3 제조법</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S0272884210000234?via%3Dihub">3. BiFeO3 제조법</a></li>
					
					<li><a href="https://pubs.acs.org/doi/10.1021/jp0732763">ZnFe2O4 자성체</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894716313377?via%3Dihub">ZnFe2O4 자성체 제조방법</a></li>

			</ul>

		</div>
	)
}

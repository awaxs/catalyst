import React from 'react';
import '../../styles/styles.css'

function NReduction() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default NReduction;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>2. g-C3N4</h3>
			<h5>++++ NO3 환원 ++++</h5>
					<ol>
						<li><a href="https://www.sciencedirect.com/science/article/pii/S0048969717310902">Challenges in photocatalytic reduction of nitrate as a water treatment technology</a></li>
						<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894718309380">Magnetic field enhanced denitrification in nitrate and ammonia contaminated water under 3D/2D Mn2O3/g-C3N4 photocatalysis</a></li>
						<li><a href="https://www.mdpi.com/2073-4344/12/3/321">Photocatalytic Reduction of Nitrates and Combined Photodegradation with Ammonium</a></li>
						<li><a href="https://pubs.rsc.org/en/content/articlehtml/2022/ta/d2ta04611c">Reaction mechanism and selectivity regulation of photocatalytic nitrate reduction for wastewater purification: progress and challenges</a></li>
						<li><a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/cctc.201900890">Semi-Batch Photocatalytic Reduction of Nitrates: Role of Process Conditions and Co-Catalysts</a></li>
						<li><a href="https://pubs.rsc.org/en/content/articlelanding/2016/cy/c6cy01858k">Superior performance of CuInS2 for photocatalytic water treatment: full conversion of highly stable nitrate ions into harmless N2 under visible light</a></li>
						
						
						<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894718309380">티오우레아 NO3 NH4 동시제거 </a></li>
						<li><a href="https://www.sciencedirect.com/science/article/pii/S0304389418308409?via%3Dihub">질산염과 암모니아 동시 제거를위한 전기 화학 시스템의 메커니즘 및 최적화</a></li>
						
						
						
						
						
					</ol>

		</div>
	)
}

import React from 'react';
import '../../styles/styles.css'

function ZSchemeR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default ZSchemeR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>4. Z-Scheme</h3>
			<h5>------ Z-scheme 설명 논문 ------------------------------</h5>
				<ol>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S1226086X19303697" target='_blank' rel="">설계방법(중요함) : design Z-scheme photocatalysts</a></li>
					<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/smtd.201700080" target='_blank' rel="">Direct Z-Scheme 광촉매 검토</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S1385894719329092" target='_blank' rel="">Z-scheme 총정리 화학공학회논문집 </a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S1369702118302761?via%3Dihub" target='_blank' rel="">직접 Z-scheme 광촉매 : 원리, 합성 및 응용, 종류별 표정리</a></li>
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/ta/c8ta03669a#divAbstract" target='_blank' rel="">스피넬 광촉매</a></li>
					<li><a href="https://pubs.rsc.org/lv/content/articlehtml/2018/en/c7en01031a" target='_blank' rel="">Z-Scheme Ti Bi Ag별로 설명함(2018 우한공대)</a></li>
					<li><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201500033" target='_blank' rel="">Z-Scheme 광촉매(2015 우한공대)</a></li>
					<li><a href="https://pubs.rsc.org/lv/content/articlehtml/2019/nr/c9nr03218e" target='_blank' rel="">근적외선 물 분할을위한 고체 Z 방식 근적외선</a></li>
					<li><a href="https://pubs.acs.org/doi/10.1021/acs.nanolett.5b01581" target='_blank' rel="">근적외선 WO2–NaxWO3 IR 구동 광촉매 물 분할</a></li>
					<li><a href="https://www.sciencedirect.com/science/article/pii/S1010603020303166" target='_blank' rel="">근적외선 프로토포르피린 IX</a></li>
	
				</ol>	

		</div>
	)
}

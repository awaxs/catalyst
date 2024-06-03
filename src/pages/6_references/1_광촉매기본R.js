import React from 'react';
import '../../styles/styles.css'

function 광촉매기본R() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 광촉매기본R;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>1. 광촉매 기본</h3>
			<ol>
				<li><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/anie.201201200'>광촉매 반응 메카니즘 설명</a></li>
				<li><a href='https://m.blog.naver.com/PostView.nhn?blogId=release&logNo=220078950406&proxyReferer=https:%2F%2Fwww.google.com%2F'>전자 오비탈 설명(HOMO LUMO)</a></li>
				<li><a href='https://www.nature.com/articles/srep40907'>주기율표와 반응</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S1383586617304082'>VB CV 계산</a></li>
				<li><a href='file:///C:/Users/Jeongts/Downloads/10.1016j.seppur.2017.05.007.pdf'>VB CV 이론</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlelanding/2014/DT/c3dt53613k#divAbstract'>VB CV</a></li>
				<li><a href='https://www.sciencedirect.com/science/article/pii/S0926337314005037'>P-N접합과 VB CV - 페르미</a></li>
				<li><a href='http://icsd.kisti.re.kr/icsd/icsd_chemistry.jsp'>무기결정구조 데이터 ICSD, Inorganic Crystal ... - KISTI ICSD</a></li>
				<li><a href='https://pubs.acs.org/doi/10.1021/cr100454n'>태양 광촉매 응용 분야를위한 고급 나노 아키텍처</a></li>
			</ol>
			<h5>------ 가시 광선 광촉매 : 전망과 과제 ------------------------</h5>
			<ol>
				<li><a href="https://www.mdpi.com/2073-4344/8/2/74/htm">가시광선 기반 광촉매를위한 gC3N4 기반 나노물질</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S2666821120300703?dgcid=raven_sd_via_email">가시 광선 대응 WO 개발 검토3환경 응용을위한 기반 광촉매</a></li>
			</ol>
			<h5>------ 기초 이론 ------------------------</h5>	
			<ol>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/cs/2017/c7cs00256d#divAbstract">그래핀 표면의 물리 및 화학</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2020/cp/d0cp02411b">광촉매에서 scavenger 사용: 진실, 반쪽 진실, 그리고 오해</a></li>
				<li><a href="https://www.pnas.org/doi/10.1073/pnas.2023552118">광촉매 공진화를 위한 효과적인 국소 전하 분리를 달성하기 위한 코팅 전략</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/ie301177s">수소의 광촉매 진화에서 메탄올 희생 시약의 역할</a></li>
			</ol>
		</div>
	)
}

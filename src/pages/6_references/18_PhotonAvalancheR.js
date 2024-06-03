import React from 'react';
import '../../styles/styles.css'

function PhotonAvalancheR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default PhotonAvalancheR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>18. 광자 사태(Photon avalanche)</h3>
			<ul>
				<li><a href="https://pubs.acs.org/doi/full/10.1021/acssuschemeng.7b02806?src=recsys" target='_blank' rel="">란탄 족 첨가 NaYF 4 / SnO 2 / Ag를 기반으로 한 효율적인 UV-Vis-NIR 반응 업 컨버전 및 플라 스모 닉 강화 광촉매</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2014/CP/C3CP53847H#divAbstract" target='_blank' rel="">Yb 민감화 (Tm, Ho) 도핑 된 KLu (WO 4 ) 2 나노 결정의 백색광 상향 변환 : Eu 통합의 효과</a></li>
							
			</ul>

		</div>
	)
}


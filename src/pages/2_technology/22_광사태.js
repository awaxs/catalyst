import React from 'react';
import '../../styles/styles.css'

function 광사태() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default 광사태;

function MainContents() {
	const title = '광자 눈사태';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>

			<hr className='class-1'/>
			<h3></h3>
			<ul>
				<li></li>
			</ul>

			<hr className='class-1'/>

			<h3>참고문헌</h3>
			<ol>
				<li><a href='https://pubs.acs.org/doi/full/10.1021/acssuschemeng.7b02806?src=recsys'>란탄 족 첨가 NaYF 4 / SnO 2 / Ag를 기반으로 한 효율적인 UV-Vis-NIR 반응 업 컨버전 및 플라 스모 닉 강화 광촉매</a></li>
				<li><a href='https://pubs.rsc.org/en/content/articlelanding/2014/CP/C3CP53847H#divAbstract'>Yb 민감화 (Tm, Ho) 도핑 된 KLu (WO 4 ) 2 나노 결정의 백색광 상향 변환 : Eu 통합의 효과</a></li>
				<li><a href=''></a></li>
			</ol>
			

		</div>
	)
}

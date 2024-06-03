import React from 'react';
import '../../styles/styles.css'

function PlasmonResonanceR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default PlasmonResonanceR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>12. 표면 플라스몬 공명(Plasmon Resonance)</h3>
			<ul>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2018/TA/C7TA10375A#cit15" target='_blank' rel="">플라스 몬 매개 광촉매의 최근 개발과 선택성 조절의 잠재력</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/ja211363w" target='_blank' rel="">텅스텐 산화물 Nanocrystals에서 조정 가능한 국부적 인 표면 플라스 몬 공명</a></li>
				<li><a href="https://www.mdpi.com/2073-4344/10/1/46/htm" target='_blank' rel="">플라 스모 닉 광촉매 반응에 대한 실험 설정 검토</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/acs.nanolett.6b02661" target='_blank' rel="">엑시톤에 대한 국소 표면 플라즈몬의 강력한 결합</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/jacs.0c06966" target='_blank' rel="">광촉매를 위한 저차원 반도체에 대한 여기자 관점</a></li>
						
			</ul>

		</div>
	)
}

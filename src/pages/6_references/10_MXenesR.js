import React from 'react';
import '../../styles/styles.css'

function MXenesR() {
	return (
		<>
			<div className="px-4" style={{marginTop:80}}>
					<MainContents />
			</div>
		</>
	);
};
export default MXenesR;

function MainContents() {
	const title = '참고 문헌 정리';

	return (
		<div>
			<h1 className='title'>{title}</h1>	

			<hr className='class-1'/>
			<h3>10. Ti3C2 MXenes</h3>
			<ol>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2021/ma/d0ma00938e" target='_blank' rel="">Applications of MXene (Ti3C2Tx) in photocatalysis: a review</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/acsanm.0c02481" target='_blank' rel="">Photocatalytic Applications of Two-Dimensional Ti3C2 MXenes: A Review</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0025540819317817?via%3Dihub" target='_blank' rel="">가시광선 및 근적외선에서 RhB 분해를 향한 Ti 3 C 2 –OH/Bi 2 WO 6의 향상된 광촉매 활성 및 메커니즘</a></li>
				<li><a href="https://pubs.acs.org/doi/10.1021/acs.iecr.9b03680" target='_blank' rel="">MoS 2 @Ti 3 C 2 나노하이브리드 의 광촉매 분해를 위한 마찰 유도 향상</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0013935120303029?via%3Dihub" target='_blank' rel="">수성 오염 물질의 향상된 광촉매 제거를 위한 Bi 3 TaO 7 /Ti 3 C 2 이종 접합</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S0045653519330012?via%3Dihub" target='_blank' rel="">2D/2D Ti 3 C 2 /다공성 gC 3 N 4 나노층 복합체의 효율적인 주야간 광촉매 성능 및 유기물의 분해에 대한 응용 오염 물질</a></li>
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2019/EN/C9EN00567F"> target='_blank' rel=""2D 계층 CdS@Ti 3 C 2 @ 에서 비금속 전하 매개체로서의 MXene Z-scheme 가시광선 구동 광촉매 활성이 우수한 TiO 2 복합재</a></li>
				<li><a href="https://www.sciencedirect.com/science/article/pii/S138589472030913X?via%3Dihub" target='_blank' rel="">MXene Ti 3 C 2 유도된 그래핀 층의 Z 방식 광촉매 내화성 유기 오염 물질의 가시광선 광촉매 분해를 위한 TiO 2 /gC 3 N 4 </a></li>
				<li><a href="https://nanoscalereslett.springeropen.com/articles/10.1186/s11671-020-03314-z" target='_blank' rel="">향상된 광촉매 성능을 위한 R-scheme Ti 3 C 2 MXene/MoS 2 나노시트의 2D/2D 이종접합</a></li>

			</ol>

		</div>
	)
}
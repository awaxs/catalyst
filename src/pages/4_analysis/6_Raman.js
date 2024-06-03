import React from 'react';
import '../../styles/styles.css'

function Raman() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <MainContents />
      </div>
    </>
	);
};
export default Raman

function MainContents() {
	const title = '라만 분광법(Raman spectroscopy)';

  return (
    <>
        <h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
				
				<ul>
					<li>화학 구조, 상 및 다형성, 결정화도 및 분자 상호 작용에 대한 자세한 정보를 제공하는 비파괴 화학 분석 기술.</li>
					<li>물질 내 화학 결합과 빛의 상호 작용을 기반으로 한다.</li>
					<li>라만은 분자가 고강도 레이저 광원에서 입사된 빛을 산란시키는 광 산란 기술이다.</li>
					<li>라만 분광법은 촉매의 <u><b>다양한 결정상을 검출(detecting different crystalline phases)</b></u>,
					 <u><b>상 전이(phase transitions)</b></u>, <u><b>도핑 정도(degree of doping)</b></u> 등을 분석. </li>
					<li><u><b>XRD로 얻을 수 없는 스펙트럼 피크 위치와 스펙트럼 폭을 평가하여 광자-결정 상호 작용</b></u>에 대한 유용한 정보를 얻을 수 있다.</li>
					<li>분자 분석 및 화학 반응 실시간 모니터링을 위해 라만 분광법을 이용하여 현장(실험과 동시)에서 촉매 반응을 연구할 수 있다. </li>
				</ul>

    </>

  );
}	
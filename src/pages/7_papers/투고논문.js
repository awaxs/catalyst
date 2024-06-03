import React from 'react';

function 투고논문() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};
export default 투고논문;

function Contents() {
	const title = 'My Thesis';
	return (

		<div id ="section">
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>
			
			<ul>
				<h5>2020</h5>
					<ol>
						<li><a href="https://www.mdpi.com/2227-9717/9/1/79" target='_blank' rel="">Computational Fluid Dynamics Modeling of Rotating Annular VUV/UV Photoreactor for Water Treatment</a></li>
						<li><a href="https://www.sciencedirect.com/science/article/pii/S2666821120300594" target='_blank' rel="">Efficacy and mechanism of chemical-free VUV/UV process for oxytetracycline degradation: Continuous-flow experiment and CFD modeling</a></li>
						<li><a href="https://www.mdpi.com/2073-4441/12/11/3237" target='_blank' rel="">CFD Modeling of UV/H2O2 Process in Internal Airlift Circulating Photoreactor</a></li>
						
					</ol>
					<h5>2021</h5>
					<ol>
						<li><a href="https://iwaponline.com/wst/article/83/5/1217/80370/Development-and-numerical-modelling-of-a-novel-UV" target='_blank' rel="">Development and numerical modelling of a novel UV/H2O2 rotating flow reactor for water treatment</a></li>
						<li><a href="https://doi.org/10.5004/dwt.2021.27208" target='_blank' rel="">Computational fluid dynamics modeling of airlift VUV/UV photoreactor with internal circulation</a></li>
						<li><a href='./DWT27208.pdf'>PDF Download: Computational fluid dynamics modeling of airlift VUV/UV photoreactor with internal circulation</a></li>
						
					</ol>
					<h5>2022</h5>
					<ol>
						<li><a href="https://www.mdpi.com/2077-1312/10/5/665" target='_blank' rel="">Numerical Simulation Study on the Layered Phenomenon of Lakes and Reservoirs Destroyed by a Forced Circulation Device</a></li>
						<li><a href="https://www.mdpi.com/2073-4441/14/17/2595" target='_blank' rel="">Simultaneous Removal of Nitrate and Tetracycline by an Up-Flow Immobilized Biofilter</a></li>
						<li><a href="https://www.mdpi.com/2077-1312/10/9/1257">Effects of Algal Utilization of Dissolved Organic Phosphorus by Microcystis Aeruginosa on Its Adaptation Capability to Ambient Ultraviolet Radiation</a></li>
						
					</ol>
					<h5>2023</h5>
					<ol>
						<li><a href="https://www.mdpi.com/2073-4441/15/3/576" target='_blank' rel="">Transformer Based Water Level Prediction in Poyang Lake, China</a></li>
						<li><a href="https://www.mdpi.com/2079-4991/13/4/636" target='_blank' rel="">Photocatalytic Activity of MoS2 Nanoflower-Modified CaTiO3 Composites for Degradation of RhB under Visible Light</a></li>
						
						
					</ol>
					<h5>인용</h5>
					<ol>
						<li><a href="https://www.sciencedirect.com/science/article/pii/S0304389423015285" target='_blank' rel="">New insight into the removal process of benzotriazole UV stabilizers by UV/H2O2: Integrating quantum chemical calculation with CFD simulation</a></li>

						
						
					</ol>
			</ul>

		</div>

	);
}


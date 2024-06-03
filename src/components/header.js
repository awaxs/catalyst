import React from 'react';
import { Link } from 'react-router-dom';

import contentsjson from '../pages/0_contents/contents.json'
import photocatalystjson from '../pages/1_photocatalyst/photocatalyst.json'
import technologyjson from '../pages/2_technology/technology.json'
import synthesisjson from '../pages/3_synthesis/synthesis.json'
import analysisjson from '../pages/4_analysis/analysis.json'
import kintecusjson from '../pages/5_Kintecus/kintecus.json'
import referencesjson from '../pages/6_references/reference.json'
import papersjson from '../pages/7_papers/papers.json'

function Header() {
	const style = {
		fontSize: "25px",
		fontWeight: "bold",
		color: "#ddffaa"
  }
	return (
		<div>

			<nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary" >
			 	<i className='fab fa-accusoft mx-2 fs-2 text-info' />
				<a class="navbar-brand" href="" style={style}>Envi. Catalyst</a>
				<button class="navbar-toggler" type="button" >
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5" >
						<li><Link className="nav-link" to={"/"} >Home</Link></li>

						{/* 0_contents */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Contents
							</a>
							<ul className="dropdown-menu">
								{contentsjson.contentsData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>

						{/* 1_photocatalyst */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Photocatalyst
							</a>
							<ul className="dropdown-menu">
								{photocatalystjson.photocatalystData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>

						{/* 2_technology */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Advanced Technologies
							</a>
							<ul className="dropdown-menu">
								{technologyjson.technologyData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>

						{/* synthesis */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Synthesis
							</a>
							<ul className="dropdown-menu">
								{synthesisjson.synthesisData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>

						{/* analysis */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Analysis
							</a>
							<ul className="dropdown-menu">
								{analysisjson.analysisData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>
												
						{/* Kintecus */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Kintecus
							</a>
							<ul className="dropdown-menu">
								{kintecusjson.kintecusData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>

						{/* references */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								References
							</a>
							<ul className="dropdown-menu">
								{referencesjson.referencesData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>
						
						{/* TiO2MoS2 Paper */}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Papers
							</a>
							<ul className="dropdown-menu">
								{papersjson.papersData.map((items) => (
									<li><Link className="dropdown-item" to={items.url}>{items.title}</Link></li>
								))}
							</ul>
						</li>
					</ul>
				</div>


			</nav>

		</div>
  )
}

export default Header
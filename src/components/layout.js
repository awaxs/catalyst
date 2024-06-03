import React from 'react';
import Header from './header';
import TopNavRoute from './route ';

function Layout() {
  return (
		<div class="container-fluid">
			<div class="container-xl">

				<div class="row" style={{background:'red'}}>
					<div class="col-12"  style={{background:'yellow'}}>
						<Header/>
						<TopNavRoute/>
					</div>
				</div>

				<div class="row" style={{background:'red'}}>
					<div class="col-2"  style={{background:'blue'}}>
						side
					</div>
					<div class="col-10"  style={{background:'green'}}>
						main
					</div>
				</div>

			</div>
		</div>
  )
}

export default Layout
import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
// 0_contents
import A1목차 from '../pages/0_contents/1_목차'
import A2책목차 from '../pages/0_contents/2_책목차'

// 1_photocatalyst
import Introduction from '../pages/1_photocatalyst/1_Introduction';
import 태양에너지 from '../pages/1_photocatalyst/2_태양에너지';
import 광전효과 from '../pages/1_photocatalyst/3_광전효과';
import History from '../pages/1_photocatalyst/4_History';
import Mechanism from '../pages/1_photocatalyst/5_Mechanism';
import 반도체밴드이론 from '../pages/1_photocatalyst/6_반도체밴드이론';
import 전자밴드구조 from '../pages/1_photocatalyst/7_전자밴드구조';
import DBandTheory from '../pages/1_photocatalyst/8_d_Band_theory';
import HJunction from '../pages/1_photocatalyst/9_H_junction';
import ZScheme from '../pages/1_photocatalyst/10_Z_scheme';
import MO다이어그램 from '../pages/1_photocatalyst/11_MO다이어그램';
import Photocatalyst from '../pages/1_photocatalyst/12_photocatalyst';
import 트래핑재결합전달 from '../pages/1_photocatalyst/13_트래핑재결합전달';
import 양자점 from '../pages/1_photocatalyst/14_양자점';
import 촉매활성 from '../pages/1_photocatalyst/15_촉매활성';
import Principle from '../pages/1_photocatalyst/principle';

// 2_technology
import 양자역학 from '../pages/2_technology/1_양자역학';
import 전자전달 from '../pages/2_technology/2_전자전달';
import 제일원리 from '../pages/2_technology/3_제일원리';
import 결함공학 from '../pages/2_technology/4_결함공학';
import 플라즈몬공명 from '../pages/2_technology/5_플라즈몬공명';
import Blacktio2 from '../pages/2_technology/6_blacktio2';
import 페로브스카이트 from '../pages/2_technology/7_페로브스카이트';
import 이차원광촉매 from '../pages/2_technology/8_이차원광촉매';
import 디칼코재나이트 from '../pages/2_technology/9_디칼코재나이트';
import 맥신 from '../pages/2_technology/10_맥신';
import 야누스촉매 from '../pages/2_technology/11_야누스촉매';
import 광열촉매 from '../pages/2_technology/12_광열촉매';
import 근적외선광촉매 from '../pages/2_technology/13_근적외선광촉매';
import 자성체 from '../pages/2_technology/14_자성체';
import 티타늄질화물 from '../pages/2_technology/15_티타늄질화물';
import 전이금속질화물 from '../pages/2_technology/16_전이금속질화물';
import 메타물질 from '../pages/2_technology/17_메타물질';
import 광결정 from '../pages/2_technology/18_광결정';
import 역오팔 from '../pages/2_technology/19_역오팔';
import AntiStokes from '../pages/2_technology/20_antiStokes';
import 상향변환 from '../pages/2_technology/21_상향변환';
import 광사태 from '../pages/2_technology/22_광사태';

// synthesis
import SolGelMethod from '../pages/3_synthesis/1_SolGelMethod';
import TiO2Nano from '../pages/3_synthesis/2_TiO2_Nano';
import BlackTiO22DSolgel from '../pages/3_synthesis/3_Black_TiO2_2D_solgel';
import MoS21T from '../pages/3_synthesis/4_MoS2_1T';
import TMoN from '../pages/3_synthesis/5_TMoN';
import MolybdenumNitride from '../pages/3_synthesis/6_Molybdenum_Nitride';
import TiO2Opal from '../pages/3_synthesis/7_TiO2_Opal';
import AnodizingMk from '../pages/3_synthesis/8_Anodizing_mk';
import PMMA from '../pages/3_synthesis/9_PMMA';
import POFCoating from '../pages/3_synthesis/10_POF_coating';
import BlackTiO22D from '../pages/3_synthesis/11_Black_TiO2_2D';
import BlackTiO2Tm from '../pages/3_synthesis/12_Black_TiO2_tm';
import MoS2CaTiO3Sm from '../pages/3_synthesis/13_MoS2CaTiO3_sm';
import MoS2TiO2Sm from '../pages/3_synthesis/14_MoS2TiO2_sm';
import MoS21TTm from '../pages/3_synthesis/15_MoS2_1T_tm';
import MoS21TPOF from '../pages/3_synthesis/16_MoS2_1T_POF';
import MoN2 from '../pages/3_synthesis/17_MoN2';
import MoN2TiO2Sm from '../pages/3_synthesis/18_MoN2TiO2_sm';
import MoN21TTm from '../pages/3_synthesis/19_MoN2_1T_tm';
import MoN21TPOF from '../pages/3_synthesis/20_MoN2_1T_POF';
import Energy from '../pages/3_synthesis/21_energy';
import Co2 from '../pages/3_synthesis/22_co2';

// analysis
import XRD from '../pages/4_analysis/1_XRD';
import Morphology from '../pages/4_analysis/2_Morphology';
import XPS from '../pages/4_analysis/3_XPS';
import Optical from '../pages/4_analysis/4_Optical';
import Surface from '../pages/4_analysis/5_Surface';
import Raman from '../pages/4_analysis/6_Raman';
import 계산화학 from '../pages/4_analysis/13_계산화학';

// Kintecus
import KintecusRef from '../pages/5_Kintecus/1_kintecusref';
import UsersMenual from '../pages/5_Kintecus/2_usersmenual';
import ControlDescription from '../pages/5_Kintecus/3_control';
import ModelDescription from '../pages/5_Kintecus/4_model';
import SpeciselDescription from '../pages/5_Kintecus/5_species';
import ParamDescription from '../pages/5_Kintecus/6_param';
import ThermDescription from '../pages/5_Kintecus/7_therm';
import FitdataDescription from '../pages/5_Kintecus/8_fitdata';

// references
import 광촉매기본R from '../pages/6_references/1_광촉매기본R';
import GC3N4R from '../pages/6_references/2_gC3N4R';
import HeteroJunctionR from '../pages/6_references/3_HeteroJunctionR';
import ZSchemeR from '../pages/6_references/4_ZSchemeR';
import 페로브스카이트R from '../pages/6_references/5_페로브스카이트R';
import TiO2MoS2R from '../pages/6_references/6_TiO2MoS2R';
import BlackTiO2R from '../pages/6_references/7_BlackTiO2R';
import TwoD촉매R from '../pages/6_references/8_TwoD촉매R';
import DichalcogenidesR from '../pages/6_references/9_DichalcogenidesR';
import MXenesR from '../pages/6_references/10_MXenesR';
import JanusCatalystR from '../pages/6_references/11_JanusCatalystR';
import PlasmonResonanceR from '../pages/6_references/12_PlasmonResonanceR';
import LorentzForceR from '../pages/6_references/13_LorentzForceR';
import QuantumDotsR from '../pages/6_references/14_QuantumDotsR';
import DefectEngR from '../pages/6_references/15_DefectEngR';
import PhotothermalR from '../pages/6_references/16_PhotothermalR';
import antiStokesR from '../pages/6_references/17_antiStokesR';
import PhotonAvalancheR from '../pages/6_references/18_PhotonAvalancheR';
import 광반응기R from '../pages/6_references/19_광반응기R';
import ThreeDPrintingR from '../pages/6_references/20_ThreeDPrintingR';
import 양극산화R from '../pages/6_references/21_양극산화R';
import InverseOpalR from '../pages/6_references/22_InverseOpalR';
import NIRCatalystR from '../pages/6_references/23_NIRCatalystR';
import UpConversionR from '../pages/6_references/24_UpConversionR';
import MetaMaterialsR from '../pages/6_references/25_MetaMaterialsR';
import Refer from '../pages/6_references/26_refer';
import CatalystOld from '../pages/6_references/27_catalyst_old';
import CatalystOld2 from '../pages/6_references/28_Catalyst_old2';
import N_reduction from '../pages/6_references/29_N_reduction'

// papers
import 논문작성 from '../pages/7_papers/논문작성';
import 투고논문 from '../pages/7_papers/투고논문';

function TopNavRoute() {
  return (
    <>
		<Routes>

			<Route path={'/'} exact element={Home} />

			{/* 0_contents */}
			<Route path={'/0_contents/A목차'} element={<A1목차/>} />
			<Route path={'/0_contents/책목차'} element={<A2책목차/>} />
			
			{/* 1_photocatalyst */}
			<Route path={'/1_photocatalyst/1_Introduction'} element={<Introduction/>} />
			<Route path={'/1_photocatalyst/2_태양에너지'} element={<태양에너지/>} />
			<Route path={'/1_photocatalyst/3_광전효과'} element={<광전효과/>} />
			<Route path={'/1_photocatalyst/4_History'} element={<History/>} />
			<Route path={'/1_photocatalyst/5_Mechanism'} element={<Mechanism/>} />
			<Route path={'/1_photocatalyst/6_반도체밴드이론'} element={<반도체밴드이론/>} />
			<Route path={'/1_photocatalyst/7_전자밴드구조'} element={<전자밴드구조/>} />
			<Route path={'/1_photocatalyst/8_d_Band_theory'} element={<DBandTheory/>} />
			<Route path={'/1_photocatalyst/9_H_junction'} element={<HJunction/>} />
			<Route path={'/1_photocatalyst/10_Z_scheme'} element={<ZScheme/>} />
			<Route path={'/1_photocatalyst/11_MO다이어그램'} element={<MO다이어그램/>} />
			<Route path={'/1_photocatalyst/12_photocatalyst'} element={<Photocatalyst/>} />
			<Route path={'/1_photocatalyst/13_트래핑재결합전달'} element={<트래핑재결합전달/>} />
			<Route path={'/1_photocatalyst/14_양자점'} element={<양자점/>} />
			<Route path={'/1_photocatalyst/15_촉매활성'} element={<촉매활성/>} />
			<Route path={'/1_photocatalyst/principle'} element={<Principle/>} />

			{/* 2_technology */}
			<Route path={'/2_technology/1_양자역학'} element={<양자역학/>} />
			<Route path={'/2_technology/2_전자전달'} element={<전자전달/>} />
			<Route path={'/2_technology/3_제일원리'} element={<제일원리/>} />
			<Route path={'/2_technology/4_결함공학'} element={<결함공학/>} />
			<Route path={'/2_technology/5_플라즈몬공명'} element={<플라즈몬공명/>} />
			<Route path={'/2_technology/6_blacktio2'} element={<Blacktio2/>} />
			<Route path={'/2_technology/7_페로브스카이트'} element={<페로브스카이트/>} />
			<Route path={'/2_technology/8_이차원광촉매'} element={<이차원광촉매/>} />
			<Route path={'/2_technology/9_디칼코재나이트'} element={<디칼코재나이트/>} />
			<Route path={'/2_technology/10_맥신'} element={<맥신/>} />
			<Route path={'/2_technology/11_야누스촉매'} element={<야누스촉매/>} />
			<Route path={'/2_technology/12_광열촉매'} element={<광열촉매/>} />
			<Route path={'/2_technology/13_근적외선광촉매'} element={<근적외선광촉매/>} />
			<Route path={'/2_technology/14_자성체'} element={<자성체/>} />
			<Route path={'/2_technology/15_티타늄질화물'} element={<티타늄질화물/>} />
			<Route path={'/2_technology/16_전이금속질화물'} element={<전이금속질화물/>} />
			<Route path={'/2_technology/17_메타물질'} element={<메타물질/>} />
			<Route path={'/2_technology/18_광결정'} element={<광결정/>} />
			<Route path={'/2_technology/19_역오팔'} element={<역오팔/>} />
			<Route path={'/2_technology/20_antiStokes'} element={<AntiStokes/>} />
			<Route path={'/2_technology/21_상향변환'} element={<상향변환/>} />
			<Route path={'/2_technology/22_광사태'} element={<광사태/>} />
			
			{/* 3_synthesis */}
			<Route path={'/3_synthesis/1_SolGelMethod'} element={<SolGelMethod/>} />
			<Route path={'/3_synthesis/2_TiO2_Nano'} element={<TiO2Nano/>} />
			<Route path={'/3_synthesis/3_Black_TiO2_2D_solgel'} element={<BlackTiO22DSolgel/>} />
			<Route path={'/3_synthesis/4_MoS2_1T'} element={<MoS21T/>} />
			<Route path={'/3_synthesis/5_TMoN'} element={<TMoN/>} />
			<Route path={'/3_synthesis/6_Molybdenum_Nitride'} element={<MolybdenumNitride/>} />
			<Route path={'/3_synthesis/7_TiO2_Opal'} element={<TiO2Opal/>} />
			<Route path={'/3_synthesis/8_Anodizing_mk'} element={<AnodizingMk/>} />
			<Route path={'/3_synthesis/9_PMMA'} element={<PMMA/>} />
			<Route path={'/3_synthesis/10_POF_coating'} element={<POFCoating/>} />
			<Route path={'/3_synthesis/11_Black_TiO2_2D'} element={<BlackTiO22D/>} />
			<Route path={'/3_synthesis/12_Black_TiO2_tm'} element={<BlackTiO2Tm/>} />
			<Route path={'/3_synthesis/13_MoS2CaTiO3_sm'} element={<MoS2CaTiO3Sm/>} />
			<Route path={'/3_synthesis/14_MoS2TiO2_sm'} element={<MoS2TiO2Sm/>} />
			<Route path={'/3_synthesis/15_MoS2_1T_tm'} element={<MoS21TTm/>} />
			<Route path={'/3_synthesis/16_MoS2_1T_POF'} element={<MoS21TPOF/>} />
			<Route path={'/3_synthesis/17_MoN2'} element={<MoN2/>} />
			<Route path={'/3_synthesis/18_MoN2TiO2_sm'} element={<MoN2TiO2Sm/>} />
			<Route path={'/3_synthesis/19_MoN2_1T_tm'} element={<MoN21TTm/>} />
			<Route path={'/3_synthesis/20_MoN2_1T_POF'} element={<MoN21TPOF/>} />
			<Route path={'/3_synthesis/21_energy'} element={<Energy/>} />
			<Route path={'/3_synthesis/22_co2'} element={<Co2/>} />
			
			{/* 4_analysis */}
			<Route path={'/4_analysis/1_XRD'} element={<XRD/>} />
			<Route path={'/4_analysis/2_Morphology'} element={<Morphology/>} />
			<Route path={'/4_analysis/3_XPS'} element={<XPS/>} />
			<Route path={'/4_analysis/4_Optical'} element={<Optical/>} />
			<Route path={'/4_analysis/5_Surface'} element={<Surface/>} />
			<Route path={'/4_analysis/6_Raman'} element={<Raman/>} />
			<Route path={'/4_analysis/13_계산화학'} element={<계산화학/>} />
			
			{/* 5_Kintecus */}
			<Route path={'/5_Kintecus/1_kintecusref'} element={<KintecusRef/>} />
			<Route path={'/5_Kintecus/2_usersmenual'} element={<UsersMenual/>} />
			<Route path={'/5_Kintecus/3_control'} element={<ControlDescription/>} />
			<Route path={'/5_Kintecus/4_model'} element={<ModelDescription />} />
			<Route path={'/5_Kintecus/5_species'} element={<SpeciselDescription />} />
			<Route path={'/5_Kintecus/6_param'} element={<ParamDescription />} />
			<Route path={'/5_Kintecus/7_therm'} element={<ThermDescription />} />
			<Route path={'/5_Kintecus/8_fitdata'} element={<FitdataDescription />} />
			
			{/* 6_references */}
			<Route path={'/6_references/1_광촉매기본R'} element={<광촉매기본R/>} />
			<Route path={'/6_references/2_gC3N4R'} element={<GC3N4R/>} />
			<Route path={'/6_references/3_HeteroJunctionR'} element={<HeteroJunctionR/>} />
			<Route path={'/6_references/4_ZSchemeR'} element={<ZSchemeR/>} />
			<Route path={'/6_references/5_페로브스카이트R'} element={<페로브스카이트R/>} />
			<Route path={'/6_references/6_TiO2MoS2R'} element={<TiO2MoS2R/>} />
			<Route path={'/6_references/7_BlackTiO2R'} element={<BlackTiO2R/>} />
			<Route path={'/6_references/8_TwoD촉매R'} element={<TwoD촉매R/>} />
			<Route path={'/6_references/9_DichalcogenidesR'} element={<DichalcogenidesR/>} />
			<Route path={'/6_references/10_MXenesR'} element={<MXenesR/>} />
			<Route path={'/6_references/11_JanusCatalystR'} element={<JanusCatalystR/>} />
			<Route path={'/6_references/12_PlasmonResonanceR'} element={<PlasmonResonanceR/>} />
			<Route path={'/6_references/13_LorentzForceR'} element={<LorentzForceR/>} />
			<Route path={'/6_references/14_QuantumDotsR'} element={<QuantumDotsR/>} />
			<Route path={'/6_references/15_DefectEngR'} element={<DefectEngR/>} />
			<Route path={'/6_references/16_PhotothermalR'} element={<PhotothermalR/>} />
			<Route path={'/6_references/17_antiStokesR'} element={<antiStokesR/>} />
			<Route path={'/6_references/18_PhotonAvalancheR'} element={<PhotonAvalancheR/>} />
			<Route path={'/6_references/19_광반응기R'} element={<광반응기R/>} />
			<Route path={'/6_references/20_ThreeDPrintingR'} element={<ThreeDPrintingR/>} />
			<Route path={'/6_references/21_양극산화R'} element={<양극산화R/>} />
			<Route path={'/6_references/22_InverseOpalR'} element={<InverseOpalR/>} />
			<Route path={'/6_references/23_NIRCatalystR'} element={<NIRCatalystR/>} />
			<Route path={'/6_references/24_UpConversionR'} element={<UpConversionR/>} />
			<Route path={'/6_references/25_MetaMaterialsR'} element={<MetaMaterialsR/>} />
			<Route path={'/6_references/26_refer'} element={<Refer/>} />
			<Route path={'/6_references/27_catalyst_old'} element={<CatalystOld/>} />
			<Route path={'/6_references/28_catalyst_old2'} element={<CatalystOld2/>} />
			<Route path={'/6_references/29_N_reduction'} element={<N_reduction/>} />

			{/* 7_papers */}
			<Route path={'/7_papers/투고논문'} element={<투고논문/>} />
			<Route path={'/7_papers/논문작성'} element={<논문작성/>} />

		</Routes>
		</>

  )
};
export default TopNavRoute;		
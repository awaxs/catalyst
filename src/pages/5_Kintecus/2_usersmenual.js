import React from 'react';
import '../../styles/styles.css'

function UsersMenual() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default UsersMenual;

function Contents() {
	const title = 'Kintecus Users Menual';
  const tablecss = {
    width: "1000pt",
    border: "1px solid #444444",
  }
  const trcss = {
		textAlign: "left", 
		border: "1px solid #aaa"
	}
  return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

        <hr className='class-1'/>
        <ol>
          <li>
            
            <h5><b><u>Kintecus 다운로드 및 설치방법</u></b></h5>	
            <br/>
            <a href="http://www.kintecus.com/download.htm" target='_blank' rel="">Kintecus Download 페이지로 이동</a>
            <br/>
            <img src="../images/kinetics/0.PNG" width={'600'} alt=''/>
            <ul>
              <li>다운로드 페이지로 이동하여 64 BIT Windows용을 내려받고 압축을 푼다.(인스톨 없이 압축을 푼 곳이 메인 폴더가 된다)</li>
              <li><a href="http://kintecus.com/KINTECUS_V2021.pdf" target='_blank' rel="">Kintecus 메뉴얼 pdf</a></li>
              <li><a href='../images/kinetics/Kintecus Manual.hwp' target='_blank' rel="">Kintecus 한글메뉴얼</a></li>
            </ul>


          </li><br/>

        <hr className='class-6'/>
          <li>
          <h5><b><u>Kintecus Workbench</u></b></h5>
              <br/>
              <img src="../images/kinetics/1.PNG" width={'300'} alt=''/>
            <ul>
              <li>kintecus폴더에 'Kintecus_Workbench.exe'를 실행하면 현제 버전의 리스트 윈도우가 로드된다.</li>
              <li>이 윈도우에서 리스트 항목을 클릭하면 해당 엑셀파일이 열린다.</li>
              <li>또는, kintecus폴더에폴더에 Excel 파일을 클릭하면 해당 엑셀파일이 열린다.</li>
              <li>또 “자신만의 항목 추가"를 클릭하면 자신의 파일을 추가할 수 있다.</li>
              <li>Kintecus_Workbench를 이용하면 빠르고 쉽게 접근할 수 있다.</li>
            </ul>


          </li><br/>

        <hr className='class-6'/>
          <li>
          <h5><b><u>Running Kintecus in Command Mode</u></b></h5>
            <br/>
            
            <ul>
              <li>실행 방법(cmd에서) : ~/kintecus/Sample_runs 디렉토리 안의 BAT 파일을 (Ethanol1.bat 등)를 실행(더블클릭)하면 command 모드에서 실행된다.</li>
              <li>Ethanol1.bat 의 내용(예)
                <br/><img src="../images/kinetics/8.PNG" width={'800'} alt=''/></li>
              <li>-SEEMW 모든 종과 그에 상응하는 종을 출력한다. 분자량을 MW.TXT 파일에 저장한다.</li>
              <li>Kintecus 명령줄에 –SEEMW 키워드를 사용하면 Kintecus는 종 설명 스프레드시트에 있는 각 종의 분자량을 포함하는 MW.TXT라는 스프레드시트를 출력합니다.</li>
              <li>실행후 결과</li>
              <li>view.txt : 실행 과정의 cmd창의 메시지가 모두 저장,(오류, 경고 및 정보)</li>
              <li>CONC.TXT : 농도 와 온도 결과 저장되어 있다.</li>
              <li>OPTOUT.TXT : 모델에 데이터를 회귀/적합하는 경우 최종 최적화 매개변수 결과 저장되어 있다.</li>
              <li>cmd 모두에서 실행하는 것 보다 xls 파일이 있으면 모든 실행 과정이 Visual Basic 코드로 만들어져 있으므로 이를 이용하는 것이 편리하다.</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>


          </li><br/>

        <hr className='class-6'/>
          <li>
          <h5><b><u>새로운 프로젝트 만드는 방법</u></b></h5>
            <br/>
            <ul>
              <li>나의 프로젝트를 만드는 방법은 먼저 모델 스프레드시트 파일을 만들어야 한다. </li>
              <li>kintecus 디렉토리에 있는 Kintecus_workbook.xls 열어서(디른 이름으로 복사한다음) 이용한다.
                <br/><img src="../images/kinetics/2.PNG" width={'300'} alt=''/>
              </li>
              <li>또는 'Kintecus_Workbench.exe'를 실행하고 리스트에서 Kintecus Blank Model을 클릭한다.
                <br/><img src="../images/kinetics/9.PNG" width={'300'} alt=''/></li>
              <li>Excel 파일을 보면 model, species, parm 등의 sheet 가 있는데, 각 sheet 내용을 편집해야한다.</li>
              <li></li>
            </ul>



          </li><br/>

        <hr className='class-6'/>
          <li>
          <h5><b><u>Control data sheet 설명</u></b></h5>
            <br/>
            <img src="../images/kinetics/3.PNG" width={'600'} alt=''/><br/>
          <img src="../images/kinetics/4.PNG" width={'600'} alt=''/><br/>
          
          <img src="../images/kinetics/5.PNG" width={'600'} alt=''/>

            <ul>
              <li>Kintecus-Excel 문서가 로드되면 PARM.DAT 파일이 PARM 워크시트에 자동으로 기록된다. </li>
              <li></li>
              <li></li>
              <li>실행 : RUN 버튼을 클릭하시면 Kintecus가 실행됩니다.</li>
              <li>중지 : Esc 키 를 클릭, Kintecus 창에서 Ctrl + C 키를 입력 한다.</li>
            </ul>
          </li><br/>

        <hr className='class-6'/>
          <li>
          <h5><b><u>The Model Description Spreadsheet</u></b></h5>
            <br/>
            <ul>
              <li><a href='https://jpldataeval.jpl.nasa.gov/pdf/NASA-JPL%20Evaluation%2019-5.pdf' target='_blank' rel="">NASA Jet 연구소 자료: Chemical Kinetics and Photochemical Data
for Use in Atmospheric Studies</a></li>
              <li>model Spreadsheet-{'->'}MODEL.DAT 파일에 자동으로 기록</li>
              <li>species Spreadsheet-{'->'}SPECIES.DAT 파일에 자동으로 기록</li>
              <li>parm Spreadsheet-{'->'}PARM.DAT 파일에 자동으로 기록 </li>
              <li>therm Spreadsheet-{'->'}THERM.DAT 파일에 자동으로 기록 </li>
              <li>fitdata Spreadsheet-{'->'}FITDATA.DAT 파일에 자동으로 기록(fitdata 탭에서 회귀가 수행됨)</li>
              <li>가역 반응 ("="로 표시), 비가역 반응({"==>"}로 표시), 쉼표는 TAB 으로 표시</li>
              <li>MODEL.DAT 작성법(엑셀로 할 때는 자동 생성되므로 만들필요 없슴</li>
              <li><u><b>Type A.(효소반응) : kf, A+B+C {'==>'} D+E+F+G+H+I+J+K+L+N, Optional Comment </b></u><br/>
                menual 에서 kf 를 검색하여 참조 할것<br/>
                <img src="../images/kinetics/12.PNG" width={'600'} alt=''/><br/>
                <u><b>MODEL.DAT 파일 예</b></u><br/>	
                5000000	 E+S{'==>'}ES	75		<br/>			
                10000(10000/70000)?	ES {'==>'} E+S				<br/>	
                8500000	E+I{'==>'}EI	0.07543		<br/>
                112687259.71099	EI{'==>'}E+I			<br/>
                9570000	ES+I{'==>'}EIS	2.53		<br/>
                3782608.69565217	EIS{'==>'}ES+I			<br/>
                55300000	EI+S{'==>'}EIS	17.87		<br/>
                3094571.90822608	EIS{'==>'}EI+S			<br/>
                7130000	EI+P{'==>'}EIS	35.5		<br/>
                200845.070422535	EIS{'==>'}EI+P			<br/>
                114000	ES{'==>'}E+P
              </li>
              <li><u><b>Type B. : A, m, Ea, A+B+C{'==>'}D+E+F+G+H+I+J+K+L+N, Optional Comment</b></u><br/>
                menual 에서 A , m , Ea 를 검색하여 참조 할것<br/>
                <img src="../images/kinetics/6.PNG" width={'600'} alt=''/><br/>
                <img src="../images/kinetics/11.PNG" width={'600'} alt=''/><br/>
                <u><b>MODEL.DAT 파일 예</b></u><br/>	
                2.14E+08	1.52	3449	oh+h2=h+h2o	Marinov 1995a<br/>
                2.02E+14	-0.4	0	o+oh=o2+h	Marinov 1995a<br/>
                5.06E+04	2.67	6290	o+h2=oh+h	Marinov 1995a<br/>
              </li>
              <li></li>
            </ul>

          </li><br/>
        <hr className='class-6'/>
          <li>
          <h5><b><u></u></b></h5>
            <br/>

            
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>


          </li><br/>

        <hr className='class-6'/>
          <li>
          <h5><b><u></u></b></h5>
            <br/>

          <img src="../images/kinetics/7.PNG" width={'600'} alt=''/>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li><br/>

          <hr className='class-6'/>
          <li>
          <h5><b><u>Kintecus Command Line Switches</u></b></h5>
            <br/>
            <p>Kintecus provides various switches/options to control the program’s behavior, input files, outputs files, and even screen messages. The switches are always provided on the command line for Kintecus right after the program name:</p>

            <table style={tablecss}>
              <tr style={trcss}>
                <th>switch</th>
                <th>description</th>
              </tr>
              <tr style={trcss}>
                <td>-ah</td><td> See advanced Kintecus settings.</td>
              </tr>
              <tr style={trcss}>
                <td>-QUIET</td><td> Don't display output or warnings.</td>
              </tr>
              <tr style={trcss}>
                <td>-PARM:filename</td><td> Parameter Description Input File</td>
              </tr>
              <tr style={trcss}>
                <td>-SPNAME:filename</td><td> Species Common_Name/Mass Input File</td>
              </tr>
              <tr style={trcss}>
                <td>-SPEC:filename</td><td>Species Description Input File </td>
              </tr>
              <tr style={trcss}>
                <td>-MOD:filename</td><td>Model Description Input File </td>
              </tr>
              <tr style={trcss}>
                <td>-OUT:filename</td><td>Concentration Output File </td>
              </tr>
              <tr style={trcss}>
                <td>-THERM[:filename[:FORCE]]</td><td>Enter thermodynamics mode and use filename as the thermodynamic database spreadsheet </td>
              </tr>
              <tr style={trcss}>
                <td>-c </td><td>Create SPECIES.DAT file from model, then stop. </td>
              </tr>
              <tr style={trcss}>
                <td>-show </td><td>Display to screen the concentration of species, time and dt's. </td>
              </tr>
              <tr style={trcss}>
                <td>-ig:mass</td><td> Ignore Mass Balance. </td>
              </tr>
              <tr style={trcss}>
                <td>-ig:charge </td><td>Ignore Charge Balance. </td>
              </tr>
              <tr style={trcss}>
                <td>-ig:warn</td> Ignore all warnings.<td> </td>
              </tr>
              <tr style={trcss}>
                <td>-x </td><td>Output mole fractions instead of concentrations </td>
              </tr>
              <tr style={trcss}>
                <td>-SENSIT: Output </td><td>Sensitivity Analysis Output File </td>
              </tr>
              <tr style={trcss}>
                <td>-SENSIT:1(:n1 (:n2) )</td><td> Use sensitivity analysis #1 with
the following optional numeric entries:
n1 :perform analysis at various parts in the simulation
(default is three: beginning, middle and the end) </td>
              </tr>
              <tr style={trcss}>
                <td>-OR- n1=TIMES,t1,t2,tn...</td><td>where t1,t2 and tn are
times(in sec.) to perform the sensitivity analysis.
n2 = percent difference in k's used (5% default)
just typing -SENSIT:1 is equal to -SENSIT:1:3:5 </td>
              </tr>
              <tr style={trcss}>
                <td>-KINSTAT </td><td>Output statistics on the kinetic system
into the file KINSTAT.TXT </td>
              </tr>
              <tr style={trcss}>
                <td>-SEEMW </td><td>Output all species and their corresponding
molecular weight into the file MW.TXT. </td>
              </tr>
              <tr style={trcss}>
                <td>-P </td><td>Load a user provided periodic table from the text
file PERIOD.DAT </td>
              </tr>
              <tr style={trcss}>
                <td>-o:Y/N:Y/N:Y/N:Y/N </td><td>Output files based on various
physical properties/rates on the system as it runs. </td>
              </tr>
              <tr style={trcss}>
                <td>-h/? </td><td>You get this list. </td>
              </tr>
              <tr style={trcss}>
                <td>-FIT:a:b:c:d:e:f[:g:h:i]</td><td> Fit/Optimize your model against
experimental/fabricated data.<br/>
a=Fitting Algorithm=1, 2, 3, 4, 5 <br/>
b=Comparison Operator=1, 2, 3<br/>
c=User Dataset Filename=Any allowed text filename<br/>
If beginning of c=”FITLINK”, user defined equation constraints
If c=fitdatan then perform global regression analysis
If “c=fitdatan,filename” then perform global
regression analysis with initial conditions
d=Tolerance=1 to 10(-14)<br/>
e=Maximum Iterations Allowed=1-32767<br/>
f=Starting Vectors=1x10(-99) to 1x10(10)<br/>
g=Starting Temperature=1x10(-100) to 1x10(10)<br/>
h=Number of Cycles to Stay At Current Temperature
Before Reducing Temperature=1-32767<br/>
i=Percent Temperature Reduction=0 - 0.99999</td>
              </tr>
              <tr style={trcss}>
                <td>-FIT </td><td>sets default values to, a=1, b=1,
c=FITDATA.TXT, d=1x10(-6),e=9000
f=1x10(-35) </td>
              </tr>
              <tr style={trcss}>
                <td>-FITWEIGHT:X1:Y1[:X2:Y2:Xn:Yn] </td><td>fit weights Y against fitdata column no. X. </td>
              </tr>
              <tr style={trcss}>
                <td>-FITSTAT:[COVAR|BOOT]:[TYPE]:[AMOUNT]:[% REPEAT]</td><td> Output standard errors on the final fits (see doc).</td>
              </tr>
              <tr style={trcss}>
                <td>-EQUIL:a:b:c:j:k</td><td>Run Kintecus in EQUILIBRIUM <br/>
                  mode using<br/>
a=filename for the thermodynamic database<br/>
spreadsheet or just leave blank or enter 'D' to
use the default file name "EQTHERM.DAT".<br/>
b=FI: Forget Initialization (see manual under the
"Constant File ?" field). Typing a 'D' sets the
default of Initialization.<br/>
c=Sets various important tolerances for the non-linear solver.
Can be a word containing built in settings or the
user can specify each tolerance. See manual.
Some settings: VERY-LOOSE, LOOSE, TIGHT, VERY-TIGHT
The default setting is tight.
'c' can also be user settings e,f,g,h where
(values in parenthesis are default values for the TIGHT setting)<br/>
e=function tolerance (3.0E-9), f=minimum value tolerance
(2.0E-9), g=X-value tolerance (3.0E-12), h=maximum search
step allowed (200.0).<br/>
j=Maximum number of iterations to try before the
non-linear solver quits. Default is 30,000.<br/>
k=Maximum number of non-linear solver tries. (Default=75) </td>
              </tr>
              <tr style={trcss}>
                <td>-scan:1,2,3,4 </td><td>Scan user selected parameters. </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
              <tr style={trcss}>
                <td></td><td> </td>
              </tr>
            </table>
<p>
-ah See advanced Kintecus settings.<br/>
-QUIET Don't display output or warnings.<br/>
-PARM:filename (Parameter Description Input File)<br/>
-SPNAME:filename (Species Common_Name/Mass Input File)<br/>
-SPEC:filename (Species Description Input File)<br/>
-MOD:filename (Model Description Input File)<br/>
-OUT:filename (Concentration Output File)<br/>
-THERM[:filename[:FORCE]] (Enter thermodynamics mode
and use filename as the thermodynamic database
spreadsheet)<br/>
-c Create SPECIES.DAT file from model, then stop.<br/>
-show Display to screen the concentration of species,
time and dt's.<br/>
-ig:mass Ignore Mass Balance.<br/>
-ig:charge Ignore Charge Balance.<br/>
-ig:warn Ignore all warnings.<br/>
-x Output mole fractions instead of concentrations<br/>
-SENSIT: Output Sensitivity Analysis Output File<br/>
-SENSIT:1(:n1 (:n2) ) Use sensitivity analysis #1 with
the following optional numeric entries:
n1 :perform analysis at various parts in the simulation
(default is three: beginning, middle and the end)
-OR- n1=TIMES,t1,t2,tn... where t1,t2 and tn are
times(in sec.) to perform the sensitivity analysis.
n2 = percent difference in k's used (5% default)
just typing -SENSIT:1 is equal to -SENSIT:1:3:5<br/>
-KINSTAT Output statistics on the kinetic system
into the file KINSTAT.TXT .<br/>
-SEEMW Output all species and their corresponding
molecular weight into the file MW.TXT.<br/>
-P Load a user provided periodic table from the text
file PERIOD.DAT<br/>
-o:Y/N:Y/N:Y/N:Y/N Output files based on various
physical properties/rates on the system as it runs.<br/>
-h/? You get this list.<br/>
-FIT:a:b:c:d:e:f[:g:h:i] Fit/Optimize your model against
experimental/fabricated data.<br/>
a=Fitting Algorithm=1, 2, 3, 4, 5<br/>
b=Comparison Operator=1, 2, 3<br/>
c=User Dataset Filename=Any allowed text filename<br/>
If beginning of c=”FITLINK”, user defined equation constraints<br/>
If c=fitdatan then perform global regression analysis<br/>
If “c=fitdatan,filename” then perform global
regression analysis with initial conditions<br/>
d=Tolerance=1 to 10(-14)<br/>
e=Maximum Iterations Allowed=1-32767<br/>
f=Starting Vectors=1x10(-99) to 1x10(10)<br/>
g=Starting Temperature=1x10(-100) to 1x10(10)<br/>
h=Number of Cycles to Stay At Current Temperature
Before Reducing Temperature=1-32767<br/>
i=Percent Temperature Reduction=0 - 0.99999<br/>
-FIT sets default values to, a=1, b=1,
c=FITDATA.TXT, d=1x10(-6),e=9000
f=1x10(-35)<br/>
-FITWEIGHT:X1:Y1[:X2:Y2:Xn:Yn] fit weights Y against fitdata column no. X.<br/>
-FITSTAT:[COVAR|BOOT]:[TYPE]:[AMOUNT]:[% REPEAT] Output standard errors on the final fits (see doc).<br/>
-EQUIL:a:b:{'c'}:j:k Run Kintecus in EQUILIBRIUM<br/>
mode using<br/>
a=filename for the thermodynamic database
spreadsheet or just leave blank or enter 'D' to
use the default file name "EQTHERM.DAT".<br/>
b=FI: Forget Initialization (see manual under the
"Constant File ?" field). Typing a 'D' sets the
default of Initialization.<br/>
c=Sets various important tolerances for the non-linear solver.
Can be a word containing built in settings or the
user can specify each tolerance. See manual.
Some settings: VERY-LOOSE, LOOSE, TIGHT, VERY-TIGHT
The default setting is tight.
'c' can also be user settings e,f,g,h where
(values in parenthesis are default values for the TIGHT setting)<br/>
e=function tolerance (3.0E-9), f=minimum value tolerance
(2.0E-9), g=X-value tolerance (3.0E-12), h=maximum search
step allowed (200.0).<br/>
j=Maximum number of iterations to try before the
non-linear solver quits. Default is 30,000.<br/>
k=Maximum number of non-linear solver tries. (Default=75)<br/>
-scan{':1,2,3,4'} Scan user selected parameters.<br/>
-CONF{':a:b:c:d:e:f:g'} Run Kintecus and calculate
uncertainty parameters or confidence bands.
[defaults are listed in brackets or entering the
letter "D" for an option indicates to
use default value.]<br/>
a=total number of samples (simulations) to run. [100]<br/>
b=Types (0-31), 1=k or A/m/Ea, 2=Concs., res. times,
Bound./Extern. Conc., 4=Temperature, Extern. Temp
temper.,extern. heat source, 8=all M[] and S[]
parameters (TROE, SRI, third-body, etc.), 16=All
thermodynamic parameters from database.
Sum numbers to vary parameters , ie=31=ALL [31].<br/>
c=factor to multiply the final calculated standard
deviations [1.0].
d=% confidence limit to calculate final statistics:
(0%, 68%, 95%, 99%, 99.9%). 0% states to NOT to
calculate confidence limits but standard
deviations only [0%].
e=Fraction standard deviation difference to use for
all uncertainty runs [0.02-0.05]. Parameters in
your model can override this with the (#/#)? flag.
e can also be a list:(parameter type),STD.DEV.
f=Random number distribution type to use for e
(1=Gaussian or 2=Uniform), f can also be a list.
(parameter type),(1 or 2). Parameters with (#/#)?
flag will override this flag. [1 for ALL params.]
g=KEEP/DELETE, KEEP=keep all uncertainly runs. [KEEP]<br/>
-cluster Perform hierarchical cluster analysis<br/>
-cluster{':a:b:c:d:e:f:g:h:i:j:k'}<br/>
*remember, a "d" or "D" in any option uses the default
value (values in brackets, "{'['}", "{']'}" ).<br/>
a=Cluster Type, 1=hierarchical [1]
if a=101 then skip right to cluster analysis.<br/>
b=Dissimilarity Method (0-8) [0=Euclidean distance]
another popular method is 6=Correlation (r^2)<br/>
c=Clustering Method (0-4) [0=Minimum distance]
You can also try Ward's method 4 if b=0<br/>
d=Transformation (0-2) [0=no transformation]<br/>
e=Scale Data (0-2) [0=do not scale]<br/>
f=# of Cluster only used for K-means clustering has
no affect on hierarchical clustering. [2]
*** OPTIONS FOR TREE PRINTING FOLLOW ***<br/>
g=Page Width in characters [101]<br/>
h=Printing of Tree Method (1-3) [1]<br/>
i=Number of Lines Printed before each Node (1-10) [1]<br/>
j=Subtree Printing Specification (0-n) [0]<br/>
k=# of horizontal slices of the tree to print,(1-10) [1]<br/>
-MECHV Perform Mechanism Validation Analysis -MECHV{':a:b:c:d:e'} a=stop or continue after analysis [stop] b=which parts to do [15=all=1+2+4+8] c=algorithm for rho-reduction [1] d=Linear Programming parts [3=both=1+2] e=value for LP programming part [-120]
Advanced Kintecus Switches:<br/>
-anjac Use analytically calculated jacobians.<br/>
-d### Where ### is the ASCII code of the data
delimiter used in the input files.<br/>
-INT:n1[:list] Where n1 is the type of integrator used<br/>
n1 = 1 Modified Bader-Deuflhard (default)<br/>
n1 = 2 Cash-Karp-Runge-Kutta integrator<br/>
n1 = 3 Gear's BDF integrator, [list=extra options, see doc]<br/>
n1 = 4 DVODE integrator,[list=extra options,see doc]<br/>
n1 = 5 DASPK integrator [list=extra options, see doc]<br/>
-OF Output a freeform thermodynamic database spreadsheet<br/>
-y Set the lower threshold for the concentration (-y1e-40) .<br/>
-cphs Alter heat source to scale with volume changes during constant
pressure runs.<br/>
-i Run in interactive mode<br/>
-f:F:F Alter format settings for the numbers in CONC.TXT
where F's represent FORTRAN format descriptors.<br/>
-SIGD:n Set number of significant digits in the fitdata.txt file
Time(s) column to n decimal places. (default is 6)<br/>
-ojac[:#] Output jacobians/eigenvectors/eigenvalues into jacobian000.txt files'<br/>
-dynamic enable dynamic mode to control Kintecus in feedback<br/>
-rand Randomize internal random seeds to computer timer<br/>
-randi:# set integer random number seed to integer number #<br/>
-randr:# set real*8 random number seed to real*8 number #. 
-validate:(filename) compare a run against an external dataset (Tensorflow)<br/>
-obeymaxint Force Kintecus to obey the "Maximum Integration Time" field  <br/>
</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li><br/>
          
        <hr className='class-6'/>
          <li>
          <h5><b><u>Kintecus 활용, 인용 논문 리스트</u></b></h5>
            <br/>

          <img src="../images/kinetics/10.PNG" width={'600'} alt=''/>
            <ul>
              <li>Kintecus 홈으로 가서 Cites-Papers 버튼을 클릭하면 Kintecus 소프트웨어를 활용, 인용한 논문 약 600 여편의 논문이 있다.</li>
              <li><a href="http://www.kintecus.com/user.htm" target='_blank' rel="">Cites-Papers 로 이동</a></li>
            </ul>
          </li><br/>
        <hr className='class-6'/>


        </ol>	
		</>
	);
}	


import React from 'react';
import '../../styles/styles.css'

function ControlDescription() {
	return (
    <>
      <div className="px-4" style={{marginTop:80}}>
          <Contents />
      </div>
    </>
	);
};

export default ControlDescription;

function Contents() {
	const title = 'The Control Description Spreadsheet';

	return (
		<>
			<h1 className='title'>{title}</h1>	
			<hr className='class-1'/>

			<hr className='class-1'/>
          <h5><b><u>Control data sheet 설명</u></b></h5>
            <br/>
            <img src="../images/kinetics/3.PNG" width={'600'} alt=''/><br/>
          <img src="../images/kinetics/4.PNG" width={'600'} alt=''/><br/>
          
          <img src="../images/kinetics/5.PNG" width={'600'} alt=''/>

            <ul>
              <li>8 번 라인에 kinetic.exe 가 있는 패스를 써야한다. default 는 c:\kinetic\ 이다. </li>
              <li>12 번 라인에는 kinetic.exe를 실행에 필요한 option들을 써야 한다. </li>
              <li></li>
              <li>실행 : RUN 버튼을 클릭하시면 Kintecus가 실행됩니다.</li>
              <li>중지 : Esc 키 를 클릭, Kintecus 창에서 Ctrl + C 키를 입력 한다.</li>
            </ul>

						<h5><b><u>실행 옵션(kinetic switches)</u></b></h5>
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

		</>
	);
}	

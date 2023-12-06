//YAML
let tirets = "---";
let author = "author : ";
let title = "title : ";
let subtitle = "subtitle : ";
let bibliography = "bibliography : ";
let csl = "csl : ";
let points = "...";
var YAML = (tirets + "</br>" + author + "</br>" + title + "</br>" + subtitle + "</br>" + bibliography + "</br>" + csl + "</br>" + points + "</br>");

//Notes de bas de page
var Note = "[^1]";

//Canevas Slide
let titre_slide = "% Titre";
let author_slide = "% Auteur";
let date_slide = "% Date";
let slide1 = "# Slide1";
let slide2 = "## Slide2";
let first_po = "- Premier Point";
let second_po = "- Deuxième Point";
let slide3 = "## Slide 3";
let picture = "![picture of cat](Cat_poster_1.jpg)";

var Slide = (titre_slide + "</br>" + author_slide + "</br>" + date_slide + "</br>" + "</br>" + slide1 + "</br>" + "</br>" + slide2 + "</br>" + first_po + "</br>" + second_po + "</br>" + "</br>" + slide3 + "</br>" + "</br>" + picture + "</br>"+ "</br>");



var Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </br>";

//Ref biblio


var Picture_past='![picture of cat[^note]\\label{cat}](/home/julien/Dropbox/Documents/Images/Thesis/Cat_poster_1.jpg){width="300px" height="300px"}';
  
var Derepublica=" DE RE PUBLICA - LIBER PRIMUS</br>I. - - - &#60;im&#62;petu liberauissent, nec C. Duelius A. Atilius L. Metellus terrore Karthaginis, non duo Scipiones oriens incendium belli Punici secundi sanguine suo restinxissent, nec id excitatum maioribus copiis aut Q. Maximus eneruauisset, aut M. Marcellus contudisset, aut a portis huius urbis auolsum P. Africanus compulisset intra hostium moenia. M. uero Catoni homini ignoto et nouo, quo omnes qui isdem rebus studemus quasi exemplari ad industriam uirtutemque ducimur, certe licuit Tusculi se in otio delectare, salubri et propinquo loco. sed homo demens ut isti putant, cum cogeret eum necessitas nulla, in his undis et tempestatibus ad summam senectutem maluit iactari, quam in illa tranquillitate atque otio iucundissime uiuere. omitto innumerabilis uiros, quorum singuli saluti huic ciuitati fuerunt, et qui sunt  &#60;haut&#62; procul ab aetatis huius; memoria, commemorare eos desino, ne quis se aut suorum aliquem praetermissum queratur. unum hoc definio, tantam esse necessitatem uirtutis generi hominum a natura tantumque amorem ad communem salutem defendendam datum, ut ea uis omnia blandimenta uoluptatis otique uicerit.</br> II. Nec uero habere uirtutem satis est quasi artem aliquam nisi utare; etsi ars quidem cum ea non utare scientia tamen ipsa teneri potest, uirtus in usu sui tota posita est; usus autem eius est maximus ciuitatis gubernatio, et earum ipsarum rerum quas isti in angulis personant, reapse non oratione perfectio. nihil enim dicitur a philosophis, quod quidem recte honesteque dicatur, quod &#60;non&#62; ab iis partum confirmatumque sit, a quibus ciuitatibus iura discripta sunt. unde enim pietas, aut a quibus religio? unde ius aut gentium aut hoc ipsum ciuile quod dicitur? unde iustitia fides aequitas? unde pudor continentia fuga turpi&#60;tu&#62;dinis adpetentia laudis et honestatis? unde in laboribus et periculis fortitudo? nempe ab iis qui haec disciplinis informata alia moribus confirmarunt, sanxerunt autem alia legibus. quin etiam Xenocraten ferunt, nobilem in primis philosophum, cum quaereretur ex eo quid adsequerentur eius discipuli, respondisse ut id sua sponte facerent quod cogerentur facere legibus. ergo ille, ciuis qui id cogit omnis imperio legumque poena, quod uix paucis persuadere oratione philosophi possunt, etiam iis qui illa disputant ipsis est praeferendus doctoribus. quae est enim istorum oratio tam exquisita, quae sit anteponenda bene constitutae ciuitati publico iure et moribus? equidem quem ad modum 'urbes magnas atque inperiosas', ut appellat Ennius, uiculis et castellis praeferendas puto, sic eos qui his urbibus consilio atque auctoritate praesunt, iis qui omnis negotii publici expertes sint, longe duco sapientia ipsa esse anteponendos. et quoniam maxime rapimur ad opes augendas generis humani, studemusque nostris consiliis et laboribus tutiorem et opulentiorem uitam hominum reddere, et ad hanc uoluptatem ipsius naturae stimulis incitamur, teneamus eum cursum qui semper fuit optimi cuiusque, neque ea signa audiamus quae receptui canunt, ut eos etiam reuocent qui iam processerint.</br>III.His rationibus tam certis tamque inlustribus opponuntur ab iis qui contra disputant primum labores qui sint re publica defendenda sustinendi, leue sane inpedimentum uigilanti et industrio, neque solum in tantis rebus sed etiam in mediocribus uel studiis uel officiis uel uero etiam negotiis contemnendum. adiunguntur pericula uitae, turpisque ab his formido mortis fortibus uiris opponitur, quibus magis id miserum uideri solet, natura se consumi et senectute, quam sibi dari tempus ut possint eam uitam, quae tamen esset reddenda naturae, pro patria potissimum reddere. illo uero se loco copiosos et disertos putant, cum calamitates clarissimorum uirorum iniuriasque iis ab ingratis inpositas ciuibus colligunt. hinc enim illa et apud Graecos exempla, Miltiadem uictorem domitoremque Persarum, nondum sanatis uolneribus iis quae corpore aduerso in clarissima uictoria accepisset, uitam ex hostium telis seruatam in ciuium uinclis profudisse, et Themistoclem patria quam liberauisset pulsum atque proterritum, non in Graeciae portus per se seruatos sed in barbariae sinus confugisse quam adflixerat, nec uero leuitatis Atheniensium crudelitatisque in amplissimos ciuis exempla deficiunt. quae nata et frequentata apud illos etiam in grauissumam ciuitatem nostram dicunt redundasse; nam uel exilium Camilli uel offensio commemoratur Ahalae  Vel inuidia Nasicae uel expulsio Laenatis uel Opimi damnatio uel fuga Metelli uel acerbissima C. Mari clades --- principum caedes, uel eorum multorum pestes quae paulo post secutae sunt. nec uero iam &#60;meo&#62; nomine abstinent, et credo quia nostro consilio ac periculo sese in illa uita atque otio conseruatos putant, grauius etiam de nobis queruntur et amantius. sed haud facile dixerim, cur cum ipsi discendi aut uisendi causa maria tramittant - - -. (- - -)</br>";


var tiltelatex = "header-includes:</br>- \\usepackage{titlesec}</br>- \\usepackage{fancyhdr}</br>- \\usepackage{indentfirst}</br>- \\usepackage{hyperref}</br>- \\setlength{\\parindent}{0.5cm}</br>- \\renewcommand{\\thesection}{\\Roman{section}.}</br>- \\renewcommand{\\thesubsection}{\\Alph{subsection}.}</br>- \\renewcommand{\\thesubsubsection}{\\arabic{subsubsection}.}</br>- \\renewcommand{\\theparagraph}{\\alph{paragraph}.}</br>- \\newcommand{\\sectionbreak}{\\clearpage}</br>- \\titlespacing{\\section}{0pt}{*4}{15pt}</br>- \\titlespacing{\\subsection}{10pt}{*4}{*1.5}</br>- \\titlespacing{\\subsubsection}{20pt}{*4}{*1.5}</br>- \\titlespacing{\\paragraph}{30pt}{*4}{*1.5}</br>- \\titleformat{\\section}{\\normalfont\\LARGE\\bfseries}{\\thesection}{3pt}{}</br>- \\titleformat{\\subsection}{\\normalfont\\large\\bfseries}{\\thesubsection}{3pt}{}</br>- \\titleformat{\\subsubsection}{\\normalfont\\small\\bfseries}{\\thesubsubsection}{3pt}{}</br>- \\titleformat{\\paragraph}{\\normalfont\\small\\bfseries}{\\theparagraph}{3pt}{}</br>- \\hypersetup{pdftitle={},pdfauthor={Julien Dehut}, pdfsubject={},pdfkeywords={}}</br>";




var YAMLaTeX=(tirets + "</br>" + author +"</br>" + title + "</br>" + subtitle + "</br>" + bibliography + "</br>" + csl + "</br>" + tiltelatex+tirets + "</br>");

var YAMLbeamer="---</br>title: </br>author: J. Dehut</br>theme: Pittsburgh</br>colortheme: fly</br>date: 9 novembre 2023</br>header-includes:</br>- \\usepackage{hyperref}</br>- \\titlegraphic{\\includegraphics[width = 3cm]{Logo.png}}</br>- \\setbeamercolor{background canvas}{bg=black}</br>- \\setbeamercolor{author}{bg=black, fg=white}</br>- \\setbeamercolor{date}{bg=black, fg=white}</br>- \\setbeamercolor{normal text}{fg=white}</br>- \\setbeamertemplate{frametitle}{\\centering\\textbf{\\insertframetitle}\\par}</br>- \\addtobeamertemplate{frametitle}{\vspace*{0.5cm}}{\vspace*{0.2cm}}</br>- \\hypersetup{pdftitle={},pdfauthor={Julien Dehut},pdfsubject={}}</br>---</br>"

var bibliotoc="# Bibliographie {#refs - }</br>::: {#refs}</br>:::</br>\\renewcommand{\\contentsname}{Table des Matières}</br>\\tableofcontents";
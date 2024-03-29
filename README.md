# mĕa.
![meagi](mea.gif)
## Fonctionnalités :
- Éditeur markdown
- Prompteur
- Produit des données brutes (*.md, *.txt...)
- Intégration de Pandoc
- Intégration de Git

## Changelog :
- ajout de raccourcis de pour naviguer dans le texte. 
On mémorise la position avec Ctrl+D, on se rend à cette position avec Ctrl+G (go). 
Il est possible de mémoriser 5 positions supplémentaires avec Ctrl+Alt+1-5 et de s'y rendre avec Ctrl+1-5.
Idéal pour modifier le YAML de départ. Ces positions sont mémorisées individuellement pour tous les différents fichiers lus par mĕa

## _To Do_ à court terme :
- Styliser le menu paramètre.
- Drag and drop et tous le processus d'ouverture de fichier
- Conserver seulement le nom de fichier avant la compilation
- Optimisation du code.
- Version pour MacOs et Windows.

## _To Do_ à long terme : 
- Mode page ( en fait j'ai passé la majeure partie du développement, non comptabilisé ici à faire en sorte de simuler des pages sur lequels je pourrais écrire, il y a là d'ailleurs une des raisons d'être de ce logiciel. Le système est fonctionelle, mais je tarde à l'intégrer devant la complexité du code et son ancienneté)
- Éditeur de rendu pour Pandoc. Un autre point de départ de ce projet est la volonté de créer une forme de documentation interactive pour Pandoc. Ce projet est toujours en cours et se trouverait naturellement intégré ici.
- Prévisualisation
- intégration de l'api de Zotero.
- intégration de l'api Github.
- menu de l'application sous MacOs
- coloration syntaxique


## Bugs connus :
- Le chargement des raccourcis peut prendre une minute a être effective. 
- L'écriture automatique du fichier à la fermeture de l'application peut induire une consommation de ressources excessives alors que l'application est fermée.

#### _caveat emptor_
Si vous cherchez un bon outil pour l'écriture, le projet [stylo](https://stylo.huma-num.fr/login)<sup>[1](#f1)</sup> propose une interface de qualité. Si vous cherchez un bon logiciel à installer sur votre machine, [Zettler](https://www.zettlr.com/) s'appuie sur la méthode Zettelkasten pour structurer un projet. Si vous cherchez un éditeur généraliste qui vous permet de gagner en productivité dans l'écriture, [Vim](https://www.vim.org/)<sup>[2](#f2)</sup> semble une alternative indépassable.
Pour profiter pleinement de mea, [Pandoc](https://pandoc.org/installing.html), [GIT](https://git-scm.com/downloads) et [Zotero](https://www.zotero.org/download/) sont indispensables. <br>
Pour télécharger une version c'est [ici](https://github.com/jdehut/mea/releases).
 
#### _Nondum matura est_
Mea est la preuve de concept d'un éditeur de texte non WYSIWYG. Le texte que l'on écrit peut apparaître à l'écran avec n'importe quelle police, de n'importe quelle taille et de n'importe quelle couleur. Lors de l'enregistrement, ces éléments de style n'auront aucune conséquence. Les données produites sont toujours brutes, à traiter. Les textes sont structurés en markdown (par exemple), les différentes parties sont alors normalement hierachisées. Le traitement, _l'export_, est opéré par pandoc dont mea fait figure ici d'interface graphique (**Traduire**). Mea peut servir également d'interface pour GIT et faciliter le _versioning_, c'est-à-dire conserver et gérer les différentes phases d'écriture d'un texte (**Génétique**). Il permet de faire défiler automatiquement le texte pour en présenter le contenu devant un auditoire (**Présentation**). Il voudrait enfin faciliter l'utilisation de _Zotero_ dans la rédaction de notes bibliographiques en _markdown_ (**Bibliographie**).

#### _Vestigia terrent_
La liste des éditeurs de textes, notion prise ici dans son sens le plus large, demanderait une recension conséquente tant les alternatives se sont multipliées ces dernières années. Conscient des difficultés fondamentales que l’usage de Microsoft Word implique, j’ai essayé nombre de ces logiciels. Passant notamment d’Ulysse à Scribes, de Coda à Codium, de Page à Writer. Mais je peux le confesser enfin : je revenais toujours vers Microsoft Word. Il n’est pas le lieu ici d’investiguer trop longuement les causes de ce trouble. Disons brièvement que le traitement de texte de l’entreprise de Redmond est depuis très longtemps dans ma vie, à partir de la cinquième version sous DOS, et qu’il n’est jamais facile de mettre fin à une relation aussi longue, aussi toxique soit-elle. 


Toutes les alternatives que j’essayais présentaient l’éclat de la nouveauté qui me persuadait, un temps, d’avoir pu me libérer. Les qualités de ces programmes sont évidentes, le gain au regard de Word incomparable. Pourtant, il y avait toujours quelque chose qui produisait une friction en moi et qui me faisait fatalement, à mon propre désarroi, retourner vers le traitement de texte de Microsoft. Comprendre l’origine et la nature de cette friction a pris du temps. L’année 2017 a cependant été un tournant. Je me rappelle très bien cette après-midi ensoleillée à mon bureau lorsque soudain la couleur de l’interface de Word me choqua profondément. Le bandeau qui surplombe le menu m’apparut d’un éclat nouvellement désagréable. Sans doute, nous ne sommes pas égaux devant l’influence des couleurs sur nous. La couleur bleue pourrait d'ailleurs faire office de marqueur d'une certaine individualité, puisque nous individualisons sa perception. Personne ne voit le bleu de la même manière. Et ce jour-là, le bleu de l’interface m’évoqua irrémédiablement la couleur d’une poubelle affreusement laide que nous avions chez mes parents<sup>[3](#f3)</sup>. _Mon traitement de texte avait désormais la couleur d’une poubelle_ formulais-je alors.


Devant ce sentiment de dégoût, plusieurs questions surgirent. Mon premier élan fût naturellement de me remettre en cause : est-ce la couleur qui avait changé subitement ou moi qui la remarquais à présent, comme après une longue léthargie ? Je venais en effet de mettre à jour ma suite bureautique, et il n’aurait pas été surprenant que la nuance de bleue soit altérée durant cette opération, et cela sans mon consentement. L’apparition du ruban dans l’entablement de l’interface ne s’était pas imposée autrement. Les séquelles de cette opération sont d’ailleurs encore présentes. Mon deuxième réflexe a été de changer cette couleur, sans succès. Ceci ne fait pas partie des éléments qui me sont accessibles, même si la fonctionnalité est sans doute triviale à implémenter. Ce n’était pas grand-chose en soi, surtout au vu de tous les arguments de fond que l’utilisation de ce logiciel n’avait cessé de soulever depuis le premier jour, alors qu’enfant je souhaitais désespérément utiliser Word Perfect et qu’il m’avait été impossible de récupérer ce logiciel. Tout le monde utilisait déjà Word. _Adapt or perish_. 


Je n’étais cependant pas resté passif devant les difficultés structurelles. Comme beaucoup, au fil du temps j’ai pris des habitudes afin de tenter de compenser au mieux les manquements et les bugs de ce logiciel. Depuis les années 2000 par exemple, échaudé par de trop nombreux aléas de fonctionnement, je n’utilise plus ni l’icône en forme de disquette ni le raccourci Control+S (ou Command S pour les produits Apple) afin d'enregistrer mon travail. Il est de mon expérience d’avoir remarqué que cette icône ne fonctionnait pas _toujours_. C’est important _toujours_. Ne tombons ici dans aucune cabale : dans l’écrasante majorité des cas, ce bouton fonctionne avec efficacité. Mais cela n’a pas _toujours_ été le cas au cours de notre longue histoire commune. Il s’agit évidemment d’un problème de perception et de confiance. Sans doute, ce dysfonctionnement, s’il existe, s’est révélé anodin la plupart du temps. Mais il y a eu plusieurs trahisons indubitables, dont les conséquences ont été pénibles. De la même manière, le raccourci clavier a démontré à plusieurs reprises que je ne pouvais pas compter sur lui. Et je ne parle pas ici des sauvegardes automatiques dont il n’y a pratiquement jamais rien à tirer. Tant est si bien que mon flux de travail consistait à sauvegarder moi-même (entendons à naviguer dans le menu _fichier_, puis à cliquer sur _enregistrer sous_…), sur une base subjective et régulière, mes documents sous des noms différents dans un dossier propre à chaque projet. Il ne m’est donc pas rare de posséder soixante versions d’un même texte en cours d’écriture. Ceci serait évidemment intéressant si la génétique pouvait s’appliquer. Mais je ne reviens presque jamais sur les versions antérieures. Ceci n’est qu’une façon de travailler dysfonctionnelle, née d’un conditionnement quasi pavlovien généré par Microsoft Word. 


Chacun voit l’ampleur du traumatisme. Je cherche donc des alternatives depuis longtemps, et avec raison. Et comme toutes ces alternatives manquaient d’un petit quelque chose, geste d’_hubrys_ sans doute, j’ai décidé de faire mon propre logiciel, _mea_, avec un mantra en tête : ne plus utiliser de traitement de textes faits par d’autres personnes, pour d’autres besoins, mais réaliser mon propre outil. C’est ainsi que j’ai conçu dès le départ ce programme pour être adaptable à d’autres besoins. La documention (qui tarde) devrait permettre à d’autre de se l’approprier aisément. 


_Mea_ est le reflet de mon évolution. Un point dans un flux, un moment donné dans mon processus de libération, l’expression en l’état de mes connaissances perfectibles. Vous ne trouverez pas d’icônes qui proposent les principales balises du _markdown_. De telles indications me sont devenues inutiles. Cependant, comme je souhaite rédiger mes Powerpoints, j’ai ajouté un canevas dans la section coller pour m’inciter à pratiquer cette syntaxe.


#### Sur les numéros de version. 
Si vous avez la curiosité d’installer et d’utiliser ce logiciel, vous aurez alors sur votre ordinateur le produit d’une forme de procrastination de mon doctorat. Les numéros de version reflètent en effet le nombre de jours passés à réaliser ce projet, du temps volé à coup de minutes éparses, du temps que je n’ai donc pas passé à rédiger ma thèse, même si le projet nourrit ma réflexion. Je tiens à remercier infiniment ici monsieur Philippe Brunet, qui me dirige. Ce logiciel doit beaucoup au projet [marathon](https://www.demodocos.fr/ch2.html) mais surtout, les quelques minutes qu’il a passé à l'utiliser dans une version préliminaire ont contribué à en modifier profondément la logique. Merci chaleureusement à Gilles de Rosny de nous autoriser à inclure la police Demodocos4.

#### Sur les intitulés des menus. 
Comme les questions de la métaphore en informatique me questionnent, les différents intitulés reflètent un certain état de ma réflexion sur la question. Changer ces dénominations demeure trivial. S'il est de mon souhait, malgré tout, que cela ne semble pas trop baroque, je suis égoistement le destinataire de ces intitulés.







 

<b id="f1">1</b> un projet porté par le [CRIHN](https://www.crihn.org/)<br>
<b id="f2">2</b> Emacs possède de nombreuses fonctionnalités interressantes également.<br>
<b id="f3">3</b> La nuance exacte à changé depuis mais se situe sans doute entre le bleu céruléen et cæruléum [https://www.toutes-les-couleurs.com/couleur-bleu.php](https://www.toutes-les-couleurs.com/couleur-bleu.php)<br>







var gui = require("nw.gui");
var fs = require('fs');
var path = require('path');
var databaseName = 'mydb';
var versionNumber = '1.0';
var textDescription = 'my first database';
var estimatedSizeOfDatabase = 3 * 1024 * 1024;

var db = openDatabase(
    databaseName,
    versionNumber,
    textDescription,
    estimatedSizeOfDatabase
);

// Gestion des raccourcis

nw.Window.get().on('focus', function() {
  //console.log("la fenêtre de note est focus")
  RegisterShortcut();
  });

nw.Window.get().on('blur', function() {
  //console.log("la fenêtre de note est pas focus")
  UnRegisterShortcut();
  });


function RegisterShortcut(){
  var shortcut = new nw.Shortcut(ShortSave);
  nw.App.registerGlobalHotKey(shortcut);
  var shortcut2 = new nw.Shortcut(ShortNote);
  nw.App.registerGlobalHotKey(shortcut2);
  var shortcut3 = new nw.Shortcut(ShortPast);
  nw.App.registerGlobalHotKey(shortcut3);	
  var shortcut4 = new nw.Shortcut(ShortNoteMean);
  nw.App.registerGlobalHotKey(shortcut4);
  var shortcut6 = new nw.Shortcut(Refresh);
  nw.App.registerGlobalHotKey(shortcut6);
  var shortcut7 = new nw.Shortcut(ShortMB0);
  nw.App.registerGlobalHotKey(shortcut7); 
  var shortcut8 = new nw.Shortcut(ShortMG0);
  nw.App.registerGlobalHotKey(shortcut8);

  var shortcut9 = new nw.Shortcut(ShortMB1);
  nw.App.registerGlobalHotKey(shortcut9); 
  var shortcut10 = new nw.Shortcut(ShortMG1);
  nw.App.registerGlobalHotKey(shortcut10);
  var shortcut11 = new nw.Shortcut(ShortMB2);
  nw.App.registerGlobalHotKey(shortcut11); 
  var shortcut12 = new nw.Shortcut(ShortMG2);
  nw.App.registerGlobalHotKey(shortcut12);
  var shortcut13 = new nw.Shortcut(ShortMB3);
  nw.App.registerGlobalHotKey(shortcut13); 
  var shortcut14 = new nw.Shortcut(ShortMG3);
  nw.App.registerGlobalHotKey(shortcut14);
  var shortcut15 = new nw.Shortcut(ShortMB4);
  nw.App.registerGlobalHotKey(shortcut15); 
  var shortcut16 = new nw.Shortcut(ShortMG4);
  nw.App.registerGlobalHotKey(shortcut16);
  var shortcut17 = new nw.Shortcut(ShortMB5);
  nw.App.registerGlobalHotKey(shortcut17); 
  var shortcut18 = new nw.Shortcut(ShortMG5);
  nw.App.registerGlobalHotKey(shortcut18);
  var shortcut19 = new nw.Shortcut(ShortPrint);
  nw.App.registerGlobalHotKey(shortcut19);

}

function UnRegisterShortcut(){
  var shortcut = new nw.Shortcut(ShortSave);
  nw.App.unregisterGlobalHotKey(shortcut);
  var shortcut2 = new nw.Shortcut(ShortNote);
  nw.App.unregisterGlobalHotKey(shortcut2);
  var shortcut3 = new nw.Shortcut(ShortPast);
  nw.App.unregisterGlobalHotKey(shortcut3);	
  var shortcut4 = new nw.Shortcut(ShortNoteMean);
  nw.App.unregisterGlobalHotKey(shortcut4);
  var shortcut6 = new nw.Shortcut(Refresh);
  nw.App.unregisterGlobalHotKey(shortcut6);
  var shortcut7 = new nw.Shortcut(ShortMB0);
  nw.App.unregisterGlobalHotKey(shortcut7);
  var shortcut8 = new nw.Shortcut(ShortMG0);
  nw.App.unregisterGlobalHotKey(shortcut8);

  var shortcut9 = new nw.Shortcut(ShortMB1);
  nw.App.unregisterGlobalHotKey(shortcut9); 
  var shortcut10 = new nw.Shortcut(ShortMG1);
  nw.App.unregisterGlobalHotKey(shortcut10);
  var shortcut11 = new nw.Shortcut(ShortMB2);
  nw.App.unregisterGlobalHotKey(shortcut11); 
  var shortcut12 = new nw.Shortcut(ShortMG2);
  nw.App.unregisterGlobalHotKey(shortcut12);
  var shortcut13 = new nw.Shortcut(ShortMB3);
  nw.App.unregisterGlobalHotKey(shortcut13); 
  var shortcut14 = new nw.Shortcut(ShortMG3);
  nw.App.unregisterGlobalHotKey(shortcut14);
  var shortcut15 = new nw.Shortcut(ShortMB4);
  nw.App.unregisterGlobalHotKey(shortcut15); 
  var shortcut16 = new nw.Shortcut(ShortMG4);
  nw.App.unregisterGlobalHotKey(shortcut16);
  var shortcut17 = new nw.Shortcut(ShortMB5);
  nw.App.unregisterGlobalHotKey(shortcut17); 
  var shortcut18 = new nw.Shortcut(ShortMG5);
  nw.App.unregisterGlobalHotKey(shortcut18);
  var shortcut19 = new nw.Shortcut(ShortPrint);
  nw.App.registerGlobalHotKey(shortcut19);
}



var ShortSave = {
  key : "Ctrl+S",
  active : function() {
	  //checkmodif();
	  feedback();
	  if (localStorage.getItem("ctrls")== "true"){
				 saveHopeR2();
				// GitAdd();
				 GitCommit();
			}	
			else{
				 saveHopeR2();
			}
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};


var ShortNote = {
  key : "Ctrl+Alt+F",
  active : function() {
	  pasteHtmlAtCaret(Note);
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var Refresh = {
  key : "Ctrl+R",
  active : function() {
    location.reload();
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var ShortPast = {
  key : "Ctrl+Alt+V",
  active : function() {
	  getclip();
	  var printbib = localStorage.getItem("bibref");
	  pasteHtmlAtCaret(printbib);
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

	var ShortNoteMean = {
  key : "Ctrl+Alt+G",
  active : function() {
	  getclip();
	  var printNoteM = localStorage.getItem("bibMean");
	var alea = Math.floor((Math.random() * 5000) + 1);
	var printN= "[^"+printNoteM+alea+"]";
	
pasteHtmlAtCaret(printN);
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var ShortExitPre = {
  key : "Escape",
  active : function() {
	  closeNavPre()
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var ShortPauseM = {
  key : "Space",
  active : function() {
	  toggle2();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var ShortMB0 = {
  key : "Ctrl+D",
  active : function() {
    feedbackMarque();
	  //Mark0();
    var CoordsInShape= window.pageYOffset;
    //localStorage.setItem("CaretPosition0", CoordsInShape);
    localStorage.removeItem("CaretPosition0");
  
  localStorage.setItem("CaretPosition0", CoordsInShape);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret0='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
  });
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMB1 = {
  key : "Ctrl+Alt+1",
  active : function() {
    feedbackMarque();
	  //Mark0();
    var CoordsInShape1= window.pageYOffset;
    //localStorage.setItem("CaretPosition1", CoordsInShape);
    localStorage.removeItem("CaretPosition1");
  
  localStorage.setItem("CaretPosition1", CoordsInShape1);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret1='"+CoordsInShape1+"' WHERE Path='"+SQLPath+"'"); 
  });
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMB2 = {
  key : "Ctrl+Alt+2",
  active : function() {
    feedbackMarque();
	  //Mark0();
    var CoordsInShape2= window.pageYOffset;
    //localStorage.setItem("CaretPosition2", CoordsInShape2);
    localStorage.removeItem("CaretPosition2");
  
  localStorage.setItem("CaretPosition2", CoordsInShape2);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret2='"+CoordsInShape2+"' WHERE Path='"+SQLPath+"'"); 
  });
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var ShortMB3 = {
  key : "Ctrl+Alt+3",
  active : function() {
    feedbackMarque();
	  //Mark0();
    var CoordsInShape3= window.pageYOffset;
    //localStorage.setItem("CaretPosition2", CoordsInShape3);
    localStorage.removeItem("CaretPosition3");
  
  localStorage.setItem("CaretPosition3", CoordsInShape3);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret3='"+CoordsInShape3+"' WHERE Path='"+SQLPath+"'"); 
  });
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};


var ShortMB4 = {
  key : "Ctrl+Alt+4",
  active : function() {
    feedbackMarque();
	  //Mark0();
    var CoordsInShape4= window.pageYOffset;
    //localStorage.setItem("CaretPosition4", CoordsInShape4);
    localStorage.removeItem("CaretPosition4");
  
  localStorage.setItem("CaretPosition4", CoordsInShape4);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret4='"+CoordsInShape4+"' WHERE Path='"+SQLPath+"'"); 
  });
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};

var ShortMB5 = {
  key : "Ctrl+Alt+5",
  active : function() {
    feedbackMarque();
	  //Mark0();
    var CoordsInShape5= window.pageYOffset;
    //localStorage.setItem("CaretPosition5", CoordsInShape5);
    localStorage.removeItem("CaretPosition5");
  
  localStorage.setItem("CaretPosition5", CoordsInShape5);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret5='"+CoordsInShape5+"' WHERE Path='"+SQLPath+"'"); 
  });
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};


var ShortMG0 = {
  key : "Ctrl+G",
  active : function() {
	  GoMark0();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMG1 = {
  key : "Ctrl+1",
  active : function() {
	  GoMark1();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMG2 = {
  key : "Ctrl+2",
  active : function() {
	  GoMark2();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMG3 = {
  key : "Ctrl+3",
  active : function() {
	  GoMark3();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMG4 = {
  key : "Ctrl+4",
  active : function() {
	  GoMark4();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};
var ShortMG5 = {
  key : "Ctrl+5",
  active : function() {
	  GoMark5();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};


var ShortPrint = {
  key : "Ctrl+P",
  active : function() {
	  GenPdfFusion();
    feedbackPrint();
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    console.log(msg);
  }
};


function GoMark0(){
  var GTcaret0= localStorage.getItem("CaretPosition0");
 window.scrollTo(0, GTcaret0);
};

function GoMark1(){
  var GTcaret1= localStorage.getItem("CaretPosition1");
 window.scrollTo(0, GTcaret1);
};
function GoMark2(){
  var GTcaret2= localStorage.getItem("CaretPosition2");
 window.scrollTo(0, GTcaret2);
};
function GoMark3(){
  var GTcaret3= localStorage.getItem("CaretPosition3");
 window.scrollTo(0, GTcaret3);
};
function GoMark4(){
  var GTcaret4= localStorage.getItem("CaretPosition4");
 window.scrollTo(0, GTcaret4);
};
function GoMark5(){
  var GTcaret5= localStorage.getItem("CaretPosition5");
 window.scrollTo(0, GTcaret5);
};




// fonction Lire

function chooseFile(name) {
var fs = require("fs");	
var path = require("path");
  var chooser = document.querySelector(name);
  chooser.addEventListener("change", function(evt) {
    console.log(this.value);
    var input = this.value;
    // if docx ici sur l'input.
    // introduire une call back, en tout cas un moyen de dire à l'app que la conversion est achevée
    var InputPath = path.dirname(input); 
    var InputNameSolo = path.basename(input);
    var InputNameNoExt = path.basename(input, path.extname(input));
    var InputNameExt = path.extname(input);
    var SqPath='"'+input+'"';
    localStorage.removeItem("CaretPosition");
    localStorage.removeItem("CaretPositionP");
    localStorage.removeItem("CaretPositionN");
    localStorage.removeItem("InputFile");
localStorage.setItem("InputFile", input);
localStorage.removeItem("FilePathCook");
localStorage.setItem("FilePathCook", InputPath);
localStorage.removeItem("InputNameSoloC");
localStorage.setItem("InputNameSoloC", InputNameSolo);
localStorage.removeItem("InputNameNoExtC");
localStorage.setItem("InputNameNoExtC", InputNameNoExt);
localStorage.removeItem("InputNameExtC");
localStorage.setItem("InputNameExtC", InputNameExt);
document.title = localStorage.getItem("InputFile");
var path_file = localStorage.getItem("FilePathCook").trim();
var name_file = localStorage.getItem("InputNameSoloC").trim();

db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS FilteTab (id integer primary key autoincrement, Path, CaretE INT, CaretP INT, CaretN INT, Caret0 INT, Caret1 INT, Caret2 INT, Caret3 INT, Caret4 INT, Caret5 INT )');

    tx.executeSql('SELECT * FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
       var len = results.rows.length, i;
      for (i = 0; i < len; i++) {
         var DbPath=(results.rows.item(i).Path);
      
      }
      if (DbPath == null) {
        tx.executeSql("INSERT INTO FilteTab (Path) VALUES ('"+input+"')");
        console.log("fichier non présent");
      }
      else {
        tx.executeSql('SELECT CaretE FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSql=(results.rows.item(i).CaretE);
            localStorage.removeItem("CaretPosition");
            localStorage.setItem("CaretPosition", CoordsInSql);
            var NuncScio = localStorage.getItem("CaretPosition");
            window.scrollTo(0, NuncScio);
         }
        })
        tx.executeSql('SELECT CaretP FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlP=(results.rows.item(i).CaretP);
            localStorage.removeItem("CaretPositionP");
            localStorage.setItem("CaretPositionP", CoordsInSqlP);
            
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).CaretN);
            localStorage.removeItem("CaretPositionN");
            localStorage.setItem("CaretPositionN", CoordsInSqlN);
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).Caret0);
            localStorage.removeItem("CaretPosition0");
            localStorage.setItem("CaretPositionN", CoordsInSqlN);
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).Caret1);
            localStorage.removeItem("CaretPosition1");
            localStorage.setItem("CaretPosition1", CoordsInSqlN);
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).Caret2);
            localStorage.removeItem("CaretPosition2");
            localStorage.setItem("CaretPosition2", CoordsInSqlN);
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).Caret3);
            localStorage.removeItem("CaretPosition3");
            localStorage.setItem("CaretPosition3", CoordsInSqlN);
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).Caret4);
            localStorage.removeItem("CaretPosition4");
            localStorage.setItem("CaretPosition4", CoordsInSqlN);
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
            var CoordsInSqlN=(results.rows.item(i).Caret5);
            localStorage.removeItem("CaretPosition5");
            localStorage.setItem("CaretPosition5", CoordsInSqlN);
         }
        })
        console.log("fichier présent");
      }
    });
});

var process = require("child_process");
process.exec("cd /  && cd "+path_file+"&& /usr/bin/stat --format '%Y'"+" "+name_file ,function (err,stdout,stderr) {
  if (err) {
//a reprendre ???    
   l
  } else {
    var SizeVar = stdout;
      localStorage.removeItem("SizeFileCook");
localStorage.setItem("SizeFileCook", SizeVar);    
  }
})
fs.readFile(input, function (err, data) {
if (err) throw err;
console.log(data);
         document.getElementById("editor").innerText = data; 
         fs.writeFile("temp_rest", data, (err) => {  
     if (err) throw err; });      
}); 
  }, false);
}

// fonction qui permet de déplacer le texte en cas de rafraichissement notamment
function openGO(){
  var NuncScio = localStorage.getItem("CaretPosition");
  window.scrollTo(0, NuncScio);
  
  }

  function openGOP(){
    var NuncScioN = localStorage.getItem("CaretPositionP");
    window.scrollTo(0, NuncScioN);
    }

    function GetCaretE(){
      var CoordsInShape= window.pageYOffset;

      localStorage.removeItem("CaretPosition");
      localStorage.setItem("CaretPosition", CoordsInShape);
    }
    function GetCaretP(){
      var CoordsInShape= window.pageYOffset;

      localStorage.removeItem("CaretPositionP");
      localStorage.setItem("CaretPositionP", CoordsInShape);

    }
function GoCaretP(){
  var SqPath = localStorage.getItem("InputFile");
  db.transaction(function (tx) {
  tx.executeSql('SELECT CaretP FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
    var len = results.rows.length, i;
   for (i = 0; i < len; i++) {
      var CoordsInSqlP=(results.rows.item(i).CaretP);
      window.scrollTo(0, CoordsInSqlP);
   }
  })

})
}

  function pre(){
    document.getElementById("editor").style.backgroundColor = localStorage.getItem("colorf_sMA");
    document.getElementById("bbb").style.backgroundColor = localStorage.getItem("colorf_sMA");
    document.getElementById("editor").style.color = localStorage.getItem("color_sMA");
    document.getElementById("editor").style.color = localStorage.getItem("color_sMA");
    document.getElementById("editor").style.fontSize = localStorage.getItem("size_s2MA");
    document.getElementById("editor").style.lineHeight = localStorage.getItem("inter_sMA");
    document.getElementById("bbb").style.width = "auto"; 	

    if (localStorage.getItem("Check_Specacle_cook")== "true"){
      document.getElementById("Slide_Button").style.visibility= "hidden";
      document.getElementById("MPBUT").style.visibility= "hidden";
      document.getElementById("SAVEBUT2").style.visibility= "hidden";
      document.getElementById("SAVEBUT").style.visibility= "hidden";
      document.getElementById("IOBUT").style.visibility= "hidden";
      document.getElementById("GENBUT").style.visibility= "hidden";
      document.getElementById("PREBUT").style.visibility= "hidden";
      document.getElementById("PASTBUT").style.visibility= "hidden";
      document.getElementById("mySidenavPre").style.visibility= "hidden";
      document.getElementById("mySidenav").style.visibility= "hidden";

    
    }			



  }

		function MainBUT() {
  var x = document.getElementById("Slide_Button");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
	function PReBUT() {
  var x = document.getElementById("PREBUT");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function PastBUT() {
  var x = document.getElementById("PASTBUT");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function IOBUT() {
  var x = document.getElementById("IOBUT");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function GENBUT() {
  var x = document.getElementById("GENBUT");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function SAVEBUT() {
  var x = document.getElementById("SAVEBUT");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function MPBUT() {
  var x = document.getElementById("MPBUT");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  function SAVEBUT2() {
    var x = document.getElementById("SAVEBUT");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
		function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.height = "50px";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}

function openNavIO() {
  document.getElementById("mySidenavIO").style.width = "100%";
  document.getElementById("mySidenavIO").style.height = "50px";
  document.getElementById("IOBUT").style.display = "block";
  document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("Slide_Button").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}

function openNavPre() {
  GetCaretE();
 
  startTime();
   document.getElementById("mySidenavPre").style.width = "100%";
  document.getElementById("mySidenavPre").style.height = "50px";
  document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "block";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
    document.getElementById("SAVEBUT").style.display = "none";
    document.getElementById("SAVEBUT2").style.display = "none";
    document.getElementById("MPBUT").style.display = "none";
    var shortcutEsc = new nw.Shortcut(ShortExitPre);
    nw.App.registerGlobalHotKey(shortcutEsc);
  Full_Screen();
  pre();
  openGOP();
  var shortcutC = new nw.Shortcut(ShortPauseM);
  nw.App.registerGlobalHotKey(shortcutC);
}
function openNavPast(){
  document.getElementById("mySidenavPast").style.width = "100%";
  document.getElementById("mySidenavPast").style.height = "50px";
 document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "block";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none"
    document.getElementById("SAVEBUT").style.display = "none";
    document.getElementById("SAVEBUT2").style.display = "none";
    document.getElementById("MPBUT").style.display = "none";
}

function openNavGe(){
	document.getElementById("mySidenavGe").style.width = "100%";
  document.getElementById("mySidenavGe").style.height = "50px";
  document.getElementById("GENBUT").style.display = "block";
 document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
    document.getElementById("SAVEBUT").style.display = "none";
    document.getElementById("SAVEBUT2").style.display = "none";
    document.getElementById("MPBUT").style.display = "none";
}
function openNavSave(){
  document.getElementById("mySidenavSave").style.width = "100%";
  document.getElementById("mySidenavSave").style.height = "50px";
   document.getElementById("SAVEBUT").style.display = "block";
 document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function openNavSave2(){
  document.getElementById("mySidenavSave2").style.width = "100%";
  document.getElementById("mySidenavSave2").style.height = "50px";
   document.getElementById("SAVEBUT2").style.display = "block";
 document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
  
}
function openNavMp(){
  document.getElementById("mySidenavMP").style.width = "100%";
  document.getElementById("mySidenavMP").style.height = "50px";
  document.getElementById("MPBUT").style.display = "block";
   document.getElementById("SAVEBUT2").style.display = "none";
 document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  
  
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("Slide_Button").style.display = "block";
 document.getElementById("IOBUT").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function closeNavIO() {
  document.getElementById("mySidenavIO").style.width = "0";  
  document.getElementById("Slide_Button").style.display = "block";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function closeNavPast() {
  document.getElementById("mySidenavPast").style.width = "0";
  document.getElementById("Slide_Button").style.display = "block";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function closeNavGe() {
  document.getElementById("mySidenavGe").style.width = "0";
  document.getElementById("Slide_Button").style.display = "block";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function closeNavSav() {
  document.getElementById("mySidenavSave").style.width = "0";
  document.getElementById("Slide_Button").style.display = "block";
 document.getElementById("IOBUT").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function closeNavSav2() {
  document.getElementById("mySidenavSave2").style.width = "0";
  document.getElementById("Slide_Button").style.display = "block";
 document.getElementById("IOBUT").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";
}
function closeNavPre() {
var shortcutA = new nw.Shortcut(ShortExitPre);
nw.App.unregisterGlobalHotKey(shortcutA);
var shortcutC = new nw.Shortcut(ShortPauseM);
  nw.App.unregisterGlobalHotKey(shortcutC);
  GetCaretP();
  openGO();
  document.getElementById("Slide_Button").style.display = "block";
  document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  document.getElementById("MPBUT").style.display = "none";


  if (localStorage.getItem("Check_Specacle_cook")== "true"){
    document.getElementById("Slide_Button").style.visibility = "visible";
    document.getElementById("MPBUT").style.visibility= "visible";
    document.getElementById("SAVEBUT2").style.visibility= "visible";
    document.getElementById("SAVEBUT").style.visibility= "visible";
    document.getElementById("IOBUT").style.visibility= "visible";
    document.getElementById("GENBUT").style.visibility= "visible";
    document.getElementById("PREBUT").style.visibility= "visible";
    document.getElementById("PASTBUT").style.visibility= "visible";
    document.getElementById("mySidenavPre").style.visibility= "visible";
    document.getElementById("mySidenav").style.visibility= "hidden";

    
  }	
    

  



	
	Full_Screen();
  document.getElementById("mySidenavPre").style.width = "0";
  document.getElementById("editor").style.backgroundColor = localStorage.getItem("colorf_s");
  document.getElementById("bbb").style.backgroundColor = localStorage.getItem("colorf_s2");
  document.getElementById("editor").style.color = localStorage.getItem("color_s");
  document.getElementById("editor").style.fontSize = localStorage.getItem("size_s");
  document.getElementById("editor").style.lineHeight = localStorage.getItem("inter_s");
  document.getElementById("bbb").style.width = "1300px";
  PauseRouleau();
  location.reload();
//   var shortcutA = new nw.Shortcut(ShortExitPre);
// nw.App.unregisterGlobalHotKey(shortcutA);

}
function closeNavP() {
  document.getElementById("mySidenavPre").style.opacity = "100";
  document.getElementById("mySidenav").style.opacity = "0";
  document.getElementById("mySidenavPre").style.width = "0px";
  document.getElementById("mySidenavPre").style.height = "50px";
  document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "block";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
    document.getElementById("SAVEBUT").style.display = "none";
    document.getElementById("SAVEBUT2").style.display = "none";
    document.getElementById("MPBUT").style.display = "none";
}
function closeNavMp() {
  document.getElementById("mySidenavMP").style.width = "0";  
  document.getElementById("MPBUT").style.display = "none";
  document.getElementById("Slide_Button").style.display = "block";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
}
	function toggle(button)
            {
              if(document.getElementById("Slide_Button").value=="1")
              {
               document.getElementById("Slide_Button").value="2";
               closeNav();
                             }
              else
              {
                document.getElementById("Slide_Button").value="1";
                
                openNav();
              }
            }	


//Coloration du bouton
  function feedback(){
var SizeA = localStorage.getItem("SizeFileCook");
var SizeB = localStorage.getItem("SizeFileCookM");

	if (SizeA==SizeB){
	
}
else {
	setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="DarkRed"; }, 100);
	setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="rgba(17, 17, 17, 0.9)"; }, 500);
	setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="DarkRed"; }, 750);
	setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="rgba(17, 17, 17, 0.9)"; }, 1000);

	setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="DarkRed"; }, 100);
	setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="red"; }, 500);
	setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="DarkRed"; }, 750);
	setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="red"; }, 1000);

	setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="DarkRed"; }, 100);
	setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="silver"; }, 500);
	setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="DarkRed"; }, 750);
	setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="silver"; }, 1000);

	setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="DarkRed"; }, 100);
	setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="blue"; }, 500);
	setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="DarkRed"; }, 750);
	setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="blue"; }, 1000);

	setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="DarkRed"; }, 100);
	setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="green"; }, 500);
	setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="DarkRed"; }, 750);
	setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="green"; }, 1000);


	setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="DarkRed"; }, 100);
	setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="red"; }, 500);
	setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="DarkRed"; }, 750);
	setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="red"; }, 1000);
}

	localStorage.removeItem("SizeFileCook");
	localStorage.setItem("SizeFileCook", SizeB)
	
}



function feedbackPrint(){
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="rgba(17, 17, 17, 0.9)"; }, 500);
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="rgba(17, 17, 17, 0.9)"; }, 1000);
  
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="red"; }, 500);
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="red"; }, 1000);
  
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="silver"; }, 500);
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="silver"; }, 1000);
  
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="blue"; }, 500);
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="blue"; }, 1000);
  
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="green"; }, 500);
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="green"; }, 1000);
  
  
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="red"; }, 500);
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="red"; }, 1000);
  }
  
  function feedbackMarque(){
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="rgba(17, 17, 17, 0.9)"; }, 500);
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("Slide_Button").style.backgroundColor="rgba(17, 17, 17, 0.9)"; }, 1000);
  
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="red"; }, 500);
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("IOBUT").style.backgroundColor="red"; }, 1000);
  
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="silver"; }, 500);
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("GENBUT").style.backgroundColor="silver"; }, 1000);
  
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="blue"; }, 500);
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("PREBUT").style.backgroundColor="blue"; }, 1000);
  
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="green"; }, 500);
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("PASTBUT").style.backgroundColor="green"; }, 1000);
  
  
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="DarkRed"; }, 100);
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="red"; }, 500);
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="DarkRed"; }, 750);
    setTimeout(function(){ document.getElementById("SAVEBUT").style.backgroundColor="red"; }, 1000);
  }






function GetNewSize() {
	var path_file = localStorage.getItem("FilePathCook").trim();
	var name_file = localStorage.getItem("InputNameSoloC").trim();

var process = require("child_process");
process.exec("cd /  && cd "+path_file+"&& /usr/bin/stat --format '%Y'"+" "+name_file ,function (err,stdout,stderr) {
    if (err) {
	    
	   
    } else {
        
        var SizeVar = stdout;
        localStorage.removeItem("SizeFileCookM");
	localStorage.setItem("SizeFileCookM", SizeVar)
    }
})
}

function openNotes(){
  note_window = window.open("notes.html", "note_window", "width=1455,height=500");
}

function SaveCaretEP(){
var CoordsInShape= window.pageYOffset;
var CoordsInShapeP = localStorage.getItem("CaretPositionP");
var CoordsInShapeN = localStorage.getItem("CaretPositionN");
  localStorage.removeItem("CaretPosition");
	localStorage.setItem("CaretPosition", CoordsInShape);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  
  tx.executeSql("UPDATE FilteTab SET CaretE='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
  tx.executeSql("UPDATE FilteTab SET CaretP='"+CoordsInShapeP+"' WHERE Path='"+SQLPath+"'"); 
  tx.executeSql("UPDATE FilteTab SET CaretN='"+CoordsInShapeN+"' WHERE Path='"+SQLPath+"'");
  });
}

function saveHopeR2(){
  var CoordsInShape= window.pageYOffset;
var CoordsInShapeP = localStorage.getItem("CaretPositionP");
var CoordsInShapeN = localStorage.getItem("CaretPositionN");
  localStorage.removeItem("CaretPosition");
	localStorage.setItem("CaretPosition", CoordsInShape);

  var SQLPath= localStorage.getItem("InputFile");

   db.transaction(function (tx) {

  //tx.executeSql("INSERT INTO FilteTab (CaretE) VALUES ('"+CoordsInShape+"')"); 
  tx.executeSql("UPDATE FilteTab SET CaretE='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
  tx.executeSql("UPDATE FilteTab SET CaretP='"+CoordsInShapeP+"' WHERE Path='"+SQLPath+"'"); 
  tx.executeSql("UPDATE FilteTab SET CaretN='"+CoordsInShapeN+"' WHERE Path='"+SQLPath+"'");

  });

	const fs = require('fs');
  if (localStorage.getItem("InputFile") == null){
	openNavSave();
}
else {
	var namedata2write = localStorage.getItem("InputFile");
let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(namedata2write, text_to_save, (err) => {  
       if (err) throw err;
       GetNewSize();
});
}
}

function getclip(){
	var clipboard = nw.Clipboard.get();
	var bib = clipboard.get("text");
	var printbibRAW = "[@"+bib+"]";
	//var alea = Math.floor((Math.random() * 5000) + 1);
	var printNoteMean = "[^"+bib+"]";
	localStorage.removeItem("bibref");
	localStorage.setItem("bibref", printbibRAW);
	localStorage.removeItem("bibMean");
	localStorage.setItem("bibMean", bib);	
 	}

	function saveHopeR(){
		const fs = require('fs');
		var folderPathL = localStorage.getItem("folder_path");
		var namedata2write = localStorage.getItem("data_name");
let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(folderPathL+ "/"+ namedata2write, text_to_save, (err) => {  
       if (err) throw err;
});
}
	function saveHope(){
		const fs = require('fs');
		var folderPathL = localStorage.getItem("folder_path");
		var namedata2write = localStorage.getItem("data_name");
let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(folderPathL+ "/"+ namedata2write+ "tmp", text_to_save, (err) => {  
       if (err) throw err;
});
}

function saveHopeT(){
    const fs = require('fs');
		var path_file = localStorage.getItem("folder_path");
		var namedata2write = localStorage.getItem("InputNameSoloC").trim();
let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(path_file+ "/"+namedata2write+ "tmp" , text_to_save, (err) => {  
       if (err) throw err;
});
}

function saveHopeS(){
		const fs = require('fs');
		var namedata2write3 = localStorage.getItem("InputFile")
		let text_to_save = document.getElementById("editor").innerText;
fs.writeFileSync(namedata2write3, text_to_save, (err) => {  
       if (err) throw err;
});
}

function saveHopeS2(){
		const fs = require('fs');
		var path_file = localStorage.getItem("folder_path");
		var namedata2write3 = "meatemp";
		let text_to_save = document.getElementById("editor").innerText;
fs.writeFileSync(path_file+ "/"+namedata2write3, text_to_save, (err) => {  
       if (err) throw err;
});
}

function saveNullTime(){
  if (localStorage.getItem("InputFile") == null)
	{
  const fs = require('fs');
  var path_fileA = localStorage.getItem("folder_path");
  var namedata2writeN = "MeaTemp";
  let text_to_save = document.getElementById("editor").innerText;
fs.writeFileSync(path_fileA+ "/"+namedata2writeN, text_to_save, (err) => {  
     if (err) throw err;
});
}
else {
  const fs = require('fs');
  var path_fileB = localStorage.getItem("folder_path");
  var namedata2writeN1 = localStorage.getItem("InputNameNoExtC")+".tmp";
  
  let text_to_save = document.getElementById("editor").innerText;
fs.writeFileSync(path_fileB+ "/"+namedata2writeN1, text_to_save, (err) => {  
     if (err) throw err;
});
}
}

function saveNullExit(){
  if (localStorage.getItem("InputFile") == null)
	{
  const fs = require('fs');
  var path_file = localStorage.getItem("folder_path");
  var namedata2write3 = "MeaTempEX";
  let text_to_save = document.getElementById("editor").innerText;
fs.writeFileSync(path_file+ "/"+namedata2write3, text_to_save, (err) => {  
     if (err) throw err;
});
}
else {
  const fs = require('fs');
  var path_fileB = localStorage.getItem("folder_path");
  var namedata2writeN1 = localStorage.getItem("InputNameNoExtC")+"2"+".tmp";
  
  let text_to_save = document.getElementById("editor").innerText;
fs.writeFileSync(path_fileB+ "/"+namedata2writeN1, text_to_save, (err) => {  
     if (err) throw err;
});
}
}

function saveHopeT2(){
		var fs = require("fs");	
		var Folder = localStorage.getItem("TempFolderPath");
       var File =  localStorage.getItem("TempFilName");
       var PathTemp = Folder+"/"+File;
       localStorage.setItem("InputFile",PathTemp );
       let text_to_save = document.getElementById("editor").innerText;
	 fs.writeFile(PathTemp, text_to_save, (err) => {  
       if (err) throw err;
       }); 
}

function saveHopeT3(){
  var fs = require("fs");	
  var Folder = localStorage.getItem("FilePathCook");
     var File =  localStorage.getItem("InputFile");
     var PathTemp = Folder+"/"+File;
     let text_to_save = "";
 fs.writeFile(PathTemp, text_to_save, (err) => {  
     if (err) throw err;
     }); 
     localStorage.removeItem("InputFile");
     localStorage.setItem("InputFile", PathTemp);
}

var Run_save = localStorage.getItem("check_save_C");
if (Run_save == "true"){
	var milliseconds = localStorage.getItem("save_time_data");	
	window.setInterval(saveNullTime, milliseconds);
		}			
			

    function SaveMe(){
      localStorage.removeItem("TempFilName");
 var TempFilVar = document.getElementById("TempSaveNameInput").value;
   localStorage.setItem("TempFilName", TempFilVar); 	
   
   
      saveHopeT2();
      closeNavSav();
    }


    function LiberNovi(){
     
      localStorage.removeItem("InputFile");
      localStorage.removeItem("CaretPosition");
      localStorage.removeItem("filgit");
      localStorage.removeItem("fogitB");
      localStorage.removeItem("fogit");
      localStorage.removeItem("InputNameNoExtC");
      localStorage.removeItem("InputNameSoloC");
      var TempFilVar = document.getElementById("TempSaveNameInput2").value;
      //var input = this.value;
      var InputNameSolo = path.basename(TempFilVar);
      var InputNameNoExt = path.basename(TempFilVar, path.extname(TempFilVar));
 
   localStorage.setItem("InputFile", TempFilVar); 	
   localStorage.setItem("InputNameSoloC", InputNameSolo);
   localStorage.setItem("InputNameNoExtC", InputNameNoExt);
   CleanSlate();
      saveHopeT3();
      closeNavSav2();
      
    }

function CleanSlate(){
 var path = require("path");	            
 var fs = require("fs");
 var text_to_save ="";
var namedata2write = "temp_rest";
fs.writeFile(namedata2write, text_to_save, (err) => {  
      if (err) throw err;
});
// var shortcut = new nw.Shortcut(ShortSave);
// nw.App.unregisterGlobalHotKey(shortcut);
// var shortcut2 = new nw.Shortcut(ShortNote);
// nw.App.unregisterGlobalHotKey(shortcut2);
// var shortcut3 = new nw.Shortcut(ShortPast);
// nw.App.unregisterGlobalHotKey(shortcut3);	
// var shortcut4 = new nw.Shortcut(ShortNoteMean);
// nw.App.unregisterGlobalHotKey(shortcut4);
UnRegisterShortcut();
 window.location.reload();

 fs.readFile("temp_rest", function (err, data) {
 if (err) throw err;
 document.getElementById("editor").innerText = data;

}); 


}


function pasteHtmlAtCaret(html) {

	    var sel, range;
    if (window.getSelection) {

        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);   
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);  
            }
        }
    } else if (document.selection && document.selection.type != "Control") {            
        document.selection.createRange().pasteHTML(html);
    } 
}

function Full_Screen(_element) {
      var monElement = _element||document.documentElement;
      if (document.mozFullScreenEnabled) {
	if (!document.mozFullScreenElement) {
          monElement.mozRequestFullScreen();
        } else {
          document.mozCancelFullScreen();
        }
      }
      if (document.fullscreenElement) {
	if (!document.fullscreenElement) {
          monElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
      if (document.webkitFullscreenEnabled) {
	if (!document.webkitFullscreenElement) {
          monElement.webkitRequestFullscreen();
        } else {
          document.webkitExitFullscreen();
        }
      }
      if (document.msFullscreenEnabled) {
	if (!document.msFullscreenElement) {
          monElement.msRequestFullscreen();
        } else {
          document.msExitFullscreen();
        }
      }
    }	

    function outputTachios(inputTachios) {
      document.querySelector("#speedlevel").value = inputTachios;
      localStorage.setItem("tachios", inputTachios);
       VitesseRouleau = inputTachios ;	
    
      }
    function outputTaille(inputTaille) {
      document.querySelector("#taillelevel").value = inputTaille;
       localStorage.setItem("size_s2MA", inputTaille+"em"); 	
     pre();
       }

	 function TextBold(){
              document.execCommand('bold', false, null);
               selectedElement = window.getSelection().focusNode.parentNode;
                
            }
 function TextItalic(){
              document.execCommand('italic', false, null);
              
            }
function TextUnder(){
              document.execCommand('underline', false, null);
               
            }
             function TextLine()
                {
                  selection = window.getSelection().getRangeAt(0).cloneContents();
span = document.createElement('span');
span.appendChild(selection);
wrappedselection = '<span class="line">'+span.innerHTML+'</span>';
document.execCommand('insertHTML', false, wrappedselection);
                 }
        function JustifyCenter(){
              document.execCommand('justifyCenter', false, null);
              
            }
         function JustifyFull(){
              document.execCommand('justifyFull', false, null);
              
            }
function JustifyLeft(){
              document.execCommand('justifyLeft', false, null);
              
            }
function JustifyRight(){
              document.execCommand('justifyRight', false, null);
               
            }
   
        function JustifyCss()
                {
                  selection = window.getSelection().getRangeAt(0).cloneContents();
span = document.createElement('span');
span.appendChild(selection);
wrappedselection = '<span class="alignCenter">'+span.innerHTML+'</span>';
document.execCommand('insertHTML', false, wrappedselection);          
   }              
                 
      function InterLine (){
	var mySelection = window.getSelection();
	var ColoredText = "<span class='interline'>" + mySelection + "</span>";
	var str = document.getElementById("WISINWYG").innerHTML; 
	var res = str.replace(mySelection, ColoredText);
	    document.getElementById("WISINWYG").innerHTML = res;           
                 
       }    
       function fontEditor(fontName) {
    document.execCommand("fontName", false, fontName);
   var x=document.getElementById("fontName").selectedIndex;
   var y=document.getElementById("fontName").options;
   document.execCommand(x,"",y);
   		
   		edit.document(fontName);
}      
  function fontSize(fontSize) {
    document.execCommand("fontSize", false, fontSize);
   var x=document.getElementById("fontSize").selectedIndex;
   var y=document.getElementById("fontSize").options;
   document.execCommand(x,"",y);
   		edit.document.focus(fontSize);
   
}      
function Open(){
      function chooseFile(name) {
    var chooser = document.querySelector(name);
    chooser.addEventListener("change", function(evt) {
      console.log(this.value);
    }, false);

    chooser.click();  
  }
  chooseFile('#fileDialog');

            }                         
 function CssFnctnZ()
                {
                  document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, "rgba(0,0,0,0.5)");
                 }
                  function Undo() {
                  document.execCommand('undo', false, true);
}
function Redo() {
                  document.execCommand('redo', false, true);
}

function outputZoom(inputZoom) {
	var editor=document.getElementById("editor");
	document.querySelector('#level').value = inputZoom;
	editor.style.zoom = inputZoom ;	
}

function onKeyDown(e) {
    if (e.keyCode == '13') {
        var text = div.firstChild.textContent;
        div.removeChild(div.firstChild);
        var p = document.createElement('p');
        p.textContent = text;
        div.insertBefore(p, div.firstChild);
    }
}
     
  
   function zoom(){
var inputZoom = document.getElementById("zoomfield").value;
var editor=document.getElementById("editor");
editor.style.zoom = inputZoom ;

   }
   var param_window;
   
function open_para() {
  param_window = window.open("param.html", "param_window", "width=800,height=500");
}
 function close_para(){
	param_window.close(); 
	 
 }
//COMPILATION
function GenDocx(){
var pandocpath = localStorage.getItem("PandocPath").trim();
var filepath = localStorage.getItem("InputFile").trim();
var process = require("child_process");

process.exec(pandocpath + " -s --citeproc " + filepath + " -o " + filepath + ".docx",function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("ShowTerm").innerHTML= stderr;
    } else {
        document.getElementById("ShowTerm").innerHTML=stdout;
    }
})
}
function GenDocxFusion(){
  var RawPath = localStorage.getItem("FilePathCook").trim();
  var FormPath = RawPath+"/notes.md";
  var pandocpath = localStorage.getItem("PandocPath").trim();
  var filepath = localStorage.getItem("InputFile").trim();
  var process = require("child_process");
  process.exec("cd "+RawPath + "&& "+pandocpath + " -s --citeproc"+" *.md -o " + filepath + ".docx",function (err,stdout,stderr) {
      if (err) {
        document.getElementById("ShowTerm").innerHTML= stderr; 
      } else {
          document.getElementById("ShowTerm").innerHTML=stdout;
      }
  })
  }
function GenSlide(){
var RawPath = localStorage.getItem("FilePathCook").trim();
var path_file = localStorage.getItem("folder_path").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var filepath = localStorage.getItem("InputFile").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
//var set_location = path_file+name_file;
var process = require("child_process");
process.exec("cd "+RawPath + "&& "+pandocpath + " -t beamer -s " + filepath + " -o " + filepath + ".pdf",function (err,stdout,stderr) {

    if (err) {
	    document.getElementById("ShowTerm").innerHTML= stderr;
	   
    } else {
        document.getElementById("ShowTerm").innerHTML=stdout;
    }
})
}

function GenPdf(){
var pandocpath = localStorage.getItem("PandocPath").trim();
var pandocpdf = localStorage.getItem("PandocPdf");
var filepath = localStorage.getItem("InputFile").trim();
var process = require("child_process");
process.exec(pandocpath + " -s "+" "+pandocpdf+" "+filepath + " -o " + filepath + ".pdf",function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("ShowTerm").innerHTML= stderr;
	   
    } else {
        document.getElementById("ShowTerm").innerHTML=stdout;
    }
})
}
function GenPdfFusion(){
  var RawPath = localStorage.getItem("FilePathCook").trim();
var FormPath = RawPath+"/notes.md";
  var pandocpath = localStorage.getItem("PandocPath").trim();
  var pandocpdf = localStorage.getItem("PandocPdfFusion");
  var filepath = localStorage.getItem("InputFile").trim();
  var process = require("child_process");  
  // process.exec(pandocpath + " -s "+" "+pandocpdf+" "+filepath +" " +FormPath+ " -o " + filepath + ".pdf",function (err,stdout,stderr) {
    process.exec("cd "+RawPath + "&& "+pandocpath + " -s "+" "+pandocpdf+" *.md -o " + filepath + ".pdf",function (err,stdout,stderr) {

  if (err) {
        document.getElementById("ShowTerm").innerHTML= stderr;
      } else {
          document.getElementById("ShowTerm").innerHTML=stdout;
      }
  })
  }

  function Epub(){
    var RawPath = localStorage.getItem("FilePathCook").trim();
  var FormPath = RawPath+"/notes.md";
    var pandocpath = localStorage.getItem("PandocPath").trim();
    var filepath = localStorage.getItem("InputFile").trim();
    var process = require("child_process");
    process.exec(pandocpath + " -s --citeproc " + filepath +" " +FormPath+ " -o " + filepath + ".epub",function (err,stdout,stderr) {
        if (err) {
          document.getElementById("ShowTerm").innerHTML= stderr;
        } else {
            document.getElementById("ShowTerm").innerHTML=stdout;
        }
    })
    }

    function EpubFusion(){
      var RawPath = localStorage.getItem("FilePathCook").trim();
    var FormPath = RawPath+"/notes.md";
      var pandocpath = localStorage.getItem("PandocPath").trim();
      var filepath = localStorage.getItem("InputFile").trim();
      var process = require("child_process");
      process.exec("cd "+RawPath + "&& "+pandocpath + " -s --citeproc"+" *.md -o " + filepath + ".epub",function (err,stdout,stderr) {
          if (err) {
            document.getElementById("ShowTerm").innerHTML= stderr;
          } else {
              document.getElementById("ShowTerm").innerHTML=stdout;
          }
      })
      }
//import
function Importdocx() {
  var fs = require("fs");	
var path = require("path");
  var chooser2 = document.querySelector("#file2");
  chooser2.addEventListener("change", function(evt) {
    console.log(this.value);
    var input = this.value;
    var InputPath = path.dirname(input); 
    var InputNameSolo = path.basename(input);
    var InputNameNoExt = path.basename(input, path.extname(input));
    var InputNameExt = path.extname(input);

    localStorage.removeItem("InputFile2");
localStorage.setItem("InputFile2", input);
localStorage.removeItem("FilePathCook2");
localStorage.setItem("FilePathCook2", InputPath);

localStorage.removeItem("InputNameSoloC2");
localStorage.setItem("InputNameSoloC2", InputNameSolo);

localStorage.removeItem("InputNameNoExtC2");
localStorage.setItem("InputNameNoExtC2", InputNameNoExt);

localStorage.removeItem("InputNameExtC2");
localStorage.setItem("InputNameExtC2", InputNameExt);
var path_file = localStorage.getItem("InputFile2").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
var process = require("child_process");
process.exec(pandocpath + " -s --citeproc " + path_file + " --wrap=none -o " + path_file + ".md",function (err,stdout,stderr) {
  if (err) {
    document.getElementById("ShowTerm").innerHTML= stderr;
  } else {
    document.getElementById("ShowTerm").innerHTML=stdout;
  }
})
 
  }, false);

}

function GitAdd(){
var fs = require("fs");
var path = require("path");
var namedata2write2 = "temp_rest";
var intro = "write here";
var namefile = localStorage.getItem("InputNameSoloC").trim();
var pathfile = localStorage.getItem("FilePathCook").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
var filepath = localStorage.getItem("InputFile").trim();
	var namedata2write = localStorage.getItem("data_name");

let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(filepath , text_to_save, (err) => {  
       if (err) throw err;
})	

var process = require("child_process");
process.exec("cd /  && cd "+pathfile+" && "+ gitpath +" "+"add "+namefile,function (err,stdout,stderr) {

    if (err) {
	    document.getElementById("ShowTermGen").innerHTML= stderr;
	   
    } else {
        document.getElementById("ShowTermGen").innerHTML=stdout;
                
    }
})
}
function GitCommit(){
var namefile = localStorage.getItem("InputNameSoloC").trim();
var pathfile = localStorage.getItem("FilePathCook").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
var process = require("child_process");
process.exec("cd /  && cd "+pathfile+" && " + gitpath+" "+"commit "+namefile+" -m 'message'",function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("ShowTermGen").innerHTML= stderr;

    } else {
        document.getElementById("ShowTermGen").innerHTML = stdout;
    }
})
}
//GIT MANAGE
function GitLog(){
var pathfile = localStorage.getItem("FilePathCook").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var json = "log --pretty=format:'%h' -n 1";

var process = require("child_process");
process.exec("cd /  && cd "+pathfile+" && " +gitpath+" "+json,function (err,stdout,stderr) {

    if (err) {
	    document.getElementById("LogTerm").innerText= stderr;
	               document.getElementById("LogTerm").innerText= stderr;  

    } else {
        var lasthash= stdout;
            localStorage.removeItem("lasthashcook");
            localStorage.setItem("lasthashcook", stdout);  
 }                  
})

nw.Window.open("log.html", { title: 'git log -p', width: 1315, height: 768,}, function(new_win) {
});


}

function ShowBibFile(){
	param_window = window.open("bib.html", "param_window", "width=800,height=500");
}

function CreateInitRepo(){
	localStorage.removeItem("fogit");
	var gitfol = document.getElementById("FolderGit").value;
    localStorage.setItem("fogit", gitfol); 
     	
    localStorage.removeItem("filgit");
	var pathgitfold = document.getElementById("InputGit").value;
    localStorage.setItem("filgit", pathgitfold);  
    
var name_file = localStorage.getItem
("filgit").trim();
var path_file = localStorage.getItem("fogit").trim();
var gitpath = localStorage.getItem("GitPath").trim();

var set_location = path_file+name_file;
var process = require("child_process");
process.exec("cd /  && cd "+path_file+" && mkdir "+name_file +" "+"&& cd "+name_file+" && "+ gitpath+ " init"+" "+"&& "+ gitpath + " add .",function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("showgit").innerHTML= stderr;
	   
    } else {
        document.getElementById("showgit").innerHTML=stdout;
    }
})
}


function CreateInitRepoB(){
	localStorage.removeItem("fogitB");
	var gitfol = document.getElementById("FolderGitB").value;
    localStorage.setItem("fogitB", gitfol); 
var path_file = localStorage.getItem("fogitB").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var process = require("child_process");
if (localStorage.getItem("FdAddGit")== "true"){
	
				process.exec("cd /  && cd "+path_file+" && "+ gitpath+ " init"+" "+"&& "+ gitpath + " add ."+ " && "+gitpath+ " " + "commit -m 'message '",function (err,stdout,stderr){
    if (err) {
	    document.getElementById("showgit").innerHTML= stderr;
	   
    } else {
        document.getElementById("showgit").innerHTML=stdout;
    }
})				
				
			}			
			else{
				process.exec("cd /  && cd "+path_file+" && "+ gitpath+ " init"+" "+"&& "+ gitpath + " add .",function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("showgit").innerHTML= stderr;
	   
    } else {
        document.getElementById("showgit").innerHTML=stdout;
    }
})
			}

}


function SetGitVar(){
	localStorage.removeItem("fogit");
	var gitfol = document.getElementById("FolderGit").value;
    localStorage.setItem("fogit", gitfol); 
     	
    localStorage.removeItem("filgit");
	var pathgitfold = document.getElementById("InputGit").value;
    localStorage.setItem("filgit", pathgitfold);  
}
//cookie place
function check_save_exit() {
	localStorage.removeItem("check_out_s");
	var CheckSaveVar = document.getElementById("Check_exit_sav").checked;
	    localStorage.setItem("check_out_s", CheckSaveVar);  	
  }

function check_save_time() {
	localStorage.removeItem("check_save_C");
	var CheckSaveVar = document.getElementById("Check_box_time").checked;
	    localStorage.setItem("check_save_C", CheckSaveVar);  	
    }
///ouverture nouvelle page ou pas
function OpenFileAtStartFX(){
	localStorage.removeItem("OpenStartCook");
var CheckOpFvar = document.getElementById("OpenFileAtStart").checked;
localStorage.setItem("OpenStartCook", CheckOpFvar);


}

function Set_save_time(){
	localStorage.removeItem("save_time_data");
	var save_timeIn = this.options[this.selectedIndex].value;
	localStorage.setItem("save_time_data", save_timeIn);  
}
	
//fonction pour attribuer un nom aux données sauvegardées aka fichiers
function set_name(){
	localStorage.removeItem("data_name");
		var Name_cookie_var = document.getElementById("input_name").value;
    localStorage.setItem("data_name", Name_cookie_var);  	
   //document.getElementById("param_check3").innerHTML = localStorage.getItem("data_name");
 
}

// variables de Git et Pandoc
function LocalPandoc(){
	localStorage.removeItem("PandocPath");
		var Name_cookie_var = document.getElementById("InputPandocLocal").value;
    localStorage.setItem("PandocPath", Name_cookie_var);
}
function AddVarPdf(){
	localStorage.removeItem("PandocPdf");
		var Name_cookie_var = document.getElementById("InputPandocPdf").value;
    localStorage.setItem("PandocPdf", Name_cookie_var);
}
function AddVarPdfFusion(){
	localStorage.removeItem("PandocPdfFusion");
		var Name_cookie_var = document.getElementById("InputPandocPdfFusion").value;
    localStorage.setItem("PandocPdfFusion", Name_cookie_var);
}
function LocalGit(){
	localStorage.removeItem("GitPath");
		var Name_cookie_var = document.getElementById("InputGitLocal").value;
    localStorage.setItem("GitPath", Name_cookie_var);
}
// Lien Zotero
function AddBib(){
	localStorage.removeItem("BibPath");
		var Name_cookie_var = document.getElementById("InputBibTeX").value;
    localStorage.setItem("BibPath", Name_cookie_var);
}

// CTRL S -> write+add+commit
function SaveAddCommitFc(){
	localStorage.removeItem("ctrls");
		var Name_cookie_var = document.getElementById("SaveAddCommitCheck").checked;
    localStorage.setItem("ctrls", Name_cookie_var);
}
function CreateCookAddAllGit(){
	localStorage.removeItem("FdAddGit");
		var Name_cookie_var = document.getElementById("InitFullFolder").checked;
    localStorage.setItem("FdAddGit", Name_cookie_var);
	
}

 //3 fonction pour input
 
//Marathon add input
 function fond_color_inputMA(){
	localStorage.removeItem("colorf_sMA");
		var colorf_valMA = document.getElementById("Input_FDC").value;
    localStorage.setItem("colorf_sMA", colorf_valMA);   
}	
function fond_color_input(){
	localStorage.removeItem("colorf_s");
		var colorf_valA = document.getElementById("Input_FTC2").value;
    localStorage.setItem("colorf_s", colorf_valA);  
    }
function fond_MARGE_color_input(){
	localStorage.removeItem("colorf_s2");
		var colorf_valB = document.getElementById("Input_FDC2").value;
    localStorage.setItem("colorf_s2", colorf_valB);    
}				
function font_colorMA_input(){
	localStorage.removeItem("color_sMA");
		var color_val2 = document.getElementById("Input_FTC").value;
    localStorage.setItem("color_sMA", color_val2);  
}
function font_color_input(){
	localStorage.removeItem("color_s");
		var color_val2B = document.getElementById("Input_FTTC").value;
    localStorage.setItem("color_s", color_val2B);  
}

function font_sizeMA_input(){
	localStorage.removeItem("size_s2MA");
		var size_val2MA = document.getElementById("Input_S2MA").value;
    localStorage.setItem("size_s2MA", size_val2MA);  
}	
function font_size_input(){
	localStorage.removeItem("size_s");
		var size_val2MAAZ = document.getElementById("input_size").value;
    localStorage.setItem("size_s", size_val2MAAZ);  
}	
function inter_height_input(){
	localStorage.removeItem("inter_s");
		var size_val2MAAZ2 = document.getElementById("Input_inter").value;
    localStorage.setItem("inter_s", size_val2MAAZ2);  
   }	
function prem_line_input(){
	localStorage.removeItem("indent_s");
		var size_valind = document.getElementById("Input_espace_prems").value;
    localStorage.setItem("indent_s", size_valind);  
   }	
	function tachios_input(){
	localStorage.removeItem("tachios");
		var size_valtac = document.getElementById("Input_tachios").value;
    localStorage.setItem("tachios", size_valtac);  
  }	
function tachios_func(){
	localStorage.removeItem("tachios");
		var size_valtac2 = document.getElementById("selectedtach").value;
    localStorage.setItem("tachios", size_valtac2);  
   }	
   function inter_heightMA(event) {
    var size_interMA = this.options[this.selectedIndex].value;
    localStorage.removeItem("inter_sMA");
		//var size_interMA = document.getElementById("selectedIMA").value;
    localStorage.setItem("inter_sMA", size_interMA);  
  }  
  function inter_heightMAInput() {
    localStorage.removeItem("inter_sMA");
		var size_interMA = document.getElementById("Input_interMA").value;
    localStorage.setItem("inter_sMA", size_interMA);  
  }  
//editor
	function color_gren(){
		localStorage.setItem("color_div", "green");
document.getElementById("editor").style.color = localStorage.getItem("color_div");
	}
	
	function align_style(event) {
    var align = this.options[this.selectedIndex].value;
    localStorage.setItem("align_s", align);  
    document.getElementById("editor").style.color = localStorage.getItem("align_s");        
}      

function inter_height(event) {
	var inter_val = this.options[this.selectedIndex].value;
    localStorage.setItem("inter_s", inter_val);  
    document.getElementById("editor").style.lineHeight = localStorage.getItem("inter_s");  	
}      
function text_indent(event) {
	var indentation = this.options[this.selectedIndex].value;
    localStorage.setItem("indent_s", indentation);  
    document.getElementById("editor").style.textIndent = localStorage.getItem("indent_s");  	
}      
function text_bold(){
		var bold_val = this.options[this.selectedIndex].value;
    localStorage.setItem("bold_s", bold_val);  
    document.getElementById("editor").style.fontWeight = localStorage.getItem("bold_s");
}
function text_italic(){
		var ital_val = this.options[this.selectedIndex].value;
    localStorage.setItem("ital_s", ital_val);  
    document.getElementById("editor").style.fontStyle = localStorage.getItem("ital_s");
}
function text_deco(){
		var deco_val = this.options[this.selectedIndex].value;
    localStorage.setItem("deco_s", deco_val);  
    document.getElementById("editor").style.textDecoration = localStorage.getItem("deco_s");
}

//ICIIIIIIII
function font_family(){
		var font_val = this.options[this.selectedIndex].value;
    localStorage.setItem("font_s", font_val);  
    document.getElementById("editor").select().style.fontFamily = localStorage.getItem("font_s");
    
    }
function font_size(){
		var size_val = this.options[this.selectedIndex].value;
    localStorage.setItem("size_s", size_val);  
    document.getElementById("editor").style.fontSize = localStorage.getItem("size_s");
}
function font_sizeMA(){
		var size_val2MA = this.options[this.selectedIndex].value;
    localStorage.setItem("size_s2MA", size_val2MA);  
    document.getElementById("editor").style.fontSize = localStorage.getItem("size_s2MA");
}
function font_color(){
		var color_val = this.options[this.selectedIndex].value;
    localStorage.setItem("color_s", color_val);  
    document.getElementById("editor").style.color = localStorage.getItem("color_s");
}
function font_colorMA(){
		var color_val2 = this.options[this.selectedIndex].value;
    localStorage.setItem("color_sMA", color_val2);  
    document.getElementById("editor").style.color = localStorage.getItem("color_sMA");
}
function fond_color(){
		var colorf_val = this.options[this.selectedIndex].value;
    localStorage.setItem("colorf_s", colorf_val);  
    document.getElementById("editor").style.backgroundColor = localStorage.getItem("colorf_s");
    
    }
    function fond_colorMA(){
		var colorf_valMA = this.options[this.selectedIndex].value;
    localStorage.setItem("colorf_sMA", colorf_valMA);  
    document.getElementById("editor").style.backgroundColor = localStorage.getItem("colorf_sMA");
    
    }
    function fond_color2(){
		var colorf_val2 = this.options[this.selectedIndex].value;
    localStorage.setItem("colorf_s2", colorf_val2);  
    document.getElementById("bbb").style.backgroundColor = localStorage.getItem("colorf_s2");
    
    }
function outputZoomP(inputZoomP) {
	var editor=document.getElementById("editor");
	document.querySelector('#level').value = inputZoomP;
	localStorage.setItem("zoom_s", inputZoomP);
	editor.style.zoom = inputZoomP ;	
}

function getSelectionCoords(win) {
	win = win || window;
	var doc = win.document;
	var sel = doc.selection, range, rects, rect;
	var x = 0, y = 0;
	if (sel) {
		if (sel.type != "Control") {
			range = sel.createRange();
			range.collapse(true);
			x = range.boundingLeft;
			y = range.boundingTop;
		}
	} else if (win.getSelection) {
		sel = win.getSelection();
		if (sel.rangeCount) {
			range = sel.getRangeAt(0).cloneRange();
			if (range.getClientRects) {
				range.collapse(true);
				rects = range.getClientRects();
				if (rects.length > 0) {
					rect = rects[0];
					x = rect.left;
					y = rect.top;
				} else {
					x,y = 0,0
				}

			}
			// Fall back to inserting a temporary element
			if (x == 0 && y == 0) {
				var span = doc.createElement("span");
				if (span.getClientRects) {
					// Ensure span has dimensions and position by
					// adding a zero-width space character
					span.appendChild( doc.createTextNode("\u200b") );
					range.insertNode(span);
					rect = span.getClientRects()[0];
					x = rect.left;
					y = rect.top;
					var spanParent = span.parentNode;
					spanParent.removeChild(span);

					// Glue any broken text nodes back together
					spanParent.normalize();
				}
			}
		}
	}
	return { x: x, y: y };
}
function SaveCustom(){

  var Nstyle= document.getElementById("input_styleS").value;
  var dbparam1= localStorage.getItem("align_s");
  var dbparam5= localStorage.getItem("bold_s");
  var dbparam7= localStorage.getItem("colorf_sMA");
  var dbparam8= localStorage.getItem("colorf_s");
  var dbparam9= localStorage.getItem("colorf_s2");
  var dbparam10= localStorage.getItem("color_sMA");
  var dbparam11= localStorage.getItem("color_s");
  var dbparam18= localStorage.getItem("deco_s");
  var dbparam24= localStorage.getItem("GitPath");
  var dbparam25= localStorage.getItem("font_s");
  var dbparam28= localStorage.getItem("inter_s");
  var dbparam30= localStorage.getItem("inter_sMA");
  var dbparam32= localStorage.getItem("indent_s"); 
  var dbparam33= localStorage.getItem("ital_s");
  var dbparam49= localStorage.getItem("PandocPath");
  var dbparam50= localStorage.getItem("PandocPdf");
  var dbparam51= localStorage.getItem("PandocPdfFusion");
  var dbparam52= localStorage.getItem("size_s2MA");
  var dbparam53= localStorage.getItem("size_s");
  var dbparam54= localStorage.getItem("save_time_data");
  var dbparam55= localStorage.getItem("tachios");
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS ParamMea (id2 integer primary key autoincrement, style, param1, param5, param7, param8, param9, param10, param11, param18, param24, param25, param28, param30, param32, param33, param49, param50, param51, param52, param53, param54, param55)');
  tx.executeSql('INSERT INTO ParamMea (style, param1, param5, param7, param8, param9, param10, param11, param18, param24, param25, param28, param30, param32,param33, param49, param50, param51, param52, param53, param54, param55) VALUES ("'+Nstyle+'", "'+dbparam1+'", "'+dbparam5+'","'+dbparam7+'", "'+dbparam8+'", "'+dbparam9+'", "'+dbparam10+'", "'+dbparam11+'", "'+dbparam18+'", "'+dbparam24+'", "'+dbparam25+'", "'+dbparam28+'", "'+dbparam30+'", "'+dbparam32+'", "'+dbparam33+'", "'+dbparam49+'", "'+dbparam50+'", "'+dbparam51+'", "'+dbparam52+'", "'+dbparam53+'", "'+dbparam54+'", "'+dbparam55+'")');
});
}
function LoadCustom(){
  var Nstyle= document.getElementById("input_styleL").value;

  db.transaction(function (tx) {
    
tx.executeSql('SELECT * FROM ParamMea WHERE style='+"'"+Nstyle+"'", [], function (tx, results) {
  var len = results.rows.length;
    for (var i = 0, item = null; i < results.rows.length; i++) {
      item = results.rows.item(i);

  var dbparam1= (results.rows.item(i).param1);
  var dbparam5= (results.rows.item(i).param5);
  var dbparam7= (results.rows.item(i).param7);
  var dbparam8= (results.rows.item(i).param8);
  var dbparam9= (results.rows.item(i).param9);
  var dbparam10= (results.rows.item(i).param10);
  var dbparam11= (results.rows.item(i).param11);
  var dbparam18= (results.rows.item(i).param18);
  var dbparam24= (results.rows.item(i).param24);
  var dbparam25= (results.rows.item(i).param25);
  var dbparam28= (results.rows.item(i).param28);
  var dbparam30= (results.rows.item(i).param30);
  var dbparam32= (results.rows.item(i).param32);
  var dbparam33= (results.rows.item(i).param33);
  var dbparam49= (results.rows.item(i).param49);
  var dbparam50= (results.rows.item(i).param50);
  var dbparam51= (results.rows.item(i).param51);
  var dbparam52= (results.rows.item(i).param52);
  var dbparam53= (results.rows.item(i).param53);
  var dbparam54= (results.rows.item(i).param54);
  var dbparam55= (results.rows.item(i).param55);

  localStorage.removeItem("align_s");
  localStorage.removeItem("colorf_sMA");
  localStorage.removeItem("colorf_s");
  localStorage.removeItem("colorf_s2");
  localStorage.removeItem("color_sMA");
  localStorage.removeItem("color_s");
  localStorage.removeItem("font_s");
  localStorage.removeItem("inter_s");
  localStorage.removeItem("inter_sMA");
  localStorage.removeItem("PandocPath");
  localStorage.removeItem("PandocPdf");
  localStorage.removeItem("PandocPdfFusion");
  localStorage.removeItem("size_s2MA");
  localStorage.removeItem("size_s");
  localStorage.removeItem("save_time_data");
  localStorage.removeItem("tachios");
  localStorage.removeItem("bold_s");
  localStorage.removeItem("deco_s");
  localStorage.removeItem("indent_s"); 
  localStorage.removeItem("ital_s");
 localStorage.removeItem("GitPath");
  

  localStorage.setItem("align_s", dbparam1);
  localStorage.setItem("colorf_sMA", dbparam7);
  localStorage.setItem("colorf_s", dbparam8);
  localStorage.setItem("colorf_s2", dbparam9);
  localStorage.setItem("color_sMA", dbparam10);
  localStorage.setItem("color_s", dbparam11);
  localStorage.setItem("font_s", dbparam25);
  localStorage.setItem("inter_s", dbparam28);
  localStorage.setItem("inter_sMA", dbparam30);
  localStorage.setItem("PandocPath", dbparam49);
  localStorage.setItem("PandocPdf", dbparam50);
  localStorage.setItem("PandocPdfFusion", dbparam51);
  localStorage.setItem("size_s2MA", dbparam52);
  localStorage.setItem("size_s", dbparam53);
  localStorage.setItem("save_time_data", dbparam54);
  localStorage.setItem("tachios", dbparam55);
  localStorage.setItem("bold_s", dbparam5);
  localStorage.setItem("deco_s", dbparam18);
  localStorage.setItem("indent_s", dbparam32); 
  localStorage.setItem("ital_s", dbparam33);
  localStorage.setItem("GitPath", dbparam24);
         }
        })
      });
    }

function ResetCook(){
  localStorage.removeItem("align_s");  
  localStorage.removeItem("bibref");
  localStorage.removeItem("bibMean");
  localStorage.removeItem("BibPath");
  localStorage.removeItem("bold_s"); 
	localStorage.removeItem("ctrls");
	localStorage.removeItem("colorf_sMA");
	localStorage.removeItem("colorf_s");
	localStorage.removeItem("colorf_s2");
	localStorage.removeItem("color_sMA");
	localStorage.removeItem("color_s");
  localStorage.removeItem("color_div");
  localStorage.removeItem("CaretPosition");
  localStorage.removeItem("CaretPositionP");
  localStorage.removeItem("CaretPositionN");
  localStorage.removeItem("check_out_s");  	
  localStorage.removeItem("check_save_C"); 
  localStorage.removeItem("data_name");
  localStorage.removeItem("deco_s");
  localStorage.removeItem("FilePathCook");
  localStorage.removeItem("FdAddGit");
  localStorage.removeItem("filgit");  
  localStorage.removeItem("fogit"); 
  localStorage.removeItem("fogitB"); 
  localStorage.removeItem("GitPath");
  localStorage.removeItem("font_s");  
  localStorage.removeItem("InputFile2");
	localStorage.removeItem("indent_s");
	localStorage.removeItem("inter_s");
  localStorage.removeItem("InputFile");
  localStorage.removeItem("inter_sMA");
  localStorage.removeItem("inter_s");  
  localStorage.removeItem("indent_s"); 
  localStorage.removeItem("ital_s");  
  localStorage.removeItem("size_s2MA");
	localStorage.removeItem("size_s");
	localStorage.removeItem("save_time_data");
	localStorage.removeItem("tachios");
  localStorage.removeItem("InputNameSoloC");
  localStorage.removeItem("InputNameNoExtC");
  localStorage.removeItem("InputNameExtC");
  localStorage.removeItem("SizeFileCook");
	localStorage.removeItem("SizeFileCookM");
  localStorage.removeItem("FilePathCook2");
  localStorage.removeItem("InputNameSoloC2");
  localStorage.removeItem("InputNameNoExtC2");
  localStorage.removeItem("lasthashcook"); 
	localStorage.removeItem("OpenStartCook");
	localStorage.removeItem("PandocPath");
	localStorage.removeItem("PandocPdf");
	localStorage.removeItem("PandocPdfFusion");
  localStorage.removeItem("folder_path");
  localStorage.removeItem("Time");
  localStorage.removeItem("TimeR");
  localStorage.removeItem("checksizecook");
  localStorage.removeItem("checkspeedcook");
  localStorage.removeItem("TempFolderPath");
  localStorage.removeItem("TempFilName");


  var path = require("path");	            
  var fs = require("fs");
  var text_to_save ="";
 var namedata2write = "temp_rest";
fs.writeFile(namedata2write, text_to_save, (err) => {  
       if (err) throw err;
});

}

function ResetTaFil(){
  db.transaction(function (tx) {

  tx.executeSql('DROP TABLE FilteTab');  
});
}
function ResetTaPa(){
  db.transaction(function (tx) {
  tx.executeSql('DROP TABLE ParamMea');
});
}
function ResetDB(){
  ResetTaFil();
  ResetTaPa();
  
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timeC').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

// function de marque page
function StopBlink(){
  var Markok=0;
  localStorage.removeItem("ToMarq");
    localStorage.setItem("ToMarq", Markok);
  document.getElementById("mp1").style.animationPlayState = "paused";
    document.getElementById("mp2").style.animationPlayState = "paused";
    document.getElementById("mp3").style.animationPlayState = "paused";
    document.getElementById("mp4").style.animationPlayState = "paused";
    document.getElementById("mp5").style.animationPlayState = "paused";


    document.getElementById("mp1").style.visibility="visible";
    document.getElementById("mp2").style.visibility="visible";
    document.getElementById("mp3").style.visibility="visible";
    document.getElementById("mp4").style.visibility="visible";
    document.getElementById("mp5").style.visibility="visible";
}

var marque_on=1;
   function marquepage() { 
     var Markok=1;
     localStorage.removeItem("ToMarq");
    localStorage.setItem("ToMarq", Markok);
  if (marque_on) {
    //document.getElementsByClassName("blink").style.animationPlayState = "running",
   document.getElementById("mp1").style.animationPlayState = "running";
   document.getElementById("mp2").style.animationPlayState = "running";
   document.getElementById("mp3").style.animationPlayState = "running";
   document.getElementById("mp4").style.animationPlayState = "running";
   document.getElementById("mp5").style.animationPlayState = "running";

   //mp1.play();
      marque_on = false;
    
  } else {
    StopBlink();


    marque_on = true;
   }
  





  }
  function RegisterMp1(){
    if (marque_on=true) {
      Mark1();
      StopBlink();
    
    marque_on = false;
    }
    
  }
  function RegisterMp2(){
    if (marque_on=true) {
      Mark2();
      StopBlink();
    
    marque_on = false;
    }
  }
  function RegisterMp3(){
    if (marque_on=true) {
      Mark3();
      StopBlink();
    
    marque_on = false;
    }
  }
  function RegisterMp4(){
    if (marque_on=true) {
      Mark4();
      StopBlink();
    
    marque_on = false;
    }
  }
  function RegisterMp5(){
    if (marque_on=true) {
      Mark5();
      StopBlink();
    
    marque_on = false;
    }
  }


function Mark1(){
  
    
   if (localStorage.getItem("ToMarq") == "1"){
    var CoordsInShape= window.pageYOffset;

  localStorage.removeItem("CaretPosition1");
	localStorage.setItem("CaretPosition1", CoordsInShape);
  var SQLPath= localStorage.getItem("InputFile");
   db.transaction(function (tx) {
  tx.executeSql("UPDATE FilteTab SET Caret1='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
  });
  
  marque_on = true;
}
else{
  var GTcaret1= localStorage.getItem("CaretPosition1");
  window.scrollTo(0, GTcaret1);
}
localStorage.setItem("ToMarq", "0")
}
function Mark2(){
  
    
  if (localStorage.getItem("ToMarq") == "1"){
   var CoordsInShape= window.pageYOffset;

 localStorage.removeItem("CaretPosition2");
 localStorage.setItem("CaretPosition2", CoordsInShape);
 var SQLPath= localStorage.getItem("InputFile");
  db.transaction(function (tx) {
 tx.executeSql("UPDATE FilteTab SET Caret2='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
 });
 
 marque_on = true;
}
else{
 var GTcaret1= localStorage.getItem("CaretPosition2");
 window.scrollTo(0, GTcaret1);
}
localStorage.setItem("ToMarq", "0")
}
function Mark3(){
  
    
  if (localStorage.getItem("ToMarq") == "1"){
   var CoordsInShape= window.pageYOffset;

 localStorage.removeItem("CaretPosition3");
 localStorage.setItem("CaretPosition3", CoordsInShape);
 var SQLPath= localStorage.getItem("InputFile");
  db.transaction(function (tx) {
 tx.executeSql("UPDATE FilteTab SET Caret3='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
 });
 
 marque_on = true;
}
else{
 var GTcaret1= localStorage.getItem("CaretPosition3");
 window.scrollTo(0, GTcaret1);
}
localStorage.setItem("ToMarq", "0")
}

function Mark4(){
  
    
  if (localStorage.getItem("ToMarq") == "1"){
   var CoordsInShape= window.pageYOffset;

 localStorage.removeItem("CaretPosition4");
 localStorage.setItem("CaretPosition4", CoordsInShape);
 var SQLPath= localStorage.getItem("InputFile");
  db.transaction(function (tx) {
 tx.executeSql("UPDATE FilteTab SET Caret4='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
 });
 
 marque_on = true;
}
else{
 var GTcaret1= localStorage.getItem("CaretPosition4");
 window.scrollTo(0, GTcaret1);
}
localStorage.setItem("ToMarq", "0")
}
function Mark5(){
  
    
  if (localStorage.getItem("ToMarq") == "1"){
   var CoordsInShape= window.pageYOffset;

 localStorage.removeItem("CaretPosition5");
 localStorage.setItem("CaretPosition5", CoordsInShape);
 var SQLPath= localStorage.getItem("InputFile");
  db.transaction(function (tx) {
 tx.executeSql("UPDATE FilteTab SET Caret5='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
 });
 
 marque_on = true;
}
else{
 var GTcaret1= localStorage.getItem("CaretPosition5");
 window.scrollTo(0, GTcaret1);
}
localStorage.setItem("ToMarq", "0")
}
function Mark0(){
  
    
  if (localStorage.getItem("ToMarq") == "1"){
   var CoordsInShape= window.pageYOffset;

 localStorage.removeItem("CaretPosition0");
 localStorage.setItem("CaretPosition0", CoordsInShape);
 var SQLPath= localStorage.getItem("InputFile");
  db.transaction(function (tx) {
 tx.executeSql("UPDATE FilteTab SET Caret0='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
 });
 
 marque_on = true;
}
else{
 var GTcaret1= localStorage.getItem("CaretPosition0");
 window.scrollTo(0, GTcaret1);
}
localStorage.setItem("ToMarq", "0")
}











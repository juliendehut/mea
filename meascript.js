

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
 

var ShortSave = {
  key : "Ctrl+S",
  active : function() {
	  //checkmodif();
	  feedback();
	
	  if (localStorage.getItem("ctrls")== "true"){
		  
				 saveHopeR2();
				 GitAdd();
				 GitCommit();
			}	
					
			else{
				 saveHopeR2();
			}
	 
    console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
  },
  failed : function(msg) {
    // :(, fail to register the |key| or couldn't parse the |key|.
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
    // :(, fail to register the |key| or couldn't parse the |key|.
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
    // :(, fail to register the |key| or couldn't parse the |key|.
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
    // :(, fail to register the |key| or couldn't parse the |key|.
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
    // :(, fail to register the |key| or couldn't parse the |key|.
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
    // :(, fail to register the |key| or couldn't parse the |key|.
    console.log(msg);
  }
};


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

// function SetSQLCaret(){
//   tx.executeSql('SELECT CaretE FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
//     var len = results.rows.length, i;
//    for (i = 0; i < len; i++) {
//    //var showfile1=(results.rows.item(i).id);
//       var CoordsInSql=(results.rows.item(i).CaretE);
   
//       //var CoordsInSql= window.pageYOffset;

//       localStorage.removeItem("CaretPosition");
//       localStorage.setItem("CaretPosition", CoordsInSql);

//      //document.getElementById("workfile2").innerText=showfile1+showfile2;;
//    }
//   })
// }




db.transaction(function (tx) {
  //tx.executeSql('CREATE TABLE IF NOT EXISTS FilteTab (id INT NOT NULL AUTO_INCREMENT, Path)'); 
  //tx.executeSql("INSERT INTO FilteTab (id, Path) VALUES ('"+input+"')");
  tx.executeSql('CREATE TABLE IF NOT EXISTS FilteTab (id integer primary key autoincrement, Path, CaretE INT, CaretP INT, CaretN INT)');

    tx.executeSql('SELECT * FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
       var len = results.rows.length, i;
      for (i = 0; i < len; i++) {
      //var showfile1=(results.rows.item(i).id);
         var DbPath=(results.rows.item(i).Path);
      

  
        //document.getElementById("workfile2").innerText=showfile1+showfile2;;
      }
      if (DbPath == null) {
        tx.executeSql("INSERT INTO FilteTab (Path) VALUES ('"+input+"')");
        console.log("fichier non présent");
      }
      else {

        //SetSQLCaret();
        tx.executeSql('SELECT CaretE FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
         //var showfile1=(results.rows.item(i).id);
            var CoordsInSql=(results.rows.item(i).CaretE);
         
            //var CoordsInSql= window.pageYOffset;
      
            localStorage.removeItem("CaretPosition");
            localStorage.setItem("CaretPosition", CoordsInSql);
            var NuncScio = localStorage.getItem("CaretPosition");
            window.scrollTo(0, NuncScio);

           //document.getElementById("workfile2").innerText=showfile1+showfile2;;
         }
        })
        tx.executeSql('SELECT CaretP FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
         //var showfile1=(results.rows.item(i).id);
            var CoordsInSqlP=(results.rows.item(i).CaretP);
         
            //var CoordsInSql= window.pageYOffset;
      
            localStorage.removeItem("CaretPositionP");
            localStorage.setItem("CaretPositionP", CoordsInSqlP);
            

           //document.getElementById("workfile2").innerText=showfile1+showfile2;;
         }
        })
        tx.executeSql('SELECT CaretN FROM FilteTab WHERE Path='+SqPath, [], function (tx, results) {
          var len = results.rows.length, i;
         for (i = 0; i < len; i++) {
         //var showfile1=(results.rows.item(i).id);
            var CoordsInSqlN=(results.rows.item(i).CaretN);
         
            //var CoordsInSql= window.pageYOffset;
      
            localStorage.removeItem("CaretPositionN");
            localStorage.setItem("CaretPositionN", CoordsInSqlN);
            

           //document.getElementById("workfile2").innerText=showfile1+showfile2;;
         }
        })
        //tx.executeSql("INSERT INTO FilteTab (Path) VALUES ('"+input+"')");
        console.log("fichier présent");
      }
    });
  
  //tx.executeSql("INSERT INTO FilteTab (Path) VALUES ('"+input+"')");
  //tx.executeSql("INSERT INTO FilteTab (Path) VALUES ('"+input+"')");
  //tx.executeSql('CREATE TABLE IF NOT EXISTS FilteTab (id unique, text, text2)'); 
  //tx.executeSql("INSERT INTO FilteTab (id, text, text2) VALUES (9, '"+input+"', 'bob')");
});

var process = require("child_process");
process.exec("cd /  && cd "+path_file+"&& /usr/bin/stat --format '%Y'"+" "+name_file ,function (err,stdout,stderr) {
  if (err) {
//a reprendre ???    
   l
  } else {
    var SizeVar = stdout;
      localStorage.removeItem("SizeFileCook");
localStorage.setItem("SizeFileCook", SizeVar);//document.getElementById("showgit").innerHTML=stdout;
      
      
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
    //   var SQLPath= localStorage.getItem("InputFile");
    //   db.transaction(function (tx) {
    //  tx.executeSql("UPDATE FilteTab SET CaretE='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
    //  });
    }
    function GetCaretP(){
      var CoordsInShape= window.pageYOffset;

      localStorage.removeItem("CaretPositionP");
      localStorage.setItem("CaretPositionP", CoordsInShape);
    //   var SQLPath= localStorage.getItem("InputFile");
    //   db.transaction(function (tx) {
    //  tx.executeSql("UPDATE FilteTab SET CaretP='"+CoordsInShape+"' WHERE Path='"+SQLPath+"'"); 
    //  });
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
    var shortcut5 = new nw.Shortcut(ShortPauseM);
    nw.App.registerGlobalHotKey(shortcut5);	

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

}

function openNavPre() {
  
  GetCaretE();
  openGOP();
  startTime()
   document.getElementById("mySidenavPre").style.width = "100%";
  document.getElementById("mySidenavPre").style.height = "50px";
  document.getElementById("Slide_Button").style.display = "none";
   document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "block";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
    document.getElementById("SAVEBUT").style.display = "none";
    document.getElementById("SAVEBUT2").style.display = "none";
    var shortcut = new nw.Shortcut(ShortSave);
    nw.App.unregisterGlobalHotKey(shortcut);
    var shortcut2 = new nw.Shortcut(ShortNote);
    nw.App.unregisterGlobalHotKey(shortcut2);
    var shortcut3 = new nw.Shortcut(ShortPast);
    nw.App.unregisterGlobalHotKey(shortcut3);	
    var shortcut4 = new nw.Shortcut(ShortNoteMean);
    nw.App.unregisterGlobalHotKey(shortcut4);
    var shortcut5 = new nw.Shortcut(ShortExitPre);
    nw.App.registerGlobalHotKey(shortcut5);
    


  
  
  Full_Screen();
  pre();
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
  document.getElementById("SAVEBUT").style.display = "none";
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
}
function closeNavPre() {
  GetCaretP();
  openGO();
  

  document.getElementById("Slide_Button").style.display = "block";
  document.getElementById("PASTBUT").style.display = "none";
  document.getElementById("PREBUT").style.display = "none";
  document.getElementById("IOBUT").style.display = "none";
  document.getElementById("GENBUT").style.display = "none";
  document.getElementById("SAVEBUT").style.display = "none";
  document.getElementById("SAVEBUT2").style.display = "none";
  // var shortcut = new nw.Shortcut(ShortSave);
  //   nw.App.registerGlobalHotKey(shortcut);
  //   var shortcut2 = new nw.Shortcut(ShortNote);
  //   nw.App.registerGlobalHotKey(shortcut2);
  //   var shortcut3 = new nw.Shortcut(ShortPast);
  //   nw.App.registerGlobalHotKey(shortcut3);	
  //   var shortcut4 = new nw.Shortcut(ShortNoteMean);
  //   nw.App.registerGlobalHotKey(shortcut4);
    var shortcut5 = new nw.Shortcut(ShortExitPre);
    nw.App.unregisterGlobalHotKey(shortcut5);
    var shortcut6 = new nw.Shortcut(ShortPauseM);
nw.App.unregisterGlobalHotKey(shortcut6);	
    
  
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
	
	/*
mySidenavIO
mySidenavGe
mySidenavPre
mySidenavPast
mySidenavSave
	*/
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
  //window.scrollTo(0,1e10);
}

function SaveCaretEP(){
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
}




function saveHopeR2(){
  
        
  // var coords = getSelectionCoords();
  // var CoordsInShape = coords.x + ", " + coords.y;
  
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
       //VitesseRouleau = inputTachios ;	
     pre();
       }




	 function TextBold(){
              document.execCommand('bold', false, null);
               selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
            }
 function TextItalic(){
              document.execCommand('italic', false, null);
               // selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
            }
function TextUnder(){
              document.execCommand('underline', false, null);
               // selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
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
               // selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
            }
         function JustifyFull(){
              document.execCommand('justifyFull', false, null);
               // selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
            }
function JustifyLeft(){
              document.execCommand('justifyLeft', false, null);
               // selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
            }
function JustifyRight(){
              document.execCommand('justifyRight', false, null);
               // selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.marginBottom = '100px';
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
   		//edit.document.focus(fontName);
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
                  
                  //document.execCommand('formatblock', false, 'p');
                 //window.execCommand('formatblock', false, 'p');
                //selectedElement = window.getSelection().focusNode.parentNode;
                //selectedElement.style.textDecoration = 'line-through';
                 
                 // var listId = window.getSelection().focusNode.parentNode;
                 //$(listId).addClass("line");
                 }
                  function Undo() {
                  document.execCommand('undo', false, true);
}
function Redo() {
                  document.execCommand('redo', false, true);
}

/*
var doc_to_html = document.getElementById("editor").innerHtml;	
  var div = document.getElementById('editor')

div.addEventListener('keydown', onKeyDown);
*/

function outputZoom(inputZoom) {
	var editor=document.getElementById("editor");
	document.querySelector('#level').value = inputZoom;
	editor.style.zoom = inputZoom ;	
	//var inputZoom = document.getElementById("zoomfield").value;	
}

///function outputUpdate(vol) {
	//document.querySelector('#volume').value = vol;
//}

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
//var name_file = localStorage.getItem("data_name").trim();
//var path_file = localStorage.getItem("folder_path").trim();
//var gitpath = localStorage.getItem("GitPath").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
var filepath = localStorage.getItem("InputFile").trim();

//var set_location = path_file+name_file;
var process = require("child_process");
//process.exec("cd / && cd "+path_file+" && " +pandocpath + " -s --filter /usr/local/bin/pandoc-citeproc " + name_file + " -o " + name_file + ".docx",function (err,stdout,stderr) {
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
  //var name_file = localStorage.getItem("data_name").trim();
 // var path_file = localStorage.getItem("folder_path").trim();
  //var gitpath = localStorage.getItem("GitPath").trim();
  var pandocpath = localStorage.getItem("PandocPath").trim();
  var filepath = localStorage.getItem("InputFile").trim();
  
  //var set_location = path_file+name_file;
  var process = require("child_process");
  //process.exec("cd / && cd "+path_file+" && " +pandocpath + " -s --filter /usr/local/bin/pandoc-citeproc " + name_file + " -o " + name_file + ".docx",function (err,stdout,stderr) {
  process.exec(pandocpath + " -s --filter /usr/bin/pandoc-citeproc " + filepath +" " +FormPath+ " -o " + filepath + ".docx",function (err,stdout,stderr) {
  
      if (err) {
        document.getElementById("ShowTerm").innerHTML= stderr;
        
      } else {
          document.getElementById("ShowTerm").innerHTML=stdout;
      }
  })
  }
function GenSlide(){
//var name_file = localStorage.getItem("data_name").trim();
var path_file = localStorage.getItem("folder_path").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var filepath = localStorage.getItem("InputFile").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
var set_location = path_file+name_file;
var process = require("child_process");

//process.exec("cd / && cd "+path_file+" && "+ pandocpath + " -s " + name_file + " -o " + name_file + ".pptx",function (err,stdout,stderr) {
process.exec(pandocpath + " -s " + filepath + " -o " + filepath + ".pptx",function (err,stdout,stderr) {

    if (err) {
	    document.getElementById("ShowTerm").innerHTML= stderr;
	   
    } else {
        document.getElementById("ShowTerm").innerHTML=stdout;
    }
})
}

function GenPdf(){
//var name_file = localStorage.getItem("data_name").trim();
//var path_file = localStorage.getItem("folder_path").trim();
//var gitpath = localStorage.getItem("GitPath").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();

var pandocpdf = localStorage.getItem("PandocPdf");
var filepath = localStorage.getItem("InputFile").trim();

//var set_location = path_file+name_file;
//var path_pdf = require("/Library/TeX/texbin/pdflatex");
var process = require("child_process");
//process.exec("cd /  && cd "+path_file+" && "+ pandocpath + " -s "+"--pdf-engine=/Library/TeX/texbin/pdflatex "+pandocpdf+" "+name_file + " -o " + name_file + ".pdf",function (err,stdout,stderr) {

//process.exec("cd /  && cd "+path_file+" && "+ pandocpath + " -s "+" "+pandocpdf+" "+name_file + " -o " + name_file + ".pdf",function (err,stdout,stderr) {
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
  //var name_file = localStorage.getItem("data_name").trim();
 // var path_file = localStorage.getItem("folder_path").trim();
  //var gitpath = localStorage.getItem("GitPath").trim();
  var pandocpath = localStorage.getItem("PandocPath").trim();
  
  var pandocpdf = localStorage.getItem("PandocPdfFusion");
  var filepath = localStorage.getItem("InputFile").trim();
  
  //var set_location = path_file+name_file;
  //var path_pdf = require("/Library/TeX/texbin/pdflatex");
  var process = require("child_process");
  //process.exec("cd /  && cd "+path_file+" && "+ pandocpath + " -s "+"--pdf-engine=/Library/TeX/texbin/pdflatex "+pandocpdf+" "+name_file + " -o " + name_file + ".pdf",function (err,stdout,stderr) {
  
  //process.exec("cd /  && cd "+path_file+" && "+ pandocpath + " -s "+" "+pandocpdf+" "+name_file + " -o " + name_file + ".pdf",function (err,stdout,stderr) {
  process.exec(pandocpath + " -s "+" "+pandocpdf+" "+filepath +" " +FormPath+ " -o " + filepath + ".pdf",function (err,stdout,stderr) {
  
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
    //var name_file = localStorage.getItem("data_name").trim();
   // var path_file = localStorage.getItem("folder_path").trim();
    //var gitpath = localStorage.getItem("GitPath").trim();
    var pandocpath = localStorage.getItem("PandocPath").trim();
    var filepath = localStorage.getItem("InputFile").trim();
    
    //var set_location = path_file+name_file;
    var process = require("child_process");
    //process.exec("cd / && cd "+path_file+" && " +pandocpath + " -s --filter /usr/local/bin/pandoc-citeproc " + name_file + " -o " + name_file + ".docx",function (err,stdout,stderr) {
    process.exec(pandocpath + " -s --citeproc " + filepath +" " +FormPath+ " -o " + filepath + ".epub",function (err,stdout,stderr) {
    
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
//document.title = localStorage.getItem("InputFile2");
var path_file = localStorage.getItem("InputFile2").trim();
//var name_file = localStorage.getItem("InputNameSoloC2").trim();
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
//   var path_fileR = localStorage.getItem("InputFile2").trim();
//  	     var path_file =        
// 	fs.readFile(path_file + ".md", function (err, data) {
//   if (err) throw err;
//   console.log(data);
//   document.getElementById("editor").innerText = data;

// }); 

}
/* function Importdocx(name2){
  var fs = require("fs");	
var path = require("path");
  var chooser = document.querySelector(name2);
  chooser.addEventListener("change2", function(evt) {
    console.log(this.value);
    var input = this.value;
    
    var InputPath = path.dirname(input); 
    var pandocpath = localStorage.getItem("PandocPath").trim();
    //var InputNameSolo = path.basename(input);
    localStorage.removeItem("ImportDocxCook");
    localStorage.setItem("ImportDocxCook", InputPath);
    var path_file = localStorage.getItem("FilePathCook").trim();
    //var InputNameNoExt = path.basename(input, path.extname(input));
    //var InputNameExt = path.extname(input);
var process = require("child_process");
process.exec(pandocpath + " -s --filter /usr/bin/pandoc-citeproc " + path_file + " -o " + path_file + ".md",function (err,stdout,stderr) {

  if (err) {
          document.getElementById("ShowTerm").innerHTML= stderr;
          
        } else {
            document.getElementById("ShowTerm").innerHTML=stdout;
        }
    });
})
 
  } */

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


//var folderPathL = localStorage.getItem("folder_path");
	var namedata2write = localStorage.getItem("data_name");
/*
let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(path_file+ "/"+ namedata2write , text_to_save, (err) => {  
       if (err) throw err;
})
*/;
	
let text_to_save = document.getElementById("editor").innerText;
fs.writeFile(filepath , text_to_save, (err) => {  
       if (err) throw err;
})	

//var set_location = path_file+name_file;
//var path_pdf = require("/Library/TeX/texbin/pdflatex");
var process = require("child_process");
process.exec("cd /  && cd "+pathfile+" && "+ gitpath +" "+"add "+namefile,function (err,stdout,stderr) {
//process.exec("cd /  && cd "+path_file+" && "+ gitpath + " status",function (err,stdout,stderr) {

    if (err) {
	    document.getElementById("ShowTermGen").innerHTML= stderr;
	   
    } else {
        document.getElementById("ShowTermGen").innerHTML=stdout;
                //document.getElementById("ShowTermGen").innerHTML = " add done";

    }
})
}
function GitCommit(){
//var name_file = localStorage.getItem("filgit").trim();
var namefile = localStorage.getItem("InputNameSoloC").trim();

//var path_file = localStorage.getItem("fogit").trim();
var pathfile = localStorage.getItem("FilePathCook").trim();
var gitpath = localStorage.getItem("GitPath").trim();
var pandocpath = localStorage.getItem("PandocPath").trim();
//document.getElementById("ShowTermGen").innerHTML = " commit done";
//var set_location = path_file+name_file;
//var path_pdf = require("/Library/TeX/texbin/pdflatex");
var process = require("child_process");
process.exec("cd /  && cd "+pathfile+" && " + gitpath+" "+"commit "+namefile+" -m 'message'",function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("ShowTermGen").innerHTML= stderr;
	           //document.getElementById("ShowTermGen").innerHTML = " commit done";

    } else {
        document.getElementById("ShowTermGen").innerHTML = stdout;
       // document.getElementById("ShowTermGen").innerHTML = " commit done";
    }
})
}

//GIT MANAGE
function GitLog(){
var pathfile = localStorage.getItem("FilePathCook").trim();
var gitpath = localStorage.getItem("GitPath").trim();


/*
var namefile = localStorage.getItem("InputNameSoloC").trim();
var pathfile = localStorage.getItem("FilePathCook").trim();
*/
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


//log_window = window.open("log.html", "log_window", "width=450,height=900");
nw.Window.open("log.html", { title: 'git log -p', width: 1315, height: 768,}, function(new_win) {
	  
	  // do something with the newly created window
});


}

function ShowBibFile(){
//var BibPathV = localStorage.getItem("BibPath").trim();

//nw.Window.open("bib.html", { title: BibPathV, width: 1315, height: 768,}, function(new_win) {
	param_window = window.open("bib.html", "param_window", "width=800,height=500");
//});


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
//var path_pdf = require("/Library/TeX/texbin/pdflatex");
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

//var path_pdf = require("/Library/TeX/texbin/pdflatex");
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
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}













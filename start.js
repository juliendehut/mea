localStorage.removeItem("FilePathCook2");
localStorage.removeItem("InputNameNoExtC2");
localStorage.removeItem("InputNameExtC2");
localStorage.removeItem("InputNameSoloC2");
localStorage.removeItem("InputFile2");
localStorage.removeItem("bibref");
localStorage.removeItem("bibMean");

var fs = require("fs");
		
var path = require("path");
//var namedata2write2 = "temp_rest";
var intro = "write here";
if (localStorage.getItem("OpenStartCook") == "false"){
  localStorage.removeItem("FilePathCook");
localStorage.removeItem("InputNameNoExtC");
localStorage.removeItem("InputNameExtC");
localStorage.removeItem("InputNameSoloC");
localStorage.removeItem("InputFile");
localStorage.removeItem("SizeFileCook");

	 var namedata2write = "temp_rest";
	 var intro = "write here !";
	 
	fs.writeFile(namedata2write, intro, (err) => {  
       if (err) throw err;
       });
}
else {
    var LastInput = localStorage.getItem("InputFile");
    var namedata2write2 = "temp_rest";
	fs.readFile(LastInput, function (err, data) {
        if (err) throw err;
        console.log(data);
      
      fs.writeFile(namedata2write2, data, (err) => {  
        if (err) throw err;
        })
    });
}
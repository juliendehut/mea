var fs = require("fs");
		
var path = require("path");
//var namedata2write2 = "temp_rest";
var intro = "write here";
if (localStorage.getItem("OpenStartCook") == "false"){
		
/*
var process = require("child_process");
process.exec("echo"+" "+ intro+" "+ ">"+" "+namedata2write2 ,function (err,stdout,stderr) {
    if (err) {
	    document.getElementById("ShowTerm").innerHTML= stderr;
	   
    } else {
        document.getElementById("ShowTerm").innerHTML=stdout;
    }
})
*/

	

	 var namedata2write2 = "temp_rest";
	 var intro = "write here !";
	 
	fs.writeFile(namedata2write2, intro, (err) => {  
       if (err) throw err;
       });



}

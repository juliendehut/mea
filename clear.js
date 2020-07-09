/*var fs = require("fs");		
var path = require("path");

/*
var name_file = localStorage.getItem("data_name").trim();
var path_file = localStorage.getItem("folder_patht").trim();
var SetLocation = "any";
*/

/*
if (localStorage.getItem("OpenStartCook") == "true"){
	var namedatawrite = "temp_rest";		

/*
fs.readFileSync(SetLocation, function (err, data) {
  if (err) throw err;

 });
	 
fs.writeFileSync(namedata2write, data, (err) => {  
       if (err) throw err;}); 
      
 

 var intro2 = "yep";
	 
	fs.writeFile(namedata2write, intro2, (err) => {  
       if (err) throw err;
       });

 	
}
else {
	
var namedatawrite2 = "temp_rest";
	 var intro = "write here bob!";
	 
	fs.writeFile(namedata2write2, intro, (err) => {  
       if (err) throw err;
       });



// } 
*/
var fs = require("fs");
		
var path = require("path");
//var namedata2write2 = "temp_rest";

if (localStorage.getItem("OpenStartCook") == "true"){
		
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

	


		var folderPathL = localStorage.getItem("folder_path").trim();
		var namedata2write = localStorage.getItem("data_name").trim();
let text_to_save = folderPathL+ "/"+ namedata2write;
fs.readFile(folderPathL+ "/"+ namedata2write2, text_to_save, (err) => {  
       if (err) throw err;
});




}
else {
	var namedata2write3 = "temp_rest";
	 var intro = "write here !";
	 
	fs.writeFile(namedata2write3, intro, (err) => {  
       if (err) throw err;
       });
}

var fs = require("fs");
		
var path = require("path");
//var namedata2write2 = "temp_rest";
var intro = "write here";
if (localStorage.getItem("OpenStartCook") == "false"){
	 var namedata2write2 = "temp_rest";
	 var intro = "write here !";
	 
	fs.writeFile(namedata2write2, intro, (err) => {  
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
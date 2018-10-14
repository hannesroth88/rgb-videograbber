var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var exec = require('child_process').exec, child;

child = exec('hyperion-remote -l',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });


var xhttp = new XMLHttpRequest();
//var ItemJSON;
//ItemJSON = '[  {    "data": 1,    "ProductID": "1",    "Quantity": 1,  },  {    "Id": 1,    "ProductID": "2",    "Quantity": 2,  }]';

console.log("Start");

xhttp.onreadystatechange = function() {
        if (this.readyState == 1 && this.status == 0 ) {
            //alert(this.responseText);
            console.log("success: responseText " + this.responseText);
        }
};
xhttp.open("PUT", "http://192.168.2.4:8080/rest/items/EG_Wohnen_LedR/state", true); // 0-100
xhttp.setRequestHeader("Content-type", "text/plain");
xhttp.send("100");
//console.log("responseText " + xhttp.responseText);
//console.log("status " + xhttp.status);
//console.log("readyState " + xhttp.readyState);



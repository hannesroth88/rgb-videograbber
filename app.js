var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var exec = require('child_process').exec, child;
firstFunction();

function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    child = exec('hyperion-remote -l',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

    //let birth = '{ "birthDate":"1993-09-10"}';
    let obj = JSON.parse(stdout);
    console.log(obj.activeLedColor)

    _callback();    
}

function secondFunction(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
        
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
    });    
}






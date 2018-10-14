var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var exec = require('child_process').exec, child;










    child = exec('hyperion-remote -l',
    function (error, stdout, stderr) {
        //console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }        
        let obj = stdout.slice(0, stdout.indexOf('Server info:'))
        console.log("whole JSON " + obj[1])
        obj = JSON.parse(obj);
        console.log("LED RGB Code " + obj.activeLedColor)




        var xhttp = new XMLHttpRequest();
        console.log("Send Colors over REST API");
        xhttp.onreadystatechange = function() {
                if (this.readyState == 1 && this.status == 0 ) {
                    //alert(this.responseText);
                    console.log("success: responseText " + this.responseText);
                }
        };
        xhttp.open("PUT", "http://192.168.2.4:8080/rest/items/EG_Wohnen_LedR/state", true); // 0-100
        xhttp.setRequestHeader("Content-type", "text/plain");
        xhttp.send("100");

    });






    //console.log("responseText " + xhttp.responseText);
    //console.log("status " + xhttp.status);
    //console.log("readyState " + xhttp.readyState);    







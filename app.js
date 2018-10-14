var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var exec = require('child_process').exec, child;



child = exec('hyperion-remote -l',
function (error, stdout, stderr) {
    //console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
            console.log('exec error: ' + error);
    }
    



    index_start = stdout.lastIndexOf('"RGB Value" : [ ');
    stdout = stdout.slice(index_start+16);
    index_end = stdout.indexOf(' ]');
    stdout = stdout.slice(0,index_end);
    var arrayRGB = stdout.split(', ');
    console.log("LED RGB Code " + arrayRGB);
    colorRed = arrayRGB[0];
    colorGreen = arrayRGB[1];
    colorBlue = arrayRGB[2];


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
    xhttp.send(colorRed);
    xhttp.open("PUT", "http://192.168.2.4:8080/rest/items/EG_Wohnen_LedG/state", true); // 0-100
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(colorGreen);
    xhttp.open("PUT", "http://192.168.2.4:8080/rest/items/EG_Wohnen_LedB/state", true); // 0-100
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(colorBlue);
    }
});

//console.log("responseText " + xhttp.responseText);
//console.log("status " + xhttp.status);
//console.log("readyState " + xhttp.readyState);    


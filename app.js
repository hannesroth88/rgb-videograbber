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
    console.log("index_start " + index_start);
    index_end = stdout.indexOf(' ]');
    console.log("index_end " + index_end);
    stdout2 = stdout.slice(index_start+16,index_end);
    console.log("LED RGB Code Array " + stdout);
    var arrayRGB = stdout2.split(', ');
    console.log("LED RGB Code " + arrayRGB);
    colorRed = arrayRGB[0];
    colorGreen = arrayRGB[1];
    colorBlue = arrayRGB[2];
    console.log(colorRed);
    console.log(colorGreen);
    console.log(colorBlue);


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

});

//console.log("responseText " + xhttp.responseText);
//console.log("status " + xhttp.status);
//console.log("readyState " + xhttp.readyState);    


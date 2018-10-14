var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    var xhttp = new XMLHttpRequest();
    //var ItemJSON;
    //ItemJSON = '[  {    "data": 1,    "ProductID": "1",    "Quantity": 1,  },  {    "Id": 1,    "ProductID": "2",    "Quantity": 2,  }]';

    xhttp.onreadystatechange = function() {
        console.log(this.responseText);
         if (this.readyState == 4 && this.status == 202 ) {
             //alert(this.responseText);
             console.log(this.responseText);
         }
    };
    xhttp.open("PUT", "http://192.168.2.4:8080/rest/items/EG_Wohnen_LedR/state", false); // 0-100
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(100);

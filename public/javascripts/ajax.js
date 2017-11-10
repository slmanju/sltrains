// var ajax = {};
//
// function encodeData(data) {
//     var result = typeof data == 'string' ? data : Object.keys(data).map(
//         function (k) {
//             return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
//         }
//     ).join('&');
//     return result;
// }
//
// function onReady(request) {
//     if (request.readyState === 4 && request.status === 200) {
//         params.success(request.responseText);
//     } else {
//         params.error(request.responseText);
//     }
// }
//
// ajax.post = function post(params) {
//     var data = encodeData(params.data);
//     var request = new XMLHttpRequest();
//     request.open("POST", params.url);
//     request.onload = function() {
//         var DONE = 4; // readyState 4 means the request is done.
//         var OK = 200; // status 200 is a successful return.
//         if (request.readyState === DONE) {
//             if (xhr.status === OK) {
//                 console.log(request.responseText);
//             } // 'This is the returned text.'
//         } else {
//             console.log('Error: ' + request.status); // An error occurred during the request.
//         }
//         // if (request.status >= 200 && request.status < 400) {
//         //     params.success(request.responseText);
//         // } else {
//         //     // We reached our target server, but it returned an error
//         //     console.log("my bad. this is it 111111111");
//         //     params.error({ status: request.status, data : request.responseText });
//         // }
//     };
//     request.onerror = function() {
//         // There was a connection error of some sort
//         console.log("my bad. this is it");
//         params.error({ status: request.status, data : request.responseText });
//     };
//     request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     request.send(data);
// };
//
// ajax.get = function getAjax(params) {
//     var data = encodeData(params.data);
//     var request = new XMLHttpRequest();
//     request.open('GET', params.url + "?" + data);
//     request.onreadystatechange = function () {
//         if (request.readyState > 3 && request.status === 200) {
//             params.success(request.responseText);
//         } else if (request.readyState > 3 && request.status >= 400) {
//             params.error(request.responseText);
//         }
//     };
//     request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     request.send();
//     return request;
// };
//
// // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress
//
// /*function getAjax(url, success) {
//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
//     xhr.open('GET', url);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
//     };
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.send();
//     return xhr;
// }
//
// // example request
// getAjax('http://foo.bar/?p1=1&p2=Hello+World', function(data){ console.log(data); });*/
//
// /*
// function postAjax(url, data, success) {
//     var params = typeof data == 'string' ? data : Object.keys(data).map(
//         function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
//     ).join('&');
//
//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//     xhr.open('POST', url);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
//     };
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.send(params);
//     return xhr;
// }
//
// // example request
// postAjax('http://foo.bar/', 'p1=1&p2=Hello+World', function(data){ console.log(data); });
//
// // example request with data object
// postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, function(data){ console.log(data); });
// */
//
//
// /*var xhr = new XMLHttpRequest();
// xhr.open("POST", yourUrl, true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify({
//     value: value
// }));*/
//
// /*|--minAjax.js--|
//  |--(A Minimalistic Pure JavaScript Header for Ajax POST/GET Request )--|
//  |--Author : flouthoc (gunnerar7@gmail.com)(http://github.com/flouthoc)--|
//  |--Contributers : Add Your Name Below--|
//  */
// /*
// function initXMLhttp() {
//
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         //code for IE7,firefox chrome and above
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         //code for Internet Explorer
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//
//     return xmlhttp;
// }
//
// function minAjax(config) {
//
//     /!*Config Structure
//      url:"reqesting URL"
//      type:"GET or POST"
//      method: "(OPTIONAL) True for async and False for Non-async | By default its Async"
//      debugLog: "(OPTIONAL)To display Debug Logs | By default it is false"
//      data: "(OPTIONAL) another Nested Object which should contains reqested Properties in form of Object Properties"
//      success: "(OPTIONAL) Callback function to process after response | function(data,status)"
//      *!/
//
//     if (!config.url) {
//
//         if (config.debugLog == true)
//             console.log("No Url!");
//         return;
//
//     }
//
//     if (!config.type) {
//
//         if (config.debugLog == true)
//             console.log("No Default type (GET/POST) given!");
//         return;
//
//     }
//
//     if (!config.method) {
//         config.method = true;
//     }
//
//
//     if (!config.debugLog) {
//         config.debugLog = false;
//     }
//
//     var xmlhttp = initXMLhttp();
//
//     xmlhttp.onreadystatechange = function() {
//
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//
//             if (config.success) {
//                 config.success(xmlhttp.responseText, xmlhttp.readyState);
//             }
//
//             if (config.debugLog == true)
//                 console.log("SuccessResponse");
//             if (config.debugLog == true)
//                 console.log("Response Data:" + xmlhttp.responseText);
//
//         } else {
//
//             if (config.debugLog == true)
//                 console.log("FailureResponse --> State:" + xmlhttp.readyState + "Status:" + xmlhttp.status);
//         }
//     }
//
//     var sendString = [],
//         sendData = config.data;
//     if( typeof sendData === "string" ){
//         var tmpArr = String.prototype.split.call(sendData,'&');
//         for(var i = 0, j = tmpArr.length; i < j; i++){
//             var datum = tmpArr[i].split('=');
//             sendString.push(encodeURIComponent(datum[0]) + "=" + encodeURIComponent(datum[1]));
//         }
//     }else if( typeof sendData === 'object' && !( sendData instanceof String || (FormData && sendData instanceof FormData) ) ){
//         for (var k in sendData) {
//             var datum = sendData[k];
//             if( Object.prototype.toString.call(datum) == "[object Array]" ){
//                 for(var i = 0, j = datum.length; i < j; i++) {
//                     sendString.push(encodeURIComponent(k) + "[]=" + encodeURIComponent(datum[i]));
//                 }
//             }else{
//                 sendString.push(encodeURIComponent(k) + "=" + encodeURIComponent(datum));
//             }
//         }
//     }
//     sendString = sendString.join('&');
//
//     if (config.type == "GET") {
//         xmlhttp.open("GET", config.url + "?" + sendString, config.method);
//         xmlhttp.send();
//
//         if (config.debugLog == true)
//             console.log("GET fired at:" + config.url + "?" + sendString);
//     }
//     if (config.type == "POST") {
//         xmlhttp.open("POST", config.url, config.method);
//         xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         xmlhttp.send(sendString);
//
//         if (config.debugLog == true)
//             console.log("POST fired at:" + config.url + " || Data:" + sendString);
//     }
//
//
//
//
// }
// */
//
//
// /*
// minAjax({
//     url:"test.php",//request URL
//     type:"GET",//Request type GET/POST
//     //Send Data in form of GET/POST
//     data:{
//         name:"Superman",
//         secretname:"Clark Kent",
//         profession:"reporter",
//         worth:"poor",
//         company:"Daily Planet"
//     },
//     method:"true",
//     debugLog:"true",
//     //CALLBACK FUNCTION with RESPONSE as argument
//     success: function(data){
//         alert(data);
//     }
//
// });*/
//
// /*var request = new XMLHttpRequest();
// request.open('POST', '/my/url', true);
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
// request.send(data);*/
//
// /*
//
// var request = new XMLHttpRequest();
// request.open('GET', '/my/url', true);
//
// request.onload = function() {
//     if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var resp = request.responseText;
//     } else {
//         // We reached our target server, but it returned an error
//
//     }
// };
//
// request.onerror = function() {
//     // There was a connection error of some sort
// };
//
// request.send();*/

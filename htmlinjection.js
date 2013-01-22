retValue = "";
//console.log(document.getElementsByClassName('bmx-returnColor wrap-break-word')[0]);
//console.log(document.getElementsByTagName('pre')[0]);
if ((document.getElementsByClassName('bmx-returnColor wrap-break-word')[0] == undefined || document.getElementsByClassName('bmx-returnColor wrap-break-word')[0] == "undefined") && (document.getElementsByTagName('pre')[0] == undefined || document.getElementsByTagName('pre')[0] == "undefined")) {
    retValue = "<p>No HTML Output</p>";
} else if ((document.getElementsByClassName('bmx-returnColor wrap-break-word')[0] == undefined || document.getElementsByClassName('bmx-returnColor wrap-break-word')[0] == "undefined") && (document.getElementsByTagName('pre')[0] != undefined || document.getElementsByTagName('pre')[0] != "undefined")) {
    retValue = document.getElementsByTagName('pre')[0].innerHTML;
} else if ((document.getElementsByClassName('bmx-returnColor wrap-break-word')[0] != undefined || document.getElementsByClassName('bmx-returnColor wrap-break-word')[0] != "undefined") && (document.getElementsByTagName('pre')[0] == undefined || document.getElementsByTagName('pre')[0] == "undefined")) {
    retValue = document.getElementsByClassName('bmx-returnColor wrap-break-word')[0].innerHTML;
}
//console.log(retValue);
chrome.extension.sendRequest(retValue);

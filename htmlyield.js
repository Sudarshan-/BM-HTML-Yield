function visualizer() {
    chrome.tabs.getAllInWindow(function (tabs) {
        for (i = 0; i < tabs.length; i++) {
            windowlocation = tabs[i].url;
            //console.log(windowlocation);
            if ((windowlocation.indexOf('view=bmllibraryeditor') != -1) || ((windowlocation.indexOf('admin/configuration/rules/edit_rule.jsp?') != -1) && (windowlocation.indexOf('rule_type=1') != -1))) {
                chrome.pageAction.show(tabs[i].id);
                //console.log("Shown");
            } else {
                chrome.pageAction.hide(tabs[i].id);
                //console.log("Hidden");
            }
        }
    });
}

chrome.extension.onRequest.addListener(function (result, sender) {
    //console.log(result);
    //console.log("In Call Back of Listener script"+ result);
    //chrome.tabs.executeScript({code:"document.getElementsByClassName('help-text')[0].innerHTML="+result});
    //console.log(result);
    content = result;
    var newPage = "<html><head><title>"
    newPage += "Generated HTML Out Put";
    newPage += "</title></head><body>";
    while (content.indexOf('&nbsp;') != -1 || content.indexOf('&lt;') != -1 || content.indexOf('&gt;') != -1) {
        content = content.replace('&nbsp;', ' ');
        content = content.replace('&lt;', '<');
        content = content.replace('&gt;', '>');
    }
    //console.log(content);
    newPage += content;
    newPage += "</body></html>";
    //console.log(newPage);
    var j = window.open('');
    j.document.write(newPage);
    j.document.close();
    //j.document.getElementsByTagName('body')[0].appendChild(content);
    //j.document.write(content);

    //j.document.getElementsByTagName('body')[0].innerHTML=content;
})

chrome.tabs.onUpdated.addListener(visualizer);

chrome.pageAction.onClicked.addListener(function (tabs) {



    chrome.tabs.executeScript({
        "file": "htmlinjection.js"
    });

});

visualizer();

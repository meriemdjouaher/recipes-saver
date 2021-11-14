function logTabs(tabs) {
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:5000/", true);
xhr.setRequestHeader('Content-Type', 'text/plain');
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
    result = tab.url;
    xhr.send(result);
  }
}

function onError(error) {
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:5000/", true);
xhr.setRequestHeader('Content-Type', 'text/plain');
  console.log(`Error: ${error}`);
  xhr.send("ERROR");
}

function openPage() {
//  browser.tabs.create({
//    url: "https://developer.mozilla.org"

var xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:5000/", true);
xhr.setRequestHeader('Content-Type', 'text/plain');
//xhr.setRequestHeader('Access-Control-Allow-Origin', '127.0.0.1');
var querying = browser.tabs.query({currentWindow: true, active: true});
querying.then(logTabs, onError);
//xhr.send("PPPPPPPOSSSSSSSSSSSSSSST");
}
browser.browserAction.onClicked.addListener(openPage);
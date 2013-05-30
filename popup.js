// Lily is cute ;)
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({"currentWindow": true}, function(shibby){console.log(shibby)})
});

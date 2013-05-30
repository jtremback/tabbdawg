document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({}, 
    function(tabs){
      var ul = document.getElementById("list");
      for (var i = tabs.length - 1; i >= 0; i--) {
        var tab = tabs[i],
            newLi = document.createElement("li"),
            newA = document.createElement("a");

        newA.href = tab.url;
        newA.textContent = tab.title;
        newLi.appendChild(newA);
        ul.appendChild(newLi);
      }; 
    }
  )
});

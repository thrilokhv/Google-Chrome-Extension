window.onload = function(){
  setTimeout(function() {
    var performanceTiming = performance.timing;
    alert("Page took "+parseInt(performanceTiming.loadEventEnd - performanceTiming.responseEnd)+" milliseconds to load.");
  }, 0);
}

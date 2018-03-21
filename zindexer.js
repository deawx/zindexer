var zindexer = (function(){
  Object.keys(data).map(function(key, index) {
    var select = document.querySelectorAll(key);
    if (select.length > 1)
      Array.prototype.forEach.call(select, function(item) {
        item.style.zIndex = data[key];
      });
    else
      select[0].style.zIndex = data[key];
  });
});
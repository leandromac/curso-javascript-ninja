(function(win, doc){
  'use strict';

  function on(element, event, callback) {
    doc.querySelector(element)
      .addEventListener(event, callback, false);
  }

  on('[data-js="input"]', 'keydown', function(event) {
    console.log(this.value);
  });

  on('[data-js="select"]', 'change', function() {
    doc.querySelector('[data-js="input"]').value = this.value;
  });

})(window, document);

const header = document.querySelector("header"),
      body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      menuBtn = document.getElementById("menu");

// headroom
new Headroom(header, {
  tolerance: 0,
  offset : 10,
}).init();

// nav menu
menuBtn.addEventListener("click", function() {

  this.classList.toggle("open");
  nav.classList.toggle("open");
  document.querySelector(".layer").classList.toggle("layer-active");
  body.classList.toggle("remove-scrollbar");

  document.querySelectorAll('nav > ul > li > a').forEach(item => {
    item.addEventListener('click', event => {
      
      menuBtn.click();
    })
  });

});

// auto resize form textarea
(function(){

var textareas = document.querySelectorAll('.expanding'),
    
    resize = function(t) {
      t.style.height = 'auto';
      t.style.height = (t.scrollHeight + t.offset + 1 ) + 'px';
    },
    
    attachResize = function(t) {
      if ( t ) {
        // console.log('t.className',t.className);
        t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

        resize(t);

        if ( t.addEventListener ) {
          t.addEventListener('input', function() { resize(t); });
          t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
        }

        t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
      }
    };

  // ie support
  if ( !document.querySelectorAll ) {

    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }

  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }

})();

// put current year
document.getElementById("year").innerHTML = (new Date().getFullYear());

// service worker for pwa
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // successful
      console.log('Service Worker registered:', registration.scope);
      document.querySelector("#logo").onclick = function() {
        registration.update();
      }
    }).catch(function(err) {
      // failed
      console.log('Service Worker registration failed:', err);
    });
  });
}

// console signature
console.log('\n%cLucasm.dev', 'background:#000;color:#fff;padding:5px 10px;');
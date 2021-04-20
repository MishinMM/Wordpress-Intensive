!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    const modalButtons = document.querySelectorAll('.js-open-modal'),
          overlay      = document.querySelector('#overlay'),
          closeButtons = document.querySelectorAll('.js-modal-close');
    
    
    modalButtons.forEach(function(item){
       
       item.addEventListener('click', function(e) {
          e.preventDefault();
 
          let modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
          
          overlay.classList.add('overlay_active');
       }); // end click
       
    }); // end foreach
    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
           const parentModal = this.closest('.overlay');
     
           parentModal.classList.remove('overlay_active');
        });
     }); // end foreach
     document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key == 27) {
            document.querySelector('.overlay.overlay_active').classList.remove('overlay_active');
        };
    }, false);
 }); // end ready
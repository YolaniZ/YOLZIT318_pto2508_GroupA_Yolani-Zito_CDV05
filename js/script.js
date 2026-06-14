// Mobile nav toggle and current year
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('navToggle');
  var list = document.getElementById('navList');
  
  // Mobile nav toggle
  if(btn && list){
    btn.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('active');
    });
    
    // Close menu when link clicked
    var links = list.querySelectorAll('a');
    links.forEach(function(link){
      link.addEventListener('click', function(){
        btn.setAttribute('aria-expanded', 'false');
        list.classList.remove('active');
      });
    });
  }
  
  // Set current year in footer
  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Lightbox functionality
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCaption = document.getElementById('lightbox-caption');
  var lbClose = document.querySelector('.lightbox-close');
  var triggers = document.querySelectorAll('.lightbox-trigger');

  function openLightbox(src, caption){
    if(!lightbox) return;
    lbImg.src = src;
    lbImg.alt = caption || '';
    lbCaption.textContent = caption || '';
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    if(!lightbox) return;
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
    lbCaption.textContent = '';
    document.body.style.overflow = '';
  }

  triggers.forEach(function(btn){
    btn.addEventListener('click', function(){
      var img = this.querySelector('img');
      var src = img ? img.src : this.dataset.src;
      var caption = this.dataset.title || '';
      openLightbox(src, caption);
    });
  });

  if(lbClose) lbClose.addEventListener('click', closeLightbox);
  if(lightbox) lightbox.addEventListener('click', function(e){ if(e.target === this) closeLightbox(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeLightbox(); });
});

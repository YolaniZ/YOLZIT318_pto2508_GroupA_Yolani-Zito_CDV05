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
});

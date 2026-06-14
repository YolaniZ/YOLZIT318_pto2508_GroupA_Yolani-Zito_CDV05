// Mobile nav toggle and current year
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('navToggle');
  var list = document.getElementById('navList');
  if(btn){
    btn.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(list.style.display === 'block'){ list.style.display = ''; }
      else { list.style.display = 'block'; }
    });
  }
  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
});

(function(){
  var btn = document.getElementById('themeToggle');
  function apply(theme){
    document.documentElement.setAttribute('data-theme', theme);
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  apply(document.documentElement.getAttribute('data-theme') || 'light');
  if (btn){
    btn.addEventListener('click', function(){
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      apply(next);
    });
  }
})();
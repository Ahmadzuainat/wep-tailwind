function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
const toggleButton = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

// تحقق إذا كان الوضع الداكن قد تم حفظه في التخزين المحلي
if (localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  
  // حفظ التفضيل في التخزين المحلي
  if (htmlElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});



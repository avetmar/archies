function toggleDivs() {
    // Находим div по классу и меняем стиль на display: none
    var divsToHide = document.querySelectorAll('.contacts');
    divsToHide.forEach(function(div) {
        div.style.display = 'none';
    });

    // Находим другой div по другому классу и меняем стиль на display: block
    var divsToShow = document.querySelectorAll('.details');
    divsToShow.forEach(function(div) {
        div.style.display = 'block';
    });
}

// Найти кнопку по id и добавить обработчик события на клик
var button = document.getElementById('toggleButton');
button.addEventListener('click', toggleDivs);
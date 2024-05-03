document.getElementById('toggleButtonCards').addEventListener('click', function() {
    try {
      var hiddenCards = document.querySelectorAll('.card.hidden');
      var buttonText = document.getElementById('toggleButtonCards').textContent.trim();
      
      if (buttonText === 'SHOW ALL') {
        hiddenCards.forEach(function(card) {
          card.classList.remove('hidden');
        });
        document.getElementById('toggleButtonCards').textContent = 'SHOW LESS';
      } else {
        var allCards = document.querySelectorAll('.card');
        allCards.forEach(function(card) {
          if (!card.classList.contains('hidden')) {
            card.classList.add('hidden');
          }
        });
        document.getElementById('toggleButtonCards').textContent = 'SHOW ALL';
      }
      document.getElementById('cardContainer').scrollIntoView({ behavior: 'smooth' });
    } catch (e) {}
  });
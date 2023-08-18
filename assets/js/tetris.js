const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    if (option.classList.contains('selected')) {
      option.classList.remove('selected');
    } else {
      options.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    }
  });
});
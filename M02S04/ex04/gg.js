const deleteBtn = document.getElementById('deleteButton');
deleteBtn.addEventListener('click', () => {
  const notification = document.querySelector('.notification');

  notification.innerHTML = '';
});

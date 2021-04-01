document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('burger');
  let iconOne = document.getElementById('icon-1');
  let iconTwo = document.getElementById('icon-2');
  let iconThree = document.getElementById('icon-3');
  let menuClicked = false;

  menuBtn.addEventListener('click', () => {
    const list = document.getElementById('list-items');
    let open = list.classList.toggle('open');
    iconOne.classList.toggle('rotate-1');
    iconTwo.classList.toggle('second');
    iconThree.classList.toggle('rotate-2');

    if (!menuClicked) {
      
    }

  });
});
window.addEventListener('scroll', () => {
  let nav = document.getElementById('nav-bar');
  nav.classList.toggle('scroll', window.scrollY);
});

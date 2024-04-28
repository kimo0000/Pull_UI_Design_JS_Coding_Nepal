const items = document.querySelectorAll('.item');

items.forEach(item => {
    // item.classList.add('active');
    item.addEventListener('click', () => {
        items.forEach(el => {
            el.classList.add('active');
            el.classList.remove('show');
        })
        item.classList.add('show');
    })
})

document.addEventListener('click', (e) => {
    if(e.target.tagName != "LI") items.forEach(el => el.classList.remove('active', 'show'));
})
const navigationItems = document.querySelectorAll('nav > li > a');
navigationItems.forEach(box => {
    const navItemsIds = [...Array(navigationItems.length + 1).keys()];
    navItemsIds.shift();
    const id = box.getAttribute("id").slice(-1);
    box.addEventListener('click', function () {
        displayElement( `article div:nth-of-type(${id})`);
        hideElements(navItemsIds.filter(currentId => currentId != id));
    })
});

function displayElement(id) {
    let element = document.querySelector(id);
    element.style.display = 'block';
}

function hideElements(ids) {
    ids.forEach(id => {
        console.log('test')
        document.querySelector(`article div:nth-of-type(${id})`).style.display = 'none';
    })
}

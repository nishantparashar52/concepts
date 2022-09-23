const search = document.getElementById('search');

search.addEventListener('keyup', () => {
    searchText(search.value.toLowerCase().trim());
})
function searchText(text) {
    document.querySelectorAll('.tile').forEach(item => {
        const attr = item.getAttribute('data-name');
        if(attr.toLowerCase().trim().indexOf(text) > -1 && text.length > 0) {
            item.classList.add('active');
        } else item.classList.remove('active');
    })
}
document.querySelector('.shortcuts').addEventListener('click', (e) => {
    e.preventDefault();
    const val = e.target.innerHTML.toLowerCase().trim();
    searchText(val)
    search.value = val;
})
fetch('./data.json')
.then(res => res.json())
.then(data => {
    data.forEach(item => {
    const {title, image} = item;
    const parentContainer = document.createElement('div');
    parentContainer.setAttribute('data-name', title);
    parentContainer.className = 'tile';

    const imageDiv = document.createElement('div');
    imageDiv.classList.add("image");
    parentContainer.append(imageDiv);

    const img = document.createElement('img');
    img.src = image;
    parentContainer.append(img);
    // div.append()
    // div.innerHTML = title;
    parentContainer.append(imageDiv);
    // tile.append(parentContainer);
    document.getElementById('container').append(parentContainer);
    // html += `<div data-name=${title} class="tile">
    // <div class="image"><img src=${image}></div>${title}</div>`;
    });
    
});

//fetch()를 이용해 데이터를 받아온 다음 받아온 데이터가 성공적이면 json으로 변환하고
//json안에 있는 items를 리턴함.
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json()) //fetch()는 데이터를 성공적으로 받아오면 response라는 오브젝트를 전달해줌.
    .then(json => json.items);
}

//받아온 items로 리스트를 업데이트함 (innerHTML로 html을 container에 넣어줌)
function displayItems(items) {
    const container = document.querySelector('.items')
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// HTML li를 만듬 받아온 item으로 
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}large</span>
    </li>
    `;
}

//main
loadItems()
  .then(items => {
      displayItems(items);
  })
  .catch(console.log)

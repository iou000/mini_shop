
//fetch()를 이용해 데이터를 받아온 다음 받아온 데이터가 성공적이면 json으로 변환하고
//json안에 있는 items를 리턴함.
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json()) //fetch()는 데이터를 성공적으로 받아오면 response라는 오브젝트를 전달해줌.
    .then(json => console.log(json.items));
}

loadItems()
  .then(items => {
      console.log(items);
  })
  .catch(console.log)

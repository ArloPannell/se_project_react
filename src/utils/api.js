// Notes:
// json-server --watch db.json --id _id --port 3001
// https://i.ebayimg.com/images/g/LiIAAOSwjepjFJy3/s-l1600.webp
// https://www.dudeme.in/cdn/shop/products/While-Alive-eat-sleep-BLACK.jpg?v=1661945011&width=600
// https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXMmSdvIuDZB94USwkWXJQSr6jZknn5gr_9PybqAoTUetoFbwL_RxcZPRAJIQZLvORsfGVA9Ys11KFeD4ZQDVMDH76GYmYChYITdzSxZxqoPtMo2keHqVi

const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  //   return GET`${baseUrl}/items`;
  return fetch(`${baseUrl}/items`).then(_checkResponse);
}

function postItem(garmetData) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(garmetData),
  }).then(_checkResponse);
}

function deleteItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: baseHeaders,
  }).then(_checkResponse);
}

export { getItems, postItem, deleteItem };

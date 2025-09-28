// Notes:
// json-server --watch db.json --id _id --port 3001
// https://i.ebayimg.com/images/g/LiIAAOSwjepjFJy3/s-l1600.webp
// https://www.dudeme.in/cdn/shop/products/While-Alive-eat-sleep-BLACK.jpg?v=1661945011&width=600

const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

function _checkResponse(res) {
  return res.ok ? res.json() : console.error;
}

function getItems() {
  //   return GET`${baseUrl}/items`;
  return fetch(`${baseUrl}/items`).then(_checkResponse);
}

function postItem(_id, name, weather, link) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(_id, name, weather, link),
  }).then(_checkResponse);
}

function deleteItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: baseHeaders,
  }).then(_checkResponse);
}

export { getItems, postItem, deleteItem };

import { checkRes } from "./functions.js";

const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkRes);
}

function postItem(garmetData) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify(garmetData),
  }).then(checkRes);
}

function deleteItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: baseHeaders,
  }).then(checkRes);
}

export { getItems, postItem, deleteItem };

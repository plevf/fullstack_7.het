const promise = fetch("https://api.siposm.hu/getDevelopers")
const developers = promise.then(response => response.json)

const table_element = document.createElement("table")
const table_target = document.querySelector("#table-target")

table_target.appendChild(table_element)
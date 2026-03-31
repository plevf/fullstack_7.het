const promise = fetch("https://api.siposm.hu/getDevelopers")
promise.then(response => response.json().then(table_data =>{

}
));

const table_element = document.createElement("table")
const table_target = document.querySelector("#table-target")

table_target.appendChild(table_element)

const table_head = document.createElement("thead")
table_element.appendChild(table_head)

for (const developer of developers) {
    const table_row_element = document.createElement("tr")
    for (const property in developer) {
        if (!Object.hasOwn(developer, property)) continue;
        
        const property_value = developer[property];
        
        if(property === )
    }
}
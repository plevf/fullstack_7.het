const promise = fetch("https://api.siposm.hu/getDevelopers")
promise.then(response => response.json().then(table_data =>{

    for (const developer of table_data) {
        const table_row_element = document.createElement("tr")
        for (const property in developer) {
            if (!Object.hasOwn(developer, property)) continue;
            const property_value = developer[property];
            const table_divider_element = document.createElement("td")
            
            if (property === "name") {
                table_divider_element.append(property_value)
            }
            if(property === "email"){
                table_divider_element.append(property_value)
            }
            if (property === "age") {
                table_divider_element.append(property_value)
            }
            if (property === "salary") {
                table_divider_element.append(property_value)
            }
            table_row_element.appendChild(table_divider_element)
        }
        const table_element = document.querySelector("table")
        table_element.appendChild(table_row_element)
    }
}
));
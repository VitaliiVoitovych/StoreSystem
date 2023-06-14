async function addToCart(id) {
    const count = parseInt(document.getElementById("countInput").value);
    const response = await fetch(`/api/cart/add/${id}-${count}`, {
        method: "POST",
        headers: { "Accept" : "application/json" }
    });
    if (response.ok != true){
        const error = await response.json();
        console.log(error);
    }
}

function rowTable(product) {
    const tr = getProductInfo(product);

    const countInput = createDefaultNumberInput();

    const button = createDefaultButton("To Cart");
    button.addEventListener("click", async() => await addToCart(product.id));

    const div = document.createElement("div");
    div.style.display = "flex";
    div.append(countInput);
    div.append(button);

    tr.append(createTd(div));

    return tr;
}


getProducts(rowTable);
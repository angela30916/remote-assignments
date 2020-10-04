function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);
            callback(products);
        };
    }
    xhr.open('GET', src);
    xhr.send();
}

function render(data) {
    for (let i = 0; i < data.length; i++) {
        // Create "div" for products
        let color = ["lightsalmon", "gray", "lightskyblue"];
        let div = document.createElement('div');
        div.setAttribute('id',`product${i}`);
        document.getElementsByClassName('products')[0].appendChild(div);
        document.getElementById(`product${i}`).style.background = `${color[i]}`;

        // Create "content" for each product
        for (let j = 0; j < 3; j++) {
            let tag = ["h2", "h3", "p"];
            let key = ["name", "price", "description"];
            let node = document.createElement(tag[j]);
            let content = document.createTextNode(data[i][key[j]]);
            node.appendChild(content);
            document.getElementById(`product${i}`).appendChild(node);
        };
    };
}
      
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
});
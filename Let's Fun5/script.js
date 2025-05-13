function init() {
    const title = document.getElementById("postTitle");

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Sempre entre parenteses pois é uma função. json()
        .then(posts => {
            posts.forEach(post => {
                const listItem = document.createElement("li");
                listItem.textContent = post.title;
                title.appendChild(listItem); // Não use aspas aqui
            });
        })
}

document.addEventListener("DOMContentLoaded", init);

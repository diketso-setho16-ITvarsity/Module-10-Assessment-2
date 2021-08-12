var id = getID();

//Get Recipe

function getRecipe(){
    var rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
    var fullPath = rootPath + "get-recipes/?id=" + id;

    fetch(fullPath)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            document.getElementById("back-link").href = "list-recipes.html?category=" + data[0].category;
            var output = "";
            
           output += 
           `
                <img src="${rootPath}uploads/${data[0].image}" />
                <h1>${data[0].title}</h1>
                <div class="recipe-details-ingredients">
                    <h2>ingredients</h2>
                    <ul>
                        ${data[0].ingredients}
                    </ul>
                </div>
                <div class="recipe-details-steps">
                    <h2>Method</h2>
                    <ol>
                        ${data[0].method}
                    </ol>
                </div>
           `;
           document.getElementById("output").innerHTML = output;
        })
}

//Get ID for show recipe

console.log(id)


function getID(){
    var url = window.location.href;
    var pos = url.search("=");
    var id = url.slice(pos + 1);

    return id;
}


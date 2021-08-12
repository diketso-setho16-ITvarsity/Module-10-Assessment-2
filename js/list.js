var category = getCategory();

function getRecipeList(){
    var rootPath = "https://mysite.itvarsity.org/api/recipe-book/"

    var fullPath = rootPath + "get-recipes/?category=" + category;

    fetch(fullPath)
        .then(function(response){
            return response.json();

    })
        .then(function(data){

            var output = ""
            for (let i = 0; i < data.length; i++) {
                output +=   `
                                <a href="show-recipe.html?id=${data[i].id}">
                                    <div class="meals-list-item">
                                        <h1>
                                            ${data[i].title}
                                            <i class="fas fa-chevron-circle-right"></i>
                                        </h1>
                                        <p>${data[i].description}</p>
                                    </div>
                                </a>
                            `              
            }
            document.getElementById("output").innerHTML = output;
    })
}

//get Category
function getCategory(){
    var url = window.location.href;
    var pos = url.search("=")
    var category = url.slice(pos+1);

    return category;
}


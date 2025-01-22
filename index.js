//side navbar
var sidenav= document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click" ,function(){
    sidenav.style.right="-50%"
})

// Search functionality
var productcontainer = document.getElementById("productcontainer"); // Fixed typo
var search = document.getElementById("search");
var products = document.querySelectorAll("#productcontainer > div"); // Use a more specific selector

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < products.length; count++) {
        var productnameElement = products[count].querySelector("h1");

        // If no h1 is found, productname will be an empty string
        var productname = productnameElement ? productnameElement.textContent : "";

        // Compare entered value with product name (case-insensitive)
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            // Hide the product if it doesn't match
            products[count].style.display = "none";
        } else {
            // Show the product if it matches
            products[count].style.display = "block";
        }
    }
});

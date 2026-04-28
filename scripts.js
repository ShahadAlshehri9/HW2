
window.onload = function() {


    if (document.title.includes("Home")) {
        var siteFooter = document.querySelector("footer");
        var newParagraph = document.createElement("p");
        var rightNow = new Date();
        var message = document.createTextNode("Page loaded on: " + rightNow);

        newParagraph.appendChild(message);
        siteFooter.appendChild(newParagraph);
    }


    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.onsubmit = function(event) {
            var nameField = document.getElementById("name").value;
            var emailField = document.getElementById("email").value;

            if (nameField === "" || emailField === "") {
                alert("Please fill out all required fields.");
                event.preventDefault(); // Stops the form from sending
            }
        };
    }


    var blockquote = document.querySelector("blockquote");
    if (blockquote) {
        blockquote.addEventListener("mouseover", function() {
            blockquote.style.backgroundColor = "#d3d3d3";
            blockquote.style.fontStyle = "normal";
        });

        blockquote.addEventListener("mouseout", function() {
            blockquote.style.backgroundColor = "whitesmoke";
            blockquote.style.fontStyle = "italic";
        });
    }
};


function toggleDescription(buttonElement) {
    var description = buttonElement.parentNode.querySelector(".project-desc");

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
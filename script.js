$("#themeBtn").click(function () {

    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
        $("#themeBtn").text("Light Mode");
    } else {
        $("#themeBtn").text("Dark Mode");
    }

});


// 2. Project Filtering
$(".filter-btn").click(function () {

    // Get selected category
    let category = $(this).attr("data-filter");

    // Change button colors
    $(".filter-btn")
        .removeClass("btn-primary")
        .addClass("btn-outline-primary");

    $(this)
        .removeClass("btn-outline-primary")
        .addClass("btn-primary");

    // Show and hide projects
    if (category == "all") {

        $(".project-item").show();

    } else {

        $(".project-item").hide();

        $('.project-item[data-category="' + category + '"]').show();

    }

});


// 3. Project Details Modal
$(".details-btn").click(function () {

    // Get project information
    let title = $(this).attr("data-title");
    let description = $(this).attr("data-description");

    // Display project information
    $("#modalTitle").text(title);
    $("#modalDescription").text(description);

    // Open Modal
    $("#projectModal").modal("show");

});


// 4. Real-Time Form Validation

// Name Validation
$("#name").on("input", function () {

    let name = $(this).val().trim();

    if (name == "") {

        $("#nameError").text("Name is required.");

    } else if (name.length < 3) {

        $("#nameError").text("Name must be at least 3 characters.");

    } else {

        $("#nameError").text("");

    }

});


// Email Validation
$("#email").on("input", function () {

    let email = $(this).val().trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {

        $("#emailError").text("Email is required.");

    } else if (!emailPattern.test(email)) {

        $("#emailError").text("Please enter a valid email.");

    } else {

        $("#emailError").text("");

    }

});


// Message Validation
$("#message").on("input", function () {

    let message = $(this).val().trim();

    if (message == "") {

        $("#messageError").text("Message is required.");

    } else if (message.length < 10) {

        $("#messageError").text("Message must be at least 10 characters.");

    } else {

        $("#messageError").text("");

    }

});


// 5. Contact Form Submission
$("#contactForm").submit(function (event) {

    // Prevent page refresh
    event.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check all fields
    if (
        name.length >= 3 &&
        emailPattern.test(email) &&
        message.length >= 10
    ) {

        $("#successMessage").text("Your message is valid!");

        // Clear form
        $("#contactForm")[0].reset();

        // Clear error messages
        $("#nameError").text("");
        $("#emailError").text("");
        $("#messageError").text("");

    } else {

        $("#successMessage").text("");

        // Show errors if fields are invalid
        $("#name").trigger("input");
        $("#email").trigger("input");
        $("#message").trigger("input");

    }

})
// What we do section  on mouse click
$(document).ready(function () {
    // design toggle
    $('#design1').click(function () {
        $('#design-par').toggle();
        $('#design1').toggle();
    });

    $("#design-par").click(function () {
        $("#design-par").toggle();
        $("#design1").toggle();
    });

    // Development-toggle

    $('#development1').click(function () {
        $('#development-par').toggle();
        $('#development1').toggle();
    });

    $("#development-par").click(function () {
        $("#development-par").toggle();
        $("#development1").toggle();
    });

    // product management toggle
    $('#product').click(function () {
        $('#product-par').toggle();
        $('#product').toggle();
    });

    $("#product-par").click(function () {
        $('#product-par').toggle();
        $('#product').toggle();
    });


    function validate() {
        let userName = document.getElementById('name');
        let userEmail = document.getElementById('email');
        let query = document.getElementById('user-query');

        if (userName.value && userEmail.value == null || userName.value && userEmail.value == "" ||
            userName.value.length == 0 || userEmail.value.length == 0) {
            alert("UserName  and email cannot be empty")
            return false;
        } else {
            // alert('Good to go')
        }
        return true;

    }



    let btn = document.getElementById('submit');
    btn.addEventListener('click', (event) => {
        event.preventDefault()

        validate()





    })
});

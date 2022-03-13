// What we do section  on mouse click
$(document).ready(function(){
    // design toggle
    $('#design1').click(function(){
        $('#design-par').toggle();
        $('#design1').toggle();
    });

    $("#design-par").click(function() {
        $("#design-par").toggle();
        $("#design1").toggle();
    });

        // Development-toggle

    $('#development1').click(function(){
        $('#development-par').toggle();
        $('#development1').toggle();
    });

    $("#development-par").click(function() {
        $("#development-par").toggle();
        $("#development1").toggle();
    });

    // product management toggle
    $('#product').click(function(){
        $('#product-par').toggle();
        $('#product').toggle();
    });

    $("#product-par").click(function() {
        $("#product-par").toggle();
        $("#product").toggle();
    });
})

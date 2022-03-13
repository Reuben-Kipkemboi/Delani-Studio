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

    //the hover effect on portfolio images

    $('#portfolio-img1').mouseover(function () {
        $('#img-hover1').show()
    })
    $('#portfolio-img1').mouseout(function () {
        $('#img-hover1').hide()
    })

    $('#portfolio-img2').mouseover(function () {
        $('#img-hover2').show()
    })
    $('#portfolio-img2').mouseout(function () {
        $('#img-hover2').hide()
    })

    $('#portfolio-img3').mouseover(function () {
        $('#img-hover3').show()
    })
    $('#portfolio-img3').mouseout(function () {
        $('#img-hover3').hide()
    })

    $('#portfolio-img4').mouseover(function () {
        $('#img-hover4').show()
    })
    $('#portfolio-img4').mouseout(function () {
        $('#img-hover4').hide()
    })

    $('#portfolio-img5').mouseover(function () {
        $('#img-hover5').show()
    })
    $('#portfolio-img5').mouseout(function () {
        $('#img-hover5').hide()
    })
    $('#portfolio-img6').mouseover(function () {
        $('#img-hover6').show()
    })
    $('#portfolio-img6').mouseout(function () {
        $('#img-hover6').hide()
    })

    $('#portfolio-img7').mouseover(function () {
        $('#img-hover7').show()
    })
    $('#portfolio-img7').mouseout(function () {
        $('#img-hover7').hide()
    })

    $('#portfolio-img8').mouseover(function () {
        $('#img-hover8').show()
    })
    $('#portfolio-img8').mouseout(function () {
        $('#img-hover8').hide()
    })


    // form validation .........................................................
    function validate() {
        let userName = document.getElementById('name');
        let userEmail = document.getElementById('email');
        let query = document.getElementById('user-query');

        if (userName.value && userEmail.value == null || userName.value && userEmail.value == "" ||
            userName.value.length == 0 || userEmail.value.length == 0) {
            alert("UserName  and email cannot be empty")
            return false;
        } else {}
        return true;

    }
    // Business Logic..........................................................
    function submitQuery() {
        let userName = document.getElementById('name').value;
        let userEmail = document.getElementById('email');
        let query = document.getElementById('user-query');
        if (userName) {
            alert("Hello" + " " + userName + " " + "we have received your message.Thankyou for reaching out to us");
        } else {
            ('kindly check the format of email or your name');
        }
    }
    // Event listener when the user clicks the submit button.
    let btn = document.getElementById('submit');
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        validate();
        submitQuery();
    })
});

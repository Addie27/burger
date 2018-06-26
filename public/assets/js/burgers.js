$(function () {

  $(".submit").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerInput").val(),
      devoured: 0
    }
    console.log(newBurger);

    $.post("/create", newBurger, function (data) {

      location.reload();
    })

  });

  $(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var updateDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/update" + id, {
      type: "PUT",
      data: updateDevoured
    }).then(function (data) {


    });
    location.reload();

  });

});

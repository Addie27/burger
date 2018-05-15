// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".submit").on("click", function(event) {
      event.preventDefault();
      var newBurger = {
        burger_name: $("#burgerInput").val(),
        devoured: 0
      }
      console.log(newBurger);
  
      $.post("/create", newBurger, function(data) {
          // Reload the page to get the updated list
          location.reload();
        })
      
    });
  
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured"); 
  
      var updateDevoured = {
        devoured : 1
      };
      
      // Send the PUT request.
      $.ajax("/update" + id, {
        type: "PUT",
        data: updateDevoured}).then( function(data) { 
          console.log(data);
         
          // Reload the page to get the updated list
          location.reload();
        
      });
    });
  
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  
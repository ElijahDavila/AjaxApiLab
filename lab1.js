$("#button1").click(function(){
  $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
    posts.forEach(function(post){
    var list = $('li.list1');    
    var li = $('<li></li>');
        li.text(post);
        list.append(li);
    });
})
});

// //Get reference to the list element
// var list = $('ul#userList');

// //Make a GET request for the items to render
// $.get('http://jsonplaceholder.typicode.com/users', function(users){
// 	//Iterate over the response, adding elements to DOM
// 	users.forEach(function(user){
// 		var li = $('<li></li>');
// 		li.text(user.name);
// 		list.append(li);
// 	})
// })


//clear button functions

$("#clear1").on("click", function() {
    $("li.list1").remove();
  });

$("#clear2").on("click", function() {
    $("li.list2").remove();
  });

$("#clear3").on("click", function() {
    $("li.list3").remove();
  });

$("#clear4").on("click", function() {
    $("li.list4").remove();
  });

$("#clear5").on("click", function() {
    $("li.list5").remove();
  });

$("#clear6").on("click", function() {
    $("li.list6").remove();
  });

$("#clear7").on("click", function() {
    $("li.list7").remove();
  });

$("#clear8").on("click", function() {
    $("li.list8").remove();
  });

$("#clear9").on("click", function() {
    $("li.list9").remove();
  });

$("#clear10").on("click", function() {
    $("li.list10").remove();
  });

$("#clear11").on("click", function() {
    $("li.list11").remove();
  });

$("#clear12").on("click", function() {
    $("li.list12").remove();
  });

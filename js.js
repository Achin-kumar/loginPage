
$(document).ready(function () {
    $('#btn').click(function (e) {
      var dataString ={
         username : $("#username").val(),
         password : $("#password").val(),
      }
       
        if (username == '' || password == '') {
            alert("Please Fill All Fields");
        } else {

            $.ajax({
                url: 'https://bc580197.ngrok.io/api/login',
                type: 'POST',
                data: dataString,
                success: function () {
                    alert('Submitted sucessfully');
                },

                error: function () {
                    alert('Incorrect Username or Password');
                },
            });
        }
        e.preventDefault();
    });
});


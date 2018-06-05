
$(document).ready(function () {
    $('#form').submit(function (e) {
        var dataString = {
            username: $("#username").val(),
            password: $("#password").val(),
        }

        if (username == '' || password == '') {
            alert("Please Fill All Fields");
        } else {

            $.ajax({
                url: 'http://c0803ecb.ngrok.io/api/login',
                type: 'POST',
                data: dataString,
                success: function (data, status, xhr) {
                    alert(data.msg);
                },

                error: function (data, status, xhr) {
                     var msg = '';
                     msg += "Error code :" + data.status + "\n " + data.responseJSON.msg;
                  alert(msg);
                  
                },
            });
        }
        e.preventDefault();
    });
});


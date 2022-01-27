
function signup() {
   var firstname = document.getElementById('firstname').value;
   var lastname = document.getElementById('lastname').value;
   var username =firstname + lastname;
    
   document.getElementById('Username').value = username;
    
   var email = username + (Math.random() + 1).toString(36).substring(7) + '@gmail.com';

   document.getElementById('email').value = email;

   var password = firstname;

   document.getElementById('password').value = password;
    
}
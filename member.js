//Affatato JS for Membership validation


function validateForm() {
			var name = document.forms["myForm"]["name"].value;
			var email = document.forms["myForm"]["email"].value;
			var password = document.forms["myForm"]["password"].value;
			var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
			
			if (name == "") {
				alert("Name must be filled out");
				return false;
			}
			if (email == "") {
				alert("Email must be filled out");
				return false;
			}
			if (password == "") {
				alert("Password must be filled out");
				return false;
			}
			if (confirmPassword == "") {
				alert("Confirm Password must be filled out");
				return false;
			}
			if (password != confirmPassword) {
				alert("Passwords do not match");
				return false;
			}
			return true;
		}
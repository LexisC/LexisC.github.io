<script>
    validate = () => {
        let fullName = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phone').value;
        let zipCode = document.getElementById('zip').value;
        let nameRGEX = /^[A-Za-z]+$/;
        let emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        let zipRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
        let nameResult = nameRGEX.test(fullName);
        let emailResult = emailRGEX.test(email);
        let phoneResult = phoneRGEX.test(phoneNumber);
        let zipResult = zipRGEX.test(zipCode);

        if(nameResult == false)
        {
            alert('Please enter a valid name');
            return false;
        }

        if(emailResult == false)
        {
            alert('Please enter a valid email');
            return false;
        }

        if(phoneResult == false)
        {
            alert('Please enter a valid phone number');
            return false;
        }
        
        if(zipResult == false)
        {
            alert('Please enter a valid postal number');
            return false;
        } else {
            return true;
        }
    };
</script>
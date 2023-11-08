document.addEventListener('DOMContentLoaded', function () {
   
    const swiper = new Swiper('.swiper-container', {
        speed: 600,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false 
    });

    
    jQuery.validator.addMethod('phonePattern', function (value, element) {
        return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
    }, 'Please enter a valid US phone number (e.g., 123-456-7890)');

    jQuery.validator.addMethod('ccPattern', function (value, element) {
        return this.optional(element) || /^\d{10}$/.test(value);
    }, 'Please enter a valid 10-digit credit card number');

    jQuery.validator.addMethod('cvvPattern', function (value, element) {
        return this.optional(element) || /^\d{3}$/.test(value);
    }, 'Please enter a valid 3-digit CVV');

    
    jQuery('#personalInfoForm').validate({
        rules: {
            name: 'required',
            dob: 'required',
            gender: 'required'
        },
        messages: {
            name: 'Please enter your name',
            dob: 'Please enter your date of birth',
            gender: 'Please select your gender'
        },
        submitHandler: function (form) {
            swiper.slideNext();
        }
    });

    // Contact Information Validation
    jQuery('#contactInfoForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phonePattern: true
            },
            address: 'required'
        },
        messages: {
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number in the format: 123-456-7890',
            address: 'Please enter your address'
        },
        submitHandler: function (form) {
            swiper.slideNext();
        }
    });

    // Payment Information Validation
    jQuery('#paymentInfoForm').validate({
        rules: {
            ccNumber: {
                required: true,
                ccPattern: true
            },
            expDate: 'required',
            cvv: {
                required: true,
                cvvPattern: true
            }
        },
        messages: {
            ccNumber: 'Please enter a valid 10-digit credit card number',
            expDate: 'Please enter your card\'s expiration date',
            cvv: 'Please enter a valid 3-digit CVV'
        },
        submitHandler: function (form) {
            alert('Form submitted! Thank you for your payment.');
            swiper.slideNext();
        }
    });
});

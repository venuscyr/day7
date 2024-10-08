document.addEventListener('DOMContentLoaded', function() {
    
    const plusButtons = document.querySelectorAll('.plus-btn');
    const minusButtons = document.querySelectorAll('.minus-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const heartButtons = document.querySelectorAll('.heart-btn');

    
    plusButtons.forEach((button) => {
        button.addEventListener('click', function() {
            let quantityInput = this.nextElementSibling;
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    });

    
    minusButtons.forEach((button) => {
        button.addEventListener('click', function() {
            let quantityInput = this.previousElementSibling;
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    });

    
    deleteButtons.forEach((button) => {
        button.addEventListener('click', function() {
            let item = this.closest('.item');
            item.remove();
        });
    });

    
    heartButtons.forEach((button) => {
        button.addEventListener('click', function() {
            this.classList.toggle('is-active');
        });
    });
});

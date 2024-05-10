  var cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    renderCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}
var selectedServices = [];

// Add service to selectedServices array when the user clicks the "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click', function() {
var serviceName = this.dataset.serviceName;
selectedServices.push(serviceName);
renderSelectedServices();
});
});

// Render selected services
function renderSelectedServices() {
var selectedServicesHTML = selectedServices.map(service => `<li>${service}</li>`).join('');
document.getElementById('selectedServices').innerHTML = selectedServicesHTML;
}
function renderCart() {
    var cartHTML = '';
    var totalItems = cartItems.length;
    var paymentDetails = totalItems > 0 ? 'To Pay' : 'On Visit';

    for (var i = 0; i < totalItems; i++) {
        cartHTML += 
                        '<div class="info">' +
                            '<h6 class="heading">' + cartItems[i] + '</h6>' +
                            '<p class="price-info"><i class="fa fa-inr"></i> On Visit</p>' +
                        '</div>' +
                        '<button class="remove-button" onclick="removeFromCart(' + i + ')"><i class="fas fa-minus"></i></button>' +
                    '</div>' +
                    '<hr>';
    }

    $('#cart-items').html(cartHTML);
    $('#total-items').text(totalItems);
    $('#payment-details').text(paymentDetails);

    if (totalItems > 0) {
        $('.total-count, .payment-details').show();
    } else {
        $('.total-count, .payment-details').hide();
    }

}

function bookItems() {
// Redirect the user to the booking page and pass the selected items
var selectedItems = cartItems.join(',');
window.location.href = 'booking.html?items=' + selectedItems;
}

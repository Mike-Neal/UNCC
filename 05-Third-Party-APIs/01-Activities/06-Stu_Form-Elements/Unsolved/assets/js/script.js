var shoppingFormEl = $('#shopping-form');
var shoppingItemEl = $('#shopping-item');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
    event.preventDefault();
}

var shoppingItem = $('input[name="shopping-item]').val();

if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
}

shoppingListEl.append('<li>' + shoppingItem +'<li>');

$('input[name="shopping-input"]').val('');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission


var projectFormEl = $('#Project-Form');
var projectNameEl = $('#Project-Name');
var projectTypeEl = $('#Project-Type');
var projectDueDateEl = $('#Project-Due-Date');

$( "#dataTable tbody tr" ).on( "click", function() {
    console.log( $( this ).text() );
  });

$( "#target" ).on( "submit", function( event ) {
    alert( "Handler for `submit` called." );
    event.preventDefault();
  });

$("").on("submit", function(event) {
    localStorage.setItem('itemKey', JSON.stringify(yourObject));
var item = JSON.parse(localStorage.getItem('itemKey'));
})


// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var rootEl = $('#root');
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var = authorEl $('<p>');
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorEl.text("~Carol Dweck");
// TODO: Add the class `plain` to the author element
authorEl.addClass('plain');
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var quoteEl = $('<h1>');
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteEl.text(
    'Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.'
  );
// TODO: Apply the class `fancy` to the quote element
quoteEl.attr('class', 'fancy');
// TODO: Append the author element to the quote element
authorEl.append(author);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(quoteEl);
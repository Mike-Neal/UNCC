// TODO: Add a comment describing what kind of function this is
//this function is a constructor used to insert comments 
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//prototype adds a comment to any blogpost 
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
//comments input by the user will be displayed in the console
console.log(post.comments);

// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
  this.authorName = authorName;
  this.text = text;
  this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }  ForumItem.call(authorName, createdOn);

  addComment(comment) {
    this.comments.push(comment);
  }
}
class BlogPost extends ForumItem {//extends is used to identify the parent
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Log both newly created BlogPost and Comment to the console.

const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('Author Length', () =>{
    //Arrange - Setup
    const err = new Error('Author must be at least 2 characters long')
    //Act - Do
    const cb = () => new BlogPost('E');
    //Assert - Verify
  expect(cb).toThrowError(err);
});
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});

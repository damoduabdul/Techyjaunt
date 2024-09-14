const Books = [
        {author:"Musa Mohammed", 
          title:"World Politics", 
          isbn:"978-3-16", 
          available:true }, 
        {author:"Joseph Whyte", 
          title:"The Rules of the Jungle", 
          isbn:"335-1-23", 
          available:true }, 
        {author:"Uche Madu", 
          title:"Economic History", 
          isbn:"876-6-19", 
          available:true }, 
        {author:"Linus Agboola", 
          title:"Nigeria Shall be Great", 
          isbn:"789-4-99", 
          available:true }, 
        
         ];
  function findBook(title) {
          return Books.find((book) => book.title === title)};

  
class Book {
  #avail
  constructor(author, title, isbn, available) {
    this.author = author;
    this.title = title;
    this.isbn = isbn;
    this.available = available;
  }; 
  
  borrowBook() {
  if (findBook(this.title)) {
    console.log("book found");
    Books.map(book => {
      if (book.title === this.title) {
        return { ...book, available : false };}
      else {
          return book;
        }
       });

  }else{
    console.log("book not found");
  }
  //   const newBooks = Books.map(obj => {
  //     if (obj.title === this.title) {
  //         return { ...obj, title: obj.title };
  //     }
  //     return obj;
  // });

//  else {
//     console.log("book is not available");
//   }
    
    // this.available === false;}
  
    // else{console.log("book not found");}
  }
}
;
   
const boook = new Book("Linus Agboola", "Nigeria Shall be Great", "789-4-99", true );
console.log(boook.borrowBook());
// console.log(Books.available);








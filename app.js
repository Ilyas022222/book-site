//  books
const books = [
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    year: 2005,
    genre: ["fantasy", "mystery"],
    rating: 4.5,
    description: "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling. It is the sixth book in the Harry Potter series and follows Harry's sixth year at Hogwarts School of Witchcraft and Wizardry.",
    cover: "https://m.media-amazon.com/images/I/61sXBXmAWML._AC_UF1000,1000_QL80_.jpg",
    language: "english",
    price: 20.99,
    publisher: "Scholastic Paperbacks",
    link: "https://www.amazon.com/dp/0439785960"
  },
  {
    title: "National Geographic Science of Everything: How Things Work in Our World",
    author: "National Geographic (Author), David Pogue (Foreword)",
    year: 2014,
    genre: ["science", "technology", "non-fiction"],
    rating: 4.7,
    description: "National Geographic answers all the questions about how things work--the science, technology, biology, chemistry, physics, and mechanics--in an indispensable book that reveals the science behind virtually everything.",
    cover: "https://m.media-amazon.com/images/I/710Xm1RwuHL._SL1200_.jpg",
    language: "english",
    price: 25.99,
    publisher: "National Geographic",
    link: "https://www.amazon.com/dp/1426211686"
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    year: 1603,
    genre: ["poems","fiction"],
    rating: 4.4,
    description: "A new pocket edition of William Shakespeare's classic tragic play The Tragedy of Hamlet, Prince of Denmark. Hamlet is a story of family and political intrigue, revenge, and madness.",
    cover: "https://m.media-amazon.com/images/I/51cjtXsg1eL._SY342_.jpg",
    language: "english",
    price: 7.99,
    publisher: "Independently Published",
    link: "https://www.amazon.co.uk/Hamlet-William-Shakespeare/dp/B09JJJ7234/ref=pd_vtp_h_pd_vtp_h_d_sccl_5/259-6327440-0924111?pd_rd_w=8uaFC&content-id=amzn1.sym.27b8d297-93e8-4664-82f7-98afee526b43&pf_rd_p=27b8d297-93e8-4664-82f7-98afee526b43&pf_rd_r=GCRVRZYRHY51J4FMSJGJ&pd_rd_wg=ebkGJ&pd_rd_r=5b447172-b800-46e5-ac21-e7812148dc46&pd_rd_i=B09JJJ7234&psc=1"
  },
  {
    title: "The Hunger Games Complete Trilogy",
    author: "Suzanne Collins",
    year: 2008,
    genre: ["mystery", "fiction"],
    rating: 4.7,
    description: "Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games.",
    cover: "https://m.media-amazon.com/images/I/61YwJ0vQPVL._SL1500_.jpg",
    language: "english",
    price: 15.58,
    publisher: "Scholastic",
    link: "https://www.amazon.com/dp/0545670314"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: ["fantasy", "fiction", "mystery"],
    rating: 4.8,
    description: "The Hobbit is the unforgettable story of Bilbo, a peace-loving hobbit, who embarks on a strange and magical adventure.",
    cover: "https://m.media-amazon.com/images/I/81uEDUfKBZL._SY342_.jpg",
    language: "english",
    price: 8.27,
    publisher: "HarperCollins Children’s Books",
    link: "https://www.amazon.com/dp/054792822X"
  },
  {
    title: "12 Spanish Bedtime Stories for Kids",
    author: "Doodles & Safari",
    year: 2023,
    genre: ["educational", "fiction", "mystery"],
    rating: 4.1,
    description: "Experience the joy of bedtime through twelve unique tales written in both Spanish and English.",
    cover: "https://m.media-amazon.com/images/I/71PP5Dl4iyL._SY342_.jpg",
    language: ["english", "spanish"],
    price: 4.85,
    publisher: "Independently Published",
    link: "https://www.amazon.co.uk/Spanish-Bedtime-Stories-Kids-Collection/dp/B0C47LSG9G/ref=sr_1_3?crid=7CFTEUS426AK&dib=eyJ2IjoiMSJ9.DOIuvKuD0IhrfLBEEUtwWLA6pmvScZg77ZrRh6Dg7_AxyCAC8InTRnwaFVj6AgIngOhsTOvNU3wrKLPZCfdJtzPZ_YEhP97J4oGkcVwfpc7f8_-Xg0x4jlvkmShLdBQO4chKAxAuQGCDzFJrNomgF1Dazn870kYDkLO9GjrMiyNxAEuFOr5UZg7b6-c-udsWyzbdo6dH5e2WVofPqRjVUDLfpxFXjbQU263jrup8Yn0.Cp-tDauXVFrBh-OpmVJpsIF5QpOFFDy6_2SUYUMI3xA&dib_tag=se&keywords=12+Spanish+Bedtime+Stories+for+Kids&qid=1745871758&sprefix=12+spanish+bedtime+stories+for+kids%2Caps%2C67&sr=8-3"
  },
  {
    title: "Routledge Intensive Dutch Course",
    author: "Gerdi Quist",
    year: 2006,
    genre: ["educational", "non-fiction"],
    rating: 4.3,
    description: "This intensive foundation course in Dutch is designed for those with no previous knowledge of the language.",
    cover: "https://m.media-amazon.com/images/I/61VjVu23nCL._SY342_.jpg",
    language: "dutch",
    price: 47.99,
    publisher: "Routledge",
    link: "https://www.amazon.com/Routledge-Intensive-Course-Language-Courses/dp/0415261910/ref=sr_1_1?dib=eyJ2IjoiMSJ9.X2enr-b_8dw9Q6YibHWyKNIo-NiaA8Y8v7csredcwfs.s7XBR36pJzP8UZ7vEyeUA1xjRCYRELSr5BPS7zNbBnw&dib_tag=se&keywords=Routledge+Intensive+Dutch+Course&qid=1745871828&sr=8-1"
  },
  {
    title: "Easy Portuguese Phrase Book",
    author: "Lingo Mastery",
    year: 2021,
    genre: ["educational", "non-fiction"],
    rating: 4.2,
    description: "Over 1500 common phrases for everyday use and travel in Portuguese.",
    cover: "https://m.media-amazon.com/images/I/71tSHnOmGaS._SL1360_.jpg",
    language: "portuguese",
    price: 7.99,
    publisher: "Lingo Mastery",
    link: "https://www.amazon.com/Easy-Portuguese-Phrase-Book-Everyday/dp/1951949374/ref=sr_1_1?crid=29RIEPSEUHA0P&dib=eyJ2IjoiMSJ9.S8DHHAXcjdXvv4m6tC3CH_3rk_VptNxhsUaqIaIQnbCo0eXyCgKWWipu__OFTQICvo17BmhZabRl8VEooQCWKvg-sMT9gslPvSyk7CUFKG2NT3xk8oZ0k1sAy502PxQDsNviImDhsSzVIiS_FXsBgvlwNVpKIKGWvXJaJh5mfNkIkIoEQWe-XUoXYUYNhLWelJ3qAE-cguLnGzc_Jio2G7WTx9QEVYwpzA8OoVlbK74.i7zRnr2XlRxPu0KFnfXAwQBwc1crN89YLkqo-l9cDOM&dib_tag=se&keywords=Easy+Portuguese+Phrase+Book&qid=1745871909&sprefix=easy+portuguese+phrase+book%2Caps%2C198&sr=8-1"
  },
  {
    title: "French Short Stories: Nouvelles Francaises",
    author: "Richard Coward",
    year: 1999,
    genre: ["fiction", "novel", "mystery"],
    rating: 4.5,
    description: "Eight pieces of contemporary fiction in the original French and in English translation.",
    cover: "https://m.media-amazon.com/images/I/613GDlmp1dL._SL1200_.jpg",
    language: "french",
    price: 9.75,
    publisher: "Penguin",
    link: "https://www.amazon.com/Short-Stories-French-Penguin-Parallel/dp/0140265430/ref=sr_1_1?crid=11D3K3NFZUMP8&dib=eyJ2IjoiMSJ9.ukPU4XBe87ya9rTjNnCIlFKgGS3gIJltYyY3a1Qw5AB3sWicppUOef_MNxrohLfnCMKrAjgnkRpnN9tfHQ7J8NmyWkpLrDWU2HmKNkX0bJ8._nvhug7glC5sYVNuyFtDm04UYpmMQswzsPOVgBtqO9c&dib_tag=se&keywords=Short+Stories+in+French%3A+New+Penguin+Parallel+Text&qid=1745871947&s=books&sprefix=short+stories+in+french+new+penguin+parallel+text%2Cstripbooks-intl-ship%2C119&sr=1-1"
  },
  {
    title: "Home Before Dark",
    author: "Riley Sager",
    year: 2021,
    genre: ["horror", "mystery", "fiction"],
    rating: 4.2,
    description: "A clever, twisty, and altogether spine-chilling story.",
    cover: "https://m.media-amazon.com/images/I/81FjdjeZo3L._SY342_.jpg",
    language: "english",
    price: 6.35,
    publisher: "Hodder Paperbacks",
    link: "https://www.amazon.com/Home-Before-Dark-Riley-Sager/dp/1524745197/ref=sr_1_2?crid=3VTX69K4MLYOM&dib=eyJ2IjoiMSJ9.V8fw-YH309UttAmrRSK2wMEwUenXMeJUK-PqrYud-_nmkFdp9Ho1mZ7zTjijScrCaJ3TLjU5MY1Ot3SkzgLJhFtDUl_7Vw13Wb00ojckuE1wJj5VX4cb4FMLZr7M3xB2RwNXlaT98fN2L6OnoDwrZePU75eUuvj90a6tTm06y4QDfr5sojg1KJolKLg25JY0jCLTdGiBLTBnFe-rYg_Vvv_aPi5mqhtHSlIWycdEhuc28UYJD4_iJQ4SAWykJmWI2Kwv86CXMIOo7qu0ErLmHEgNuxWGTH9Tl_LLvjJQjv8.TUjK69eB5Ie47hDNR8Dw0ac7keGD8YEwZqPM5fD1-sw&dib_tag=se&keywords=Home+Before+Dark&qid=1745872025&sprefix=home+before+dark%2Caps%2C170&sr=8-2"
  }
];

// Load wishlist from local storage
wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(title) {
  if (!wishlist.includes(title)) {
    wishlist.push(title);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`"${title}" added to your wishlist!`);
    displayBooks(currentBooks);
  }
}
document.getElementById('viewWishlistBtn').addEventListener('click', function(e) {
  e.preventDefault();
  currentBooks = books.filter(book => wishlist.includes(book.title));
  displayBooks(currentBooks);
});


// Add event listener to open book link on click
document.addEventListener('click', function(e) {
  if (e.target.closest('.book')) {
    const bookTitle = e.target.closest('.book').querySelector('h2').textContent;
    const book = books.find(b => b.title === bookTitle);
    if (book && book.link) {
      window.open(book.link, '_blank');
    }
  }
});


function displayBooks(bookList) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  if (bookList.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No books found.';
    results.appendChild(noResults);
    return;
  }

  bookList.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';

    if (wishlist.includes(book.title)) {
      div.classList.add('wishlist');
    }

    // Book Cover
    const img = document.createElement('img');
    img.src = book.cover;
    img.alt = book.title;
    img.className = 'book-cover';
    div.appendChild(img);

    // Book Title
    const title = document.createElement('h2');
    title.textContent = book.title;
    div.appendChild(title);

    // Author
    const author = document.createElement('p');
    author.innerHTML = `<strong>Author:</strong> ${book.author}`;
    div.appendChild(author);

    // Price
    const price = document.createElement('p');
    price.innerHTML = `<strong>Price:</strong> £${book.price}`;
    div.appendChild(price);

    // Rating
    const rating = document.createElement('p');
    rating.innerHTML = `<strong>Rating:</strong> ${book.rating}`;
    div.appendChild(rating);

    // Publisher
    const publisher = document.createElement('p');
    publisher.innerHTML = `<strong>Publisher:</strong> ${book.publisher}`;
    div.appendChild(publisher);

    // Description
    const description = document.createElement('p');
    description.textContent = book.description;
    div.appendChild(description);

    // Wishlist Button
    const button = document.createElement('button');
    button.className = 'wishlist-btn';
    button.textContent = wishlist.includes(book.title) ? "In Wishlist" : "Add to Wishlist";
    button.addEventListener('click', () => addToWishlist(book.title));
    div.appendChild(button);

    // Append complete book card to results
    results.appendChild(div);
  });
}
// Function to add a book to the wishlist

/**
 * Adds a book title to the wishlist if it is not already included.
 * Displays an alert to confirm the addition and refreshes the book display UI.
 *
 * @param {string} title - The title of the book to add to the wishlist.
 */
function addToWishlist(title) {
  if (!wishlist.includes(title)) {
    wishlist.push(title);
    alert(`"${title}" added to your wishlist!`);
    displayBooks(currentBooks); // refresh UI
  }
}

function searchBooks(query) {
  return books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase())
  );
}

function filterBooks() {
  let result = [...books];

  const genre = document.getElementById('genre').value;
  const author = document.getElementById('author').value.trim().toLowerCase();
  const price = parseFloat(document.getElementById('price').value);
  const language = document.getElementById('language').value;
  const year = parseInt(document.getElementById('year').value);

  if (genre) {
    result = result.filter(book => book.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase()));
  }
  if (author) {
    result = result.filter(book => book.author.toLowerCase().includes(author));
  }
  if (!isNaN(price)) {
    result = result.filter(book => book.price <= price);
  }
  if (language) {
    result = result.filter(book => {
      if (Array.isArray(book.language)) return book.language.includes(language.toLowerCase());
      return book.language.toLowerCase() === language.toLowerCase();
    });
  }
  if (!isNaN(year)) {
    result = result.filter(book => book.year >= year);
  }

  return result;
}

let currentBooks = [...books];

// Event Listeners

// Search form
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  currentBooks = searchBooks(query);
  displayBooks(currentBooks);
});

// Filter form
document.getElementById('bookForm').addEventListener('submit', function(e) {
  e.preventDefault();
  currentBooks = filterBooks();
  displayBooks(currentBooks);
});

// Load all books initially
window.addEventListener('DOMContentLoaded', () => displayBooks(currentBooks));


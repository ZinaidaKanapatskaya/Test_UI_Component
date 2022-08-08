const books = [{
    id: "25843",
    name: "A Brief History of Time",
    description: `A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?
Told in language we all can understand, A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and “arrows of time,” of the big bang and a bigger God—where the possibilities are wondrous and unexpected. With exciting images and profound imagination, Stephen Hawking brings us closer to the ultimate secrets at the very heart of creation.`,
    authorId: "28",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/A1xkFZX5k-L.jpg"
}, {
    id: "1491",
    name: "War and Peace",
    description: `In Russia's struggle with Napoleon, Tolstoy saw a tragedy that involved all mankind. Greater than a historical chronicle, War and Peace is an affirmation of life itself, "a complete picture", as a contemporary reviewer put it, "of everything in which people find their happiness and greatness, their grief and humiliation". Tolstoy gave his personal approval to this translation, published here in a new single volume edition, which includes an introduction by Henry Gifford, and Tolstoy's important essay "Some Words about War and Peace".`,
    authorId: "1918",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91teiIZ5vwL.jpg"
}];

const authors = [{
    id: "28",
    firstName: "Stephen",
    lastName: "Hawking"
}, {
    id: "1918",
    firstName: "Leo",
    lastName: "Tolstoy"
}];

const votes = [
    { id: "1", bookId: "25843", userName: "Any user", rating: 5 },
    { id: "2", bookId: "25843", userName: "Any user", rating: 4 },
    { id: "3", bookId: "25843", userName: "Any user", rating: 5 },
    { id: "4", bookId: "25843", userName: "Any user", rating: 4 },
    { id: "5", bookId: "25843", userName: "Any user", rating: 5 },
    { id: "6", bookId: "25843", userName: "Any user", rating: 3 },
    { id: "7", bookId: "25843", userName: "Any user", rating: 5 },
    { id: "8", bookId: "1491", userName: "Any user", rating: 3 },
    { id: "9", bookId: "1491", userName: "Any user", rating: 5 },
    { id: "10", bookId: "1491", userName: "Any user", rating: 3 },
    { id: "11", bookId: "1491", userName: "Any user", rating: 4 },
    { id: "12", bookId: "1491", userName: "Any user", rating: 5 },
];

const comments = [
    { id: "1", bookId: "25843", userName: "Cheryl Young", dateTime: new Date().toISOString(), text: "For me, Hawking was the best astrophysicist of our time, and his books are a rich legacy of his mind!!!" },
    { id: "2", bookId: "25843", userName: "Glen Page", dateTime: new Date().toISOString(), text: "I have long wanted to buy and get acquainted with the insides of this book, so this moment has come. For a person who is not deeply versed in this topic, it will not be easy enough, although the author tried to express his thoughts in an accessible language. Before reading the work, I recommend that you familiarize yourself with the basic theories of physics, and it is even better to be deeply in the subject. This book is more suitable for people who know, rather than people who just want to get acquainted with the world of the universe, since the language is still used in a specific way, filled with terms and a concentrate of ideas." },
    { id: "3", bookId: "25843", userName: "Jake Gildon", dateTime: new Date().toISOString(), text: "This work was written by a great scientist, and this must be understood before buying. The book is not replete with formulas, but it has terms. Although, few people will buy a Hawking book without understanding the topic. In general, the book is wonderful, it explains a lot of incomprehensible things in the space world. It is worth taking a closer look at it if you are interested in astronomy, astrophysics and cosmology in general." },
    { id: "4", bookId: "25843", userName: "Ingram Barker", dateTime: new Date().toISOString(), text: "After reading this book, I began to live in a completely different world. Basically all the information in this book is astrophysics. It is also written in this book that despite his ailments, Stephen had many friends around the world." },
    { id: "5", bookId: "25843", userName: "Garrick Goodman", dateTime: new Date().toISOString(), text: "The book is satisfied with the print quality, the pages are quite dense, white, the letters are not erased, the cover is hard, it will be of interest to all Hawking fans." },
    { id: "6", bookId: "25843", userName: "Tasha Anderson", dateTime: new Date().toISOString(), text: "Very complex things are explained in a clear and understandable way. Entertaining physics is not for physicists" },
    { id: "7", bookId: "25843", userName: "Wynne Adams", dateTime: new Date().toISOString(), text: "Immortal Stephen Hawking. In his short book, the great scientist shows how the scientific model of the universe has developed from the time of Aristotle to the present day. The author sets himself a complex goal: combines various physical theories into one, collects all the pieces of the mosaic into a complete picture of the world. To do this, Hawking tries to reconcile quantum mechanics and Einstein's approximation of relativity. Despite the abundance of natural science terms, the book is saturated with religious and philosophical reasoning. For example, the author asks questions: how does theoretical physics work with the theory of the Divine origin of nature? How were the mechanisms of control of the Universe created? Was the Universe formed by chance or is it the work of the Creator? Unfortunately or fortunately, Hawking does not provide answers to these questions. He builds the foundation so that future generations can penetrate the secrets of the world around us. What is the book about anyway? In my opinion, every reader will find something of their own in it. Someone will be inspired by research and devote his life to science. Perhaps this book will help someone to rise with a knee and a subscriber to the World with different eyes. And someone will simply admire the versatility and beauty of life. This book is for everyone." },
    { id: "8", bookId: "1491", userName: "Ned Mckinney", dateTime: new Date().toISOString(), text: "Great book, must read! I advise everyone, but I did not understand anything." },
    { id: "9", bookId: "1491", userName: "Lara Walters", dateTime: new Date().toISOString(), text: "Congratulations to everyone who read to the end. It should be noted that it is towards the end of the book that Lev Nikolayevich reveals simple truths, and also helps to find answers to some life questions. It is very important in the work of the development of characters, their path to the formation of personality. The novel requires a deep analysis, since it is a description of the life of the Russian people, society and its metamorphosis under the influence of the war." },
    { id: "10", bookId: "1491", userName: "Eda Mccarthy", dateTime: new Date().toISOString(), text: "An amazing thing, it’s too early to study at school, you need to grow up" },
    { id: "11", bookId: "1491", userName: "Lulu Loxley", dateTime: new Date().toISOString(), text: "One of the greatest works of national classics!" },
    { id: "112", bookId: "1491", userName: "Isabella Franklin", dateTime: new Date().toISOString(), text: "" },
];

export { books, authors, votes, comments }
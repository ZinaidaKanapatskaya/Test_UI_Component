export type BookResponse = {
    id: string;
    name: string;
    description: string;
    authorId: string;
    imageUrl: string;
}

export type Book = BookResponse & {
    author: Author;
    votes: Array<Votes>;
    comments?: Array<Comments>;
}

export type Author = {
    id: string;
    firstName: string;
    lastName: string;
}

export type Votes = {
    id: string;
    bookId: string;
    userName: string;
    rating: number;
}

export type Comments = {
    id: string;
    bookId: string;
    userName: string;
    dateTime: string;
    text: string;
} 
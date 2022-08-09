import { books, authors, votes, comments } from "./data.js";
import { BookResponse, Author, Votes, Comments } from "@types";

export default class Store {
    getBooks (): Promise<Array<BookResponse>> {
        return Promise.resolve([...books]);
    }

    getBook (id: string): Promise<BookResponse> {
        return Promise.resolve(books.filter(b => b.id === id)[0]);
    }

    getAuthors (): Promise<Array<Author>> {
        return Promise.resolve([...authors]);
    }

    getAuthor (id: string): Promise<Author> {
        return Promise.resolve(authors.filter(a => a.id === id)[0]);
    }

    getVotes (): Promise<Array<Votes>> {
        return Promise.resolve([...votes]);
    }

    getVotesByBook (bookId: string): Promise<Array<Votes>> {
        return Promise.resolve(votes.filter(v => v.bookId === bookId));
    }

    addVote (bookId: string, rating: number) {
        votes.push({ id: "13", bookId, userName: "Any user", rating });
        return Promise.resolve(true);
    }

    getComments (): Promise<Array<Comments>> {
        return Promise.resolve([...comments]);
    }

    getCommentsByBook (bookId: string): Promise<Array<Comments>> {
        return Promise.resolve(comments.filter(v => v.bookId === bookId));
    }
}
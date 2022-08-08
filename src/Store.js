import { books, authors, votes, comments } from "./data.js";

export class Store {
    getBooks () {
        return Promise.resolve([...books]);
    }

    getBook (id) {
        return Promise.resolve(books.filter(b => b.id === id)[0]);
    }

    getAuthors () {
        return Promise.resolve([...authors]);
    }

    getAuthor (id) {
        return Promise.resolve(authors.filter(a => a.id === id)[0]);
    }

    getVotes () {
        return Promise.resolve([...votes]);
    }

    getVotesByBook (bookId) {
        return Promise.resolve(votes.filter(v => v.bookId === bookId));
    }

    addVote (bookId, rating) {
        votes.push({ id: "13", bookId, userName: "Any user", rating });
        return Promise.resolve(true);
    }

    getComments () {
        return Promise.resolve([...comments]);
    }

    getCommentsByBook (bookId) {
        return Promise.resolve(comments.filter(v => v.bookId === bookId));
    }
}
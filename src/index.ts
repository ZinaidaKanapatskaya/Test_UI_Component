import Store from "./Store.js";
import { BookResponse } from "./@types";
import UiComponent from "./UiComponent.js"

function main(): void {
    const store = new Store();
    store.getBooks()
        .then((books: Array<BookResponse>) => {
            books.forEach(async (book) => {
                new UiComponent(store, {
                    ...book,
                    author: await store.getAuthor(book.authorId),
                    votes: await store.getVotesByBook(book.id),
                });
            });
        });
}

main();
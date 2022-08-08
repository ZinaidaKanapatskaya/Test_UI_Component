import {Store} from "./Store.js";

class UiComponent {

    constructor(store, book) {
        this.store = store;
        this.book = book;
        this.bookId = book.id;
        this.init();
    }

    async init() {
        this.book.author = await this.store.getAuthor(this.book.authorId);
        this.book.votes = await this.store.getVotesByBook(this.bookId);
        this.generateHTML();
        this.setRating();
        this.getReviewsHTML();
    }

    generateHTML() {
        return document.body.insertAdjacentHTML("beforeend", `
            <article class="book-container">
                <header class="header-book">
                    <h2 class="header-book__title">${this.book.name}</h2>
                    <h3 class="header-book__author">${this.book.author.firstName} ${this.book.author.lastName}</h3>
                    ${this.getRatingHTML()}
                </header>
            <section class="content-book">
                <div class="content-book__picture"><img src="${this.book.imageUrl}" alt=""></div>
                <div class="content-book__info">
                    <div class="description-book">
                        <h3 class="description-book__title">Description</h3>
                        <p class="description-book__text">${this.book.description}</p>
                    </div>
                    <div class="feedback-book" data-book-id="${this.bookId}">
                        <h3 class="feedback-book__title">Reviews</h3>
                    </div>
                 </div>
             </section>
            </article>
        `);
    }

    setRating() {
        this.ratingElem = document.querySelector(`.header-book__rating[data-book-id="${this.bookId}"]`);
        if (this.ratingElem) {
            this.initRating();
        }
    }

    initRating() {
        this.initRatingVars();
        this.setRatingActiveWidth();

        if (this.ratingElem.classList.contains('rating_set')) {
            this.setUserRating();
        }
    }

    initRatingVars() {
        this.ratingActiveElem = this.ratingElem.querySelector('.header-book__rating-active');
        this.getRatingValue();
    }

    getRatingValue() {
        const RATING_NUMBERS = this.book.votes.map((obj) => obj.rating)
            .reduce((prev, curr) => +prev + +curr, 0);
        this.ratingValue = Number((RATING_NUMBERS / this.book.votes.length).toFixed(1));
    }

    setRatingActiveWidth(value = this.ratingValue) {
        const ratingActiveWidth = value / 0.05;
        this.ratingActiveElem.style.width = `${ratingActiveWidth}%`;
    }

    setUserRating() {
        const RATINGS_ITEMS = this.ratingElem.querySelectorAll('.header-book__rating-item');
        for (let i = 0; i < RATINGS_ITEMS.length; i++) {
            const ratingItem = RATINGS_ITEMS[i];
            ratingItem.addEventListener('mouseenter', () => {
                this.initRatingVars();
                this.setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', () => {
                this.setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', () => {
                this.initRatingVars();
                this.setRatingValue(ratingItem.value);
            });
        }
    }

    async setRatingValue(newRating) {
        if (!this.ratingElem.getAttribute('data-ajax')) {
            this.ratingElem.setAttribute('data-ajax', 'true');

            if (!this.ratingElem.classList.contains('rating_sending')) {
                this.ratingElem.classList.add('rating_sending');

                const addVote = this.store.addVote(this.bookId, newRating);
                await addVote.then(() => {
                    this.ratingElem.classList.remove('rating_sending');
                });

                const getVotesByBook = this.store.getVotesByBook(this.bookId);
                const newDataRating = await getVotesByBook.then();

                this.book.votes = newDataRating;
                this.book.votes = newDataRating;
                this.getRatingValue();
                this.setRatingActiveWidth();
            }
        }
    }

    getRatingHTML() {
        return `
            <div class="header-book__rating rating_set" data-book-id="${this.bookId}">
                <div class="header-book__rating-body">
                    <div class="header-book__rating-active"></div>
                    <div class="header-book__rating-items">
                        <input type="radio" name="rating" value="1" class="header-book__rating-item">
                        <input type="radio" name="rating" value="2" class="header-book__rating-item">
                        <input type="radio" name="rating" value="3" class="header-book__rating-item">
                        <input type="radio" name="rating" value="4" class="header-book__rating-item">
                        <input type="radio" name="rating" value="5" class="header-book__rating-item hint-rating-item">
                    </div>
                </div>
            </div>
            `;
    }

    async getReviewsHTML() {
        this.book.comments = await this.store.getCommentsByBook(this.bookId);
        let reviewsHtml = document.querySelector(`.feedback-book[data-book-id="${this.bookId}"]`);
        let comments = this.book.comments.map((comment) => `
            <div class="feedback-book__block">
                    <div class="feedback-book__author">
                        <div class="feedback-book__author-photo">
                            ${this._getFirstLettersUser(comment.userName)}
                        </div>
                        <p class="feedback-book__author-name">${comment.userName}</p>
                    </div>
                    <p class="feedback-book__text">${comment.text}</p>
                 </div>
            `);
        reviewsHtml.insertAdjacentHTML("beforeend", comments.join(''));
    }

    _getFirstLettersUser(userName) {
        const [first, last] = userName.split(' ');
        if (first && last) {
            return (first[0] + last[0]).toUpperCase();
        }
        return first.substr(0, 2).toUpperCase();
    }
}

const store = new Store();
store.getBooks()
    .then((data) => {
        data.forEach((book) => new UiComponent(store, book));
    });
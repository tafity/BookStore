import { fetchBooks} from "./books.js";

export function sorting () {
        const url = new URL('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDEhE1R69ln4GEYTn044O5b6nb1jByNtwA&printType=books&startIndex=0&maxResults=6&langRestrict=en');
        let search_params = url.searchParams;
        const drama = document.getElementById('Drama')
        drama.addEventListener('click', ()=> {
            const booksEl = document.querySelector('.books_container')
            search_params.set('q', 'subject:Drama');
            url.search = search_params.toString();
            let new_url = url.toString();
            fetchBooks(new_url, booksEl);
        })
    }

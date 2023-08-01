import { fetchBooks } from "./books.js";
const loadBtn = document.querySelector('.loadMore');
export function lazyLoading() {
    loadBtn.addEventListener('click', () => {
        console.log('heh')
        fetchBooks('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDEhE1R69ln4GEYTn044O5b6nb1jByNtwA&printType=books&startIndex=0&maxResults=6&langRestrict=en');
    })
}
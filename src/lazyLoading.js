import { fetchBooks } from "./books.js";
//import {new_url} from "./sorting.js"

const loadBtn = document.querySelector('.loadMore');
loadBtn.addEventListener('click', () => {
    fetchBooks('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDEhE1R69ln4GEYTn044O5b6nb1jByNtwA&printType=books&startIndex=0&maxResults=6&langRestrict=en');
})
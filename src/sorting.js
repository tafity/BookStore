import { fetchBooks} from "./books.js";

    const url = new URL('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDEhE1R69ln4GEYTn044O5b6nb1jByNtwA&printType=books&startIndex=0&maxResults=6&langRestrict=en');
    let search_params = url.searchParams;
    const architecture = document.getElementById('Architecture')
    const art = document.getElementById('Art')
    const biography = document.getElementById('Biography')
    const buisness = document.getElementById('Buisness')
    const crafts = document.getElementById('crafts')
    const drama = document.getElementById('Drama')
    
    function sorting () {
        drama.addEventListener('click', ()=> {
            const booksEl = document.querySelector('.books_container')
            search_params.set('q', 'subject:Drama');
            url.search = search_params.toString();
            let new_url = url.toString();
            fetchBooks(new_url, booksEl);
        })


    }

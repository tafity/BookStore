window.onload = () => {
    fetchBooks('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDEhE1R69ln4GEYTn044O5b6nb1jByNtwA&printType=books&startIndex=0&maxResults=6&langRestrict=en', '.books_container');
}

export function fetchBooks(url, domElem) {
    fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong:(')
            }
}).then(data => {
    console.log(data)
    showBooks(data)
}).catch(error => {
    console.log(error)
})
}

export function showBooks(books) {
    let booksEl = document.querySelector('.books_container');

    for (let book of books.items) {
        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', '_b');

        let imageElement = document.createElement('img');
        imageElement.setAttribute('data', book.id)
        imageElement.setAttribute('class', 'cover')
        imageElement.src = book.volumeInfo.imageLinks.thumbnail;

        let authors = document.createElement('span');
        authors.setAttribute('data', book.id);
        authors.setAttribute('class', 'authors')
        authors.innerHTML = book.volumeInfo.authors

        let title = document.createElement('span');
        title.setAttribute('data', book.id);
        title.setAttribute('class', 'title');
        title.innerHTML = book.volumeInfo.title;

        let ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class', 'ratingDiv');
        let ratingActive = document.createElement('div');
        ratingActive.setAttribute('class', 'ratingActive')
        ratingDiv.appendChild(ratingActive)

        let star = ["star1", "star2", "star3", "star4", "star5"];
            star.forEach(function(el) {
                let div = document.createElement('div');
                div.className = 'ratingBody'
                let container = document.createElement('div')
                container.className = 'starContainer'
                let input = document.createElement("input");
                input.className = "star";
                input.type = 'radio'
                input.innerHTML = el;
                container.appendChild(input);
                div.appendChild(container)
                ratingDiv.appendChild(div);
            });

        let rating = book.volumeInfo.averageRating;
        let ratingCount = book.volumeInfo.ratingsCount;
        if (!rating) {
            ratingDiv.style.display = 'none';
        } else {
            let ratingNumber = document.createElement('span');
            ratingNumber.setAttribute('data', book.id);
            ratingNumber.setAttribute('class', 'ratingNum');
            ratingNumber.innerHTML = ratingCount + ' reviews'
            ratingDiv.appendChild(ratingNumber);
        }

        let descriptionInfo = book.volumeInfo.description;
        let descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('data', book.id);
        descriptionDiv.setAttribute('class', 'descriptionDiv');

        let description = document.createElement('p');
        description.setAttribute('data', book.id);
        description.setAttribute('class', 'description');
        description.innerText = descriptionInfo
        

        // let price = book.saleInfo.retailPrice;
        // let priceDiv = document.createElement('div');
        // if(!price){ 
        //     priceDiv.style.display = 'none'
        // } else {
        //     let priceEL = document.createElement('span');
        //     priceEl.setAttribute('data', book.id);
        //     priceEl.setAttribute('class', 'description');
        //     priceDiv.appendChild(priceEl)
        // }
        let buyButton = document.createElement('button');
        buyButton.setAttribute('class', 'buyBtn');
        buyButton.innerHTML = 'buy now'

        bookDiv.appendChild(imageElement);
        bookDiv.appendChild(authors);
        bookDiv.appendChild(title);
        
        bookDiv.appendChild(ratingDiv);
        bookDiv.appendChild(descriptionDiv);
        descriptionDiv.appendChild(description)
        bookDiv.appendChild(buyButton)

        //bookDiv.appendChild(priceDiv)
        
        booksEl.appendChild(bookDiv)
    }
}
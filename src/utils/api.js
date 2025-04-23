
const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "0af01a38b4c14d019ff20dfd9bdf97ea"



const base_Url = process.env.NODE_ENV === "production" ?"https://newsapi.org/v2/everything" : "http://localhost:3001";

export function getItems() {
    return new Promise((resolve, reject) => resolve([
        {
            _id: "68082e0cc3b8e19cd8bd55a3",
            title: "News article",
            url: "https://www.theverge.com/reviews/648903/bougerv-wagon-cart-review-hill-price-sand",
            date: "2023-10-01T12:00:00Z",
            source: "The Verge",
            image: "https://www.theverge.com/reviews/648903/bougerv-wagon-cart-review-hill-price-sand",
        }]))
}

export {
    BASE_URL,
    API_KEY,
    base_Url
}
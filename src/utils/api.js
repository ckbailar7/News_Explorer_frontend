
const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "0af01a38b4c14d019ff20dfd9bdf97ea"



const base_Url = process.env.NODE_ENV === "production" ?"https://newsapi.org/v2/everything" : "http://localhost:3001";

export {
    BASE_URL,
    API_KEY,
    base_Url
}
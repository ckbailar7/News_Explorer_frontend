
// export const MainApi = {
//     login: ({email, password}) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // Simulate Successfulll login
//                 if(email && password) {
//                     const fakeToken = "fake-token-1234";
//                     localStorage.setItem('jwt', fakeToken);
//                     resolve({token: fakeToken})
//                 } else {
//                     reject(new Error('Invalid email or password'));
//                 }
//             }, 1000)
//         });
//     },

//     // Simulate token check and checks if its in local storage FAKE CHECK
//     checkToken:() => {
//         return new Promise((resolve) => {
//             const token = localStorage.getItem('jwt');
//             resolve(!!token);
//         });
//     },

//     //Simulate saving an article to saved-news page
//     saveArticle: (article) => {
//         return new Promise((resolve) => {
//             // Get existing articles or init empty array
//             const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];

//             // Simulate Adding a new Article
//             savedArticles.push({
//                 ...article,
//                 _id: Date.now(), // Generaqting a fake ID
//                 saved:true
//             });

//             //Save to local storage
//             localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
//             resolve({success: true});

//         })
//     },
    
//     // Simulate removing an article from saved-news page by its ID 
//     removeCard: () => {
//         return new Promise((resolve) => {
//             const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
//             const updatedArticles = savedArticles.filter((article) => article._id !== articleId);

//             localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));
//             resolve({success: true});
//         });
//     },

//     // Get the saved articles from local storasge
//     getSavedArticles: () => {
//         return new Promise((resolve) => {
//             const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
//             resolve(savedArticles); // Resolving with the saved Artticles
//         });
//     },

//     // Simulate Loggin Out
//     logout: () => {
//         return new promise((resolve) => {
//             localStorage.removeItem('jwt'); // Remove the token from local storagee
//             resolve({success: true});
//         }
//    )},
    
//         // Simulate getting the current user data
//         getCurrentUser: () => {
//             return new Promise((resolve) => {
//                 const token = localStorage.getItem('jwt');
//                 if(token) {
//                     resolve({email: 'lll', name: 'John Doe'}); // Simulate user data    
//                 }   
//                 else {
//                     resolve(null); 
//                 }
//             });
//         },



      








// } 

export const authorize = (email, password) => {
    // Simulate fetch request that send back a token
    return new Promise((resolve, reject) => {
        resolve({token: "fake token 123"});
    });


};

export const checkToken = (token) => {
    // Simulates a fetch request that sends back a user
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                name: "John dancy",
                email: "johnDancy1@mergeAlias.com",
                _id: "fake-id"
            },
        })
    });
}

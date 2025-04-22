
export const MainApi = {
    login: ({email, password}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // Simulate Successfulll login
                if(email && password) {
                    const fakeToken = "fake-token-1234";
                    localStorage.setItem('jwt', fakeToken);
                    resolve({token: fakeToken})
                } else {
                    reject(new Error('Invalid email or password'));
                }
            }, 1000);
        });
    },

    // Stimulate token check
    checkToken:() => {
        return new Promise((resolve) => {
            const token = localStorage.getItem('jwt');
            resolve(!!token);
        });
    },

    //Stimulate saving an article to saved-news page
    saveArticle: (article) => {
        return new Promise((resolve) => {
            // Get existing articles or init empty array
            const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];

            // Simulate Adding a new Article
            savedArticles.push({
                ...article,
                _id: Date.now(), // Generaqting a fake ID
                saved:true
            });

            //Save to local storage
            localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
            resolve({success: true});

        })
    } 











}


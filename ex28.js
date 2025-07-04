// Exercise 28:
function runAjaxCalls(ajaxCalls, callback){                         
    Promise.all(ajaxCalls)                                      // This function receives an array of promises and returns one
    .then(responses => {                                        // after all have been fulfilled.
        return Promise.all(responses.map(resp => resp.json())); // This line does the same but for converting responses to JSON
    })                                                          // instead of fetching.
    .then(data => {
        callback(data);                                         // After AJAX calls have been performed, callback is invoked.
    })
    .catch(error => {
        console.error("Error on an AJAX call: ", error);        // If there was an error retrieving the info error is displayed
    });
}

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];

const ajaxCalls = urls.map(url => fetch(url));

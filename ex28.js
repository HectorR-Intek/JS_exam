// Exercise 28:
"use strict";
const async = {
  getAll: function (ajaxCalls, callback) {
    Promise.allSettled(ajaxCalls)                             // All promises are settled and individual errors dont abort the process.
      .then(settledResponses => {
        const jsonPromises = settledResponses.map(res => {    // Succesful responses are converted to json.
          if (res.status === "fulfilled") {
            return res.value.json();
          } else {
            console.warn("A request failed:", res.reason);
            return Promise.resolve(null);                     // Save the position for callback context.
          }
        });

        return Promise.all(jsonPromises);
      })
      .then(parsedResults => {
        const context = {};                // An object called context is built with numbers as keys and values provided by calls.
        let index = 1;

        for (const result of parsedResults) {
          if (result !== null) {
            context[index++] = result;
          }
        }

        callback.call(context);   // We execute the callback with context as `this`.
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }
};



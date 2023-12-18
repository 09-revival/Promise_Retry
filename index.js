// Promise Retry Logic in JavaScript
const maxRetries = 3;

function fetchDataWithRetry(retries = 0) {
    return fetchData().catch(error => {
        if (retries < maxRetries) {
            return fetchDataWithRetry(retries + 1);
        }
        throw error;
    });
}

fetchDataWithRetry()
    .then(result => {
        // ... (handle result)
    })
    .catch(error => {
        // ... (handle errors)
    });

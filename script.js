function updateURL() {
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;
            let baseURL = 'https://localhost:8080/';
            
            let queryString = '';
            if (name) {
                queryString += `name=${encodeURIComponent(name)}`;
            }
            if (year) {
                if (queryString) {
                    queryString += '&';
                }
                queryString += `year=${year}`;
            }
            if (queryString) {
                baseURL += `?${queryString}`;
            }
            document.getElementById('url').textContent = baseURL;
        }
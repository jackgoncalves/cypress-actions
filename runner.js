const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU3OGI4NmY3LTZmNjYtNDFhNS1hM2JiLTllNDA5NWU4YmE4ZS0xNzE1MTI4Njc4OTU0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZGIwNTRiOWEtNmViMS00MmY0LWJjZjUtMjgzMWU1NjNlYzk2IiwidHlwZSI6InQifQ.XXO8g_6k_cu-CD70-haprVtnnYxfRi8h56xD8a2PqHs'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})

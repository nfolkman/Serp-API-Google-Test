

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("7892780a6fa18fa7240ef377ff78cca2957e06a62fa24c1fbe1072b137814130");


let query = 'Jon Snow'


const params = {
  engine: "google",
  q: `${query}`,
  location: "Seattle-Tacoma, WA, Washington, United States",
  hl: "en",
  gl: "us",
  google_domain: "google.com",
  num: "10",
  start: "10",
  safe: "active"
};

const callback = function(data) {
  console.log(data["organic_results"]);
};

// Show result as JSON
search.json(params, callback);


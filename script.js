var searchForm = document.querySelector('#search-form')

fetch('htt[s://www.loc.gov/collections/civil-war-maps?fo=json')
  .then(function (response){
    return response.json();
  })
  .then(function (data) {
    var searchResultsEl = document.querySelector('search-results');
    var cardEl = document.createElement('div');
    var h3El = document.createElement('h3');
    var descEl = document.createElement('p');

    h3El.textContent = data.content.results[0].title;
    descEl.textContent = data.content.results[0].description[0];

    cardEl.appendChild(h3El);
    cardEl.appendChild(descEl);

    searchResultsEl.appendChild(cardEl);
  })

  // placeholder JS, will update query selector fetch and what data is pulled when future functions are in place

searchForm.addEventListener('submit', formSubmitHandler)
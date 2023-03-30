// Code here
// fetch(http://localhost:3000/beers))
 const API_BASE_URL = "http://localhost:3000/beers";
 
// List Beer Information and variable declaration 
 const beerName = document.querySelector('#beer-name');
 const beerDescription = document.querySelector('#beer-description');
 const beerImage = document.querySelector('#beer-image');
 const reviewsList  = document.getElementById('review-list');;
 const beerReviewForm = document.getElementById('review-form');
 const beerReviewText = document.getElementById('review');

 
//  fetch(`${API_BASE_URL}/1`)
//    .then(response => response.json())
//    .then(beer => {
//      beerName.textContent = beer.name;
//      beerDescription.textContent = beer.description;
//      beerImage.src = beer.image_url;

//  // code to display beer reviews of each individual beer
//     //  beer.reviews.forEach(review => {
//     //    const li = document.querySelector('li');
//     //    li.textContent = review;
//     //    reviewsList.appendChild("li");
//     //  });

//     // code to display beer reviews of each individual beer
//     for (let review of beer.reviews) {
//         let beerReview = document.createElement('li');
//         beerReview.textContent = review;
//         reviewsList.appendChild(beerReview);
//     }
//    })

   function beerDisplay(beer) {

    // declare variables to enable editing of our beer descriptions
    const beerDescriptionForm = document.getElementById('description-form');
    const beerEditDescription = document.getElementById('description');
    //  beerEditedDescriptionForm.reset();

    // code to remove place-holder for customer reviews
    const beerReviewList = document.getElementById('review-list');
    while (beerReviewList.firstElementChild) {
        beerReviewList.removeChild(beerReviewList.lastElementChild)
    };
  }
 

     // code to display beer Name, beer Image, beer description, edit the description and add reviews
     // add reviews to each specific beer

     beerName.textContent = beer.name,
         beerImage.src = beer.image_url,
         beerDescription.textContent = beer.description,
         beerEditDescription.value = beer.description

     // code to display beer reviews of each individual beer

     for (let review of beer.reviews) {
         let beerReview = document.createElement('li');
         beerReview.textContent = review;
         beerReviewList.appendChild(beerReview);
     }
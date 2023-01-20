const stars = document.querySelectorAll('.stars i');

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener('click', () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add('add-star') : star.classList.remove('add-star');
      let score = document.querySelectorAll('.add-star').length;
      document.getElementById('rating').value = score;
    });
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxL-uAjvtrPzS5NdroFJ20GJP14hmOyKyFjenGzeJNLP3TGYsvmoLdJt_2e2epH8TMilg/exec';
const form = document.forms['contact-form'];
const send = document.querySelector('.btn-kirim');
const loading = document.querySelector('.btn-loading');

const feedback = document.querySelector('.fdb');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  loading.classList.toggle('d-none');
  send.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      loading.classList.toggle('d-none');
      send.classList.toggle('d-none');
      let nama = document.getElementById('name').value;
      document.querySelector('strong').innerHTML = 'Thanks for your visit, ' + nama;
      if (!feedback.classList.contains('d-none')) {
        feedback.classList.toggle('d-none');
      } else {
        //pass
      }
      feedback.classList.toggle('d-none');
      stars.forEach((star, index1) => {
        stars.forEach((star, index2) => {
          stars[index2].classList.remove('add-star');
        });
      });

      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

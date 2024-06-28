function getYear() {

fetch('https://whatyearisit-backend-delta-drab.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log(data)
  document.querySelector('#year').textContent = data.year;
});
}

getYear();
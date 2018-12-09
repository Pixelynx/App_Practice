// const doc = document;
//
// doc.addEventListener('DOMContentLoaded', () => {
//
//   let body = doc.querySelector('body');
//
//   fetch('http://localhost:3000/fruits')
//     .then(res => {
//       return res.json();
//     }).then(parsed => {
//       parsed.listOfFruits.forEach(fruit => {
//         let newP = doc.createElement('p');
//         newP.innerText = fruit.name;
//         body.appendChild(newP);
//       })
// });
// });







const doc = document;

doc.addEventListener('DOMContentLoaded', () => {

  let body = doc.querySelector('body');

  axios.get('http://localhost:3000/fruits')
  .then(fruits => {
    fruits.data.listOfFruits.forEach(fruit => {
        let newP = doc.createElement('p');
        newP.innerText = fruit.name;
        body.appendChild(newP);
      })
    })
  })

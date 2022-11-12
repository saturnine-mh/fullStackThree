var check = document.getElementsByClassName("fa-check-circle-o");
var trash = document.getElementsByClassName("fa-trash-o");
let definition = document.getElementsByClassName('getDef')

// Array.from(definition).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const palindrome = this.parentNode.parentNode.childNodes
//         console.log(palindrome)
//         fetch('definition', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'palindrome': palindrome,
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           // window.location.reload(true)
//         })
//       });
// });
    Array.from(definition).forEach( (element) => {
      element.addEventListener('click', getDef) 
    })


function getDef(){
  let palindrome = this.parentNode.parentNode.childNodes[1].innerText

         
         console.log(palindrome)
          fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${palindrome}`)
      .then(res => res.json())
      .then(data =>{
          console.log(data.length, data)
          let definition = this.parentNode.parentNode.childNodes[3].innerText
          if(data.title){
              definition = 'This word does not have a definition'
          }
          else{
              definition = 'Defintion: ' + data[0].meanings[0].definitions[0].definition
          }
          console.log(definition, 'ndbshbdashdbhauibdaiusdb')
          
          
          fetch('definition', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'palindrome': palindrome,
              'definition': definition,
            })
          })
          .then(response => {
            if (response.ok) return response.json()
          })
          .then(data => {
            console.log(data, definition, '4567876543')
            window.location.reload(true)
          })
       

      })
      
      .catch(err => {
          console.log(`error ${err}`)
          definition = 'This word does not exist'
      })


  
}


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const palindrome = this.parentNode.parentNode.childNodes[1].innerText
        const wordCheck = this.parentNode.parentNode.childNodes[5].innerText
        const getDef = this.parentNode.parentNode.childNodes[7].innerHTML
        console.log(palindrome, wordCheck, getDef)
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'palindrome': palindrome,
            'wordCheck': wordCheck,
            'getDef': getDef
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

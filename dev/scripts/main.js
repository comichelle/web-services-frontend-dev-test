// Creating a global variable
const cardList = {};

// API URL
cardList.apiUrl = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

	
/***********************************************
// Get superheroes from API
 **********************************************/

cardList.getPieces = function(query){
    $.ajax({
      url: cardList.apiUrl,
      method: 'GET',
      dataType: 'json',
      data: {
        format: 'json',
        q: query,
      }
    }).then(function(lalala){
        // console.log(lalala)
      cardList.displayPieces(lalala);
    });
  };

/***********************************************
//Display Superheroes
 **********************************************/

  cardList.displayPieces = function(data){
        const superhero = data.filter((superHero) => superHero.images.sm).map((superHero) => {
        let hero = `
            <div class="hero__container flex">
                <div class="hero__img">
                    <img src="${superHero.images.sm}" alt="Super Heroes">
                </div>

                <div class="hero__info">
                    <h2>${superHero.name}</h2>
                    <p class="fullname">Full Name: ${superHero.biography.fullName}</p>
                    <p class="race">Race: ${superHero.appearance.race}</p>
                    <p class="alignment">Alignment: ${superHero.biography.alignment}</p>
                    <p class="publisher">Publisher: ${superHero.biography.publisher}</p>

                    <div class="collapse">
                        <div class="content">
                            <h4>Powers:</h4>
                            <p class="sub intelligence">Intelligence: ${superHero.powerstats.intelligence}%</p>
                            <p class="sub strength">Stength: ${superHero.powerstats.strength}%</p>
                            <p class="sub speed">Speed: ${superHero.powerstats.speed}%</p>
                            <p class="sub durability">Durability: ${superHero.powerstats.durability}%</p>
                            <p class="sub power">Power: ${superHero.powerstats.power}%</p>
                            <p class="sub combat">Combat: ${superHero.powerstats.combat}%</p>
                            <h4>Tags:</h4>
                            <form name="pickTag" id="tag" class="tag">
                                <input type="text" name="Add tag" placeholder="Add tag" id="name">
                            <input type="submit" class="tag__submit" id="submit" >
                            </form>
                        </div>
                    </div>
                </div>

                <button class="btn collaps" type="button"  data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i class="fa fa-plus"></i>
                </button>
            </div>`;
        return hero;
        }).join('');

        $('#results').append(superhero);

        //Expand Content Needs Work!!!!
        $('[data-toggle="collapse"]').click(function() {
        var expand = document.getElementsByClassName("collaps");
        $(".content").toggle('expand')
        
        });
  };


      
    
//Expand Content ARGHHHHHH!!!!
const expand = document.getElementsByClassName("collaps");
let i;

for (i = 0; i < expand.length; i++) {
    expand[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
});
}

  cardList.setUpEventListeners = function(){
    $("#tag").on("change", function(){
      const tag = $(this).val();
      artApp.getPieces(tag);
      artApp.updateTitle();
    });
  }
  

/***********************************************
//Initialize
**********************************************/

cardList.init = function() {
    cardList.getPieces('query');
    cardList.setUpEventListeners();
};

$(function(){
    cardList.init();
});



// // cardList.getPieces = function() {
//     // Make and AJAX request to get each character
//     $.ajax({
//         url: cardList.apiUrl,
//         method: 'GET',
//         dataType: 'json',
//         data: {
//             format: 'json',
//             q: 'sm'
//         }
//     }).then(function(data) {
// 		console.log(data);
//         // var aBomb = $('<img>').attr('src','https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg');


//         // $('.character__image').append(aBomb);


//     });
// // };


// Fetch Super Heroes
// fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
// });


// function appendData(data) {
//     //Get Name of Super Hero
//     let mainContainer = document.getElementById("info");
//     // for (var i = 0; i < data.length; i++) {
//     //Only show less than 10 heroes in the array
//     for (let i = 0; i < 10; i++) {
//       let header = document.createElement("h1");
//       header.innerHTML = data[i].name;   
//       mainContainer.appendChild(header);
//     }

// } 




/////////////////////////////////////////
//Display Character
////////////////////////////////////////

// cardList.displayChar = (charInfo) => {
// 	// console.log(charInfo);
// 	$('.char__img').attr('src', charInfo.images);
// 	$('.name').text(charInfo.name);
//     $('.fullname').text(charInfo.fullName);
// 	$('.race').text(charInfo.race);
// 	$('.alignment').text(charInfo.alignment);
// 	$('.publisher').text(charInfo.publisher);
    
// };















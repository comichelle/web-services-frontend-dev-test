const cardList={apiUrl:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",getPieces:function(e){$.ajax({url:cardList.apiUrl,method:"GET",dataType:"json",data:{format:"json",q:e}}).then(function(e){cardList.displayPieces(e)})},displayPieces:function(e){e=e.filter(e=>e.images.sm).map(e=>{return`
            <div class="hero__container flex">
                <div class="hero__img">
                    <img src="${e.images.sm}" alt="Super Heroes">
                </div>

                <div class="hero__info">
                    <h2>${e.name}</h2>
                    <p class="fullname">Full Name: ${e.biography.fullName}</p>
                    <p class="race">Race: ${e.appearance.race}</p>
                    <p class="alignment">Alignment: ${e.biography.alignment}</p>
                    <p class="publisher">Publisher: ${e.biography.publisher}</p>

                    <div class="collapse">
                        <div class="content">
                            <h4>Powers:</h4>
                            <p class="sub intelligence">Intelligence: ${e.powerstats.intelligence}%</p>
                            <p class="sub strength">Stength: ${e.powerstats.strength}%</p>
                            <p class="sub speed">Speed: ${e.powerstats.speed}%</p>
                            <p class="sub durability">Durability: ${e.powerstats.durability}%</p>
                            <p class="sub power">Power: ${e.powerstats.power}%</p>
                            <p class="sub combat">Combat: ${e.powerstats.combat}%</p>
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
            </div>`}).join("");$("#results").append(e),$('[data-toggle="collapse"]').click(function(){document.getElementsByClassName("collaps");$(".content").toggle("expand")})}},expand=document.getElementsByClassName("collaps");let i;for(i=0;i<expand.length;i++)expand[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});cardList.setUpEventListeners=function(){$("#tag").on("change",function(){var e=$(this).val();artApp.getPieces(e),artApp.updateTitle()})},cardList.init=function(){cardList.getPieces("query"),cardList.setUpEventListeners()},$(function(){cardList.init()});
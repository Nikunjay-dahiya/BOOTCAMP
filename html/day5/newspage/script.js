console.log("heelo");




function callAPI() {

  fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=37f71a5e27a44f3c8eb083e00aac5aad")
    .then((res) => {
      res.json().then((data) => {
        renderUI(data)
      })
    })
}




function renderUI(data) {
  //got the articales from data
  const articles = data.articles;
  for(let i=0;i<articles.length;i++){
    const ar=articles[i];
    
  }
  console.log(articles)

  const root = document.getElementById("root")
  //single articles from articles array
  const ar = articles[0];


  //create a prent div
  const div = document.createElement("div")
  div.setAttribute("class","news-card");
  const h3 = document.createElement("h3")

  h3.innerText = ar.title;
  //image lelo
  const img = document.createElement("img");

  //image map karlo
  img.src = ar.urlToImage;




  div.appendChild(h3);
  div.appendChild(img);


  //appent kardo dom m
  root.appendChild(div);
}


//renderUI();
callAPI()


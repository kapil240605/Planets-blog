let cd =document.querySelector("#cardcontainer");

const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e860ea40emsh233e89f210b9434p145fe9jsndc9f06da3815',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

let res =  ()=>{
	const response =  fetch(url, options)
    response.then((v)=>{
        return v.json()
    }).then((planet) => {
    console.log(planet)
    ihtml = ""
      for (item in planet) {
           console.log(planet[item]);
           ihtml += `
           <div class="card crd mx-3 my-3 " style="width: 22rem;">
           <img src="${planet[item].imgSrc.img}" class=" ima card-img-top" alt="...">
           <div class="card-body ">
               <h5 class="card-title">${planet[item].name}</h5>
               <p class=" ct card-text">${planet[item].description}</p>
               <a href="${planet[item].wikiLink}" class="btn btn-primary">Explore</a>
           </div>
       </div>
           `
      }
      cd.innerHTML = ihtml
  })
}

res();
function e(){console.log("Search result is not sucessfull.")}input.addEventListener("submit",(()=>{const t=input.value.trim().toLowerCase();t.lenght>0?function(e){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5266ce003df04ebad77cca2af658cdf2&language=en-US&page=1&include_adult=false&query=${e}`).then((e=>(e.ok||console.log("Search result is not sucessfull. Enter the correct movie name and try again"),e.json)))}(t).then(showMovie).catch(e):console.log("Enter the correct movie name and try again")}));
//# sourceMappingURL=library.da6bab56.js.map
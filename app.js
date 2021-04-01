const searchMeal = ()=> {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${document.getElementById("meal").value}`)
     .then(res => res.json())
     .then(data => {
        loadData(data)
       
     })
}
 const loadData = data => {
         data.meals.forEach(element => {
            const container = document.getElementById('container');
            const mealDiv = document.createElement('div');
            mealDiv.className = 'mealGrid'
            mealDiv.innerHTML = `
            <img class="thumb" src="${element.strMealThumb}">
            <h6 class="h6Decrease">${element.strMeal}</h6>
            <div class="detailBtn" onclick="showDetail('${element.strMeal}'), document.getElementById('id01').style.display='block'" id="detailBtn">Learn more...</div>  
         `
         container.appendChild(mealDiv);
         });              
 }  
 const showDetail = mealName => {
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
     .then(res => res.json())
     .then(data => {
        data.meals.forEach(element => {
            console.log(element)
            const mealContainer = document.getElementById('mealContainer');
            mealContainer.className= 'lastShowContainer'
            mealContainer.innerHTML = `
            <img class="lastShowImage" class="thumb" src="${element.strMealThumb}">
            <h4 class="foodNameLastShow" >${element.strMeal}</h4>
            <h6>Ingredients: </h6>
            <ul>
               <li>${element.strMeasure1} ${element.strIngredient1}</li>
               <li>${element.strMeasure2} ${element.strIngredient2}</li>
               <li>${element.strMeasure3} ${element.strIngredient3}</li>
               <li>${element.strMeasure4} ${element.strIngredient4}</li>
               <li>${element.strMeasure5} ${element.strIngredient5}</li>
               <li>${element.strMeasure6} ${element.strIngredient6}</li>
               <li>${element.strMeasure7} ${element.strIngredient7}</li>
               <li>${element.strMeasure8} ${element.strIngredient8}</li>
               <li>${element.strMeasure9} ${element.strIngredient9}</li>
            </ul>
            `
        });
     })
 }     
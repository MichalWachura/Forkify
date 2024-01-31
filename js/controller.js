import  * as model from './model.js'
import recipeView from './views/recipeView.js';


import icons from '../img/icons.svg'
import 'core-js/stable'; // Polyfilling everything else
import 'regenerator-runtime/runtime'; // Polyfilling Async await
console.log(icons)

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecepies = async function(){
  try{
    const id = window.location.hash.slice(1);
    if(!id) return;
    recipeView.renderSpinner()
  // 1 Loading recepie
   await model.loadRecipe(id);
    // 2 Rendering recepie
  recipeView.render(model.state.recipe)

    

  }catch(err){
    alert(err)
  }
}

const operation = ['hashchange','load'].forEach(event => {
  window.addEventListener(event,controlRecepies)
  
});

//window.addEventListener('hashchange',controlRecepies)// the same what is upper
//window.addEventListener('load',controlRecepies)



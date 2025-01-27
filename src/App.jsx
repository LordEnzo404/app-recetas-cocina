import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const [search, setSearch] = useState('')
  const [recetas, setRecetas] = useState(null)

  function fetchReceta(){
    axios.get(url+search)
    .then((response) => {setRecetas(response.data.meals); console.log(response.data)})
  }

  return (
    <>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <input type="text" name="searchbar" id="search-bar" onChange={ (e) => { setSearch(e.target.value) } }/>
        <input type="submit" value="Buscar" onClick={fetchReceta}/>
      </form>
      <div className='listContainer'>
      { recetas ?
        recetas.map(receta => 
          <div className='contenedorRecetas' key={receta.idMeal}>
            <a href="#">
              <h2>{receta.strMeal}</h2>
              <img src={receta.strMealThumb} alt=""/>
            </a>
          </div>
        )
        :        ''
      }
      </div>
    </>
  )
}

export default App

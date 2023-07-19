import React from 'react'
import useFetch from './utils/useFetch'
import SpinComponent from './Pages/SpinComponent'

const App = () => {
    const res = useFetch('https://api.chucknorris.io/jokes/categorie')
    const {data} = res
    console.log(data);
    if(!data) return <SpinComponent/>
    return(
        <div>


        </div>  
    )
  
}

export default App
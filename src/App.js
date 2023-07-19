import React from 'react'
import useFetch from './utils/useFetch'
import SpinComponent from './Pages/SpinComponent'
import Body from './components/Body'
import './App.css'


const App = () => {
    const res = useFetch('https://api.chucknorris.io/jokes/categories')
    const {data} = res
    if(!data) return <SpinComponent/>
    return(
        <div className='Main-container'>
       <h1 class=" text-4xl text-green-500 animate-bounce font-bold  text-center">Chuck Norries</h1>
        <div className='flex justify-center flex-wrap'>
       {
            Object.values(data).map((ele)=>{
                return  <Body items={ele}/>
            })
       }
        </div>
        </div>  
    )
  
}

export default App
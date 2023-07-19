import React, { useState } from 'react'
import useFetch from './utils/useFetch'
import SpinComponent from './Pages/SpinComponent'
import Body from './components/Body'
import './App.css'
import ModelDialogue from './components/ModelDialogue'

const URL = "https://api.chucknorris.io/jokes/categories"
const App = () => {
    const [showDialogue, setShowDialogue] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const res = useFetch(URL)
    const { data } = res
    if (!data) return <SpinComponent />
    const handleDialogue = (category) => {
        setShowDialogue(true)
        setSelectedCategory(category)
    }
    return (
        <div className='Main-container'>
            <h1 class=" text-4xl text-green-500 animate-bounce font-bold  text-center">Chuck Norries</h1>
            <div className='flex justify-center flex-wrap'>

                {
                    Object.values(data).map((ele) => {
                        return (
                            <button onClick={() => handleDialogue(ele)}>
                                <Body items={ele} />
                            </button>
                        )
                    })
                }
            </div>
            {
                showDialogue && <ModelDialogue
                    category={selectedCategory}
                    setShowDialogue={setShowDialogue} />

            }

        </div>
    )

}

export default App
import React, { useEffect, useState } from 'react';
import PageSpin from '../Pages/PageSpin';

const ModelDialogue = ({ setShowDialogue, category }) => {
    const [response, setResponse] = useState(null)
    const FetchJoke = async () => {
        const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        const res = await data.json()
        setResponse(res)
    }
    useEffect(() => {
        FetchJoke()
    }, [category])
    console.log(response);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 rounded-lg">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute bg-[#1A333A] rounded-md p-5 md:p-10 lg:p-16 shadow-xl mt-10">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowDialogue(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h1 className="text-center text-xl md:text-2xl text-white font-bold capitalize">
                    {category}
                </h1>
                <div className="w-full border border-black my-6 shadow-xl flex flex-col items-center justify-center mobile-para">
                    {
                        response === null ? <PageSpin /> : <p className="text-center font-semibold text-white text-lg md:text-xl  w-[30rem] p-4">
                            {response?.value}
                        </p>
                    }

                    <button className="px-4 py-2 bg-blue-700 my-2 mx-3 cursor-pointer lg:w-96 m:w-80 rounded-md hover:bg-blue-600 font-bold" onClick={FetchJoke}>
                        Next joke
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ModelDialogue;

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

const data = useLoaderData(); // useLoaderData is used to get the data from the loader function called in route, it will be called before the component is rendered.

// const [data,setData] = useState([])

  // fetching github account details like follower or anything else via api calls.
//    useEffect(()=>{ // It will called very 1st time when this component is mounted or loaded.
// fetch('https://api.github.com/users/Prashant5ingh')
// .then(res => res.json())
// .then(data => {
//     console.log(data.followers)
//     console.log(data.following)
//     console.log(data.name)
//     console.log(data.public_repos)
//     setData(data) // setting the data to state variable data.

//     // You can use the data to display on the UI or do anything with it using useState .



// })
// }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github --- follower:{data.followers} following:{data.following} Name:{data.name}
    <img src={data.avatar_url} alt="Git profile picture" width={300}/>
    </div>
  )
}

export default Github

// More optimized way to fetch data is using loader function in route setup section. No data lags.
// better to write this code in different file and import it in the route setup section.
export const githubInfoLoader = async () =>{


     // loader is used to fetch the database or apis. We directly use it in the route setup section. Before clicking on the route link just hovering on navlink is enough to trigger, it will fetch the database or api and then render the component.
    // loader starts api calling way before useEffect is called, so we can use async await to make sure that the data is fetched before the component is rendered.
    // fetching via loader code can be written inside route as well.

    const res = await fetch('https://api.github.com/users/Prashant5ingh');
    return res.json(); // directly returning the data from the api call.
}
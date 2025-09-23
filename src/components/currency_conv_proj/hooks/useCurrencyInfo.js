import { use, useEffect, useState } from "react"
// Part of currency converter project


export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) // useState is used to hold the data fetched from the API,if there is no fetch call or error then atleast it will be an object.
    
    
    useEffect(() => { // as soon as dependency changes, it will call the API to fetch the data.
// By mount and unmount , sir want to say when the when application re-renders. 
// Basically hume fetch ko tabi call karna hai jab hamara dropdown me user koi aur currency select kar le, ya in technical terms jab dropdown ki state change ho rahi ho. 
// To useEffect hi ek esa hook hai jisme hum dependency pass kar sakte hai ki iske change hone pe call hona, otherwise agar direct hi fetch likh denge, to jab bhi application re-render hogi, hamari fetch request jaati rahegi which we do not want. 
// AGAR ABHI BHI SAMAJH NAHI AYA, don't worry muje khud 1 din lag gaya ise sikhne me.


        // Can use async and await to fetch data from an API

        // or for now use fetch directly as promise to get the data.
        // Fetching currency data from an API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // returns the converted the string response to JSON
            })
            .then((response) => setData(response[currency])) // can't hold res in regular variable as it will not update in UI, so we can use useState to hold the data.
            // API data key is same as currency provided in url.
            // har baar ek obj ko access karne ke liye "." jaruri nahi hai, we can use "[]" to access the object properties dynamically.
            .catch((error) => console.error("Error fetching currency data:", error)); // catch any error that occurs during the fetch operation


        // This will run only once when the component is mounted or when the currency changes.
    }, [currency]) // any changes in the dependencies will trigger the API call.

    // return [data, setData]; // This approach is not suitable for this case as its a custom hook and if we return like this then we can't access currency without calling the above API function, 
    // but it is a common pattern in React to return both the data and the setter function for the state.
    // Returning an array with data and setData allows the component using this hook to access both the fetched data and the ability to update it if needed.

    // Hooks also returns whole method, so we can use it in the component where this hook is used.
    return data; // for this method we will return the data fetched from the API

}


import React, { use, useState } from 'react'
import { InputBox } from './index' // importing InputBox component from index.js file in the same directory
  // by default index.js will be imported if we don't specify the file name, so we can import like this.
import useCurrencyInfo from './hooks/useCurrencyInfo'


function Currency() {

  const [amount, setAmount]=useState(0); // state to hold the amount entered by the user
  const [from, setFrom] = useState("usd"); // state to hold the selected "from" currency
  const [to, setTo] = useState("inr"); // state to hold the selected "to" currency
  const [convertedAmount, setConvertedAmount] = useState(0); // state to hold the converted amount 0 or empty string anything is fine. 
  
  const currencyInfo = useCurrencyInfo(from); // custom hook to fetch currency data based on "from" field, it will return the data fetched from the API, so we can use it directly.
  // useCurrencyInfo is a custom hook that fetches currency data from an API and returns the data for the specified currency.
  // It uses the useEffect hook to fetch the data when the component is mounted or when the currency changes.

  const options = Object.keys(currencyInfo) // Object.keys() returns an array of all keys from the currencyInfo object, which are the available currencies.
  
  
  // swap function to swap the "from" and "to" currencies
  const swap = () =>{
    setFrom(to); // swap the "from" and "to" currencies
    setTo(from);

    // Below code is not compulsory but it is good to have, so that when we swap the currencies, the converted amount will also be updated based on the new "from" currency.
    setConvertedAmount(amount); // set the converted amount to the current amount
    setAmount(convertedAmount); // set the amount to the converted amount
  }

  const convert =() => {
    if (!amount || !currencyInfo[to]) { // check if amount is not entered or currencyInfo[to] is not available
      setConvertedAmount(0); // if amount is not entered or currencyInfo[to] is not available, set the converted amount to 0
      alert(`Please enter a valid amount and select a valid currency${"form"}.`); // show an alert to the user
      return; // exit the function   
    }

    setConvertedAmount(amount * currencyInfo[to]) // set the converted amount based on the amount entered and the exchange rate of the "to" currency
     
  }
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); // prevent the default form submission behavior to another page or reload the page
                           convert(); // call the convert function to convert the amount
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox className='text-black'
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                  setFrom(currency) // set the "from" currency when the user selects a currency from the dropdown
                                }}
                                onAmountChange={(amount)=>setAmount(amount)} // set the amount when the user enters the amount in the input box
                                selectCurrency={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={()=> swap()} // or onClick={swap} can be used as well, both are same.
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox className='text-black'
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                  setTo(currency) // set the "to" currency when the user selects a currency from the dropdown
                                }}
                                selectCurrency={to}
                                amountDisabled // or amountDisabled={true} also works, it will disable the amount input field for "To" currency as we don't want to allow user to enter amount in "To" currency. 
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
   
  )
}

export default Currency
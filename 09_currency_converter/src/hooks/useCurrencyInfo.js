import { useEffect, useState } from "react";

//creating custom hook which is similiar to a function that can use pre-exisited hooks in it
function useCurrencyInfo(currency) {


    //using useState--->for updating the UI and storing the API data into data of useState
    const [data, setData] = useState({})//passing an empty object to handle error is no data is return from API


    //we have to fetch the data from the API, when there is a change in more then one component thats why we are using useEffect 
    useEffect(() => {

        //chaining method used for fetching the data
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json)//converting res-->data from API into json format
            .then((res) => setData(res[currency]))//accessing the currency element by square bracket
    }, [currency])//when currency will change it must render the API --->pass the array of dependencies that will trigger the API call
    return data;
}

export default useCurrencyInfo;
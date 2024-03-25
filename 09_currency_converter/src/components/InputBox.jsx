/* eslint-disable react/prop-types */
import React from 'react'
import { useId } from 'react'

function InputBox({
  label, //it is for FROM and To int the UI
  amount, //it is for the amount need to changed
  onAmountChange, //handling amount change with useState
  onCurrencyChange, //for changing the currency ---> it's a method
  currencyOptions = [], //currency option
  selectCurrency = 'usd', //selecting the currency from the list of currencyOptions--->by Default setting it as USD if user doesn't choose any
  amountDisable = false, //optional --->user can change the amount
  currencyDisable = false,
  className = '', //for user To add its own CSS
}) {
  const amountInputId = useId()

  return (
    //this CSS is for userCSS
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          //after changing the amount value
          onChange={(e) =>
            //using checker if it exist or not //converting it also into number
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          //setting the value
          value={selectCurrency}
          //setting the checker if onCurrencyChange whether its not empty
          //didn't type cast here as we know its already a string
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* creating loop for options */}
          {currencyOptions.map((currency) => (
            //always pass the key for better performance in the loop
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox

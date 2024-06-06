import { CiStar } from "react-icons/ci";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiStar } from "react-icons/hi";
import { TbStarFilled, TbStarOff } from "react-icons/tb";

const CurrencyDropdown = ({ 
    currencies, 
    currency,
    setCurrency, 
    favorites, 
    handleFavorite, 
    title = "", 
}) => {
    const isFavorite = curr=>favorites.includes(curr)
  return (
    <div>
        <label 
        htmlFor ={title}
        className="block text-sm font-medium text-gray-800"
        >
            {title}
        </label>

        <div className="mt-1 relative">
            <select 
            value={currency} 
            onChange ={(e)=> setCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm 
            focus:outline-none foucs:ring-2 focus:ring-indigo-500"
            >
                {favorites.map((currency) => {
                    return <option className="bg-gray-200" value={currency} key={currency}>
                            {currency}
                        </option>
                })}               
                <hr />
                {currencies
                .filter((c) => !favorites.includes(c))
                .map((currency) => {
                    return (
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    );
                })}
            </select>
            <button 
            onClick={() =>handleFavorite(currency)}
            className="absolute inset-y-0 right-0 pr-5 
            flex items-center text-sm leading-5"
            >
                {isFavorite(currency) ? <GoStarFill/>: <GoStar/> }
            </button>
        </div>
    </div>
  )
}

export default CurrencyDropdown;
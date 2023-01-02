import {createContext, useState} from 'react'
import axios from 'axios'

export const countryContext = createContext();


export const CountryProvider = (props) => {

        const [isNepal, setIsNepal] = useState();

        //Get country symbol
        axios.get("https://ipapi.co/json/")
        .then((res)=>{
            if(res.data.country_code == 'NP'){
                setIsNepal(true)
            }
            else{
                setIsNepal(undefined)
            }
            })        
    

    return(
    <countryContext.Provider value={{isNepal}}>
        {props.children}
    </countryContext.Provider>
    )
}
 
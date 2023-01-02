import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const countryContext = createContext();


export const CountryProvider = (props) => {

        const [isNepal, setIsNepal] = useState();
        const [countryCodeContext, setCountryCodeContext] = useState();

        //Get country symbol
        useEffect(()=> {
            axios.get("https://ipapi.co/json/")
            .then((res)=>{
                setCountryCodeContext(res.data.country_code)
                if(res.data.country_code == 'NP'){
                    setIsNepal(true)
                }
                else{
                    setIsNepal(undefined)
                }
                })     
        }, [])
           
    

    return(
    <countryContext.Provider value={{isNepal, countryCodeContext, setCountryCodeContext, setIsNepal}}>
        {props.children}
    </countryContext.Provider>
    )
}
 
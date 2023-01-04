import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const countryContext = createContext();


export const CountryProvider = (props) => {

        const [isNepal, setIsNepal] = useState();
        const [countryCodeContext, setCountryCodeContext] = useState()
        const [countryNameContext, setCountryNameContext] = useState()

        //Get country symbol
        useEffect(()=> {
            axios.get("https://ipapi.co/json/")
            .then((res)=>{
                setCountryCodeContext(res.data.country_code)
                setCountryNameContext(res.data.country_name)
                if(res.data.country_code == 'NP'){
                    setIsNepal(true)
                }
                else{
                    setIsNepal(undefined)
                }
                })
                .catch((err) => {
                    console.log(err)
                })    
        }, [])
           
        const [animationName, setAnimationName] = useState('');
        const [depth, setDepth] = useState('');
        const [fade, setFade] = useState('');
      
        function closePopUp() {
          setAnimationName('animate-out');
          setDepth('above');
          setFade('fade-out');
        }
      
        function openPopUp() {
          setAnimationName('animate-in');
          setDepth('below');
          setFade('fade-in');
        }

    return(
    <countryContext.Provider value={{isNepal, countryCodeContext, setCountryCodeContext, countryNameContext, setCountryNameContext, setIsNepal, openPopUp, closePopUp}}>
        {props.children}
    </countryContext.Provider>
    )
}
 
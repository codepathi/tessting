import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { countryContext } from '../src/context/countryContext';
import countryList from "../public/CountryData/country.json";
import Select from 'react-select'

const Popup = ({open, closePopup}) => {


  const {isNepal, countryCodeContext, setCountryCodeContext, setIsNepal, countryNameContext, setCountryNameContext} = useContext(countryContext);

  // Change country according to select statement
  const changeCountry = (selectedOption ) => {
    const countryCode = selectedOption.value
    setCountryCodeContext(selectedOption.value)
    // // Set isNepal = false if other selected
    if(countryCode != 'NP') {
      setIsNepal(undefined)
    }
    else{
      setIsNepal(true)
    }
  }

  if(open == false) return null

  const options = []

  let counter = 0

  // for (const country of countryList) {
  //   if (countryCodeContext === country.code) {
  //     setSelectedValue(counter);
  //     break;
  //   }
  //   else{
  //     console.log("not matched")
  //   }
  //   counter++;
  // }


  

  countryList.map((country, index)=>{
    if(countryCodeContext == country.code){
      console.log(index)
    }
    options.push(
      {value: country.code, label: country.name, imgUrl: 'https://flagcdn.com/w40/np.png' }
    )
  })

  return (
    <div>
      <Modal
        isOpen="true"
        onRequestClose={closePopup}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(192, 192, 192, 0.6)',
            zIndex: 2147483647
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            maxWidth: '450px',
            height: '320px',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#fbfbfb',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            boxShadow: '3px 3px 8px #5c5c5c',
            zIndex: 2147483647
          },
        }}
      >
        <div className="popupContainer">
        <span style={{zIndex: 2}} onClick={closePopup}>X</span>
        <h2>Visiting from {countryNameContext}?</h2>
         
        <p>Select country to get dynamic pricing according to regions.</p>

          <Select menuShouldBlockScroll={true} menuPlacement='top'  maxMenuHeight={150} className='select' options={options} 
          defaultValue={options[152]}
          style={{zIndex: '3'}} onChange={changeCountry} isSearchable={true}/>

          <button onClick={closePopup}>Continue</button>
    

        </div>
      </Modal>
    </div>
  );
};

export default Popup;

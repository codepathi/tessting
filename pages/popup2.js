const Popup2 = ({open, onClose}) => {

    if(open == undefined) return null

    return ( 
        <>
        <div className="popupOverlay">
            <div className="popupContainer">
            <span onClick={onClose}>X</span>
                <h5>Select country</h5>
                <p>Dynamic prices are shown depending upon country</p>
            </div>

        </div>
          
        </>
     );
}
 
export default Popup2;
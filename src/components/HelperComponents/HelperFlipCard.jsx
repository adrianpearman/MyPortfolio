import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

  
const HelperFlipCard = ({ children }) => {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div onMouseEnter={() => setFlip(true)}>
                {children[0]}            
            </div>
            <div onMouseLeave={() => setFlip(false)}>
                {children[1]}   
            </div>
        </ReactCardFlip>
    );
}
  
export default HelperFlipCard;
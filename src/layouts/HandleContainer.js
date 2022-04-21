import React from "react";
import "./styles.css";

function HandleContainer({currEle})
{
    return (
        <>
       
        <div className="card-container" key={currEle.id.toString()}>
         <div className="card">
                     <div className="card-body">

                            <span className="card-number card-circle subtle">{currEle.id}</span>
                            <span className="card-author subtle">{currEle.category}</span>
                            <h3 className="card-title"> {currEle.name}</h3>
                            <span className="card-description subtle">
                               {currEle.description}
                            </span>
                        {/* <div className="card-read">Read</div> */}

                 </div>
           
            </div>

         </div>
         
        </>
    );
}


export default HandleContainer;
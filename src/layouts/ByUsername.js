import React,{useState} from "react";
import "./styles.css";
import Menu from "./API";
import HandleContainer from "./HandleContainer";
function Cards()
{
    
    const [MenuData,setData]=useState(Menu);
    const [MenuData1,setData1]=useState(MenuData);

    function handleChange(Event)
    {
            // const username1=Event.target.value;
            // console.log("Change value is"+username1);

            // alert("The value of the input is "+Event.target.value);
    }
    function handleClick(Event)
    {
        
        
        console.log(MenuData);
       const name=Event.target.name;

       if(name==="all")
       {
           setData1(Menu);
       }else{

        const updated=MenuData.filter((currentElement,index)=>{
            return currentElement.category===name;
           })
          
    
           
           setData1(updated);
           console.log(updated);
       }
    }
    
    function handleCard(currEle)
    {
        return (
            <>
               
                <h3><HandleContainer currEle={currEle} /></h3>
            
            </>
          
           
             );

    }
    

   return (
    <>

                <nav className="navbar">
                    <div className="btn-group">
                        <input type="text" onChange={handleChange} name="username" placeholder="Search by username"></input>
                    </div>
                </nav>
      <section className="main-card--cointainer">
                     {MenuData1.map(handleCard)}
        </section>
        
    </>
   )
}

export default Cards;
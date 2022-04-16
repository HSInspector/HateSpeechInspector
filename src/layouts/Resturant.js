import React,{useState} from "react";
import "./styles.css";
import Menu from "./API";
import HandleContainer from "./HandleContainer";
function Resturant()
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
               
             <HandleContainer currEle={currEle} />
            
            </>
          
           
             );

    }
    

   return (
    <>

                <nav className="navbar">
                    <div className="btn-group">

                        <button onClick={handleClick} name="Islamophobia" className="btn-group__item">Islamophobia</button>
                        <button onClick={handleClick} name="Racism" className="btn-group__item">Racism</button>
                        <button  onClick={handleClick} name="Sexism" className="btn-group__item">Sexism</button>
                        <button onClick={handleClick}  name="General Hate" className="btn-group__item">General Hate</button>
                        <button onClick={handleClick}  name="No-Hate" className="btn-group__item">No-Hate</button>                        
                        <button onClick={handleClick} name="all" className="btn-group__item">All</button>

                        <input type="text" onChange={handleChange} name="username" placeholder="Search by username"></input>
                    </div>
                </nav>
      <section className="main-card--cointainer">
                     {MenuData1.map(handleCard)}
        </section>
        
    </>
   )
}

export default Resturant;
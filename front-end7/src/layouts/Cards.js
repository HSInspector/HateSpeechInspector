import React,{useState} from "react";
import "./styles.css";
import Menu from "./API";
import HandleContainer from "./HandleContainer";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";

function Cards(props)
{
    
    
    let converted_data = props.value;
    const [MenuData,setData]=useState(converted_data);
    const [MenuData1,setData1]=useState(MenuData);


    
    function handleClick(Event)
    {
        
        
        // console.log(MenuData);
       const name=Event.target.name;

       if(name==="all")
       {
           setData1(converted_data);
       }else{

        const updated=MenuData.filter((currentElement,index)=>{
            return currentElement.category===name;
           })

           setData1(updated);
        //    console.log(updated);
       }
    }

    
    
    function HandleCard(props)
    {
        
        const currEle = props.value
        return (
            <>
               
             <HandleContainer currEle={currEle}/>
            
            </>
          
           
             );

    }

    const listItems = MenuData1.map((currEle) =>
    <HandleCard key={currEle.id} value={currEle}/>
    )


   return (
    <>

        <nav className="navbar  justify-content-center">
            <div className="btn-group">

                <button onClick={handleClick} name="Islamophobia" className="btn-group__item">Islamophobia</button>
                <button onClick={handleClick} name="Racism" className="btn-group__item">Racism</button>
                <button  onClick={handleClick} name="Sexism" className="btn-group__item">Sexism</button>
                <button onClick={handleClick}  name="General Hate" className="btn-group__item">General Hate</button>
                <button onClick={handleClick}  name="No-Hate" className="btn-group__item">No-Hate</button>
                <button onClick={handleClick} name="all" className="btn-group__item">View All</button>

                {/* <input type="text" onChange={handleChange} name="username" placeholder="Search by username"></input> */}
            </div>
                </nav>

        <section>
            {listItems}
        </section>
        
    </>
   )
}

export default Cards;
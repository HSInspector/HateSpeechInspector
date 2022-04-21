import React,{useState} from "react";
import "./styles.css";
import Menu from "./API";
import HandleContainer from "./HandleContainer";
import { useLocation } from "react-router-dom";

function Cards(props)
{
    
    
    let location = useLocation();
    const [TweetData, setTweetData] = useState(location.state.data);
    // console.log(TweetData);
    let converted_data = [];
    for (let i = 0; i < TweetData.tweets.length; i++) {
        let temp = {id: i,
            name: TweetData.username[i],
            category: getCategory(TweetData.types[i]),
            description: TweetData.tweets[i]
        };
        converted_data.push(temp);
      }
    console.log(converted_data);
    const [MenuData,setData]=useState(converted_data);
    const [MenuData1,setData1]=useState(MenuData);

    function getCategory(label){
        switch(label){
            case 0:
              return "No-Hate";
            case 1:
              return "General Hate";
            case 2:
              return "Racism";
            case 3:
              return "Sexism"
            case 4:
              return "Islamophobia";
      
          }
    }

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

    function handleDataChange(){
        console.log('menu changed')
    }
    
    
    function HandleCard(props)
    {
        
        const currEle = props.value
        return (
            <>
               
             <HandleContainer currEle={currEle} onChange={handleDataChange}/>
            
            </>
          
           
             );

    }

    const listItems = MenuData1.map((currEle) =>
    <HandleCard key={currEle.id} value={currEle}/>
    )


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

                        {/* <input type="text" onChange={handleChange} name="username" placeholder="Search by username"></input> */}
                    </div>
                </nav>
      <section className="main-card--cointainer">
                     {listItems}
        </section>
        
    </>
   )
}

export default Cards;
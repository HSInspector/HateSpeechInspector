
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";

import Search_By_Username from "./layouts/Search_By_Username";
import Tables from "views/examples/Tables.js";
import React from 'react'

import HelloWorldFile from "components/Headers/HelloWorldFile";
import UserHeader from "components/Headers/UserHeader";
import Login from "components/Footers/AuthFooter";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
function MakeAnotherNavBar(){
    
      
    <select 

    options={options}

    placeholder="Select"
    style={{
      backgroundColor: "#0680F5",
      color: "#FFFF",
      textDecoration: "bold"
    }}
    
  >

     <option value="View with Time Filter">View with Time Filter</option>
    <option value="View All Tweets">View All Tweets</option> 
  </select>
}
function ReturnNavBar(props) {
    console.log("View Searched Tweets");
    console.log(props.value);
    if (props.value === "View with Time Filter2") {
      
    } else if (props.value === "View All Tweets2") {
      return <routes />;
    }
  }


function InHTML(){
    <div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
}
var routes = [{
        path: "/icons",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: HelloWorldFile,
        layout: "/admin",
        
    },
//Find file first from examples then from components
    {
        path: "/HelloWorld",
        name: "View Searched Tweets",
        icon: "ni ni-single-02 text-yellow",
        component: HelloWorldFile,
        layout: "/auth"
    },
    // {
    //     path: "/Profile",
    //     name: "View all Tweets",
    //     icon: "ni ni-bullet-list-67 text-red",
    //     component: Profile,
    //     layout: "/viewalltweets",
        
    // },
    // {
    //     path: "/Tables",
    //     name: "Download Report",
    //     icon: "ni ni-key-25 text-info",
    //     component: Tables,
    //     layout: "/auth"
    // },

    {
        path: "/icons",
        name: "Visualize Tweets",
        icon: "ni ni-planet text-blue",
        component: UserHeader,
        layout: "/admin"
    }
    // {
    //     path: "/icons",
    //     name: "Draw Pie Chart",
    //     icon: "ni ni-planet text-blue",
    //     component: UserHeader,
    //     layout: "/admin"
    // },
    // {
    //     path: "/icons",
    //     name: "Show Timeline",
    //     icon: "ni ni-planet text-blue",
    //     component: UserHeader,
    //     layout: "/admin"
    // },
    // {
    //     path: "/icons",
    //     name: "Show Radar Chart",
    //     icon: "ni ni-planet text-blue",
    //     component: UserHeader,
    //     layout: "/admin"
    // }
  
];

{/* function routes()
{
  return <h1>Taha Ahamad</h1>
} */}

export default routes;

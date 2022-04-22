/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect} from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Cards from "./Cards";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import Sidebar from "components/Sidebar/Sidebar";

const ViewAllTweets = (props) => {
  const mainContent = React.useRef(null);
  const [clicked, setClicked] = React.useState(false);
  let location = useLocation();
  const [TweetData, setTweetData] = React.useState(location.state.data);
  let converted_data = [];
    // console.log(TweetData);
    React.useEffect(() => {
      for (let i = 0; i < TweetData.tweets.length; i++) {
        let temp = {id: i,
            name: TweetData.username[i],
            category: getCategory(TweetData.types[i]),
            description: TweetData.tweets[i]
        };
        converted_data.push(temp);
    }
    console.log(converted_data);

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
    })
    

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/viewalltweets") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const handleCallback = (searchData) =>{
    location.state.data=searchData;
    setTweetData(searchData);
    console.log("Data recieved");
  }

function rowClick(n) {
    setClicked(!clicked);
}


  return (
    <>
    <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/HSlogo.png").default,
          imgAlt: "...",
        }}
        data={TweetData}
      />
      <div className="main-content" ref={mainContent}>
      {/* <AdminNavbar
          {...props}
          // brandText={getBrandText(props.location.pathname)}
          parentCallback = {handleCallback}
        /> */}
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">View Searched Tweets</h1>
                  
                </Col>
              </Row>
            </div>
            {/* <table>
                <tbody>
                    <tr onClick={rowClick}>
                    <td>
                    <div>main row - onclick toggle the rows under</div></td>
                    <td></td>
                    </tr>
                    <tr className={clicked && 'hide' }>
                    <td>
                    <div>show only if clicked on the row above (smoothly)</div></td>
                    <td></td>
                    </tr>
                    <tr className={clicked && 'hide' }>
                    <td><div>show only if clicked on the first row (smoothly)</div></td>
                    <td></td>
                    </tr>
                </tbody>
            </table> */}
            <h1> View all tweets</h1>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        {/* <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container> */}
      </div>
      {/* <AuthFooter /> */}
{/* 
      <Container>
          <Cards value={converted_data}/>
      </Container> */}
      
    </>
  );
};

export default ViewAllTweets;

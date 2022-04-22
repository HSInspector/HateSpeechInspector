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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = (props) => {
  var Racism = 0;
  var Sexism = 0;
  var Islamophobia = 0;
  var General = 0;
  var No_Hate = 0;
  var total_tweets=0;
  if(props.termSearched){
    var data02 = props.data;
    
    data02['types'].forEach((element, index) => {
      switch(data02['types'][index]){
        case 0:
          No_Hate+=1;
          total_tweets+=1;
          break;
        case 1:
          General+=1
          total_tweets+=1;
          break;
        case 2:
          Racism+=1;
          total_tweets+=1;
          break;
        case 3:
          Sexism+=1;
          total_tweets+=1;
          break;
        case 4:
          Islamophobia+=1;
          total_tweets+=1;
          break;
  
      }
    });

  }
  else{
    // return <h1>hello showchart</h1>;
  }

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row style={{width:"30px",height:"40px"}}>
                      <h1>TotalTweets</h1>
                      <h3>{total_tweets}</h3>
                      
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <Row style={{width:"30px",height:"40px"}}>
                      <h1>Islamophobia</h1>
                      <h3>{Islamophobia}</h3>
                      
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <Row style={{width:"30px",height:"40px"}}>
                      <h1>Racism</h1>
                      <h3>{Racism}</h3>
                      
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <Row style={{width:"30px",height:"40px"}}>
                      <h1>Sexism</h1>
                      <h3>{Sexism}</h3>
                      
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            <Col lg="6" xl="3" style={{marginTop:"40px",marginLeft:"0px"}}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody style={{}}>
                  <Row style={{width:"30px",height:"40px"}}>
                      <h1>GeneralHate</h1>
                      <h3>{General}</h3>

                      
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3" style={{marginTop:"40px",marginLeft:"0px"}}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <Row style={{width:"30px",height:"40px"}}>
                      <h1>NoHate</h1>
                      <h3>{No_Hate}</h3>
                      
                    </Row>
            
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
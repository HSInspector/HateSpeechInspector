import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
  } from "reactstrap";
  // core components
  // import Hello from "./hello";
  
  import HelloWorldFile from "components/Headers/HelloWorldFile";
  
  const HelloWorld = () => {
    return (
      <>
        <HelloWorldFile />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col> */}
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardBody>
                  <Form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Farman Husnain"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default HelloWorld;
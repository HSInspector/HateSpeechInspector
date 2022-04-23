import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import { useState } from "react";

const AdminNavbar = (props) => {
  const [option, setOption] = useState("Keyword");
  const [searchTerm, setSearchTerm] = useState("");
  var [searchData, setSearchData] = useState();
  const handleChange = (event) => {

    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (event) =>{
    setOption(event.target.value);

  };
  
  const sendSearchedData = (data)=>{
    // console.log(searchData);
    props.parentCallback(data);
  }
  const handleKeyDown = (e) => {
    
    if (e.key === "Enter") {
      
      fetch("/search/keyword", {
        method: "POST",
        body: JSON.stringify({
          content: searchTerm,
          option: option
        }),
      })
      .then((res) => {

        return res.json().then((data) => {
          // console.log(data)
          // this.setSearchData(data);
          sendSearchedData(data);
        });
      });
      
      setSearchTerm("")
      e.preventDefault();
    }
  };
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
    
              <select
          name={option}
          onChange={handleOptionChange}
          placeholder="Select"
          style={{
            height:"50px",
            width:"200px",
            backgroundColor: "#0680F5",
            color: "#FFFF",
            // textDecoration: "bold",
            paddingLeft:"25px",
           marginTop:"0px",
           marginLeft:"10px",
           borderRadius:"30px",
           marginBottom:"3px"
          }}
          // name="Select the chart"
        >
          <option value="Keyword">Search By Keyword</option>
          <option value="Username">Search By Username</option>
        </select>

              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input placeholder="Search" type="text" value={searchTerm} onChange={handleChange} onKeyDown={handleKeyDown}/>
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                {/* <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Taha Ahmad
                    </span>
                  </Media>
                </Media> */}
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;

import react from 'react';
function MakeAnotherNavBar(){
    <select
    // name={option}
    // onChange={handleChange}
    placeholder="Select"
    style={{
      backgroundColor: "#0680F5",
      color: "#FFFF",
      textDecoration: "bold"
    }}
    
  >
    {/* <option value="View with Time Filter">View with Time Filter</option>
    <option value="View All Tweets">View All Tweets</option> */}

    <optgroup label="View with Time Filter1">
    <option value="select">Select a language</option>
          <option value="Filter1">JavaScript</option>
          <option value="Filter2">PHP</option>
          <option value="Filter3">Java</option>
          <option value="Filter4">Golang</option>
        </optgroup>
        <optgroup label="View All Tweets1">
          <option value="Tweet1">Python</option>
          <option value="Tweet2">C#</option>
          <option value="Tweet3">C++</option>
          <option value="Tweets4">Erlang</option>
        </optgroup>

  </select>
}
function ReturnNavBar(props) {
    console.log("View Searched Tweets");
    console.log(props.value);
    if (props.value === "View with Time Filter") {
      
    } else if (props.value === "View All Tweets") {
      return <routes />;
    }
  }
  

//   <form action="#">
//       <label for="lang">Language</label>
//       <select name="languages" id="lang">
//         <optgroup label="first-choice">
//           <option value="select">Select a language</option>
//           <option value="javascript">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="java">Java</option>
//           <option value="golang">Golang</option>
//         </optgroup>
//         <optgroup label="second-choice">
//           <option value="python">Python</option>
//           <option value="c#">C#</option>
//           <option value="C++">C++</option>
//           <option value="erlang">Erlang</option>
//         </optgroup>
//       </select>
//       <input type="submit" value="Submit" />
// </form>
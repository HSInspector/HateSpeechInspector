import "./styles.css";
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";





function App(x) {
  var Racism = 0;
  var Sexism = 0;
  var Islamophobia = 0;
  var General = 0;
  var No_Hate = 0;

  var data01 = [
    { name: "No Hate", value: 0 },
    { name: "General Hate", value: 0 },
    { name: "Racism", value: 0 },
    { name: "Sexism", value: 0 },
    { name: "Islamophobia", value: 0 }
  
  
  ];
  var data02 = x.data;
  data02['types'].forEach((element, index) => {
    switch(data02['types'][index]){
      case 0:
        No_Hate+=1;
        break;
      case 1:
        General+=1
        break;
      case 2:
        Racism+=1;
        break;
      case 3:
        Sexism+=1;
        break;
      case 4:
        Islamophobia+=1;
        break;

    }
  });

  
data01[0]['value'] = No_Hate
data01[1]['value'] = General
data01[2]['value'] = Racism
data01[3]['value'] = Sexism
data01[4]['value'] = Islamophobia
  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />

      <Tooltip />
    </PieChart>
  );
}
export default App;

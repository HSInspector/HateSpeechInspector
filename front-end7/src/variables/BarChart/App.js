import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";
//testing data
// const data = [
//   {
//     name: "Racism",
//     Tweets: 800
//   },
//   {
//     name: "Sexism",
//     Tweets: 967
//   },
//   {
//     name: "Islamophobia",
//     Tweets: 1200
//   },
//   {
//     name: "General Hate",
//     Tweets: 1108
//   },
//   {
//     name: "No hate",
//     Tweets: 680,
//     cnt: 380
//   }
// ];
  

export default function App(x) {
  var Racism = 0;
  var Sexism = 0;
  var Islamophobia = 0;
  var General = 0;
  var No_Hate = 0;

  var data01 = [
    { name: "No Hate", Tweets: 0 },
    { name: "General Hate", Tweets: 0 },
    { name: "Racism", Tweets: 0 },
    { name: "Sexism", Tweets: 0 },
    { name: "Islamophobia", Tweets: 0 }


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


data01[0]['Tweets'] = No_Hate
data01[1]['Tweets'] = General
data01[2]['Tweets'] = Racism
data01[3]['Tweets'] = Sexism
data01[4]['Tweets'] = Islamophobia
  return (
    <ComposedChart
      width={800}
      height={400}
      data={data01}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Tweets" barSize={20} fill="#413ea0" />
    </ComposedChart>
  );
}

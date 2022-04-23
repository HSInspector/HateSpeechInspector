import "./styles.css";
import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell} from "recharts";





function App(x) {
  var Racism = 0;
  var Sexism = 0;
  var Islamophobia = 0;
  var General = 0;
  var No_Hate = 0;

  var data01 = [
    { name: "No Hate", value: 278 },
    { name: "General Hate", value: 200 },
    { name: "Racism", value: 400 },
    { name: "Sexism", value: 300 },
    { name: "Islamophobia", value: 300 }
  
  
  ];
  var data02 ={ "tweets": ["hot souce hello future glitch mode #shopeeundangnctdream #nantikanbrstvshow #nctzenxsobatshopee 1542"
  , "20220409 fan weibo update 10p (1/3) hello, zhang yixing cr. rose10_forlay #layzhang #lay #yixing #장이씽 #레이 #レイ #อี้ชิง #ييشينغ #张艺兴 #ییشینگ "
  , "hello interested po, consider me. i can send samples in dm."
  , "hello pot- tagsen hihnvadestrinoma #virtualassemblydonbelle"
  ,"hello! this is a fan acc but i want to use it right now. kapatid po ako sa inc and as of now wala pa pong pasya ang pamamahala namin. maybe, kaanib din po si kuya or maybe hindi? kasi wala naman po sa utos na pwede po kami maki bahagi sa pangangampanya."
  , "hello pii everyone~ ask ko lang sana if okay na po yung ganitong packaging? wala pa naman yung ggu ggu package ko pero tinry ko lang if kasya 🥲 "
  , "終わりはないですよ☺️"
  , "hello kak chita...selamat sore...pengen banget disapa kak chita🥺❤"
  , "hello, let's be mutual? fb thankyouu!"
  , "hello, our representative will get in touch with you at the earliest to address your query. kind regards, rbl bank"
  , "hello"
  , "thought briefly maybe good omens gabriel and was like well hello then what's this 🤣🤣"
  ,"hello"
  ,"hello"
  ,"hello, thank you for taking our call. we hope your query was resolved. for any further assistance, reach out to us through direct message. kind regards, rbl bank."
  ,"hello prof. how are you doing. please can we chat on skype?"
  ,"hello"],
  "types": [1
  ,1
  ,1
  ,1
  ,1
  ,1
  ,0
  ,1
  ,1
  ,1
  , 0
  , 2
  , 0
  , 0
  , 1
  , 1
  ,0]};
  data02 = x.data;
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
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6066'];
  
  data01[0]['value'] = No_Hate
  data01[1]['value'] = General
  data01[2]['value'] = Racism
  data01[3]['value'] = Sexism
  data01[4]['value'] = Islamophobia
  return (
    
    <PieChart width={1000} height={1000}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        labelLine={true}
        cx={450}
        cy={180}
        outerRadius={100}
        fill="#8884d8"
        label
        // label={renderCustomizedLabel}
        >
          {
          data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        </Pie>
        
      
      
      <Legend layout="horizontal" verticalAlign="top" align="center" />
      <Tooltip />
    </PieChart>
  );
}
export default App;

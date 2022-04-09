import "./styles.css";
const data1 = [{ tweet: ["Hahahhaah ", "LMAO"] }, { label: [1, 4, 5] }];

function ReptileList() {
  // const reptiles = ["alligator", "snake", "lizard"];

  return (
    <ol>
      {data1.map((data1) => (
        <li>
          <h3>{data1["label"]}</h3>
        </li>
      ))}
      <p>Taha Ahmad Mirza</p>
    </ol>
  );
}
export default ReptileList;

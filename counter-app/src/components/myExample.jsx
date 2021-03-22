import axios from "axios";
import { useEffect, useState } from "react";

const Example = () => {
  const [value, setValue] = useState("");
  const [defaultVal, setDefaultVal] = useState([]);
const [count,setcount] =useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.log(response.data.data);
    console.log("In exaasdse", value);
    setDefaultVal(response.data.data);
  };
  const fetchData1 = () => {
    console.log("In fetchData1");
  };

//   useEffect(() => {
//     fetchData1();
//   }, [value]);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log("res", defaultVal);

  useEffect(()=>{
      document.title = `You clicked ${count} times`;
      console.log("In use effect.. clicked ", count, " times");
  },[count]);
  return (
    <>
      <br />
      {/* <input type="text" value={value} onChange={handleChange} /> */}
    
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setcount(count + 1)}>
        Click me
      </button>
    </div>
    </>
  );
};

export default Example;
//we can separate effects by their purpose: we can create as many effects as needed as per need
//this is not possible in classes
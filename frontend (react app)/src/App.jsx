import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
  //talk to express server 
  fetch('http://localhost:5000/api/hospitals')
    .then((res) => res.json())
    .then((data) => setData(data.message))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div>
        <h1>React + Node Demo</h1>
        <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default App;
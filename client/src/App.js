import React, {useState, useEffect} from 'react';


function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=>{
    fetch('/home').then(response => {
      response.json().then(
        data => {
          setBackendData(data)
        }
      )
    })
  }, []);

  return (
    <div>
      {backendData.user.map(user => {
        return(<div>{user.id}</div>)
      })}
    </div>
  );
}

export default App;

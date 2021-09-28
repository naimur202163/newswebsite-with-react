import { useEffect, useState } from "react";
import { ButtonGroup,Button, Spinner, Row, Col, Card } from "react-bootstrap";
import News from "./components/News/News";

function App() {
  const[newes,setNews]=useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=913157ff38794e12a9a92bb2c0ed1383')
    .then(res=>res.json())
    .then(data=>setNews(data.articles))

  },[])
  return (
    <div className="App">


{
    newes.length===0? <Spinner animation="border" />:


<Row xs={1} md={2} className="g-4">
{
    

  newes.map(news=><News
    news={news}
  
  ></News>
  )
}
</Row>

}




    </div>
  );
}

export default App;

import './reset.css';
import './App.css';
import {useEffect, useState} from "react"
import SearchBox from './SearchBox';
import MainBox from './MainBox';
import MiddleBox from './MiddleBox';
import BottomBox from './BottomBox';
import HeadBox from './HeadBox';



function App() {
  const [user, setUser] = useState("octocat")
  const [data, setData] = useState()
  
  const [click, setClick] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [info, setInfo] = useState(false)
  
  

  function change(){
    setUser(inputValue)
  }
  
  function onClick(){
    if(click / 2 === 0){
      setClick(true)
    }else{
      setClick(false)
    }
    
  }

  function getInfo(){
    
    fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json)
      setInfo(true)
      
    })}

    useEffect(()=>{
      getInfo()
    }, [user])

    

return (
   <div style={click ? {backgroundColor: "#141D2F"} : {backgroundColor: "#FEFEFE"}} className='body'>
    <div className='container'>
      <div>
        <HeadBox clicked={onClick} click={click} />
      </div>
      <div>
        <SearchBox clicked={onClick} click={click} inputValue={inputValue} changeInputValue={(e)=>setInputValue(e.target.value)} change={change} />
      </div>
      <div style={{backgroundColor: "#FEFEFE", width: "730px", borderRadius: "15px", height: "419px", display: "flex", flexDirection: "column", justifyContent: "space-around",}}>
        <div>
        {info ? <MainBox data={data} /> : ""}
        </div>
        <div>
          {info ? <MiddleBox data={data} /> : ""}
        </div>
        <div>
          {info ? <BottomBox data={data} /> : ""} 
        </div>
      </div>
      
  </div>
  </div>
  
) 
}

export default App;

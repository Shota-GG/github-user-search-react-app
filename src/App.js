import './reset.css';
import './App.css';
import {useEffect, useState} from "react"
import SearchBox from './SearchBox';
import MainBox from './MainBox';



function App() {
  const [user, setUser] = useState("octocat")
  const [data, setData] = useState()
  const [search, setSearch] = useState("")
  const [click, setClick] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [info, setInfo] = useState(false)


  function change(){
    setUser(inputValue)
  }
  

  function getInfo(){
    
    fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      setData(json)
      setInfo(true)
      console.log(user);
    })}

    useEffect(()=>{
      getInfo()
    }, [user])

return (
  <div>
    <SearchBox inputValue={inputValue} changeInputValue={(e)=>setInputValue(e.target.value)} change={change} />
    {info ? <MainBox data={data} /> : ""}
  </div>
)
   
  
}

export default App;

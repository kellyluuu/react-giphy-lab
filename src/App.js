import './App.css'
import Form from './components/Form'
import Main from './components/Main'
import {useState, useEffect} from "react"




function App() {
    const API_KEY="zm06aM9HfoLJLbGCZ5p2ThLkpAtg24LX"
    const [gif,setGif] = useState(null)
    //function to get gif 
    const getGif = async (search)=>{
        const searchTerm = search
        //make API Call 
        const respond = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}&rating=pg-13`)
        //convert to js object 
        const data = await respond.json()
        if (searchTerm==="IDK how else to stop"){
            setGif("https://media.emailonacid.com/wp-content/uploads/2019/03/2019-GifsInEmail.gif")
        }else{
        setGif(data.data.images.downsized.url)
        console.log(searchTerm)
    }}
    useEffect(()=>{getGif("IDK how else to stop")}, [])
    

    return (
        <div className="App">
            <Form getGif={getGif} />
            <Main gif={gif} />
        </div>
    )
}


export default App;

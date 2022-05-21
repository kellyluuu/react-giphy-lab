
const Main = (props)=>{
const idkHowElseToStop = "https://media.emailonacid.com/wp-content/uploads/2019/03/2019-GifsInEmail.gif"
  const loaded = ()=>{ 
      return(
            <div className="main">
                  <h2>Use Giphy to pull some giphs </h2>
                  <img wide={"400px"} src={props.gif} alt="img"/>
            </div>
        )    
  }
  const loading=()=>{
        return <h1>Make API Call....</h1>
  }
  return props.gif !== idkHowElseToStop ? loaded() : loading()
}


export default Main


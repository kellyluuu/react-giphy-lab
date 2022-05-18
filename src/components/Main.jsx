
const Main = (props)=>{
  //  const title = props ? props.gif.data.title : "loading...."
        return(
            <div className="main">
                  <h2>Use Giphy to pull some giphs </h2>
                  <img src={props.gif} alt="img"/>
                  
            </div>
        )

}

export default Main


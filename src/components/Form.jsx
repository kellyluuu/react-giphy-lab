import {useState} from "react"

const Form = (props)=>{
    const [formState, setFormState] = useState ({search: "",})
    const handleChange = (event)=>{
        //make a new copy of current state
        const newState = {...formState}
        //update the copy
        newState[event.target.name] = event.target.value
        // set state
        setFormState(newState)
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        props.getGif(formState.search)
        setFormState({
            search: ""
        })
    }
    return (
        <div className="form">
            <h1>Giphy</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="search" onChange={handleChange} value={formState.search}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Form

//<input type="text" name="search" onChange={handleChange} value={formState.search}/>
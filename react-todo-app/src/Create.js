import { useState } from "react";

const Create =()=>{

    const [title,setTitle]=useState('');
    const [body,setBody]= useState('');
    const [author,setAuthor] = useState('Mario');
    
    return(
        <div className="create">
        <h2>Add a new blog</h2>
        <form>
            <label>Blog Title</label>
        <input type='text' value={title} required
            onChange={(e)=>{setTitle(e.target.value)}}
        />
        <label>Blog Body</label>
        <textarea value={body} required 
        onChange ={(e)=>{setBody(e.target.value)}}
        ></textarea>
        <label>Blog Author</label>
        <select value ={author} onChange ={(e)=>{setAuthor(e.target.value)}} >  
            <option value='Mario'>Mario</option>
            <option value='Yoshi'>Yoshi</option>
        </select>
        <button>Add a new blog</button>  
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        </form>


        </div>
    );

}


export default Create;
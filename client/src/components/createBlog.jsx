import axios from 'axios';
import React,{useState} from 'react';

function Create() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    function handleSubmit(){
        const Blog ={
            title: title,
            body: body,
            img: image,
        }
        let config ={
            headers:{
                'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZkOGI1ZDYwZmIzNzliOTgzYzEzYzkiLCJpYXQiOjE2NDQwMzYwNDR9.QyIMhz3cZjGBSET_u7wWzvD6_xTSjD3B9zmMK7chK0Q"
            }
        }
        useEffect(() => {
            axios.post("http://localhost:5000/api/blog/create",Blog,config)
            .then(res=>console(res.json()))
            .catch((err)=>console.log(err));
        }, []);
        
      
    }
   

   return(
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="body"
             value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
              <input
            type="url"
             placeholder="Image URL"
             value={image}
            onChange={(e)=>setImage(e.target.value)}
             />
           
            <button className=""
            onClick={handleSubmit()}
            
            >
                Submit post
            </button>

       </div>
   )
}


export default Create;

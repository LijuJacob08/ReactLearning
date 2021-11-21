import {useState} from 'react';

const Home = () => {
  
  const [blogs,setBlogs]= useState([
    {titile:'My new website', body: 'lorem ipsum..',author:'mario',id:1},
    {titile:'Welcome Party', body: 'lorem ipsum..',author:'Yoshi',id:2},
    {titile:'Web dev top tips', body: 'lorem ipsum..',author:'mario',id:3},

  ]);      
  
     
  
    return (    
        <div className="home">
           {blogs.map((blog) => (
               <div className="blog-preview" key={blog.id} > 
                <h2>{blog.titile}</h2>
                <p>written by {blog.author}</p>
               </div>
            ))
            }  
        </div>

      );
}
 
export default Home;    
    

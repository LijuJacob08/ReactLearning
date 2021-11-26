import { useParams } from "react-router";
import BlogList from "./BlogList";

const BlogDetails = () => {

    const{id} =useParams();
    return (  
        <div className="bolog-details">
                 <h2>Blog Details -{id}</h2>
        </div>


    );
}
 
export default BlogDetails;
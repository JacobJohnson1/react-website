import Blog from "../components/Blog"
import BlogNavbar from "../components/BlogNavbar"
import '../App.css';

export default function BlogHome(){
    return(
        <div className="Home">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <BlogNavbar />
            <p>blog post 1</p>
            <img className='blogBackground' src='/sharkVac.png' />
            
        </div>
    )
}
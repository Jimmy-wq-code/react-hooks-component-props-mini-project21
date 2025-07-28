import blogData from "../data/blog"
import Article from "./Article"

function ArticleList({posts}){
   const blogPost= posts.map((props)=>{
        return(
            <Article key={props.id}  title={props.title} date={props.date} preview={props.preview}/>
        )
    })

    return(

    <main>
        {blogPost}

    </main>
    )

}
export default ArticleList
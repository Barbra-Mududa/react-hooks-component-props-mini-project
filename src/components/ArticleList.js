import React from "react";
import  Article from "./Article"


function ArticleList({posts}){
    const lists = posts.map((list)=>{
        return(
            <Article key={list.id}
            title={list.title}
            date={list.date}
            preview={list.preview}
            /> 
        )
    })
    return(
        <main>
             {lists} 
        </main>
    )
}

export default ArticleList
import React from 'react'
import Article from './Article'

function ArticleList(props){
    console.log(props)
    const articleArray = props.postArray.map(article => <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>)

    return (
     <main>{articleArray}</main>
    )
}

export default ArticleList
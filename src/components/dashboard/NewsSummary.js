import React from'react'

const NewsSummary = ({ article }) => {

    return (
        <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src={article.urlToImage}/>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{article.title}<i class="material-icons right">more_vert</i></span>
          <p ><a class="teal-text" href={article.url}>Full Story...</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{article.title}<i class="material-icons right">close</i></span>
          <div className="module fade">
          <p>{article.description}</p>
          </div>
        </div>
      </div>
    )
}

export default NewsSummary
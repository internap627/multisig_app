import React from'react'

const NewsSummary = ({ article }) => {
    
    return (
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={article.urlToImage}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
          <p ><a className="teal-text" href={article.url}>Full Story...</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
          <div className="module fade">
          <p>{article.description}</p>
          </div>
        </div>
      </div>
    )
}

export default NewsSummary
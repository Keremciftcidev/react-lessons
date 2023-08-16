import React from 'react'

export const Course = (props) => {
    console.log(props)
    const title = props.title
    const description = props.description
    const image = props.image
   
  return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
            <img src={image} alt="Placeholder image"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-left">
            
            </div>
            <div className="media-content">
                <p className="title is-4">{title}</p>
                
            </div>
        </div>

            <div className="content">{description}</div>
        
  </div>
  )
}
  
  

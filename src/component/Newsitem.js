import React from 'react'

const Newsitem =(props)=>{


    let { tittle, description, imageUrl, newsurl,Author,date } = props;
    return (
      <div className='my-3 '>
        <div className="card rounded-4"  >
          {/* use of if else statement due to if in the news have no any image then use my default image otherwise use website image
           */}
          <img src={!imageUrl?"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_236002245.JPG":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By  {!Author? "Unkown":Author} on {date}</small></p>
            {/* target use karne se alag web open hojayega */}
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary btn-dark" >Read More</a>
          </div>
        </div>
        
        
      </div>
    )
  
}

export default Newsitem

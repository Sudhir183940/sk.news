import React from "react";

const NewsItems =(props)=> {
    let{title,description,imageUrl,newsUrl,date,author,source}=props;
    let d=new Date(date);
    return (
      <div>
        <div className="card" >
        <span className="source position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'15%'}}>{source}</span>
          <img src={!imageUrl?"https://us.123rf.com/450wm/oly5/oly51405/oly5140500761/28304404-royal-blue-background-black-border-cool-blue-color-background-book-cover-vintage-grunge-background.jpg":imageUrl} className="card-img-top" alt="Loading..." />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}.....</p>
            <p className="date"><b>--By {author?author:"Unknown"} on {d.toGMTString()}</b></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="readmore btn btn-danger">Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems

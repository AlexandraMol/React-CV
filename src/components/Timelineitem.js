import React from 'react';
const TimelineItem = ({data}) =>(
   <div className="timeline-item">
       <div className="timeline-item-content">
           <span className="tag" style={{background: data.category.color}}>
               {data.category.tag}
           </span>
           <time>{data.date}</time>
           <p>{data.text}</p>
           {data.link && <a href={data.link.url}
           target="_blank"
           rel="-----">
               {data.link.text}
           </a>}
           <p>{data.description}</p>
        <span className="circle"></span>
       </div>
   </div>
);

export default TimelineItem;
import React from 'react';
import '../styles/Showcaserow.css';
import { Typography } from 'antd';

export default function Showcaserow({ data, title, limit}){
  const { Paragraph } = Typography;

  return (
    <div className="showcaserow-container">
      <div className="showcaserow-title">{title && title}</div>
      <div className="overflow-scrolling">
        <div className="items-wrapper">
          {
            data && data.map((item, index) =>{
              return (
                <div key={index} className="item-container">
                  <img className="loading" src={item.image} alt={item.title}/>
                  <Paragraph ellipsis={{ rows: 2, expandable:false }}>
                    {item.category}
                  </Paragraph>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  ) 
}
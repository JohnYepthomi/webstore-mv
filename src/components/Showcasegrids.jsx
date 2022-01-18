import React from 'react';
import '../styles/Showcasegrids.css';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Showcasegrids({ title, limit, data }){
  const { Text } = Typography;
  const navigate = useNavigate();

  const handleItemClick = (id) =>{
    navigate(`/productdetails/${id}`);
  }

  return (
    <div className="showcasegrids-container">
      <div className="showcasegrids-title">{title && title}</div>
      <div className="grid-wrapper">
        { data && data.map((item, index)=>{
            if(index >= limit) return;
            return (
              <div key={index} className="grid-item-container" onClick={() => handleItemClick(item.id)}>
                <img className="loading" src={item.image} alt={item.title}/>
                <Text style={{width:"120px"}} ellipsis={true}>
                      {item.title}
                </Text>
              </div>
            )
          })
        }
      </div>
    </div>
  ) 
}
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, List, Avatar, Button, Skeleton } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import '../styles/Cart.css';

export default function Cart(){
    const [cartTotal, setCartTotal] = useState();
    const list = useSelector(state => state.products);  // using the entire products for now. Actual cart to be added
    const navigate = useNavigate();

    const handleProductClick = (id) =>{
        navigate(`/productdetails/${id}`)
    }

    useEffect(()=>{
        let total = 0;
        list.forEach(element => {
            total += element.price;
        });

        setCartTotal(parseFloat(total).toFixed(2));
    },[])
    
    return (
        <div className="cart-container">
            <div className="cart-total-container">
                <div style={{display:"flex"}}>
                    <div style={{fontSize:"1.5rem"}}>Subtotal</div>
                    <div className="cart-total">{ cartTotal }</div>
                </div>

                <Button type="primary" style={{backgroundColor: "orange", border:"1px solid orange"}} block > Place Order </Button>
            </div>

            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <div className="cart-item-container">
                            <div>
                                <img className="cart-img" src={item.image} alt={item.image}/>
                            </div>

                            <div>
                                <ul>
                                    <li>{item.title}</li>
                                    <li className="cart-item-price">{item.price}</li>
                                    <li style={{color: "gray", fontSize: "0.78rem"}}>Eligible for FREE delivery</li>
                                </ul>

                                <div className="cart-item-buttons-container">
                                    <Button type="ghost" shape="circle" icon={<PlusOutlined />} />
                                    <Button type="ghost" shape="default">
                                        1    
                                    </Button>
                                    <Button type="ghost" shape="circle" icon={<MinusOutlined />} />
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </ div>
    )
}
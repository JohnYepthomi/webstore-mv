import React, { useState, useEffect } from 'react';
import '../styles/ProductDetails.css';
import { Card, Select, Switch, Rate } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductDetials(){
    const { Meta } = Card;
    const { Option } = Select;
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const products = useSelector(state => state.products);

    useEffect(()=>{
        setProduct(products.filter(product => { return product.id === +productId })[0]);
    },[])

    const PricingComp = ({price}) =>{
        return (
            <>
                <div style={{fontSize: "1rem", fontWeight: "300"}} > ${price}</div>
            </>
        )
    }

    const handleQuantityChange = ()=>{
        // do something
    }

    const BuyNow = ({ product })=>{
        return (
            <section className="buynow-container">
                <div className="price">
                    <div>Total</div> <div>${product.price}</div>
                </div>
                
                <div className="quantity">
                    <div>Quantity</div> 
                    <Select defaultValue="1" style={{ width: 120 }} onChange={handleQuantityChange}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </div>
                
                <div className="buynow-button-container">
                    <button style={{backgroundColor: "orange"}}>Buy Now</button>
                    <button style={{backgroundColor: "yellow"}}>Add to Cart</button>
                </div>

                <div className="soldby">
                    <div>Sold By</div>
                    <div className="seller">Google Inc.</div>
                </div>

                <div className="location">
                    <div className="location-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <div> Select Delivery Location </div>
                    </div>
                </div>
            </section>
        )
    }

    const Details = () =>{
        return (
            <section className="details-container">
                <div>Details</div>
                <ul>
                    <li>
                        <div>Series</div>
                        <div>Chromebook</div>
                    </li>

                    <li>
                        <div>Brand</div>
                        <div>Google</div>
                    </li>

                    <li>
                        <div>Screen Size</div>
                        <div>14.8"</div>
                    </li>

                    <li>
                        <div>Manufacturer</div>
                        <div>Google</div>
                    </li>
                </ul>
            </section>
        )
    }
    
    return (
        <div className="product-details-container">
            <Card
                loading={loading}
                style={{ width: "100%" }}
                cover={
                    <img
                        alt="example"
                        width={"100%"}
                        style={{objectFit: "cover"}}
                        src={product && product.image}
                    />
                }
                actions={[
                    <PricingComp price={product.price} key="setting" />,
                    <Rate disabled style={{fontSize: "0.9rem"}} allowHalf defaultValue={2.5} />
                ]}
            >
                <Meta
                    title={product.title}
                    description={product.description}
                />
            </Card>
            <BuyNow product={product} />
            <Details />
        </div>
    )
}
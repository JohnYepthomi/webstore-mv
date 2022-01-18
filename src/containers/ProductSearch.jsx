import React, { useEffect } from 'react';
import '../styles/ProductSearch.css';
import { List, Skeleton, Typography, Rate } from 'antd';
import { CheckOutlined  } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsCreator from '../actions/actionsCreator'

export default function ProductSearch(){
    const { Paragraph } = Typography;
    const dispatch = useDispatch();
    const listData = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(actionsCreator.getAsyncProducts(20));
    },[])

    const ProductImage = ({ item }) =>{
        return (
            <div key={item.id} className="productdetails-image-container" >
                <img className="loading" src={item.image} alt={item.title} />
            </div>
        )
    }

    const ItemDetails = ({ item }) =>{
        return (
            <div className="font-md">
                <div style={{display: "flex", alignItems: "center"}}>
                    <Rate disabled style={{fontSize: "0.7rem"}} value={item.rating.rate} allowHalf defaultValue={2.5} />
                    <div style={{marginLeft: "7px" ,fontSize: "0.65rem"}}>({item.rating.rate})</div>
                </div>

                <div className="productsearch-price">
                    <div>${item.price}</div>
                </div>

                <div className="free-delivery">
                    <CheckOutlined style={{ color:"orange" }}/>
                    <div>Free Delivery</div>
                </div>
            </div>
        )
    }

    const ProductName = ({ item }) =>{
        return (
            <div className="productdetails-name">
                <Paragraph 
                    ellipsis={
                        {   rows: 3,
                            expandable:false,
                        }
                    }
                >
                    {item.title}
                </Paragraph>
            </div>
        )
    }

    return (
        <div className="productsearch-container">
            <List
                className="demo-loadmore-list"
                // loading={initLoading}
                itemLayout="horizontal"
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 10,
                  }}
                //loadMore={loadMore}
                dataSource={listData}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<ProductImage item={item} />}
                        title={<ProductName item={item} />}
                        description={<ItemDetails item={item} />}
                    />
                </List.Item>
                )}
            />
        </div>
    )
}
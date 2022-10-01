import React, { useContext, useState, useEffect } from "react";

import { Product } from "./store/ProductContextProvider";
import ProductItem from "./ProductItem";
import pic from '../assests/productimages/pic1.jpg'




export default function ProductList() {
  var [products, setproducts] = useState([]);
  var { getProduct } = useContext(Product);
  let variblepic = ``;

  async function getAPIData() {
    var response = await getProduct();
    console.log(response.data);
    setproducts(response.data);
  }
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {
             products.map((item, index) => {
                return <div key={index} className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    {/* {variblepic = require(`../assests/productimages/pic${index+1}.jpg`)} */}
                    {/* {variblepic = pic} */}
                    <ProductItem 
                      name={item.name} 
                      baseprice={item.baseprice} 
                      discount={item.discount} 
                      finalprice={item.finalprice} 
                      pic={require(`../assests/productimages/${item.pic1}`)} _id={item._id}/>
                </div>
            })
        }
      </div>
    </div>
  );
}

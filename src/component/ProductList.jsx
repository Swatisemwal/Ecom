import React, { useContext, useState, useEffect } from "react";

import { Product } from "./store/ProductContextProvider";
import ProductItem from "./ProductItem";





export default function ProductList(props) {
  var [products, setproducts] = useState([]);
  var { getProduct } = useContext(Product);


  async function getAPIData() {
    var response = await getProduct();
      // console.log(response.data);
      // console.log('mc:',props.mc);
      // console.log('sc:',props.sc);
      // console.log('br:',props.br);
      // console.log('item:',props.item);
      // console.log('maincat:',props.maincategory);  //undefind
      // console.log('subcat:',props.subcategory);     //undefind
    var p = []
    if(props.mc==="All" && props.sc==="All" && props.br==="All")
    p=response.data
  
    else if(props.mc!=="All" && props.sc==="All" && props.br==="All")
    p=response.data.filter((item)=>item.maincategory===props.mc)
    else if(props.mc==="All" && props.sc!=="All" && props.br==="All")
    p=response.data.filter((item)=>item.subcategory===props.sc)
    else if(props.mc==="All" && props.sc==="All" && props.br!=="All")
    p=response.data.filter((item)=>item.brand===props.br)
    else if(props.mc!=="All" && props.sc!=="All" && props.br==="All")
    p=response.data.filter((item)=>item.maincategory===props.mc && item.subcategory===props.sc)
    else if(props.mc!=="All" && props.sc==="All" && props.br!=="All")
    p=response.data.filter((item)=>item.maincategory===props.mc && item.brand===props.br)
    else if(props.mc==="All" && props.sc!=="All" && props.br!=="All")
    p=response.data.filter((item)=>item.brand===props.br && item.subcategory===props.sc)
    else
    p=response.data.filter((item)=>item.maincategory===props.mc && item.brand===props.br && item.subcategory===props.sc)
    // console.log(response.data);
    setproducts(p);
  }
  useEffect(() => {
    getAPIData();
  }, [props.mc,props.sc,props.br]);
  return (
    <div className="container-fluid">
      <div className="row ">
        {
             products.map((item, index) => {
                return <div key={index} className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
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

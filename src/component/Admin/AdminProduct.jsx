import React, { useState, useEffect, useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom'
import { Product } from "../store/ProductContextProvider";

import LeftNav from "./LeftNav";
import pic1 from '../../assests/productimages/p74.jpg'

function AdminProduct() {
  var [product, setproduct] = useState([])
  var {getProduct,deleteData} = useContext(Product)

  async function getAPIData() {
    var response = await getProduct()
    if (response.result === "Done")
        setproduct(response.data)
    else
        alert(response.message)
}

async function deleteRecord(_id){
  if(window.confirm("Are Your Sure to Delete : ")){
    var item = {
        _id:_id
    }
    await deleteData(item)
    getAPIData()
}
}


  useEffect(() => { 
    getAPIData()
}, [])
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-lg-2 col-md-4 col-sm-6 col-12">
          <LeftNav />
        </div>
        <div className="col-lg-10 col-md-8 col-sm-6 col-12">
        <h5 className='background text-light text-center p-1 mt-2'>Product Section <Link to="/admin-add-Product"><AddIcon className="text-light" /></Link></h5>
        <div className='table-responsive'>
          <table className='table table-light table-striped table-hover'>
                            <tbody>
                                <tr>
                                <th>Id</th>
                                    <th>Name</th>
                                    <th>Maincategory</th>
                                    <th>Subcategory</th>
                                    <th>Brand</th>
                                    <th>Base Price</th>
                                    <th>Discount</th>
                                    <th>Final Price</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Stock</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                {
                                    product.map((item, index) => {
                                        return <tr key={index}>
                                             <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.maincategory}</td>
                                            <td>{item.subcategory}</td>
                                            <td>{item.brand}</td>
                                            <td>&#8377;{item.baseprice}</td>
                                            <td>{item.discount}%</td>
                                            <td>&#8377;{item.finalprice}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>
                                            <td>{item.stock}</td>
                                            {console.log("file product1:", `../../assests/productimages/${item.pic1}`)}
                                            {/* {console.log("file product2:", item.pic2)}
                                            {console.log("file product3:", item.pic3)}
                                            {console.log("file product4:", item.pic4)} */}
                                            {/* {let pic1 = `../../assests/productimages/${item.pic1}`} */}
                                            <td><img src={require(`../../assests/productimages/${item.pic1}`)} width="100px" height="75px" className='rounded-1' alt=''></img></td>
                                            <td><img src={require(`../../assests/productimages/${item.pic2}`)} width="100px" height="75px" className='rounded-1' alt=''></img></td>
                                            <td><img src={require(`../../assests/productimages/${item.pic3}`)} width="100px" height="75px" className='rounded-1' alt=''></img></td>
                                            <td><img src={require(`../../assests/productimages/${item.pic4}`)} width="100px" height="75px" className='rounded-1' alt=''></img></td>
                                            <td><Link to={`/Admin-update-product/${item._id}`}><EditIcon className="text-danger"/></Link></td>
                                            <td><button className='btn mybtn' onClick={()=>deleteRecord(item._id)}><DeleteForeverIcon className="text-danger"/></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
           </div>
         </div>
    </div>
    </div>
  );
}

export default AdminProduct;

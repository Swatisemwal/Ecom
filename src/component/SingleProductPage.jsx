import React, { useState, useEffect, useContext } from 'react'
import { Product as ProductContext } from './store/ProductContextProvider'
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export default function SingleProductPage() {
    var [product, setproduct] = useState({})
    var { getSingle } = useContext(ProductContext)
    var { _id } = useParams()
    // {console.log('_id:',_id)}

    async function getAPIData() {
        var item = {
            _id: _id
        }
        const response = await getSingle(item)
        setproduct(response.data)
        // console.log(response.data);
    }

    function Item(props) {
        console.log("propsPic:",props)
        return (
            <Paper>
                {
                    props.item.pic ?
                    <img src={require(`../assests/productimages/${props.item.pic}`)} width="100%" height="500px" alt="" />
                    : ""
                }
            </Paper>
        )
    }
    var items = [
      
        {
            pic: product.pic1
        },
        {
            pic: product.pic2
        },
        {
            pic: product.pic3
        },
        {
            pic: product.pic4
        }
    ]
//   console.log("pic1:",product.pic1)
//   console.log("pic2:",product.pic2)
//   console.log("pic3:",product.pic3)
//   console.log("pic4:",product.pic4)
    useEffect(() => {
        getAPIData()
    }, [])
  return (
    <div className='container-fluid mt-2'>
    <div className='row'>
        <div className='col-md-6 col-12'>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
        <div className='col-md-6 col-12'>
            <h5 className='background text-light text-center p-2'>Single Product Section</h5>
            <div className="table-responsive">
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th>Maincategory</th>
                            <td>{product.maincategory}</td>
                        </tr>
                        <tr>
                            <th>subcategory</th>
                            <td>{product.subcategory}</td>
                        </tr>
                        <tr>
                            <th>Brand</th>
                            <td>{product.brand}</td>
                        </tr>
                        <tr>
                            <th>Color</th>
                            <td>{product.color}</td>
                        </tr>
                        <tr>
                            <th>Size</th>
                            <td>{product.size}</td>
                        </tr>
                        <tr>
                            <th>Base Price</th>
                            <td>&#8377;<del className='text-danger'>{product.baseprice}</del></td>
                        </tr>
                        <tr>
                            <th>Discount</th>
                            <td>{product.discount}%</td>
                        </tr>
                        <tr>
                            <th>Final Price</th>
                            <td>&#8377;{product.finalprice}</td>
                        </tr>
                        <tr>
                            <th>Stock</th>
                            <td>{product.stock}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <th colSpan={2}><Link to="#" className='text-decoration-none text-center d-block w-100 background text-light p-1 rounded'>Add to Cart</Link></th>
                        </tr>
                        <tr>
                            <th colSpan={2}><Link to="#" className='text-decoration-none text-center d-block w-100 background text-light p-1 rounded'>Add to Wishlist</Link></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

  )
}

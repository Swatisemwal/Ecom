import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import pic1 from "../assests/images/banner1.jpg"
import pic2 from "../assests/images/banner2.jpg"
import pic3 from "../assests/images/banner3.jpg"
import pic4 from "../assests/images/banner4.jpg"
import pic5 from "../assests/images/banner5.jpg"
import pic6 from "../assests/images/banner6.jpg"
import pic7 from "../assests/images/banner7.jpg"
import pic8 from "../assests/images/banner8.jpg"
import pic9 from "../assests/images/banner9.jpg"
import pic10 from "../assests/images/banner10.jpg"
import ProductList from './ProductList'

function Item(props)
{
    return (
        <Paper>
          <img src={props.item.pic} width="100%" height="500px" alt="" />
        </Paper>
    )
}

function Home() {
  var items = [
    {
      pic: pic1
    },
    {
      pic: pic2
    },
    {
      pic: pic3
    },
    {
      pic: pic4
    },
    {
      pic: pic5
    },
    {
      pic: pic6
    },
    {
      pic: pic7
    },
    {
      pic: pic8
    },
    {
      pic: pic9
    },
    {
      pic: pic10
    },

]
  return (
  
    <>
      <Carousel>
    {
        items.map( (item, i) => <Item key={i} item={item} /> )
    }
</Carousel>
<h5 className='background text-light text-center p-2 my-2'>Latest Products Section</h5>
<ProductList mc="All" sc="All" br="All"/>
</>
  )
}

export default Home
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom"
export default function ProductItem(props) {
    // console.log(props)
  return (
    <div> <Card sx={{ maxWidth: "100%" }}>
    <CardActionArea>
      {/* {console.log("file props pic:",props.pic)} */}
        <CardMedia
            component="img"
            height="200"
            image={`${props.pic}`}
            alt="green iguana"
        />
        <CardContent>
            <h5 style={{ height: "80px" }}>{props.name}</h5>
            <p>Price &#8377;<del className='text-danger'>{props.baseprice.toFixed(0) }</del> {props.finalprice.toFixed(0) }</p>
            <p>Discount {props.discount}%</p>
        </CardContent>
           <Link to={`/single-product/${props._id}`} className='text-decoration-none text-center d-block w-100 background text-light p-1 rounded'>Add to Cart</Link>
    </CardActionArea>
</Card></div>
  )
}

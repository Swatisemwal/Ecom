import React, { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { Link, useParams } from 'react-router-dom';

import { Maincategory } from "./store/MainCategoryContextProvider"
import { Subcategory } from "./store/SubCategoryContextProvider"
import { Brand } from "./store/BrandContextProvider "
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function LeftNav() {
    var [maincategory, setmaincategory] = useState([])
    var [subcategory, setsubcategory] = useState([])
    var [brand, setbrand] = useState([])
    var { getMaincategory } = useContext(Maincategory)
    var { getSubcategory } = useContext(Subcategory)
    var { getBrand } = useContext(Brand)
    var { mc, sc, br } = useParams()
    // const history = useHistory();
    const navigate = useNavigate();

    async function getAPIData() {
        var response = await getMaincategory()
        setmaincategory(response.data)

        response = await getSubcategory()
        setsubcategory(response.data)

        response = await getBrand()
        setbrand(response.data)
    }
    useEffect(() => {
        getAPIData()
    }, [])


    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    <h6 className='background text-light text-center p-1'>Maincategory</h6>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link to={`/shop/All/${sc}/${br}`} className='text-decoration-none text-danger'>All</Link>
                        </ListItemButton>
                    </ListItem>
                    {
                        maincategory.map((item, index) => {
                            return <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    {/* {console.log('maincat item:',item)}
                                    {console.log('maincat :',mc)}
                                    {console.log('maincat name:',item.name)} */}
                                    <Link to={`/shop/${item.name}/${sc}/${br}`} className='text-decoration-none text-danger'>{item.name}</Link>
                                
                                </ListItemButton>
                            </ListItem>
                        })
                    }
                </List>
                <List>
                    <h6 className='background text-light text-center p-1'>Subcategory</h6>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link to={`/shop/${mc}/All/${br}`} className='text-decoration-none text-danger'>All</Link>
                        </ListItemButton>
                    </ListItem>
                    {
                        subcategory.map((item, index) => {
                            return <ListItem key={index} disablePadding>
                                <ListItemButton>
                                {/* {console.log('subcat:',sc)} */}
                                    {/* {console.log('itemname:',item.name)} */}
                                    <Link to={`/shop/${mc}/${item.name}/${br}`} className='text-decoration-none text-danger'>{item.name}</Link>
                                </ListItemButton>
                            </ListItem>
                        })
                    }
                </List>
                <List>
                    <h6 className='background text-light text-center p-1'>Brands</h6>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link to={`/shop/${mc}/${sc}/All`} className='text-decoration-none text-danger'>All</Link>
                        </ListItemButton>
                    </ListItem>
                    {
                        brand.map((item, index) => {
                            return <ListItem key={index} disablePadding>
                                <ListItemButton>
                                {/* {console.log('brand:',br)} */}
                                    <Link to={`/shop/${mc}/${sc}/${item.name}`} className='text-decoration-none text-danger'>{item.name}</Link>
                                </ListItemButton>
                            </ListItem>
                        })
                    }
                </List>
            </nav>
        </Box>
    )
}

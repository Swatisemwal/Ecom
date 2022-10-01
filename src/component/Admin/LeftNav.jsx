import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';

function LeftNav() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
      <h5 className='background text-light text-center p-1 mt-2'>Menu</h5>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-home' className='btn mybtn'>Home</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-userlist' className='btn mybtn'>User List</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-maincategory' className='btn mybtn'>Main Category</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-subcategory' className='btn mybtn'>SubCategory</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-brand' className='btn mybtn'>Brand</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-product' className='btn mybtn'>Product</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-checkout' className='btn mybtn'>CheckOut</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-contact' className='btn mybtn'>Contact</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/admin-newsletter' className='btn mybtn'>NewsLetter</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default LeftNav
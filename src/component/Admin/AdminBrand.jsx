import React, { useState, useEffect, useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom'
import { Brand } from "../store/BrandContextProvider ";

import LeftNav from "./LeftNav";

function AdminBrand() {
  var [brand, setbrand] = useState([])
  var {getBrand,deleteData} = useContext(Brand)

  async function getAPIData() {
    var response = await getBrand()
    if (response.result === "Done")
        setbrand(response.data)
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
        <h5 className='background text-light text-center p-1 mt-2'>Brand Section <Link to="/admin-add-Brand"><AddIcon className="text-light" /></Link></h5>
        <div className='table-responsive'>
          <table className='table table-light table-striped table-hover'>
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                {
                                    brand.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td><Link to={`/Admin-update-brand/${item._id}`}><EditIcon className="text-danger"/></Link></td>
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

export default AdminBrand;

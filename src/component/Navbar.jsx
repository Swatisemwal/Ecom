// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../assests/css/style.css'

// function Navbar() {
//   return (
//    <>
//    <nav className="navbar navbar-expand-lg background">
//   <div className="container-fluid">
//     <Link className="navbar-brand text-light " to="/">E-Com</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item text-light">
//           <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item ">
//           <Link className="nav-link text-light" to="#">About</Link>
//         </li>
//         <li className="nav-item ">
//           <Link className="nav-link disabled text-light" to='#'>Shop</Link>
//         </li><li className="nav-item ">
//           <Link className="nav-link disabled text-light" to='#'>Contact</Link>
//         </li>
//         <li className="nav-item ">
//           <Link className="nav-link disabled text-light" to='/admin'>Admin</Link>
//         </li>

//       </ul>
//       <div className='d-flex'>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-light" type="submit">Search</button>
//         <li className="nav-item dropdown mt-2 drop">
//           <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Swati Semwal
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="#">Action</Link></li>
//             <li><Link className="dropdown-item" to="#">Another action</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="#">Something else here</Link></li>
//           </ul>
//         </li>
//       </form>
//       </div>
//     </div>
//   </div>
// </nav>
//    </>
//   )
// }

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'


import "../assests/css/style.css"


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg background sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Ecom</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/shop/All/All/All">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/admin-home">Admin</Link>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Swati Semwal
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="#">Cart</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

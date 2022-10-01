import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftNav from "./LeftNav";
import { Product } from "../store/ProductContextProvider";
import { Maincategory } from "../store/MainCategoryContextProvider";
import { Subcategory } from "../store/SubCategoryContextProvider";
import { Brand } from "../store/BrandContextProvider ";

export default function AdminAddProduct() {
  var [product, setproduct] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    baseprice: 0,
    discount: 0,
    finalprice: 0,
    stock: "In Stock",
    description: "This is Sample Product",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
  });
  var [mainCategory, setMainCategory] = useState([]);
  var [subcategory, setSubcategory] = useState([]);
  var [brand, setBrand] = useState([]);
  var [name, setname] = useState("");
  var { add } = useContext(Product);
  var { getMaincategory } = useContext(Maincategory);
  var { getSubcategory } = useContext(Subcategory);
  var { getBrand } = useContext(Brand);
  var navigate = useNavigate();

  function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setproduct((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }
  function getFile(e) {
    var name = e.target.name
    var value = e.target.files[0].name

    console.log("file:", value)
    setproduct((oldData) => {
        return {
            ...oldData,
            [name]: value
        }
    })
}

  useEffect(() => {
    getAPIData();
  }, []);

  async function postData(e) {
    e.preventDefault();

    var item = {
      name:product.name,
      maincategory:product.maincategory,
      subcategory:product.subcategory,
      brand:product.brand,
      color:product.color,
      size:product.size,
      baseprice:parseInt(product.baseprice),
      discount:parseInt(product.discount),
      finalprice:product.baseprice-product.baseprice*product.discount/100,
      stock:product.stock,
      description:product.description,
      pic1:product.pic1,
      pic2:product.pic2,
      pic3:product.pic3,
      pic4:product.pic4,
    };
    console.log(item);
    const response = await add(item);
    if (response.result === "Done") navigate("/admin-product");
    else alert(response.message);
  }
  async function getAPIData() {
    // console.log("apidatafirst");
    var response = await getMaincategory("");

    // console.log("apidata", response);
    if (response.result === "Done") 
    {setMainCategory(response.data)

      setproduct((oldData) => {
        return {
            ...oldData,
            ['maincategory']:  response.data[0].name
        }
    })
    }
    else alert(response.message);

    response = await getSubcategory();
    // console.log("apidata subcat", response);
    if (response.result === "Done") {setSubcategory(response.data)
      setproduct((oldData) => {
        return {
            ...oldData,
            ['subcategory']: response.data[0].name
        }
    })
    }
    else alert(response.message);

    response = await getBrand();
    // console.log("apidata brand", response);
    if (response.result === "Done") {setBrand(response.data)
      setproduct((oldData) => {
        return {
            ...oldData,
            ['brand']: response.data[0].name
        }
    })
    }
    else alert(response.message);
  }

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <LeftNav />
        </div>
        <div className="col-lg-10 col-md-8 col-sm-6 col-12">
          <h5 className="background text-light text-center p-1">
            Product Section
          </h5>
          <form onSubmit={postData}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={getData}
                required
                placeholder="Enter Product Name : "
              />
            </div>
            <div className="row mb-2">
              <div className="col-md-2 col-sm-4 col-6">
                <label className="form-label">Maincategory</label>
                <select
                  name="maincategory"
                  onChange={getData}
                  className="form-select"
                >
                  {/* {console.log("data", mainCategory)} */}
                  {mainCategory.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-2 col-sm-4 col-6">
                <label className="form-label">Subcategory</label>
                <select
                  name="subcategory"
                  onChange={getData}
                  className="form-select"
                >
                  {subcategory.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-2 col-sm-4 col-6">
                <label className="form-label">Brand</label>
                <select name="brand" onChange={getData} className="form-select">
                  {brand.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Stock</label>
                <select name="stock" onChange={getData} className="form-select">
                  <option value="In Stock">In Stock</option>
                  <option value="Out Stock">Out Stock</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Color</label>
                <input
                  type="text"
                  className="form-control"
                  name="color"
                  onChange={getData}
                  required
                  placeholder="Enter Product Color : "
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Size</label>
                <input
                  type="text"
                  className="form-control"
                  name="size"
                  onChange={getData}
                  required
                  placeholder="Enter Product Size : "
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-12">
                <label className="form-label">Base Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="baseprice"
                  onChange={getData}
                  required
                  placeholder="Enter Base Price : "
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label">Discount</label>
                <input
                  type="number"
                  className="form-control"
                  name="discount"
                  onChange={getData}
                  required
                  placeholder="Enter Discount : "
                  min={0}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                onChange={getData}
                rows={5}
                className="form-control"
                value={product.description}
              ></textarea>
            </div>
            <div className="row mb-3">
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic1</label>
                <input
                  type="file"
                  className="form-control"
                  name="pic1"
                  onChange={getFile}
                  required
                />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic2</label>
                <input
                  type="file"
                  className="form-control"
                  name="pic2"
                  onChange={getFile}
                  required
                />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic3</label>
                <input
                  type="file"
                  className="form-control"
                  name="pic3"
                  onChange={getFile}
                  required
                />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic4</label>
                <input
                  type="file"
                  className="form-control"
                  name="pic4"
                  onChange={getFile}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="border-0 p-1 background text-light btn-sm w-100"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

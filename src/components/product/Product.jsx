import React, { useState, useEffect } from "react";
import Api from "../utils/api/api";
import { ProductList } from "./ProductList";

function Product(props) {
  const [name, setName] = useState(null);
  let storeData;
  useEffect(() => {
    const apiData = async () => {
      const productdata = await Api(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
      );
      const result = productdata.data;
      storeData = result;
      if (props.searchData.length > 0) {
        let temp = result.filter((item, index) => {
          return item.title.toLowerCase().includes(props.searchData);
        });
        // let sortdata=temp.sort((a,b)=>{
        //   return a.price - b.price
        // })
        console.log(temp);
        setName([...temp]);

      }else{
        setName(result);
      }     
    };
    apiData();
  }, [props.searchData]);

  return (
    <div className="">
      <ProductList productDetail={name} />
    </div>
  );
}

export default Product;



import { Box } from "@mui/material";
import React, { useState } from "react";
import classess from "./ColorOption.module.css";

export default function ColorOption({ dataObject, setSelectedSize }) {
  // const renderProperties = (obj) => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    // const colorValue = event;
    setSelectedColor(event);
    // console.log("Dax",dataObject[event])
    const selectedProduct = dataObject[event].products[0];
 
    setSelectedSize(selectedProduct ? [selectedProduct.size] : "");
  };

  // setColors(Object.keys(dataObject));
  if (!dataObject) {
    return <></>;
  }
  return Object.keys(dataObject).map((item, i) => {
    {
      // item = item.toLocaleLowerCase();
      console.log("colorss");
      console.log(item);
    }
    return (
      <Box
        key={i}
        className={`${classess.colorOption} ${
          item == selectedColor ? classess.active : ""
        }`}
        sx={{ bgcolor: item, ml: "0.3rem" }}
        onClick={() => {
          console.log("dsd");
          handleColorChange(item);
        }}
      ></Box>
    );
  });
  // };
  //     console.log(key)
  //     const value = obj[key];

  //     //   <Box
  //     //     key={i}
  //     //     className={`${classess.colorOption} ${
  //     //       color.color == selectedColor ? classess.active : ""
  //     //     }`}
  //     //     sx={{ bgcolor: color.color, ml: "0.3rem" }}
  //     //     onClick={() => {
  //     //       handleColorChange(color.color);
  //     //     }}
  //     //   ></Box>;

  //     return (
  //       <div key={key}>
  //         {typeof value === "object" ? (
  //           <>
  //             <div>{key}</div>
  //             {renderProperties(value)}
  //           </>
  //         ) : (
  //           <div>
  //             {key}: {value}
  //           </div>
  //         )}
  //       </div>
  //     );
  //   });
  // };

  // return <div>{renderProperties(dataObject)}</div>;
}

import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, Box, Paper, Container, Tooltip, Button } from "@mui/material";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import imageC from "../../assets/image3.webp"
import imageD from "../../assets/iamge4.webp"
import classes from "./ImageContainer.module.css"
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ImageModal from "../Popup/PopUp";
import { relatedProducts } from "../../Data/data"

const itemData = [
  {
    img: imageB,
    title: "Breakfast",
    rows: 2,
    cols: 2,
    width: "20%",
  },
  {
    img: imageA,
    title: "Burger",
    width: "100%",
  },
  {
    img: imageD,
    title: "Burger",
    width: "100%",
  },
  {
    img: imageC,
    title: "Burger",
    width: "100%",
  },


];
export default function ImageContainer({ imgList }) {
  const imageUrls = imgList;
  const [isHovered, setIsHovered] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          {/* {imgList.map((item, i) => ( */}

            <>
              <Grid
                item
                xs={12}
                // md={i == 0 ? 12 : 6}
                // display={i == 0 ? "" : "none"}
                className={classes.imageContainer}
              >
                <Box
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  // key={i}
                  sx={{ cursor: "pointer" }}
                >
                  {isHovered && (
                    <ZoomInIcon className={classes.icon}></ZoomInIcon>
                  )}

                  <img
                    onClick={() => {
                      console.log("HElllooo");
                      openModal();
                    }}
                    width="100%"
                    src={imgList}
                    loading="lazy"
                  />
                </Box>
              </Grid>
            </>
          {/* ))} */}

          {modalOpen && (
            <ImageModal
              images={imageUrls}
              selectedImageIndex={selectedImageIndex}
              closeModal={closeModal}
            />
          )}
        </Grid>
      </Box>
    </>
  );
}

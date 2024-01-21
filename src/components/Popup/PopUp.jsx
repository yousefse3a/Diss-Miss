import React, { useEffect, useRef } from "react";
import classes from "./PopUp.module.css";

export default function ImageModal({ images, selectedImageIndex, closeModal }) {
  const activeImageRef = useRef(null);
  useEffect(() => {
    // Scroll the active image into view when the modal opens
    if (activeImageRef.current) {
      activeImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedImageIndex]);
  return (
    <div className={classes.modalOverlay} onClick={closeModal}>
      <div className={classes.modalContent}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Description of image ${index + 1}`}
            className={index === selectedImageIndex ? classes.active : ""}
            ref={index === selectedImageIndex ? activeImageRef : null}
          />
        ))}
      </div>
    </div>
  );
}

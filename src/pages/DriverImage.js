import React from "react";
/* import ReactDOM from "react-dom"; */

import { useParams } from "react-router-dom";

import ImageSlider from "components/UI/ImageSlider/ImageSlider";

import styles from "components/Forms/SearchForm.module.css";

import { DUMMY_SLIDES } from "data/dummyData";

/* import Backdrop from "../components/UI/Overlay/Backdrop/Backdrop";
import ModalOverlay from "../components/UI/Overlay/ModalOverlay/ModalOverlay"; */

const DriverImagePage = () => {
  const { imgId } = useParams();

  /* const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate("..");
  }; */

  const desiredObject = DUMMY_SLIDES.find((obj) => obj.id === imgId);
  //to find the image url of the given imgId. Function looks up the array of objects whose id property is desired one(imgId). desiredObj.image gives the img url
  //to display the clicked image wide.

  return (
    <>
      <div className={styles.backdrop}>
        {/* {ReactDOM.createPortal(
          <ModalOverlay>
            <ImageSlider
              slides={slides}
              isBackdrop={false}
              index={slides.indexOf(desiredObject)}
            />
            </ModalOverlay>,
            document.getElementById("overlay-root")
            )}
            {ReactDOM.createPortal(
              <Backdrop navigateBackHandler={() => console.log(21)}></Backdrop>,
              document.getElementById("backdrop")
            )} */}
        <ImageSlider
          slides={DUMMY_SLIDES}
          isBackdrop={true}
          index={DUMMY_SLIDES.indexOf(desiredObject)}
        />
      </div>
    </>
  );
};

export default DriverImagePage;

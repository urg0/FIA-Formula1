import React from "react";

import { useNavigate } from "react-router-dom";

import ReactDOM from "react-dom";

import SearchForm from "components/Forms/SearchForm";

import Backdrop from "components/UI/Overlay/Backdrop/Backdrop";
import ModalOverlay from "components/UI/Overlay/ModalOverlay/ModalOverlay";

const SearchPage = () => {
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate("..");
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>
          <SearchForm />
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop navigateBackHandler={navigateBackHandler}></Backdrop>,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default SearchPage;

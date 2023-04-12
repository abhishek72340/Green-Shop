import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    handleShow();
  }, []);
  
  /* show and hide popup function call */
  const handleShow = () =>setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>

      <p onClick={handleShow}></p>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ position: "relative", height: "18rem" }} id='popup-image'>
          {" "}
          <img
            src="/image/carousel-image2.jpg"
            alt=""
            style={{
              width: "100%",
              height: "20rem",
              position: "absolute",
              marginLeft: "-1rem",
              marginTop: "-2rem",
            }}
          />{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} style={{ backgroundColor: "#060630",border:'1px solid #060630' }}>
            Shop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

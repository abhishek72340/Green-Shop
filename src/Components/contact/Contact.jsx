import "./Contact.css";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Contact() {
  // **state variable for input handler
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  // **onChange for input handler
  const nameHandle = (e) => {
    setFullname(e.target.value);
  };
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const addressHandle = (e) => {
    setAddress(e.target.value);
  };
  const numberHandle = (e) => {
    setNumber(e.target.value);
  };
  const messageHandle = (e) => {
    setMessage(e.target.value);
  };

  // **post message with POST API
  const contactSubmit = async (e) => {
    e.preventDefault();
    setFullname("");
    setEmail("");
    setAddress("");
    setNumber("");
    setMessage("");
    const response = await fetch("http://localhost:4000/contactus", {
      method: "POST",
      body: JSON.stringify({ fullname, email, address, number, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      toast.success("send message successfully!", {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div>
      {/*Toastify-component! */}
      <ToastContainer />
      {/* Contact-form */}
      <div
        className="mx-auto gradient-custom mt-5"
        style={{ maxWidth: "850px", height: "520px" }}
      >
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "50px", marginLeft: "10px" }}
            >
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">
                Get in touch with us
              </MDBTypography>
              <p className="white-text">
                Our Avowal Greens team will help you!!
              </p>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4" style={{ width: "100%" }}>
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: "#495057" }}>
                    Contact Us
                  </MDBTypography>
                </div>

                <form className="mb-0" onSubmit={contactSubmit}>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        type="text"
                        placeholder="full name"
                        value={fullname}
                        onChange={nameHandle}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        type="address"
                        placeholder="address"
                        value={address}
                        onChange={addressHandle}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={emailHandle}
                        required
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        type="number"
                        placeholder="mobile"
                        value={number}
                        onChange={numberHandle}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <textarea
                    type="text"
                    placeholder="message"
                    rows="5"
                    cols="60"
                    id="contact-textarea"
                    value={message}
                    onChange={messageHandle}
                    required
                  ></textarea>
                  <div>
                    <MDBBtn
                      type="submit"
                      rounded
                      style={{ backgroundColor: "#0062CC" }}
                    >
                      Submit
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <br />
      {/* Footer */}
      <Footer id="contact-footer" />
    </div>
  );
}

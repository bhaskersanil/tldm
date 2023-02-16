import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div>
        <div className="contactFlex">
          <HeaderInfo>
            <h1 className="contactUs">
              YOU’VE COME THIS FAR.<br></br>COME SAY HI.
            </h1>

            <p className="aboutUsPara">
              Whether you want to tell us about a project, join our team, or
              just say hi, write to us! We’d love to hear from you.
            </p>
          </HeaderInfo>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
            <div className="row" style={{ paddingBottom: "30px" }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Form>
                  <label className="font15">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="font20 extraBold"
                  />
                  <label className="font15">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="font20 extraBold"
                  />
                  <label className="font15">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="font20 extraBold"
                  />
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="font20 extraBold"
                  />
                  <SumbitWrapper className="flex">
                    <ButtonInput
                      type="submit"
                      value="Send Message"
                      className="pointer animate radius8"
                      style={{ maxWidth: "220px" }}
                    />
                  </SumbitWrapper>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  /* padding: 0px 0 30px 0; */
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 30px 30px 30px;
  background-color: #42032c;
  color: #ffffff;

  border: 1px solid #e7e9ea;
  border-radius: 40px;
  width: 500px;
  height: 550px;

  box-shadow: 1px;
  /* margin-left: 120px; */
  justify-content: center;
  align-items: center;
  input,
  textarea {
    width: 100%;
    /* background-color: transparent; */
    /* border: 0px; */
    /* outline: none; */
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
    border: 1px solid black;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #fd7427;
  background-color: #fd7427;
  /* width: 100%; */
  /* height: 80px; */
  padding-bottom: 35px;
  padding-top: 15px;

  /* padding: 15px; */
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 140px;

  outline: none;
  color: #fff;
  :hover {
    background-color: #7f2760;
    border: 1px solid #7f2760;
    color: #fff;
  }
  @media (max-width: 991px) {
    /* margin: 0 auto; */
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  /* align-self: flex-end; */
  /* margin: 10px 30px 10px 0; */
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    /* width: 100%; */
    /* margin-bottom: 50px; */
  }
`;

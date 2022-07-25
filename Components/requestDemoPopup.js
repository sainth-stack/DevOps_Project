import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import "./styles.scss";
import wrong from "../assets/svg/wrong.svg"
import { Col, Row } from "react-bootstrap";
import { LoadingIndicator, Organization, Region, Validator } from "../utilities";
import Select from "react-select";
import Image from "next/image";

export default function RequestDemoPopup(props) {
  const [, setError] = useState(false);
  const [, forceUpdate] = useState(false);
  const validator = Validator();
  let defaultData = {
    firstName: "",
    secondName: "",
    businessEmail: "",
    phoneNumber: "",
    sizeOfOrganization: "",
    region: "",
  }
  const [data, setData] = useState(defaultData);

  const handleChangeSearch = ({ target: { name, value, label } }) => {
    let updatedData = { ...data };
    updatedData[name] = value;
    setData(updatedData);
    setError("");
  };

  let options = Region;
  let updatedOptions = options.map((item) => ({ ...item, label: item.key }));
  const onSubmit = () => {
    if (validator.current.allValid()) {
      props.handlecallback({
        data: data,
      });
      if (!props.loading) {
        setTimeout(() => {
          setData(defaultData);
          validator.current.hideMessages();
        }, 1000);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(true);
    }
  };
  let options1 = Organization;
  let updatedOptions1 = options1.map((item) => ({ ...item, label: item.key }));
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div>
          <Row>
            <Col sm={11}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  paddingTop: "10px",
                  paddingLeft: "15px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Welcome to Talent Spotify
              </Modal.Title>
              <p
                style={{
                  paddingTop: "10px",
                  paddingLeft: "15px",
                  fontSize: "15px",
                }}
              >
                Our customer success team will reach out shortly to schedule a
                personalised demo for you
              </p>
            </Col>
            <Col sm={1}>
              <Image
                style={{
                  paddingTop: "5px",
                  paddingLeft: "10px",
                  cursor: "pointer",
                }}
                src={wrong}
                alt="wrong"
                onClick={props.onHide}
              />
            </Col>
          </Row>
        </div>
        <div className="bg-light-white rounded-12 mh-100 ">
          <Row className="mt-3">
            <Col>
              <div className="d-flex flex-column justify-content-between">
                <label className="label fs13 col-md-12 col-xs-12 col-sm-12">
                  FIRST NAME<span className="text-danger">*</span>
                </label>
                <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                  <input
                    required
                    type="text"
                    className={`form-control  rounded`}
                    placeholder=""
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChangeSearch}
                  />
                </div>
                <div className="ml-3">
                  {validator.current.message("First Name ", data.firstName, "required")}
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column justify-content-between">
                <label className="label fs13 col-md-12 col-xs-12 col-sm-12">
                  SECOND NAME<span className="text-danger">*</span>
                </label>
                <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                  <input
                    required
                    type="text"
                    className={`form-control  rounded`}
                    placeholder=""
                    name="secondName"
                    value={data.secondName}
                    onChange={handleChangeSearch}
                  />
                </div>
                <div className="ml-3">
                  {validator.current.message("Second Name ", data.secondName, "required")}
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-3">
            <div className="d-flex flex-column justify-content-between">
              <label className="label fs13 col-md-12 col-xs-12 col-sm-12">
                BUSINESS EMAIL<span className="text-danger">*</span>
              </label>
              <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                <input
                  required
                  type="text"
                  className={`form-control  rounded`}
                  placeholder=""
                  name="businessEmail"
                  value={data.businessEmail}
                  onChange={handleChangeSearch}
                />
              </div>
              <div className="ml-3">
                {validator.current.message("Business Email ", data.businessEmail, "required|email")}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex flex-column justify-content-between">
              <label className="label fs13 col-md-12 col-xs-12 col-sm-12">
                PHONE NO.
              </label>
              <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                <input
                  type="number"
                  className={`form-control  rounded`}
                  placeholder=""
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChangeSearch}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Row>
              <Col>
                <div className="d-flex flex-column justify-content-between align-items-start">
                  <label className="label fs14 col-md-12">
                    REGION<span className="text-danger">*</span>
                  </label>
                  <Select
                    required
                    value={updatedOptions.filter(function (option) {
                      return option.value === data.region;
                    })}
                    options={updatedOptions}
                    onChange={(e) =>
                      handleChangeSearch({
                        target: {
                          name: "region",
                          value: e.value,
                          label: e.label,
                        },
                      })
                    }
                    className="custom-dropdown col-md-12"
                  />
                  <div className="ml-3">
                    {validator.current.message("Region ", data.region, "required")}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <Row>
              <Col>
                <div className="d-flex flex-column justify-content-between align-items-start">
                  <label className="label fs14 col-md-12">
                    SIZE OF ORGANIZATION<span className="text-danger">*</span>
                  </label>
                  <Select
                    required
                    value={updatedOptions1.filter(function (option) {
                      return option.value === data.sizeOfOrganization;
                    })}
                    options={updatedOptions1}
                    onChange={(e) =>
                      handleChangeSearch({
                        target: {
                          name: "sizeOfOrganization",
                          value: e.value,
                          label: e.label,
                        },
                      })
                    }
                    className="custom-dropdown col-md-12"
                  />
                  <div className="ml-3">
                    {validator.current.message("Size Of Organization ", data.sizeOfOrganization, "required")}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="m-2 p-2 text-center">
          {props.loading ? <div>Requesting Demo <LoadingIndicator /></div> : <input
            style={{
              fontSize: "14px",
              backgroundColor: "#7e13e3db",
            }}
            className="border-0 rounded text-white form-control"
            onClick={onSubmit}
            type="submit"
            value="Request Demo"
          />}
        </div>
      </Modal.Body>
    </Modal>
  );
}

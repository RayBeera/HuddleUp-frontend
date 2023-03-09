import React, { useEffect, useState } from "react";
import { GiCoffeeCup, GiHotMeal } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { FaBabyCarriage } from "react-icons/fa";
import { MdPark, MdArrowDropDown } from "react-icons/md";
import { useAuthContext } from "../../hooks/useAuthContext";
import Alert from "../Alert";
import AddEvent from "./AddEvent";
import "../../styles/create-event.css";

const CreateEvent = () => {
  const initialState = {
    fields: {
      title: "",
      details: "",
      categories: "",
      inviteFriends: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const [eventCode, setEventCode] = useState("");
  const [createEvent, setCreateEvent] = useState(false);

  const { user } = useAuthContext();

  //   useEffect(() => {

  //   }
  //   )

  const handleCreateEvent = (e) => {
    AddEvent(fields, setAlert);
    e.preventDefault();
    setAlert({ message: "", isSuccess: false });
  };

  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };


  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="eventPgcontainer">
      <div className="eventPgtitle">
        <h1>Create Event</h1>
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleCreateEvent}>
        <div className="eventForm">
          <label htmlFor="eventTitle"> Event Title:</label>
          <div>
            <input
              placeholder="Enter your event title"
              id="title"
              value={fields.title}
              onChange={handleFieldChange}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="EventDetails"> Event Details:</label>
          <div>
            <input
              placeholder="Enter the details of the event"
              id="eventDetails"
              value={fields.details}
              onChange={handleFieldChange}
            ></input>
          </div>
        </div>
        <br></br>
        <div className="dropdown">
          <button onClick={() => setDropdown((prev) => !prev)}>
            Event Categories{" "}
            <MdArrowDropDown size={25} className="arrowDownIcon" />
          </button>
          {dropdown && (
            <div className="list">
              <li>
                {" "}
                <GiHotMeal /> Resturant{" "}
              </li>
              <li>
                <GiCoffeeCup /> Coffe{" "}
              </li>
              <li>
                <MdPark /> Park{" "}
              </li>
              <li>
                <BiCameraMovie /> Cinema{" "}
              </li>
              <li>
                <FaBabyCarriage /> Soft Play
              </li>
            </div>
          )}

          <div>
            <button type="submit">Invite Friends</button>
          </div>
          <div>
            <button type="submit">Create Event</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;

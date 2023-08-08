import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fieldValues);
    if (validateData()) {
      alert("data submitted");
      return;
    }
    alert("invalid data");
  };
  const [checkboxErrr, setCheckboxErr] = useState(false);
  const [fieldValues, setFieldValues] = useState({
    firstname: "",
    gender: "",
    email: "",
    country: "",
    skils: [],
  });

  const [errors, setErrors] = useState({
    firstname: false,
    gender: false,
    email: false,
    country: false,
    skils: false,
  });

  const validateData = () => {
    const err = {
      firstname: false,
      gender: false,
      email: false,
      country: false,
      skils: false,
    };
    setErrors(err);
    if (fieldValues.firstname == "") {
      err.firstname = true;
    }
    if (fieldValues.email == "") {
      err.email = true;
    }
    if (fieldValues.gender == "") {
      err.gender = true;
    }
    if (fieldValues.country == "") {
      err.country = true;
    }
    if (fieldValues.skils.length == 0) {
      err.skils = true;
    }

    if (Object.values(err).some((err) => err == true)) {
      return false;
    }
    return true;
  };
  const dataHandler = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    dataValidateOnBlur(e);
  };
  const dataValidateOnBlur = (e) => {
    console.log(fieldValues.skils.length);
    const { name, value } = e.target;
    console.log(e.target.value, "chek box value");
    let error = false;
    if (name == "firstname" && value == "") {
      error = true;
    } else if (
      name == "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name == "gender" && value == "") {
      error = true;
    } else if (name == "country" && value == "") {
      error = true;
    } else if (name == "skils" && fieldValues.skils.length == 0) {
      error = true;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };
  const checkBoxChange = (event) => {
    const { name, value } = event.target;
    let newSkills = [...fieldValues.skils];
    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== value);
    }

    setFieldValues((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));
    dataValidateOnBlur(event);
    console.log(fieldValues);
    console.log(newSkills, "skillsssss");
  };

  return (
    <>
      <h1>Registration form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={dataHandler}
            onBlur={dataValidateOnBlur}
          />
          {errors.firstname && <p className="danger">First name is required</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={dataHandler}
            onBlur={dataValidateOnBlur}
          />
          {errors.email && <p className="danger">Email is required</p>}
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={dataHandler}
            onBlur={dataValidateOnBlur}
          />
          <label htmlFor="">Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={dataHandler}
            onBlur={dataValidateOnBlur}
          />
          <label htmlFor="">Female</label>
          {errors.gender && <p className="danger">Gender is required</p>}
        </div>
        <div>
          <label htmlFor="">Country</label>
          <select
            name="country"
            id=""
            onChange={dataHandler}
            onBlur={dataValidateOnBlur}
          >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uae">UAE</option>
          </select>
          {errors.country && <p className="danger">Country is required</p>}
        </div>
        <div>
          <label htmlFor="">Skills</label>
          <input
            type="checkbox"
            id="js"
            value="javascript"
            onChange={checkBoxChange}
            onBlur={dataValidateOnBlur}
            name="skils"
          />
          <label htmlFor="js">Javascript</label>
          <input
            type="checkbox"
            id="react"
            value="react"
            onChange={checkBoxChange}
            name="skils"
            onBlur={dataValidateOnBlur}
          />
          <label htmlFor="react">React</label>
          <input
            type="checkbox"
            id="angular"
            value="angular"
            onChange={checkBoxChange}
            name="skils"
            onBlur={dataValidateOnBlur}
          />
          <label htmlFor="angular">Angular</label>
          {errors.skils && <p className="danger">Skills is required</p>}
        </div>
        <input type="submit" className="submit-button" />
      </form>
    </>
  );
}

export default App;

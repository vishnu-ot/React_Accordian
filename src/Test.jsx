import React, { useState } from "react";

function Test() {
  // **********form submitHandler function start*********
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formValues);
    if (errorHandlingOnSubmit()) {
      alert("data submitted successfully");
      return;
    } else alert("please try again...");
  };
  // **********form submitHandler function end*********

  // ******taking form input fields ********
  const [formValues, setFormValues] = useState({
    firstname: "",
    email: "",
    gender: "",
    country: "",
    dob: "",
    skills: [],
  });

  // ***** updating/setting input filed values ---start*****
  const setFieldValueHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    dataValidationOnBlur(event);
  };
  // ***** updating/setting input filed values ----end******

  //**** updating check box values for skills fields******
  const skillsDataHandler = (event) => {
    const { name, value } = event.target;
    let newSkills = [...formValues.skills];
    if (event.target.checked) {
      newSkills.push(value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== value);
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: newSkills,
    }));
    console.log(formValues.skills.length, "eeeeeeeeeeeeeeeeeeeee");
    if (formValues.skills.length== 0) {
      setErrors((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
  };

  // ***** declaring error fileds for handle errors in onSubmit ****
  const [errors, setErrors] = useState({
    firstname: false,
    email: false,
    gender: false,
    country: false,
    dob: false,
    skills: false,
  });

  // **** function for handling errors in onSubmit*******
  const errorHandlingOnSubmit = () => {
    console.log(errors, "errrrors");
    let err = {
      firstname: false,
      email: false,
      gender: false,
      country: false,
      dob: false,
      skills: false,
    };
    if (formValues.firstname == "") {
      err.firstname = true;
    }
    if (formValues.email == "") {
      err.email = true;
    }
    if (formValues.gender == "") {
      err.gender = true;
    }
    if (formValues.country == "") {
      err.country = true;
    }
    if (formValues.dob == "") {
      err.dob = true;
    }
    if (formValues.skills == "") {
      err.skills = true;
    }
    setErrors(err);
    if (Object.values(err).some((err) => err == true)) {
      return false;
    } else return true;
  };

  // ***** Function for error handling in onBlur
  const dataValidationOnBlur = (event) => {
    console.log(errors, "errron on cnhaanjkkl");
    let error = false;
    const { name, value } = event.target;
    if (name == "gender" && value == "") {
      error = true;
    } else if (name == "dob" && value == "") {
      error = true;
    } else if (name == "firstname" && value == "") {
      error = true;
    } else if (name == "country" && value == "") {
      error = true;
    } else if (name == "email" && value == "") {
      error = true;
    } else if (name == "skills" && formValues.skills.length == 0) {
      error = true;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="firstname"
          onChange={setFieldValueHandler}
          onBlur={dataValidationOnBlur}
        />
        {errors.firstname && <p className="danger">First name is required</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={setFieldValueHandler}
          onBlur={dataValidationOnBlur}
        />
        {errors.email && <p className="danger">Email is required</p>}
      </div>

      <div>
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={setFieldValueHandler}
          onBlur={dataValidationOnBlur}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onBlur={dataValidationOnBlur}
          onChange={setFieldValueHandler}
        />
        <label htmlFor="female">Female</label>
        {errors.gender && <p className="danger">Gender is required</p>}
      </div>
      <div>
        <label htmlFor="">Country</label>
        <select
          name="country"
          id=""
          onChange={setFieldValueHandler}
          onBlur={dataValidationOnBlur}
        >
          <option value="">Select</option>
          <option value="india">India</option>
          <option value="uae">UAE</option>
          <option value="usa">USA</option>
        </select>
        {errors.country && <p className="danger">Country is required</p>}
      </div>
      <div>
        <label htmlFor="">Skills</label>
        <input
          type="checkbox"
          id="react"
          name="skills"
          onChange={skillsDataHandler}
          value="react"
          onBlur={dataValidationOnBlur}
        />
        <label htmlFor="react">React</label>
        <input
          type="checkbox"
          onBlur={dataValidationOnBlur}
          id="javascript"
          name="skills"
          onChange={skillsDataHandler}
          value="javascript"
        />
        <label htmlFor="javascript">Javascript</label>
        <input
          type="checkbox"
          name="skills"
          onBlur={dataValidationOnBlur}
          id="angular"
          onChange={skillsDataHandler}
          value="angular"
        />
        <label htmlFor="angular">Angular</label>
        {errors.skills && <p className="danger">Skills is required</p>}
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="dob"
          onChange={setFieldValueHandler}
          onBlur={dataValidationOnBlur}
        />
        {errors.dob && <p className="danger">Dob is required</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

export default Test;

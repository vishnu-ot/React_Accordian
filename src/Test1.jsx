import React, { useState } from "react";

function Test1() {
  const submitHandleFun = (event) => {
    event.preventDefault();
    if (checkErrors()) {
      alert("Data Submiutted");
      return;
    } else alert("incorrect data");
  };

  const [formValues, setFormValues] = useState({
    firstname: "",
    email: "",
    gender: "",
    country: "",
    skills: [],
  });
  const [errors, setErrors] = useState({
    firstname: false,
    email: false,
    gender: false,
    country: false,
    skills: false,
  });
  const setData = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkBoxHandler = (event) => {
    const { name, value } = event.target;
    let newSkills = [...formValues.skills];
    if (event.target.checked) {
      newSkills.push(value);
    } else {
      newSkills = newSkills.filter((skill) => skill != value);
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: newSkills,
    }));
  };
  const checkErrors = () => {
    let err = {
      firstname: false,
      email: false,
      gender: false,
      country: false,
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
    if (formValues.skills == "") {
      err.skills = true;
    }
    setErrors(err);
    if (Object.values(err).some((err) => err == true)) {
      return false;
    }
    return true;
  };

  const errorOnBlur = (event) => {
    const { name, value } = event.target;
    let err = false;

    if (name == "firstname" && value == "") {
      err = true;
    } else if (name == "email" && value == "") {
      err = true;
    } else if (name == "gender" && value == "") {
      err = true;
    } else if (name == "country" && value == "") {
      err = true;
    } else if (name == "skills" && value == "") {
      err = true;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: err,
    }));
  };
  return (
    <div>
      <form onSubmit={submitHandleFun}>
        <div>
          <label htmlFor="fname">First name</label>
          <input type="text" name="firstname" id="fname" onChange={setData} onBlur={errorOnBlur}/>
          {errors.firstname && <p className="danger">First name required</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={setData} onBlur={errorOnBlur}/>
          {errors.email && <p className="danger">Email required</p>}
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input
            type="radio"
            name="gender"
            id="male"
            onChange={setData}
            value="male"
            onBlur={errorOnBlur}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            onChange={setData}
            onBlur={errorOnBlur}
            value="female"
          />
          <label htmlFor="female">Female</label>
          {errors.gender && <p className="danger">Gender required</p>}
        </div>
        <div>
          <label htmlFor="">Country</label>
          <select name="country" id="" onChange={setData} onBlur={errorOnBlur}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
          {errors.country && <p className="danger">Country required</p>}
        </div>
        <div>
          <label htmlFor="">Skilss</label>
          <input
            type="checkbox"
            name="skills"
            value="javascript"
            id="javascript"
            onChange={checkBoxHandler}
          />
          <label htmlFor="javascript">JavaScript</label>
          <input
            type="checkbox"
            name="skills"
            value="react"
            id="react"
            onChange={checkBoxHandler}
          />
          <label htmlFor="react">React</label>
          <input
            type="checkbox"
            name="skills"
            value="angular"
            id="angular"
            onChange={checkBoxHandler}
          />
          <label htmlFor="angular">Angular</label>
          {errors.skills && <p className="danger">Skills required</p>}
        </div>
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}

export default Test1;

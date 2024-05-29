import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../Helper/Validate";

import styles from "../styles/Username.module.css";

export default function Usernames() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>;
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className=" glass title flex-col items-center">
            <h1 className="text-3xl font-bold">Hello User </h1>
            <span className="py-4 text-xl w-2/3">
              Explore More by connecting with us.
            </span>

            <form onSubmit={formik.handleSubmit} className="py-1">
              <div className="flex justify-center py-4">
                <img className={styles.profileImg} src={avatar} alt="avatar" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="username"
                />
                <button type="submit" className={styles.btn}>
                  Submit
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a member{" "}
                  <Link className="text-red-500" to="/register">
                    Register Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

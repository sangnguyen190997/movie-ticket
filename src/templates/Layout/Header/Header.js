import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import { Select } from "antd";
import { UserOutlined } from "@ant-design/icons";

//Hook đa ngôn ngữ
// import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../util/settings/config";
const { Option } = Select;

export default function Header() {
  // const { t, i18n } = useTranslation();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  // const handleChange = (value) => {
  //   i18n.changeLanguage(value);
  // };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="self-center px-8 py-3 rounded"
            onClick={() => {
              history.push("/login");
            }}
          >
            {/* {t("signin")} */}
            Đăng nhập
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
          >
            {/* {t("Register")} */}
            Đăng ký
          </button>
        </Fragment>
      );
    }
    if (userLogin.maLoaiNguoiDung === "QuanTri") {
      return (
        <Fragment>
          {/* <button
            onClick={() => {
              history.push("/");
            }}
            className="home-button"
          ></button>{" "} */}
          <button
            onClick={() => {
              history.push("/profile");
            }}
          >
            {" "}
            <div className="flex justify-start items-center">
              <span
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="text-xl ml-2 m-2 rounded-full bg-indigo-200"
              >
                {userLogin.taiKhoan.substr(0, 1)}
              </span>
              <span className="justify-center align-middle text-white">
                {userLogin.taiKhoan}
              </span>
            </div>
          </button>{" "}
          <button
            onClick={() => {
              history.push("/admin");
            }}
            className="border-2 p-2 mx-2 rounded-sm"
          >
            Admin
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("userLogin");
              localStorage.removeItem("accessToken");
              history.push("/home");
              window.location.reload();
            }}
            className="text-white"
          >
            Đăng xuất
          </button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <button
          className="self-center px-8 py-3 rounded"
          onClick={() => {
            history.push("/profile");
          }}
        >
          <div className="flex justify-start items-center">
            <span
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                fontSize: "30px",
                lineHeight: "30px",
              }}
              className="text-xl ml-2 m-2 rounded-full bg-indigo-200"
            >
              {userLogin.taiKhoan.substr(0, 1)}
            </span>
            <span className="justify-center align-middle text-white">
              {userLogin.taiKhoan}
            </span>
          </div>
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/home");
            window.location.reload();
          }}
          className="text-white mr-5"
        >
          Đăng xuất
        </button>
      </Fragment>
    );
  };

  return (
    <div>
      <header className="p-4 bg-coolGray-800 text-coolGray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="cyberlearn.vn"
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                rel="noopener noreferrer"
                to="/home"
                className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white"
                activeclassname="border-b-0"
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="flex">
              {/* <NavLink
                rel="noopener noreferrer"
                to="/lichChieu"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
                activeClassName="border-b-2"
              >
                Lịch Chiếu
              </NavLink> */}

              <a
                href="#lichChieu"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
                activeclassname="border-b-0"
              >
                Lịch Chiếu
              </a>
            </li>
            <li className="flex">
              {/* <NavLink
                rel="noopener noreferrer"
                to="/news"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
                activeClassName="border-b-2"
              >
                Tin Tức
              </NavLink> */}
              <a
                href="#news"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
                activeclassname="border-b-0"
              >
                Tin Tức
              </a>
            </li>
            <li className="flex">
              {/* <NavLink
                rel="noopener noreferrer"
                to="/news"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
                activeClassName="border-b-2"
              >
                Ứng Dụng
              </NavLink> */}
              <a
                href="#appHome"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
                activeclassname="border-b-0"
              >
                Ứng Dụng
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {renderLogin()}
            {/* <Select
              defaultValue="en"
              style={{ width: 100 }}
              // onChange={handleChange}
            >
              <Option value="en">Eng</Option>
              <Option value="chi">Chi</Option>

              <Option value="vi">Vi</Option>
            </Select> */}
          </div>

          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-coolGray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

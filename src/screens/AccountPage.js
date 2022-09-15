import React from "react";
import SideBar from "../components/SideBar";
import  Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import './AccountPage.css'

function AccountPage() {
  return (
    <>
    <Navbar />
      <div className="AccountpageContainer">
        <div className="Accountpage__left">
          <SideBar />
        </div>
        <div className="Accountpage__right">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AccountPage;

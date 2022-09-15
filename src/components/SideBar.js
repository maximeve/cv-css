import React from "react";
import { Link } from 'react-router-dom';
import './SideBar.css';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineGeneratingTokens } from 'react-icons/md';
import { AiOutlineTransaction } from 'react-icons/ai';
import { RiQuestionnaireLine } from 'react-icons/ri';

function SideBar() {
  return (
    <div className="Sidebar_container">
      <div className="Sidebar__link">
        <VscAccount/>
        <Link to="credentials">Credentials</Link>
      </div>
      <div className="Sidebar__link">
        <MdOutlineGeneratingTokens/>
        <Link to="tokens">Tokens</Link>
      </div>
      <div className="Sidebar__link">
        <AiOutlineTransaction/>
        <Link to="transactions">Transactions</Link>
      </div>
      <div className="Sidebar__link">
        <RiQuestionnaireLine/>
        <Link to="questions">Questions</Link>
      </div>
    </div>
  );
}

export default SideBar;

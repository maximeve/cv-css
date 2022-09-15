import React from 'react';
import './Editor.css'
import Navbar from '../components/Navbar';

function Editor() {
    return (
        <>
        <Navbar/>
        <div className="Editor_container">
            <div className="Editor_menu">
                <h3>Components</h3>
                <div className="Editor_menu_item">
                    <img src='./home2.png' alt="home"></img>
                </div>
                <div className="Editor_menu_item">
                    <img src='./home2.png' alt="home"></img>
                </div>
                <div className="Editor_menu_item">
                    <img src='./home2.png' alt="home"></img>
                </div>
                <button className="Editor_menu_item_button">Save</button>
            </div>
            <div className="Editor_preview">

            </div>
        </div>
        </>
    )
}

export default Editor

import React from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
function Nav() {

    return (
        <div className="Nav">
             <div className="Nav_Appname">
                <h1 id="App_Name">Rate my skills</h1>
            </div>
            <div className="Account">
                <PersonCircle id="logo_account" title = "goodbye" color="#ffffff" size={30} />
                <h3 id="select_option">Ankush Shrivastava</h3>
            </div>
        </div>)
}
export default Nav;
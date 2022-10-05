import React, { useEffect, useState } from 'react';
import "../../styles/nav.css";
import Tab from './Tab';
import { NavLink } from "react-router-dom";

export default function Nav(props) {

  const [isLoggedIn, setIsloggedIn] = useState(
    null
  )

  useEffect(()=>{
    if (props.user.id === undefined) {
      setIsloggedIn(false);
    }
    else {
      setIsloggedIn(true);
    }
  },[props.user])

  return (
    <nav class="nav-container">
      <div class="upper-nav">
        <a href="/" class="title-font">Easy Weddings</a>

        {(isLoggedIn &&
          
          <div class="nav-log">
            <div class="upper-log">
              <strong>Signed in as: </strong><span>{props.user?.first_name}</span>
            </div>
            <div>
              <button onClick={props.logout} value="Logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
            </div>
          </div>)
        }
      </div>


      <div class="nav-bar-container">

        <NavLink to="/" >
          <Tab
            name="About"
            onClick={props.setTab}
            selected={props.selected}
          />
        </NavLink>

        {isLoggedIn &&
          <NavLink to="/weddings">
            <Tab
              name="Weddings"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
        {!isLoggedIn &&
          <NavLink to="/login">
            <Tab
              name="Weddings"
              onClick={props.setTab}
            />
          </NavLink>
        }

        <Tab
          name="Your Listings"
          onClick={props.setTab}
          selected={props.selected}
        />

        <NavLink to="/browse">
          <Tab
            name="Vendors"
            onClick={props.setTab}
            selected={props.selected}
          />
        </NavLink>

        {!isLoggedIn &&
          <NavLink to="/register">
            <Tab
              name="Register"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
        {!isLoggedIn &&
          <NavLink to="/login">
            <Tab
              name="login"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
      </div>
    </nav>
  );
}
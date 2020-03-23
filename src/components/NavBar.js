import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import { UserConsumer, } from "./UserProvider";

const NavBar = () => (
  <UserConsumer>
    {value => (
      < Menu >
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>

        <NavLink to="/userProfile">
          <Menu.Item>
            {value.f_Name}
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </UserConsumer >


)

export default NavBar
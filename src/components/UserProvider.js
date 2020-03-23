import React from "react";
import {Image} from 'semantic-ui-react'
import BooImg from './Avatars/boo.jpg'

// Set Up The Initial Context
const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    f_Name: 'Brianna',
    l_Name: 'Bell', 
    email: 'bbell9563@gmail.com',
    phone: '801-946-4684',
    avatar:"/static/media/link.173f8543.jpg",
  };
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;


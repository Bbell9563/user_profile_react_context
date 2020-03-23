import React from "react";
import { Form, Image, } from "semantic-ui-react";
class UserForm extends React.Component {
  state = { f_Name: '', l_Name: '', email: '', phone: '', avatar: '' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { f_Name, l_Name, email, phone, avatar } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="First Name"
          type="text"
          name="f_Name"
          value={f_Name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Last Name"
          type="text"
          name="l_Name"
          value={l_Name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Phone"
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Avatar"
          name="avatar"
          value={avatar}
          onChange={this.handleChange}
          options={avatarOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const avatarOptions = [
  { key: "b", image: { avatar: true, src: "/static/media/boo.e801dd52.jpg" }, value:'/static/media/boo.e801dd52.jpg'},
  { key: "n", image: { avatar: true, src: "/static/media/ninja.fd0a461b.png"}, value:'/static/media/ninja.fd0a461b.png' },
  { key: "l", image: { avatar: true, src: "/static/media/link.173f8543.jpg" }, value:'/static/media/link.173f8543.jpg'}

];

export default UserForm;
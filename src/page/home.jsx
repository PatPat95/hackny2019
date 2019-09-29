import React, { Component } from 'react';
import HomeComponent from '../components/homeComponent';
import CollectionsPage from '../components/addContact';
import MyDrawer from '../components/drawer';
var QRCode = require('qrcode.react');
class Home extends React.Component {
  state = {
    drawerVisible: false,
    visible: false,
    userId: this.props.userid
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <div>
          user's name: {this.state.userId}
        </div>
        {/* <QRCode value="https://linkedin.com/in/jiajern" /> */}
        <MyDrawer 
          visible = {this.state.drawerVisible}
          showDrawer = {this.showDrawer}
          onClose = {this.onClose}
          />
        <HomeComponent />
      </div>
    )
  }
}

export default Home;
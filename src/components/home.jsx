import React, {Component} from 'react';
import HomeComponent from './homeComponent';
import CollectionsPage from './addContact';
var QRCode = require('qrcode.react');
class Home extends React.Component {
    state = {
        visible: false,
        userId: this.props.userid
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
        return(
            <div>
                <CollectionsPage
                    showModal = {this.showModal}
                    handleCancel = {this.handleCancel}
                    handleCreate = {this.handleCreate}
                    visible = {this.state.visible}
                    saveFormRef={this.saveFormRef}
                />
                <div>
                    user's name: {this.state.userId}
                </div>
                <QRCode value="https://linkedin.com/in/jiajern" />
                <HomeComponent />
            </div>
        )
    }
}

export default Home;
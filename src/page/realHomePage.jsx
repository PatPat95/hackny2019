import React from 'react';
import CollectionsPage from '../components/addContact';
import { Auth } from 'aws-amplify';


Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
 }).then(user => console.log(user))
 .catch(err => console.log(err));


class RealHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    componentWillMount() {
        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
         }).then(user => this.setState({username: user.username}))
         .catch(err => console.log(err));
    }

    render () {
        
        return(
            <div>
                {<CollectionsPage
                    showModal = {this.showModal}
                    handleCancel = {this.handleCancel}
                    handleCreate = {this.handleCreate}
                    visible = {this.state.visible}
                    saveFormRef={this.saveFormRef}
                />}
                <div>
                    user's name: {this.state.username}
                </div>
            </div>
        )
    }
}

export default RealHomePage;
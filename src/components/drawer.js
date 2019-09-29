import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Button } from 'antd';
var QRCode = require('qrcode.react');

const MyDrawer=(props) => {
    return (
      <div>
        <Button type="primary" onClick={props.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={props.onClose}
          visible={props.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <QRCode value="https://linkedin.com/in/jiajern" />
        </Drawer>
      </div>
    );
}

export default MyDrawer;
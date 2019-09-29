import { Button, Modal, Form, Input, Radio } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Link">
              {getFieldDecorator('link', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

const CollectionsPage = (props) => {
    return (
      <div>
        <Button type="primary" onClick={props.showModal}>
          New Collection
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={props.saveFormRef}
          visible={props.visible}
          onCancel={props.handleCancel}
          onCreate={props.handleCreate}
        />
      </div>
    );
}

export default CollectionsPage;
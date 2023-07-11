import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { InboxOutlined, UploadOutlined, EnvironmentOutlined } from '@ant-design/icons';
import "./Card.css"
import {
  Button,
  Cascader,
  Checkbox, 
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  TimePicker,
  Card,
  Typography
} from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocationDisplay from './Loc';


// const [fileList, setFileList] = useState([]);

const { RangePicker } = DatePicker;
const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     console.log(e);
//     return e;
//   }
//   console.log(e);
//   return e?.fileList;
//   // return e?.fileList;
  
// };

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};




const FormDisabledDemo = () => {

  useEffect(() => {
    console.log(window.sessionStorage.getItem("lat"));
console.log(window.sessionStorage.getItem("lon"));
console.log(window.sessionStorage.getItem("add"));
console.log(window.sessionStorage.getItem("area"));
  }, []);

  const [componentDisabled, setComponentDisabled] = useState(false);
  const [fileList, setFileList] = useState([]);
  
const handleFileChange = ({ fileList }) => {
  setFileList(fileList);
};

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  const [container, setContainer] = useState(null);
  

  return (
    // <Card style={{
    //   backgroundColor: "#8EC5FC",
    //   backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    //   marginLeft: "80px", marginTop: "40px", marginRight: "80px", height: "600px", borderRadius: "20px",overflowY:"scroll"
    // }}>
    <Card className='card-container'>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"

        style={{
          maxWidth: 1900,
          display: "flex",
          

        }}
      >
        <div style={{ width: "700px" }}>



          <Form.Item label="Crime Name">
            <Input placeholder='Crime Type like murder,Theft' />
          </Form.Item>
          <Form.Item label="Description" >
            <TextArea rows={4} placeholder='Explain About Crime' />
          </Form.Item>

          <Form.Item label="Crime Date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="time-picker" label="Crime Time" {...config}>
            <TimePicker />
          </Form.Item>

          <Form.Item name='Crime Evidence Info' label="Crime Evidence">
            <div style={{ marginLeft: "5px" }}>
              <Input.TextArea placeholder='If you found any evidence like vehicle number plate or identification of a person' />

            </div>
          </Form.Item>





          <Form.Item>
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Anonymous
            </Checkbox>
          </Form.Item>

          <Form.Item label="Name">
            <Input disabled={componentDisabled} placeholder='Your Name' />
          </Form.Item>
          <Form.Item label="Contact" style={{ width: "-200px" }}>
            <Input disabled={componentDisabled} placeholder='Your Mobile Number' />
          </Form.Item>
          <Form.Item label="Email" >
            <Input disabled={componentDisabled} placeholder='Your Mail' />
          </Form.Item>
        
         
          {/* <Form.Item>
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Anonymous
            </Checkbox>
          </Form.Item> */}

          {/* <Form.Item label="Name">
            <Input disabled={componentDisabled} placeholder='Your Name' />
          </Form.Item>
          <Form.Item label="Contact" style={{width:"-200px"}}>
            <Input disabled={componentDisabled} placeholder='Your Mobile Number' />
          </Form.Item>
          <Form.Item label="Email" >
            <Input disabled={componentDisabled} placeholder='Your Mail' />
          </Form.Item> */}
          <br />
          <Form.Item label="Docs">
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item style={{marginLeft:"230px"}}>
          <Button  size={"large"} style={{width:"120px",height:"50px"}}>
            <Typography style={{color:"black",fontSize:"20px"}}>

            Submit »
            </Typography>
          </Button>
          </Form.Item>
         
        </div>
        
  
          <Card style={{height:"550px"}}>
            
        <div style={{width:"600px",height:"300px"}}>

          <LocationDisplay />
          </div>
          </Card>
          <br />
          {/* <div style={{marginTop:"800px"}}>
            <Input disabled={componentDisabled} placeholder='Your Name' />
          </div> */}
          









      </Form>
      
    </Card>
  );
};
export default () => <FormDisabledDemo />;

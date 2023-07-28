
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { InboxOutlined, UploadOutlined, EnvironmentOutlined } from '@ant-design/icons';
import "./Card.css"
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Upload,
  TimePicker,
  Card,
  Typography
} from 'antd';
import { Link } from 'react-router-dom';
import LocationDisplay from './Loc';
import moment from 'moment';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { caseSuccess } from '../Slice/userSlice';
import axios from 'axios';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase_config";
import { v4 } from "uuid";


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);



  const [crimeName, setCrimeName] = useState('');
  const [description, setDescription] = useState('');
  const [crimeDate, setCrimeDate] = useState(null);
  const [crimeTime, setCrimeTime] = useState(null);
  // const [crimeEvidenceInfo, setCrimeEvidenceInfo] = useState('');
  const [anonymous, setAnonymous] = useState(true);
  
  const [name, setName] = useState('Anonymous');
  const [contact, setContact] = useState('6379472919');
  const [email, setEmail] = useState('anonymous@gmail.com');
  
  const beforeUpload = (file) => {
  
    console.log("Selected file:", file);
    setImageUpload(file); 
    return false; 
  };
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setButtonDisabled(false);
        console.log(url);
        setImageUrl(url);
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  const dispatch = useDispatch();
  const { ReporterName } = useSelector((state) => state.case)

  const handleCrimeDateChange = (date) => {
    const formattedDate = date ? moment(date).format('YYYY-MM-DD') : null;
    setCrimeDate(formattedDate);
  };

  const handleCrimeTimeChange = (time, timeString) => {

    setCrimeTime(timeString);
  };
  const handleFormSubmit = async () => {

    if (
      crimeName &&
      description &&
      crimeDate &&
      crimeTime
      //  crimeEvidenceInfo

    ) {

      if ((!componentDisabled || (componentDisabled && name && contact && email))) {

        console.log(crimeName);
        console.log(description);
        console.log(crimeDate);
        console.log(crimeTime);
        // console.log(crimeEvidenceInfo);
        console.log(name);
        console.log(contact);
        console.log(email);
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

        const location = window.sessionStorage.getItem('add');
        const area = window.sessionStorage.getItem('area');
        await axios.post("http://localhost:8080/admin/case/add", 
        {
          "caseDescription": description,
          "caseFile": imageUrl,
          "caseName": crimeName,
          "location": location,
          "area": area,
          "caseTime": crimeTime,
          "caseDate": crimeDate,
          "userName": name,
          "userMobile": contact,
          "userEmail": email
        }
      
        ).then(()=>{
          
    dispatch(caseSuccess({
      name: crimeName,
      description: description,
      crimeDate: crimeDate,
      crimeTime: crimeTime,
      // crimeEvidenceInfo: crimeEvidenceInfo,
      ReporterName: name,
      contact: contact,
      email: email,
      submitted: true
    }))
    	

    

    toast.success(`${name}  Crime Reported Successfully !!`, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
        })


      }
    }
    else {
      console.log(crimeName);
      console.log(description);
      console.log(crimeDate);
      console.log(crimeTime);
      // console.log(crimeEvidenceInfo);

    }
    // } else {
    //   // Show an error message or perform any other necessary actions
    //   console.log('Please fill in all the required fields');
    // }



    // dispatch(caseSuccess({
    //   name: crimeName,
    //   description: description,
    //   crimeDate: crimeDate,
    //   crimeTime: crimeTime,
    //   // crimeEvidenceInfo: crimeEvidenceInfo,
    //   ReporterName: name,
    //   contact: contact,
    //   email: email,
    //   submitted: true
    // }))

    // toast.success('Crime Reported Successfully !!', {
    //   position: 'bottom-center',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'light',
    // });
    // console.log(ReporterName);
  };


  const notify = () => {
    toast.success('Crime Reported Successfully !!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <Card className='form-card' style={{

      marginLeft: "80px", marginTop: "25px", marginRight: "80px", height: "650px", borderRadius: "20px", overflowY: "scroll"
    }}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"

        style={{
          maxWidth: 1900,
          display: "flex",


        }}

      >
        <div style={{ width: '700px' }}>
          <Form.Item
            label="Crime Name"
            name="crimeName"
            rules={[
              {
                required: true,
                message: 'Please enter the crime name',
              },
            ]}
          >
            <Input placeholder="Crime Type like murder, theft" value={crimeName} onChange={(e) => setCrimeName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}
          >
            <TextArea rows={4} placeholder="Explain About Crime" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Crime Date"
            name="crimeDate"
            rules={[
              {
                required: true,
                message: 'Please select the crime date',
              },
            ]}
          >
            <DatePicker value={crimeDate ? moment(crimeDate, 'YYYY-MM-DD') : null} onChange={handleCrimeDateChange} />
          </Form.Item>

          <Form.Item
            name="time-picker"
            label="Crime Time"
            rules={[
              {
                required: true,
                message: 'Please select the crime time',
              },
            ]}
          >
            <TimePicker value={crimeTime ? moment(crimeTime, 'HH:mm:ss') : null} onChange={handleCrimeTimeChange} format="HH:mm:ss" />
          </Form.Item>

          {/* <Form.Item
            label="Crime Evidence Info"
            name="crimeEvidenceInfo"
            rules={[
              {
                required: true,
                message: 'Please enter the crime evidence info',
              },
            ]}
          >
            <Input.TextArea placeholder="If you found any evidence like vehicle number plate or identification of a person" value={crimeEvidenceInfo} onChange={(e) => setCrimeEvidenceInfo(e.target.value)} />
          </Form.Item> */}

          <Form.Item>
            <Checkbox checked={componentDisabled} onChange={(e) => setComponentDisabled(e.target.checked)}>Anonymous</Checkbox>
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: componentDisabled ? false : true,
                message: 'Please enter your name',
              },
            ]}
          >
            <Input disabled={componentDisabled} placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              {
                required: componentDisabled ? false : true,
                message: 'Please enter your contact',
              },
            ]}
          >
            <Input disabled={componentDisabled} placeholder="Your Mobile Number" value={contact} onChange={(e) => setContact(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: componentDisabled ? false : true,
                message: 'Please enter your email',
              },
            ]}
          >
            <Input disabled={componentDisabled} placeholder="Your Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          {/* <Form.Item label="Docs">
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do" fileList={fileList} onChange={handleFileChange}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}
          <br />
          <br />
          <br />
          {/* <Form.Item label="Docs">
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files"  fileList={fileList} onChange={handleFileChange}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}
          <Upload
            showUploadList={false}
            beforeUpload={beforeUpload}
          >
            <Button icon={<UploadOutlined />} style={{ marginLeft: "60px", marginRight: "50px", color: "#3964C3" }}>Select Image</Button>
          </Upload>
          <Button onClick={uploadFile}>Upload Image</Button>

          <Form.Item style={{ marginLeft: '180px', marginTop: "50px" }}>
            {buttonDisabled ? 
            
                  <Button size="large" style={{ width: '120px', height: '50px' }} type='submit' onClick={handleFormSubmit} disabled>
                    <Link to="/">
                      <Typography style={{ color: '#3964C3', fontSize: '30px' }}>Submit »</Typography>
                    </Link>
                  </Button>:
                   <Button size="large" style={{ width: '120px', height: '50px' }} type='submit' onClick={handleFormSubmit} >
                   <Link to="/">
                     <Typography style={{ color: '#3964C3', fontSize: '30px' }}>Submit »</Typography>
                   </Link>
                 </Button>

          }
            
              
          

               
          </Form.Item>
           
        </div>
        <Card style={{ height: "600px", marginTop: "-10px" }}>

          <div style={{ width: "600px", height: "320px" }}>

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

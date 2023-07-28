import react, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
import { toast } from 'react-toastify';
import { InboxOutlined, UploadOutlined, EnvironmentOutlined } from '@ant-design/icons';
import {
    
    
    Upload,
    
  } from 'antd';

import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../../firebase_config";
import { v4 } from "uuid";

export default function CaseUpdate() {
    const [open, setOpen] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const [caseId, setCaseId] = useState(1);
    const [caseName, setCaseName] = useState("");
    const [caseDescription, setCaseDescription] = useState("");
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState("");
    const [caseDate, setCaseDate] = useState("");
    const [caseTime, setCaseTime] = useState("");
    const [caseLocation, setCaseLocation] = useState("");
    const [policeId, setPoliceId] = useState("");
    const [area, setArea] = useState("");

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                setImageUrl(url);
                setButtonDisabled(false)
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    const beforeUpload = (file) => {
        // Here you can do some validation on the selected file if required.
        // For example, check the file type, size, etc.
        console.log("Selected file:", file);
        setImageUpload(file); // Save the selected file to state.
        return false; // Return false to prevent default upload behavior.
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            caseId: parseInt(caseId),
            caseName: caseName,
            caseDescription: caseDescription,
            userId: parseInt(userId),
            userName: userName,
            caseDate: caseDate,
            caseTime: caseTime,
            caseLocation: caseLocation,
            policeId: parseInt(policeId),
            caseFile: imageUrl,
            area: area,

        }
        console.log(data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

        const res= await axios.put("http://localhost:8080/admin/case/put", data)
        
        toast.success(`case Updated  Successfully !!`, {
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

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{ padding: "30px" }}>

            <DialogTitle>Customize Update Case
            </DialogTitle>
            {/* <DialogContent>* */}
            {/* <DialogContentText>
            Customize Update Police
          </DialogContentText>  */}
            <form
                onSubmit={submitHandler}
            >

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Id"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={caseId}
                    onChange={(e) => setCaseId(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={caseDescription}
                    onChange={(e) => setCaseDescription(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="User Id"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Reporter Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Date"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={caseDate}
                    onChange={(e) => setCaseDate(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Time"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={caseTime}
                    onChange={(e) => setCaseTime(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Location"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={caseLocation}
                    onChange={(e) => setCaseLocation(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Police Id"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={policeId}
                    onChange={(e) => setPoliceId(e.target.value)}


                />

                <Upload
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                >
                    <Button icon={<UploadOutlined />} style={{ marginLeft: "60px", marginRight: "50px", color: "#3964C3" }}>Select Image</Button>
                </Upload>
                <Button onClick={uploadFile}>Upload Image</Button>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Area"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                />


                {/* </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit' disabled={buttonDisabled}>Update</Button>
                </DialogActions>
            </form>

        </div>
    );
}
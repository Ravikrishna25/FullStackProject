import react,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
import { toast } from 'react-toastify';

export default function PoliceUpdate(props) {
    const [open, setOpen] = useState(false);
    // console.log("Props form "+ props.id);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data={
            policeId:parseInt(policeId),
            policeName:policeName,
            policeEmail:policeEmail,
            policeMobile:parseFloat(policeMobile),
            policeLocation:policeLocation
        }
        console.log(data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

        const res= await axios.put("http://localhost:8080/admin/police/put", data)
        // console.log(res.data);
        toast.success(`Police ${policeName} Updated  Successfully !!`, {
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
    const [policeId,setPoliceId] = useState("");
    const [policeName,setPoliceName] = useState("");
    const [policeEmail,setPoliceEmail] = useState("");
    const [policeMobile,setPoliceMobile] = useState("");
    const [policeLocation,setPoliceLocation] = useState("");
    return (
        <div style={{ padding: "30px" }}>

            <DialogTitle>Customize Update Police
            </DialogTitle>
            {/* <DialogContent>* */}
            {/* <DialogContentText>
            Customize Update Police
          </DialogContentText>  */}
          <form onSubmit={submitHandler}>

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Police Id"
                type="text"
                fullWidth
                variant="standard"
                value={policeId}
                onChange={(e)=> setPoliceId(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Police Name"
                type="text"
                fullWidth
                variant="standard"
                value={policeName}
                onChange={(e)=> setPoliceName(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                value={policeEmail}
                onChange={(e)=> setPoliceEmail(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Phone"
                type="text"
                fullWidth
                variant="standard"
                value={policeMobile}
                onChange={(e)=> setPoliceMobile(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Police Location"
                type="text"
                fullWidth
                variant="standard"
                value={policeLocation}
                onChange={(e)=> setPoliceLocation(e.target.value)}
            />
            {/* </DialogContent> */}
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' >Update</Button>
            </DialogActions>
          </form>

        </div>
    );
}
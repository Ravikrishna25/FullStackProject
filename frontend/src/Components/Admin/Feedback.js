import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';

function Feedback() {
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
      axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/admin/feedback/get");
        setProductsList(res.data);
        console.log(res.data);
    }

    return (
        <div>


            <div style={{ width: '219%' }}>
                <h1 style={{ textAlign: 'center' }}>Feedback</h1>
                <hr style={{ borderTop: "10px double black" }} />
                {
                    productsList.map((value) => {
                        return (
                            <Box style={{ marginTop: '3%' }}>
                                <div>
                                    <h2>{value.fid}</h2>
                                    <h2>{value.name}</h2>
                                     <h2>{value.email}</h2>
                                    <h2>{value.message}</h2>
                                    <br />
                                    <hr style={{ borderTop: '2px solid' }} />
                                </div>
                            </Box>
                        );
                    })}
            </div>


        </div>
    )
}

export default Feedback
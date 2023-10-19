import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateData() {
    const [data ,setData] = useState([])
    const headers = {
        "Authorization": `Token ${localStorage.getItem("token")}`,
        "content-type": "application/json"
    };
    useEffect(() => {
        axios.post('https://samtuitlib.pythonanywhere.com/allmessages/', headers)
            .then(response => {
                console.log('PUT request successful', response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('PUT request error', error);
            });
    }, []);

    return (
        <div>
            <h2>Update Data</h2>
            {localStorage.getItem("token")}
            {/* {data.[0].kurs} */}
        </div>
    );
}

export default UpdateData;
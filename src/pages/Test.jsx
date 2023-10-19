import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateData() {
 
    const headers = {
        "Authorization": `Token ${localStorage.getItem("token")}`
    };
    useEffect(() => {
        axios.put('https://samtuitlib.pythonanywhere.com/allmessages/', headers)
            .then(response => {
                console.log('PUT request successful', response.data);
            })
            .catch(error => {
                console.error('PUT request error', error);
            });
    }, []);

    return (
        <div>
            <h2>Update Data</h2>
            {localStorage.getItem("token")}
        </div>
    );
}

export default UpdateData;
import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleFileUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('https://api.example.com/upload', formData);
                console.log('Fayl yuborildi', response.data);
            } catch (error) {
                console.error('Xatolik yuz berdi:', error);
            }
        }
    };

    return (
        <div>
            <input type="file" id="fileInput" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Faylni yuborish</button>
        </div>
    );
}

export default FileUpload;

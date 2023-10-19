import { useState } from 'react';
import axios from 'axios';
import { Button, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { toast } from 'react-toastify';

const EbookFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleFileUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('book_file', selectedFile);
            formData.append('book', localStorage.getItem("fileID"));
            try {
                const response = await axios.put('https://samtuitlib.pythonanywhere.com/add_efile/', formData, {
                    'Authorization': 'Token 814d9619d44654dc5b7d7219c752cafd39590043'
                });
                console.log('Fayl yuborildi', response);
                toast.success("file Yuklandi");
                location.reload();
            } catch (error) {
                console.error('Xatolik yuz berdi:', error);
            }
        } else {
            console.log('Fayl yuborilmadissss');
        }
    };
    return (
        <div >
            <DialogTitle>Tasdiqlndi</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {localStorage.getItem("fileID")}
                    {"Ma'lumotlar tasdiqlandi endi kitob rasmini yuklang"}
                </DialogContentText>
            </DialogContent>
            <input type="file" accept=".pdf,.doc,.docx" id="fileInput" onChange={handleFileChange} />
            <Button onClick={handleFileUpload}>Yuborish</Button>
        </div>
    )
}

export default EbookFile
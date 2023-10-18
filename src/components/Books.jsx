/* eslint-disable no-unused-vars */
import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { json } from "react-router-dom";

function App() {
    const [posts, setPosts] = useState([]);
    const [usersForRender, setUsersForRender] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(localStorage.getItem('open-table-row-for-edit') || 'undefined');
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => {
                setPosts(res);
            });
    }, []);

    let deletePost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => {
                var postIndex = posts.findIndex(function (o) {
                    return o.id === postId;
                });
                if (postIndex !== -1) {
                    setPosts(posts.filter((item) => item.id != postId));
                }
            });
    };

    useEffect(() => {
        let postsArray = JSON.parse(JSON.stringify(posts));
        let userData = [];
        postsArray.map((item, index) => {
            item.id = (
                <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>{item.id}</div>
            );
            item.action = (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                        className="uil-trash-alt"
                        style={{
                            cursor: "pointer",
                            color: "white",
                            fontSize: ".7em",
                            padding: ".5rem",
                            borderRadius: ".3rem",
                            background: "#fb6262",
                            display: "flex",
                            alignItems: "center",
                            gap: "1em",
                        }}
                        onClick={() => deletePost(posts[index].id)}
                    >
                        <DeleteIcon />
                        Delete
                    </div>

                </div>
            );
            item.edit = (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                        style={{
                            cursor: "pointer",
                            color: "white",
                            fontSize: ".7em",
                            padding: ".5rem",
                            fontWeight: "bold",
                            borderRadius: ".3rem",
                            background: "green",
                            display: "flex",
                            alignItems: "center",
                            gap: "1em",
                        }}
                        onClick={() => handleClickOpen(posts[index].id)}
                    >
                        <EditNoteIcon />
                        Edit
                    </div>

                </div>
            )
            userData.push(item);
        });
        setUsersForRender(userData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);

    const data = {
        columns: [
            {
                label: "#",
                field: "id",
                sort: "asc",
                width: 150,
            },
            {
                label: "Title",
                field: "title",
                sort: "asc",
                width: 270,
            },

            {
                label: "Body",
                field: "body",
                sort: "asc",
                width: 200,
            },
            {
                label: "Action",
                field: "action",
                width: 100,
            },
            {
                label: "Edit",
                field: "edit",
                action: false,
                width: 100,
            }
        ],

        rows: usersForRender,
    };
    // eslint-disable-next-line no-unused-vars
    const handleClickOpen = (postId) => {
        setOpen(true);
        setModalData(localStorage.setItem('open-table-row-for-edit', JSON.stringify(posts.at(postId))))
        // setModalData(posts.at(postId));
    };
    useEffect(() => {
        const tableDataId = JSON.parse(localStorage.getItem('open-table-row-for-edit'));
        // console.log(tableDataId.title);
        // return tableDataId;
    }, []);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <MDBDataTable
                responsive
                striped
                bordered
                small
                data={data}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="flex justify-between">
                    <h3 className="flex justify-between">
                        {JSON.parse(localStorage.getItem('open-table-row-for-edit')).title}
                    </h3>
                    <h3>
                        {JSON.parse(localStorage.getItem('open-table-row-for-edit')).id}
                    </h3>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {JSON.parse(localStorage.getItem('open-table-row-for-edit')).body}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        // label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={JSON.parse(localStorage.getItem('open-table-row-for-edit')).title}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default App;
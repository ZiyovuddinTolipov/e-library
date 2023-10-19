import { Card, CardBody, CardFooter, SimpleGrid, Stack, Text, Button, ButtonGroup, Divider, Tooltip } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import eBookIcon from "../../assets/ebook.png"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useNavigate } from 'react-router-dom';
function Media(props) {
    const navigation = useNavigate()
    const [data, setData] = useState([]);
    const [eData, setEData] = useState([]);
    const { loading = false } = props;
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [getEBookData, setGetEBookData] = useState({});
    const handleClickOpen = (kitobID, paperB) => () => {
        const bookWithId4 = (paperB == "paperB" ? data : eData).find(function (book) {
            return book.book.id == kitobID;
        });
        setOpen(true);
        localStorage.setItem("kitobID", kitobID)
        setGetEBookData(bookWithId4.book)
        console.log(bookWithId4.book);
        // setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    const apiUrl = 'https://samtuitlib.pythonanywhere.com/';
    // const [userPostID, setUserPostID] = useState(null);
    // localStorage.setItem('user_post_id', userPostID);
    useEffect(() => {
        // Use Axios to make a GET request
        axios.get(apiUrl + "getpbooks/")
            .then(response => {
                // Once the request is successful, update the state with the data
                setData(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axios.post(apiUrl + "get_ebooks/")
            .then(response2 => {
                // Once the request is successful, update the state with the data
                setEData(response2.data);
                // console.log(response2.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const style = {
        navLink: " mx-3 px-3 py-2 w-[50%] border-2  cursor-pointer hover:border-[#fff] duration-200 hover: border-[#00ffcb] text-[#00ffcb] hover:text-[#00ffcb]"
    }
    return (
        <main className=" h-auto flex flex-row mt-5 md:mt-16">
            {/* <h2 className='text-left py-5 text-3xl font-semibold my-5   text-white'>Bizning barcha kitoblar</h2> */}

            <SimpleGrid columns={3} spacing={10} minChildWidth={300} className=' w-[70%]' >
                {(loading ? Array.from(new Array(12)) : data).map((item, index) => (
                    // console.log(item.book.book[1])
                    <Card maxW='sm' key={index} className='bg-slate-800 text-slate-100 my-3 mx-auto flex flex-col items-center justify-center max-h-[500px] w-full max-w-[300px]'>
                        <CardBody className='px-3 py-4 flex  flex-col relative '>
                            {item ? (
                                <div className="w-100 h-[200px] flex items-center justify-center">
                                    <img
                                        src={`${apiUrl}get_img/${item.img.id}`}
                                        alt={item.book.title}
                                        className="h-[200px]"
                                    />
                                </div>
                            ) : (
                                <div className="w-[100%]">
                                    <Skeleton variant="rectangular" width={220} height={118} />
                                </div>
                            )}

                            {item ? (
                                <Stack mt='6' spacing='3'>
                                    <h2 className="text-xl">{item.book.title.slice(0, 30)}</h2>
                                    <Text>
                                        {item.book.authors}
                                    </Text>
                                    <Text color='white' fontSize='2xl'>
                                        {item.book.genres ? item.book.genre : "mavjud emas"} • {item.book.quantity == 1 ? item.book.quantity : "berilmaydi"}
                                    </Text>
                                </Stack>
                            ) : (
                                <div className='w-[100%]'>
                                    <Skeleton width="50%" sx={{ marginTop: '30px' }} />
                                    <Skeleton />
                                </div>
                            )}
                        </CardBody>
                        <Divider />
                        {item ? (
                            <CardFooter className="bg-slate-700">
                                <ButtonGroup spacing='2' className='flex justify-between items-center w-100' >
                                    <Button variant='solid' color="#fff" colorScheme='yellow' onClick={localStorage.setItem('user_post_id', item.book.id + "_key")} className={style.navLink}>
                                        Kitobni olish
                                    </Button>
                                    <Button variant='solid' color="#fff" className={style.navLink}
                                        onClick={handleClickOpen(item.book.id, "paperB")}>
                                        Batafsil
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        ) : (
                            <div className='w-[70%]'>
                                <Skeleton width="50%" />
                                <Skeleton />
                            </div>
                        )}
                    </Card>
                ))}
            </SimpleGrid>

            {loading ? (
                "helllo"
            ) : (
                <ul className='  w-[30%] flex flex-col gap-3 mt-3  border-left pl-2 border-[#00ffcb]' >
                    {eData.map(item => (
                        <li key={item.book.id} className='mx-auto flex flex-row items-start justify-between text-white bg-slate-700 p-2 w-100 gap-4'>
                            <img src={eBookIcon} alt="ebook svg" width={60} />
                            <div className='flex flex-col justify-between h-100'>
                                <h3>{item.book.title}</h3>
                                <h4 className='text-[#00ffcb]'>{item.book.authors}</h4>
                            </div>
                            <ul className='w-[20%] h-full flex items-center justify-between text-[50px]'>
                                <a href={`https://samtuitlib.pythonanywhere.com/save/${item.file.id}`} className='w-[50%] flex items-center justify-center hover:text-[#00ffcb] border-none hover:border-2 border-[#00ffcb] duration-200'>
                                    <ArrowCircleDownIcon className='' />
                                </a>
                                <li
                                    title='Batafsil'
                                    className='w-[50%] flex items-center justify-center hover:text-red-300 duration-200 hover:translate-x-1'
                                    onClick={handleClickOpen(item.book.id)}>
                                    <ArrowOutwardIcon />
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                className='bg-[#000]/60'
            >
                <DialogTitle id="scroll-dialog-title" className='bg-slate-400'>{localStorage.getItem("kitobID")}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'} className='bg-slate-300 min-w-[400px]'>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <ul>
                            <li>Id: {getEBookData.id}</li>
                            <li>Nomi:{getEBookData.title}</li>
                            <li>Muallif: {getEBookData.authors}</li>
                            <li>Janri: {getEBookData.genres}</li>
                            <li>pages: {getEBookData.pages}</li>
                            <li>Nashriyot: {getEBookData.publisher}</li>
                            {
                                getEBookData.quantity > 0 ? <li>Mavjud: {getEBookData.quantity}</li> : null
                            }

                        </ul>

                    </DialogContentText>
                </DialogContent>
                <DialogActions className='bg-slate-700'>
                    <Button onClick={handleClose} className='text-[#00ffcb]'>Yopish</Button>
                    {/* <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </main >
    )
}
Media.propTypes = {
    loading: PropTypes.bool,
};


export default function YouTube() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* <Media loading={true} /> */}
            <Media />
        </Box>
    );
}
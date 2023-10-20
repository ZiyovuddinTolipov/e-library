import { Card, CardBody, CardFooter, SimpleGrid, Stack, Text, Button, ButtonGroup, Divider, Tooltip } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useNavigate } from 'react-router-dom';
function Media(props) {
    const navigation = useNavigate()
    const [data, setData] = useState([]);
    const [books, setBooks] = useState([]);
    const { loading = false } = props;
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [getEBookData, setGetEBookData] = useState({});


    const bookWithId4 = (kitobId) => books.find(function (book) {
        return book.book == kitobId;
    });


    // setScroll(scrollType);

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
        axios.post(apiUrl + "allmessages/")
            .then(response => {
                // Once the request is successful, update the state with the data
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        axios.get(apiUrl + "getpbooks/")
            .then(response => {
                // Once the request is successful, update the state with the data
                setBooks(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);
    
   

   

        const style = {
            listDefaults: "text-xl p-3 rounded-md w-full flex justify-between items-center font-[500] h-[100px] ",
            listError: "text-red-500 bg-red-200 font-[500] ",
            listSuccess: "text-green-500 bg-green-200 font-[500] ",
            listInfo: "text-blue-500 bg-blue-200 font-[500] ",
            listWarning: "text-yellow-500 bg-yellow-200 font-[500] ",
            listText: "font-[500] border-r border-red-900 flex-nowrap min-w-[200px]",
            listIcon: "cursor-pointer"
        }
        return (
            <main className=" h-auto flex flex-row mt-5 md:mt-16">
                {/* <h2 className='text-left py-5 text-3xl font-semibold my-5   text-white'>Bizning barcha kitoblar</h2> */}

                <SimpleGrid columns={1} spacing={10} className=' w-[100%]' >
                    {(loading ? Array.from(new Array(12)) : data).map((item, index) => (
                        // console.log(item.book.book[1])
                        <Card maxW='sm' key={index} className={`${style.listDefaults} ${style.listInfo}`}>
                            <CardBody className='flex flex-row relative '>
                                {item ? (
                                    <h4 className={style.listText}>Kitob Id: {item.book}</h4>
                                ) : (
                                    <div className="w-[100%]">
                                        <Skeleton variant="rectangular" width={220} height={118} />
                                    </div>
                                )}

                                {item ? (
                                    <Stack className='flex w-100 flex-row'>
                                            {
                                                item.description.match(/\n(\d+)/) ? item.description.match(/\n(\d+)/).slice(0,1).map((number, index) => (
                                                    <h4 key={index} className='border-r border-red-900 px-2'>Foydalanish muddati{number}</h4>
                                                )) :item.description.match(/\n(\d+)/)
                                            }
                                            <h4 className='border-r border-red-900 px-2'>StudentID: {item.student_id}</h4>
                                            <h4 className='border-r border-red-900 px-2'>Kursi: {item.kurs}</h4>
                                        <Button   onClick={localStorage.setItem('message_id', item.id)} className="bg-blue-700 text-white px-2 py-2 hover:bg-blue-600 duration-200">
                                            Javob qaytarish
                                        </Button>
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
                                        {/* <Button variant='solid' color="#fff" colorScheme='yellow' onClick={localStorage.setItem('message_id', item.id)} className={style.navLink}>
                                        Javob qaytarish
                                    </Button> */}
                                        {/* <Button variant='solid' color="#fff" className={style.navLink}>
                                        Batafsil
                                    </Button> */}
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
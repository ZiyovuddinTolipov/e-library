import { Card, CardBody, CardFooter, SimpleGrid, Stack, Text, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import eBookIcon from "../../assets/ebook.png"

function Media(props) {
    const { loading = false } = props;

    const [data, setData] = useState([]);

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
    }, [ ]);

    const style = {
        navLink: " mx-3 px-3 py-2 w-[50%] border-2  cursor-pointer hover:border-[#fff] duration-200 hover: border-[#00ffcb] text-[#00ffcb] hover:text-[#00ffcb]"
    }
    return (
        <main className=" h-auto flex flex-row mt-5 md:mt-16">
            {/* <h2 className='text-left py-5 text-3xl font-semibold my-5   text-white'>Bizning barcha kitoblar</h2> */}

            <SimpleGrid  columns={3} spacing={10} minChildWidth={300} className=' w-[70%]' >
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
                                    <h2 className="text-xl">{item.book.title.slice(0,30)}</h2>
                                    <Text>
                                        {item.book.authors}
                                    </Text>
                                    <Text color='black' fontSize='2xl'>
                                        ${item.book.authors}
                                    </Text>
                                </Stack>
                            ) : (
                                <div className='w-[100%]'>
                                    <Skeleton width="50%" sx={{marginTop:'30px'}} />
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
                                    <Button variant='solid' color="#fff" className={style.navLink}>
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
                <ul className=' rounded-2xl w-[30%] flex flex-col gap-3 ' >
                    {data.map(item => (
                        <li key={item.book.id} className='mx-auto flex flex-row items-start justify-start text-white w-100 gap-4'>
                            <img src={eBookIcon} alt="ebook svg" width={50} />
                            <div className='flex flex-col justify-between h-100'>
                                <h3>{item.book.title}</h3>
                                <h4 className='text-[#00ffcb]'>{item.book.publisher}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </main>
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
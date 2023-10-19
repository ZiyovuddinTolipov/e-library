import { Card, CardBody, CardFooter, SimpleGrid, Image, Heading, Stack, Text, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadCards from './LoadBooks';
import eBookIcon from "../../assets/ebook.png"

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = 'https://webbookshop.pythonanywhere.com/';
    // const [userPostID, setUserPostID] = useState(null);
    // localStorage.setItem('user_post_id', userPostID);
    useEffect(() => {
        // Use Axios to make a GET request
        axios.get(apiUrl + "get/books/")
            .then(response => {
                // Once the request is successful, update the state with the data
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const style = {
        navLink: "px-3 py-2 w-[50%] border-2  cursor-pointer hover:border-[#fff] duration-200 hover: border-[#00ffcb] text-[#00ffcb] hover:text-[#00ffcb]"
    }
    return (
        <main className=" h-auto flex flex-row mt-5 md:mt-16">
            {/* <h2 className='text-left py-5 text-3xl font-semibold my-5   text-white'>Bizning barcha kitoblar</h2> */}
            {loading ? (
                <LoadCards />
            ) : (
                <SimpleGrid p="10px" columns={3} spacing={10} minChildWidth={200} className='shop-card rounded-2xl w-[70%]' >
                    {data.map(item => (
                        <Card maxW='sm' key={item.id} className='mx-auto flex flex-col items-center justify-center '>
                            <CardBody className='bg-slate-700'>
                                <Image
                                    src={`${apiUrl}get/img/${item.id}`}
                                    alt={item.title}
                                    borderRadius='lg'
                                    h={300}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{item.title}</Heading>
                                    <Text>
                                        {item.description ? item.description : "lorem ipsum dolor sit amet, consectetur adip"}
                                    </Text>
                                    <Text color='black' fontSize='2xl'>
                                        ${item.price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter className="bg-slate-700">
                                <ButtonGroup spacing='2' className='flex justify-between items-center w-100' >
                                    <Button variant='solid' color="#fff" colorScheme='yellow' onClick={localStorage.setItem('user_post_id', item.id + "_key")} className={style.navLink}>
                                        Kitobni olish
                                    </Button>
                                    <Button variant='solid' bg="#FBD144" color="#fff" className={style.navLink}>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            )}
            {loading ? (
                <LoadCards />
            ) : (
                <ul className=' rounded-2xl w-[30%] flex flex-col gap-3 ' >
                    {data.map(item => (
                        <li key={item.id} className='mx-auto flex flex-row items-start justify-start text-white w-100 gap-4'>
                            <img src={eBookIcon} alt="ebook svg" width={50}/>
                            <div className='flex flex-col justify-between h-100'>
                                <h3>{item.title}</h3>
                                <h4 className='text-[#00ffcb]'>{item.publisher}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}

export default Cards
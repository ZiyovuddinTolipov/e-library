/* eslint-disable no-unused-vars */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Orders from '../components/Orders';
import Books from "../components/Books"
// import Link from '@mui/material/Link';


const Lists = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} >
                        <Paper
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div className="bg-gray-50  flex-row  items-center justify-center ">
                                <div className="relative w-full max-w-screen-lg">

                                    <div className="m-8 relative flex justify-between items-center sm:flex-1">
                                        <div className="p-1  flex items-center justify-between ">
                                            <div className=" flex flex-col justify-center items-center">
                                                <h2 className=" text-blue-500  font-semibold text-3xl" > 335+</h2>
                                                <h3 className='text-blue-400'>Kitoblar</h3>
                                            </div>
                                        </div>
                                        <div className="p-1 flex items-center justify-between ">
                                            <div className=" flex flex-col justify-center items-center">
                                                <h2 className=" text-blue-500  font-semibold text-3xl" > 5900+</h2>
                                                <h3 className='text-blue-400'>Elektron Kitoblar</h3>
                                            </div>
                                        </div>
                                        <div className="p-1  flex items-center justify-between ">
                                            <div className=" flex flex-col justify-center items-center">
                                                <h2 className=" text-blue-500  font-semibold text-3xl" > 335+</h2>
                                                <h3 className='text-blue-400'>Foydalanuvchilar</h3>
                                            </div>
                                        </div>
                                        <div className="p-1  flex items-center justify-between ">
                                            <div className=" flex flex-col justify-center items-center">
                                                <h2 className=" text-blue-500  font-semibold text-3xl" > 50+</h2>
                                                <h3 className='text-blue-400'>Yangi</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}

                    {/* Recent Orders */}
                    <Grid item xs={12} width={100}>
                        
                            {/* <Orders /> */}
                            <Books />
                        
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Lists
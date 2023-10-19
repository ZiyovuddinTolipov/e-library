import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import bgImg from '../assets/bgtatu.png'
import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://tolipovjs.uz/" className={style.link} >
                tolipovjs.uz
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const style = {
    link: "text-blue-600 hover:text-blue-500 hover:text-underline"
}

export default function SignInSide() {
    const navigate = useNavigate();
    // const [token, setToken] = useState(null);
    // const [staff, setStaff] = useState(null);
    const [formData, setFormData] = useState({
        password: '',
        username: '',
        // Boshqa inputlarni qo'shing
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const base64Credentials = btoa(`${formData.username}:${formData.password}`);
    // localStorage.setItem('token', token);
    // localStorage.setItem('staff', staff);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json',
    }
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);


        const apiUrl = 'https://samtuitlib.pythonanywhere.com/login/'; // Replace with your API endpoint

        const data2 = {
            username: data.get('username'),
            password: data.get('password'),
        };

        // Inside the useEffect, you can make your POST request
        fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data2),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                // Handle the response data here
                console.log(result);
                localStorage.setItem('token', result.token);
                localStorage.setItem('staff', result.staff);
                // setToken(result.token)
                // setStaff(result.staff)
                navigate("/library");
                // setFormData({
                //     password: '',
                //     username: '',
                //     // Boshqa inputlarni tozalash
                // });
            })
            .catch((error) => {
                // Handle errors here
                toast.error("Login yoki parol noto'g'ri")
                console.error('Error:', error);
                setFormData({
                    password: '',
                    username: '',
                    // Boshqa inputlarni tozalash
                });
            });

        // Optionally, you can return a cleanup function
        return () => {
            // Perform cleanup, if needed
        };
    };

    return (
        <main className="bg-[#1D2733]">
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    className='overflow-hidden relative flex justify-center items-center'
                >
                    <img src={bgImg} alt="tatu bg" className='opacity-60 absolute left-0 top-0 bottom-0 w-100 h-100' />
                    <h1 className='text-6xl font-semibold text-white text-center hidden md:block relative z-40'>Elektron Kutubxona</h1>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                    <Box
                        sx={{
                            my: 12,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Kutubxonaga kirish
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="login"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                autoFocus
                            />
                            <FormControl variant="outlined" sx={{
                                width: "100%",
                            }}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    sx={{
                                        width: "100%",
                                    }}
                                    required
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="parolni saqlab qolish"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Kirish
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/" variant="body2" className={style.link}>
                                        Parolni unutdingizmi?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" className={style.link}>
                                        {"Sizda hisob mavjud emasmi? Hisob yaratish."}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </main>
    );
}
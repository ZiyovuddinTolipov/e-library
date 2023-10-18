/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


// icons 
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BarChartIcon from '@mui/icons-material/BarChart';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import { mainListItems, secondaryListItems } from '../components/ListItems';

import LogoPng from "../assets/logo.png"
//pages
import Dashborad from "../layouts/Dashboard"
import ListsPages from "../layouts/Lists"
import AddEbooks from "../layouts/AddEBook"
import AddBook from "../layouts/AddBooks"
import NotficationSys from "../layouts/NotficationSys"


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://tolipovjs.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [openMenuNot, setOpenMenuNot] = useState(true);
    const [openMenuAddBooks, setOpenMenuAddBooks] = useState(true);

    const handleOpenNotfMenu = () => {
        setOpenMenuNot(!openMenuNot);
    };
    const handleOpenAddBookMenu = () => {
        setOpenMenuAddBooks(!openMenuAddBooks);
    };
    // eslint-disable-next-line no-unused-vars
    const [selectedButton, setSelectedButton] = useState(localStorage.getItem('selectedButton') || 'dashboard');

    const handleButtonClick = (buttonName) => {
        localStorage.setItem('selectedButton', buttonName);
        setSelectedButton(buttonName);
    };

    useEffect(() => {
        const storedButton = localStorage.getItem('selectedButton');
        if (storedButton) {
            setSelectedButton(storedButton);
        }
    }, []);
    const style = {
        iconApp: "text-blue-600"
    }

    return (
        <ThemeProvider className='bg-slate-900' theme={defaultTheme}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <Box sx={{ display: 'flex', backgroundColor: "#101418" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                            backgroundColor: "#101418",
                            color: "#E5EAF2"
                        }}
                    >

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />

                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            SAMTUIT-LIB
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: "100%",
                            backgroundColor: "#101418",
                            color: "#E5EAF2",
                            px: [1],
                        }}

                    >
                        <img src={LogoPng} alt="logo samtuit" width={40} />
                        <h2 className='mx-2 font-semibold text-blue-300 text-2xl'>A-Allies</h2>
                        <IconButton onClick={toggleDrawer}
                            sx={{
                                backgroundColor: "rgba(31, 38, 46, 0.9)",
                                color: "#E5EAF2",
                            }}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />

                    <List
                        sx={{ width: '100%', maxWidth: 360 }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton
                            onClick={() => handleButtonClick('dashboard')}
                            sx={localStorage.getItem('selectedButton') === "dashboard" ? { backgroundColor: "rgba(31, 38, 46, 0.2)" } : null}
                        >
                            <ListItemIcon>
                                <BarChartIcon className={style.iconApp} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleButtonClick('list')}
                            sx={localStorage.getItem('selectedButton') === "list" ? { backgroundColor: "rgba(31, 38, 46, 0.2)" } : null}
                        >
                            <ListItemIcon>
                                <LocalLibraryIcon className={style.iconApp} />
                            </ListItemIcon>
                            <ListItemText primary="Kitoblar" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={handleOpenNotfMenu}
                            sx={(localStorage.getItem('selectedButton') === "notficationsys") || (localStorage.getItem('notficationstudents') === "addEBooks") ? { backgroundColor: "rgba(31, 38, 46, 0.1)" } : null}
                        >
                            <ListItemIcon>
                                <CircleNotificationsIcon className={style.iconApp} />
                            </ListItemIcon>
                            <ListItemText primary="Xabarlar" />
                            {openMenuNot ? <ExpandLess className={style.iconApp} /> : <ExpandMore className={style.iconApp} />}
                        </ListItemButton>
                        <Collapse in={openMenuNot} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding >
                                <ListItemButton
                                    onClick={() => handleButtonClick('notficationsys')}
                                    sx={localStorage.getItem('selectedButton') === "notficationsys" ? { backgroundColor: "rgba(31, 38, 46, 0.2)", pl: 4 } : { pl: 4 }}
                                >
                                    <ListItemIcon>
                                        <CircleNotificationsIcon className={style.iconApp} />
                                    </ListItemIcon>
                                    <ListItemText primary="Tizim" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        {/* Yangi Kitoblar qo'shish uchun */}
                        <ListItemButton onClick={handleOpenAddBookMenu}
                            sx={(localStorage.getItem('selectedButton') === "addBooks") || (localStorage.getItem('selectedButton') === "addEBooks") ? { backgroundColor: "rgba(31, 38, 46, 0.1)" } : null}
                        >
                            <ListItemIcon>
                                <BookmarkAddIcon className={style.iconApp} />
                            </ListItemIcon>
                            <ListItemText primary="Kitob Qo'shish" />
                            {openMenuAddBooks ? <ExpandLess className={style.iconApp} /> : <ExpandMore className={style.iconApp} />}
                        </ListItemButton>
                        <Collapse in={openMenuAddBooks} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    onClick={() => handleButtonClick('addEBooks')}
                                    sx={localStorage.getItem('selectedButton') === "addEBooks" ? { backgroundColor: "rgba(31, 38, 46, 0.2)", pl: 4 } : { pl: 4 }}
                                >
                                    <ListItemIcon>
                                        <LibraryBooksIcon className={style.iconApp} />
                                    </ListItemIcon>
                                    <ListItemText primary="Elektron"

                                    />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => handleButtonClick('addBooks')}
                                    sx={localStorage.getItem('selectedButton') === "addBooks" ? { backgroundColor: "rgba(31, 38, 46, 0.2)", pl: 4 } : { pl: 4 }}
                                >
                                    <ListItemIcon>
                                        <MenuBookIcon className={style.iconApp} />
                                    </ListItemIcon>
                                    <ListItemText primary="Qog'oz"

                                    />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    {
                        localStorage.getItem('selectedButton') === "dashboard" ? <Dashborad /> : null
                    }
                    {
                        localStorage.getItem('selectedButton') === "list" ? <ListsPages /> : null
                    }
                    {
                        localStorage.getItem('selectedButton') === "addEBooks" ? <AddEbooks /> : null
                    }
                    {
                        localStorage.getItem('selectedButton') === "addBooks" ? <AddBook /> : null
                    }
                    {
                        localStorage.getItem('selectedButton') === "notficationsys" ? <NotficationSys /> : null
                    }
                    <Copyright sx={{ pt: 2, m: 3 }} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
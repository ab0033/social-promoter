import React from 'react';
import {AppBar, Collapse, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatIcon from '@mui/icons-material/Chat';
import '../css/NavBar.css';
import useChecking from '../hook/useChecking';

const NavBar = () => {
    const checked = useChecking();
    return (
        <div>
            <Collapse in={checked} timeout={1}>
                <AppBar className="app-bar">
                    <Toolbar className="toolbar">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            className="company-name-wrapper">
                            Promoter
                        </Typography>
                        <Tooltip title="Our Telegram" followCursor>
                            <a href={""}>
                                <IconButton className="contact-icons-wrapper">
                                    <TelegramIcon/>
                                </IconButton>
                            </a>
                        </Tooltip>
                        <Tooltip title="F.A.Q" followCursor>
                            <a href={""}>
                                <IconButton className="contact-icons-wrapper">
                                    <QuizRoundedIcon/>
                                </IconButton>
                            </a>
                        </Tooltip>
                        <Tooltip title="Our Email" followCursor>
                            <a href={""}>
                                <IconButton className="contact-icons-wrapper">
                                    <ChatIcon/>
                                </IconButton>
                            </a>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </Collapse>
        </div>
    );
};

export default NavBar;
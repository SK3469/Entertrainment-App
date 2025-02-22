
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Box } from '@mui/material';



export default function NavbarMenu() {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const items = [
        {
            name: 'Resume Builder',
            image: "https://logo.gklite.in/resume_builder.jpg",
            link: 'https://resume-builder-anurag.vercel.app/'
        },
        {
            name: 'Anurag Affection',
            image: "https://logo.gklite.in/anuragaffection.jpg",
            link: 'https://anuragaffection.gklite.in/'
        },
    ];

    return (
        <Box>
            <IconButton
                sx={{
                    color: '#DCFCE7',
                    '&:hover': {
                        color: '#16A34A',
                    },
                }}
                aria-label='more'
                aria-controls='long_menu'
                aria-expanded='true'
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AppsIcon sx={{ fontSize: '36px' }} />
            </IconButton>
           {/* Add later */}
        </Box >
    );
}


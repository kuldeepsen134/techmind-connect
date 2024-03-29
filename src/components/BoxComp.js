import React from 'react'
import { Box, Typography, Card, Stack } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { DescriptionRounded, FormatAlignLeftOutlined } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
import CodeIcon from '@mui/icons-material/Code';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { textFont } from '../styles';

const BoxComp = (props) => {
    const navigate = useNavigate();
    let iconVar;
    const { heading, route, title, description, icon } = props;

    switch (icon) {
        case '1': iconVar = <FormatAlignLeftOutlined className='icon-box-style' sx={{ fontSize: 80, color: "#fff", mt: 2, ml: 2 }} />
            break;
        case '2': iconVar = <DescriptionRounded className='icon-box-style' sx={{ fontSize: 80, color: "#fff", mt: 2, ml: 2 }} />
            break;
        case '3': iconVar = <CodeIcon className='icon-box-style' sx={{ fontSize: 80, color: "#fff", mt: 2, ml: 2 }} />
            break;
        case '4': iconVar = <RecordVoiceOverIcon className='icon-box-style' sx={{ fontSize: 80, color: "#fff", mt: 2, ml: 2 }} />
            break;
        case '5': iconVar = <ImageIcon className='icon-box-style' sx={{ fontSize: 80, color: "#fff", mt: 2, ml: 2 }} />
            break;
        default: iconVar = <FormatAlignLeftOutlined className='icon-box-style' sx={{ fontSize: 80, color: "#fff", mt: 2, ml: 2 }} />
            break;
    }

    return (
        <Box p={2} >
            <Typography color="white" variant="h5" mb={2} fontWeight="bold" sx={{ pl: '12px', ...textFont }}>
                {heading}
            </Typography>
            <Card  className="main-box-sub" onClick={() => navigate('/' + route)} sx={{
                bgcolor: '#282c34', color: 'white', borderRadius: 5, boxShadow: 2, height: 220, width: 250, '&:hover': {
                    border: 2, boxShadow: 0, borderColor: "#efcb58", cursor: 'pointer',
                }
            }}>
                {iconVar}
                <Stack p={3} pt={0}>
                    <Typography variant="h5" fontWeight="bold" sx={textFont}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={textFont}>
                        {description}
                    </Typography>
                </Stack>
            </Card>
        </Box>
    )
}

export default BoxComp
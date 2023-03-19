import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { format } from "date-fns"
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
function Footer() {
    return (
        <>
            <Box padding={'20px'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'primary.dark', color: 'white' }}>
                <Typography>© {format(new Date(), 'yyyy')} MO.   All right reserverd</Typography>
                <Box sx={{display: 'flex', gap:'15px'}}>
                    <TelegramIcon sx={{cursor: 'pointer'}}/>
                    <GitHubIcon sx={{cursor: 'pointer'}}/>
                    <YouTubeIcon sx={{cursor: 'pointer'}}/>
                </Box>
            </Box>
        </>
    )
}

export default Footer
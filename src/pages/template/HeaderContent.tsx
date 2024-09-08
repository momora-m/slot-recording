import { AppBar, Toolbar, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

function HeaderContent() {
    return(
        <>
            <Box sx={{ flexGrow: 1, posision: 'sticky', top:0, left: 0, right: 0, bgcolor: '#fff' ,zIndex: 10}}>
                <AppBar
                    position='static'
                    sx={{
                        bgcolor: '#fff',
                        position: 'relative'
                    }}
                >
                    <Toolbar sx={{ height: '70px' , justifyContent: 'space-between' }}>
                        <Box sx={{ width: '81px'}}>
                            <Link to={'/'}>
                            <HomeIcon/>
                            </Link>
                        </Box>
                    </Toolbar>
                    <Typography
                        variant="h1"
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontsize: '20px',
                          fontWeight: '700',
                        }}
                    >
                        パチスロ稼データ収集
                    </Typography>
                </AppBar>
            </Box>
        </>

    )
}

export default HeaderContent;
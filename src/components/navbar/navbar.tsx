import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { navItems } from "src/config/constants";
import AppleIcon from "@mui/icons-material/Apple";

interface Props {
    window?: () => Window;
}
function Navbar({ window }: Props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingX: "20px",
                }}
            >
                <Box sx={{ my: 2, display: "flex", alignItems: "center", gap: "5px" }}>
                    <AppleIcon />
                    <Typography variant="h6">MO</Typography>
                </Box>
                <CloseIcon />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.route} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box height={"10vh"} sx={{ display: "flex" }}>
            <AppBar sx={{height: "10vh"}} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ my: 2, alignItems: 'center', gap: '5px', flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
                        <AppleIcon />
                        <Typography variant="h6" component="div">MO</Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button key={item.route} sx={{ color: "#fff" }}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;

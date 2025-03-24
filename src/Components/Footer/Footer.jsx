import React from "react";
import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box>
            <Box>
                <Box sx={{ backgroundColor: "#2c3e50", color: "white", py: 5 }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            {/* About Us Section */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="h6">ABOUT US</Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                                    <Facebook />
                                    <Twitter />
                                    <LinkedIn />
                                    <YouTube />
                                </Box>
                            </Grid>

                            {/* Information Section */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="h6">INFORMATION</Typography>
                                <Typography variant="body2">About us</Typography>
                                <Typography variant="body2">Manufacturers</Typography>
                                <Typography variant="body2">Tracking order</Typography>
                                <Typography variant="body2">Privacy & Policy</Typography>
                                <Typography variant="body2">Terms & Conditions</Typography>
                            </Grid>

                            {/* My Account Section */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="h6">MY ACCOUNT</Typography>
                                <Typography variant="body2">Login</Typography>
                                <Typography variant="body2">My card</Typography>
                                <Typography variant="body2">Wishlist</Typography>
                                <Typography variant="body2">Compare</Typography>
                                <Typography variant="body2">My account</Typography>
                            </Grid>

                            {/* Newsletter Section */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="h6">NEWSLETTER</Typography>
                                <TextField
                                    variant="outlined"
                                    placeholder="Enter E-mail Address"
                                    size="small"
                                    fullWidth
                                    sx={{
                                        backgroundColor: "transparent", // Transparent background
                                        borderRadius: 1, // Rounded corners
                                        mt: 1, // Margin top
                                        "& .MuiOutlinedInput-root": {
                                            height: "60px", // Set height
                                            "& fieldset": {
                                                border: "1px solid #ccc", // 1px border
                                            },
                                            "&:hover fieldset": {
                                                border: "1px solid #888", // Darker border on hover
                                            },
                                            "&.Mui-focused fieldset": {
                                                border: "1px solid #1976d2", // Primary color when focused
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "white", // Placeholder color
                                            opacity: 1, // Ensure full visibility
                                        },
                                    }}
                                />

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ff6600",
                                        color: "white",
                                        mt: 2,
                                        height: "50px",
                                        width: "150px", // Set width
                                        textTransform: "none", // Disable uppercase text transformation
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1, // Space between text and icon
                                    }}
                                >
                                     <svg
                                        width="24"
                                        height="21"
                                        viewBox="0 0 24 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22 1.75L11 11.375"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22 1.75L15 19.25L11 11.375L2 7.875L22 1.75Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Subscribe
                                   
                                </Button>


                            </Grid>
                        </Grid>
                    </Container>

                </Box>
            </Box>
            <Box sx={{ backgroundColor: "black", textAlign: "center", py: 2, color: 'white', bottom: 0, width: "100%" }}>
                <Typography variant="body2">© 2025, Furns. Made with Chandon Kumar.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;

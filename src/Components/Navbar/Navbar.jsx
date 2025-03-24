import { useState } from "react";
import { Box, Typography, Menu, MenuItem, IconButton, Divider, Paper } from "@mui/material";
import Banner from "../Banner/Banner";
import Home from "../Home/Home";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const dropdownItems = {
        homeFurniture: ["Sofas", "Beds", "Tables", "Chairs"],
        hospitalFurniture: ["Hospital Beds", "Examination Tables", "Wheelchairs"],
        officeFurniture: ["Desks", "Office Chairs", "Cabinets", "Conference Tables"],
    };


    return (
        <Box>
            <Box sx={{ width: "1500px", mx: 'auto', display: 'flex', justifyContent: 'space-around', gap: '60px', alignItems: 'center', mt: '20px' }}>
                <Box>
                    <img src="https://i.ibb.co.com/vCYLTDD7/images-logo-logo-1.png" alt="" />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <svg width="30" height="30" viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.8333 42.75C33.4063 42.75 41.1667 34.6911 41.1667 24.75C41.1667 14.8089 33.4063 6.75 23.8333 6.75C14.2604 6.75 6.5 14.8089 6.5 24.75C6.5 34.6911 14.2604 42.75 23.8333 42.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M45.5 47.25L36.075 37.4625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Divider orientation="vertical" flexItem />
                    <svg width="30" height="30" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.6667 47.25V42.75C46.6667 40.3631 45.6834 38.0739 43.933 36.386C42.1827 34.6982 39.8087 33.75 37.3334 33.75H18.6667C16.1914 33.75 13.8174 34.6982 12.067 36.386C10.3167 38.0739 9.33337 40.3631 9.33337 42.75V47.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 24.75C33.1546 24.75 37.3333 20.7206 37.3333 15.75C37.3333 10.7794 33.1546 6.75 28 6.75C22.8453 6.75 18.6666 10.7794 18.6666 15.75C18.6666 20.7206 22.8453 24.75 28 24.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Divider orientation="vertical" flexItem />
                    <svg width="30" height="30" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.3333 22.4583H11.6667C9.08934 22.4583 7 24.2865 7 26.5417V40.8333C7 43.0885 9.08934 44.9167 11.6667 44.9167H44.3333C46.9107 44.9167 49 43.0885 49 40.8333V26.5417C49 24.2865 46.9107 22.4583 44.3333 22.4583Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.3334 22.4583V14.2917C16.3334 11.5842 17.5625 8.98772 19.7505 7.07328C21.9384 5.15885 24.9058 4.08333 28 4.08333C31.0942 4.08333 34.0617 5.15885 36.2496 7.07328C38.4375 8.98772 39.6667 11.5842 39.6667 14.2917V22.4583" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "rgb(226, 226, 226)", height: "75px", mt: "30px", display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
                <Typography
                    sx={{
                        transition: "color 0.5s",
                        "&:hover": {
                            color: "#FA6813",
                        },
                    }}
                >
                    Home
                </Typography>
                <Typography
                    sx={{
                        transition: "color 0.5s",
                        "&:hover": {
                            color: "#FA6813",
                        },
                    }}>About</Typography>

                {["homeFurniture", "hospitalFurniture", "officeFurniture"].map((type) => (
                    <Box key={type} sx={{ position: "relative", cursor: "pointer" }} onMouseEnter={() => handleMouseEnter(type)} onMouseLeave={handleMouseLeave}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                                sx={{
                                    transition: "color 0.5s",
                                    "&:hover": {
                                        color: "#FA6813",
                                    },
                                }}>
                                {type === "homeFurniture" ? "Home Furniture" : type === "hospitalFurniture" ? "Hospital Furniture" : "Office Furniture"}
                            </Typography>
                            <Box sx={{}}>
                                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 11.25L15 18.75L22.5 11.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Box>
                        </Box>

                        {/* Dropdown Menu */}
                        {openMenu === type && (
                            <Paper
                                sx={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    backgroundColor: "#fff",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    minWidth: "220px",
                                    zIndex: 10,
                                    opacity: openMenu === type ? 1 : 0,
                                    transform: openMenu === type ? "translateY(0)" : "translateY(-5px)",
                                    visibility: openMenu === type ? "visible" : "hidden",
                                    transition: "opacity 0.08s ease-in-out, transform 0.08s ease-in-out, visibility 0.08s"
                                }}
                            >
                                {dropdownItems[type].map((item) => (
                                    <MenuItem key={item} sx={{ padding: "10px 20px", fontSize: "16px" }}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Paper>
                        )}
                    </Box>
                ))}

                <Typography
                    sx={{
                        transition: "color 0.5s",
                        "&:hover": {
                            color: "#FA6813",
                        },
                    }}>Contact</Typography>
            </Box>
          
              <Home/>
           
        </Box>
    );
};

export default Navbar;
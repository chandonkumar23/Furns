import React from "react";
import { Container, Typography, Tabs, Tab, Box, Button } from "@mui/material";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const products = [
    { id: 1, name: "Living Room Sets", price: 1540, oldPrice: 1520, image: "https://i.ibb.co/VYdrTHQD/living-removebg-preview-1.png", category: "new" },
    { id: 2, name: "Sofa for living room", price: 110, oldPrice: 130, image: "https://i.ibb.co/1J6vS3Yw/chair.jpg", category: "new" },
    { id: 3, name: "Living Room Sets", price: 1540, oldPrice: 1520, image: "https://i.ibb.co/VYdrTHQD/living-removebg-preview-1.png", category: "new" },
    { id: 4, name: "Sofa for living room", price: 110, oldPrice: 130, image: "https://i.ibb.co/1J6vS3Yw/chair.jpg", category: "new" },
    { id: 5, name: "Living Room Sets", price: 1540, oldPrice: 1520, image: "https://i.ibb.co/VYdrTHQD/living-removebg-preview-1.png", category: "new" },
    { id: 6, name: "Sofa for living room", price: 110, oldPrice: 130, image: "https://i.ibb.co/1J6vS3Yw/chair.jpg", category: "new" },
    { id: 7, name: "Living Room Sets", price: 1540, oldPrice: 1520, image: "https://i.ibb.co/VYdrTHQD/living-removebg-preview-1.png", category: "new" },
    { id: 8, name: "Sofa for living room", price: 110, oldPrice: 130, image: "https://i.ibb.co/1J6vS3Yw/chair.jpg", category: "new" },
    { id: 9, name: "Chair", price: 19, oldPrice: 21, image: "https://i.ibb.co/4wDvZkNR/2-40d9c634.jpg", category: "featured" },
    { id: 10, name: "Product with video", price: 39, image: "https://i.ibb.co/wZqJMXhT/6-cb7fa61b.jpg", category: "featured" },
    { id: 11, name: "Chair", price: 19, oldPrice: 21, image: "https://i.ibb.co/4wDvZkNR/2-40d9c634.jpg", category: "featured" },
    { id: 12, name: "Product with video", price: 39, image: "https://i.ibb.co/wZqJMXhT/6-cb7fa61b.jpg", category: "featured" },
    { id: 13, name: "Modern Sofa", price: 799, oldPrice: 850, image: "https://i.ibb.co/xyz.jpg", category: "sale" },
    { id: 14, name: "Wooden Chair", price: 49, oldPrice: 60, image: "https://i.ibb.co/abc.jpg", category: "sale" },
    { id: 15, name: "Modern Sofa", price: 799, oldPrice: 850, image: "https://i.ibb.co/xyz.jpg", category: "sale" },
    { id: 16, name: "Wooden Chair", price: 49, oldPrice: 60, image: "https://i.ibb.co/abc.jpg", category: "sale" },
    { id: 17, name: "Modern Sofa", price: 799, oldPrice: 850, image: "https://i.ibb.co/xyz.jpg", category: "sale" },
    { id: 18, name: "Wooden Chair", price: 49, oldPrice: 60, image: "https://i.ibb.co/abc.jpg", category: "sale" },
    { id: 19, name: "Modern Sofa", price: 799, oldPrice: 850, image: "https://i.ibb.co/xyz.jpg", category: "sale" },
    { id: 20, name: "Wooden Chair", price: 49, oldPrice: 60, image: "https://i.ibb.co/abc.jpg", category: "sale" },
    { id: 21, name: "Vintage Lamp", price: 25, oldPrice: 30, image: "https://i.ibb.co/pqr.jpg", category: "trending" },
    { id: 22, name: "Office Desk", price: 199, oldPrice: 250, image: "https://i.ibb.co/def.jpg", category: "trending" },
];

const HomeProduct = () => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const categories = ["new", "featured", "sale", "trending"];

    const filteredProducts = products
        .filter(product => product.category === categories[tabIndex])
        .slice(0, 8); // Ensure max 8 products for 4x2 grid

    return (
        <Box>
            <Container>
                <Typography sx={{ textAlign: 'center', fontWeight: '700', fontSize: "50px" }} gutterBottom>
                    Our Products
                </Typography>
                <Box sx={{ width: '532px', textAlign: 'center', mx: 'auto', mb: '30px' }}>
                    <Typography sx={{ fontSize: '18px', color: '#877B7B' }}>
                        Explore our latest furniture collections and find the perfect fit for your home.
                    </Typography>
                </Box>

                <Tabs
                    value={tabIndex}
                    onChange={(e, newIndex) => setTabIndex(newIndex)}
                    centered
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{
                        '& .MuiTab-root': {
                            color: 'black', // Default color
                            transition: 'color 0.4s ease', // Smooth transition
                            '&:hover': { color: '#FA6813' }, // Hover color
                        },
                        '& .Mui-selected': {
                            color: '#FA6813 !important', // Active tab color
                        },
                        '& .MuiTabs-indicator': {
                            display: "none", // Remove the underline
                        },
                    }}
                >
                    <Tab label="New Arrival" />
                    <Tab label="Featured" />
                    <Tab label="On Sale" />
                    <Tab label="Trending" />
                </Tabs>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: '20px',
                        mt: '20px',
                        justifyContent: 'center',
                    }}
                >
                    {filteredProducts.map((product) => (
                    <Box
                    key={product.id}
                    sx={{
                        position: "relative",
                        width: "300px",
                        "&:hover .fullscreen-icon": { display: "flex" }, // Show fullscreen icon on hover
                        "&:hover .continue-btn": { display: "flex" }, // Show Add to Cart button on hover
                    }}
                >
                    <Box
                        sx={{
                            width: "300px",
                            height: "400px",
                            backgroundColor: "#D9D9D957",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            position: "relative",
                        }}
                    >
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            sx={{
                                maxWidth: "300px",
                                maxHeight: "300px",
                                objectFit: "contain",
                            }}
                        />
                
                        {/* Favorite Icon (Always Visible) */}
                        <Box
                            className="favorite-icon"
                            sx={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#FFFFFF",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                cursor: "pointer",
                                zIndex: 2,
                                transition: "background-color 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#FA6813", // Change background color to red on hover
                                },
                                "&:hover .favorite-tooltip": { opacity: 1, transform: "translateY(0px)" }, // Show tooltip on hover
                            }}
                        >
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2913 2.82786C19.7805 2.24838 19.1741 1.78869 18.5066 1.47506C17.8392 1.16143 17.1238 1 16.4013 1C15.6788 1 14.9634 1.16143 14.2959 1.47506C13.6285 1.78869 13.022 2.24838 12.5113 2.82786L11.4513 4.02993L10.3913 2.82786C9.3596 1.65789 7.96032 1.00061 6.50129 1.00061C5.04226 1.00061 3.64298 1.65789 2.61129 2.82786C1.5796 3.99783 1 5.58465 1 7.23924C1 8.89383 1.5796 10.4807 2.61129 11.6506L3.67129 12.8527L11.4513 21.6755L19.2313 12.8527L20.2913 11.6506C20.8023 11.0714 21.2076 10.3837 21.4842 9.62678C21.7608 8.86986 21.9031 8.05857 21.9031 7.23924C21.9031 6.41992 21.7608 5.60862 21.4842 4.8517C21.2076 4.09478 20.8023 3.40707 20.2913 2.82786Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                
                            {/* Tooltip for Favorite Icon */}
                            <Box
                                className="favorite-tooltip"
                                sx={{
                                    position: "absolute",
                                    right: "50px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontSize: "12px",
                                    whiteSpace: "nowrap",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease, transform 0.3s ease",
                                }}
                            >
                                Add to Wishlist
                            </Box>
                        </Box>
                
                        {/* Fullscreen Icon (Only Visible on Hover, Positioned Below Favorite Icon) */}
                        <Box
                            className="fullscreen-icon"
                            sx={{
                                position: "absolute",
                                top: "55px",
                                right: "10px",
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#FFFFFF",
                                borderRadius: "50%",
                                display: "none", // Hidden by default
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#FA6813", // Change background color to red on hover
                                },
                                "&:hover .fullscreen-tooltip": { opacity: 1, transform: "translateY(0px)" }, // Show tooltip on hover
                            }}
                        >
                            <FullscreenIcon sx={{ color: "black" }} />
                
                            {/* Tooltip for Fullscreen Icon */}
                            <Box
                                className="fullscreen-tooltip"
                                sx={{
                                    position: "absolute",
                                    right: "50px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontSize: "12px",
                                    whiteSpace: "nowrap",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease, transform 0.3s ease",
                                }}
                            >
                                Quick View
                            </Box>
                        </Box>
                
                        {/* Add to Cart Button (Only Visible on Hover) */}
                        <Button
                            variant="contained"
                            className="continue-btn"
                            sx={{
                                display: "none", // Hidden by default
                                position: "absolute",
                                bottom: "10px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                backgroundColor: "#FFFFFF",
                                color: "black",
                                "&:hover": { color: "#FA6813" },
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Box>
                
                    {/* Product Details */}
                    <Box>
                        <Typography sx={{ textAlign: "center", fontWeight: "400", fontSize: "30px", mt: "10px" }}>
                            {product.name}
                        </Typography>
                        <Typography sx={{ textAlign: "center", fontWeight: "400", fontSize: "25px", mt: "10px" }}>
                            {product.oldPrice && <s style={{ color: "#877B7B" }}>${product.oldPrice}</s>} ${product.price}
                        </Typography>
                    </Box>
                </Box>
                             
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default HomeProduct;

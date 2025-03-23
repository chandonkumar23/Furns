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
                                "&:hover .fullscreen-icon": { display: "flex" },
                                "&:hover .continue-btn": { display: "flex" },
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

                                {/* Fullscreen Icon */}
                                <Box
                                    className="fullscreen-icon"
                                    sx={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFFFFF",
                                        borderRadius: "50%",
                                        display: "none",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                        cursor: "pointer",
                                    }}
                                >
                                    <FullscreenIcon />
                                </Box>

                                {/* Continue Button */}
                                <Button
                                    variant="contained"
                                    className="continue-btn"
                                    sx={{
                                        display: "none",
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

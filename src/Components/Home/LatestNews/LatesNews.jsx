import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const bannerData = [
    {
        title: "Sale Furniture For Summer",
        subtitle: "Great Discounts Here",
        image: "https://i.ibb.co/6czPc7qN/images-banner-1.jpg ",
    },
    {
        title: "Office Chair For Best Offer",
        subtitle: "Great Discounts Here",
        image: "https://i.ibb.co/Hf44yssB/images-banner-2.jpg",
    },
];

const LatesNews = () => {
    return (
        <Box sx={{ width: "1255px", displayL: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto', mt: 5 }}>
            <Grid container spacing={3}>
                {bannerData.map((banner, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Box
                            sx={{
                                height: "300px",
                                backgroundImage: `url(${banner.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#000",
                                fontWeight: "bold",
                                textAlign: "center",
                                p: 3,
                                position: "relative",
                            }}
                        >
                            {/* Overlay for better text visibility */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                            {/* Text Content */}
                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 2,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                                    pr: index % 2 === 0 ? 3 : 0, 
                                    pl: index % 2 !== 0 ? 3 : 0, 
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "250px",
                                        textAlign: index % 2 === 0 ? "right" : "left",
                                    }}
                                >
                                    <Typography  sx={{fontSize:'30px',fontWeight:'400' }}>
                                        {banner.title}
                                    </Typography>
                                    <Typography variant="subtitle1">{banner.subtitle}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ mt: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        sx={{
                            fontSize: '50px',
                            fontWeight: '700',
                            lineHeight: '100%'

                        }}>
                        Latest News
                    </Typography>
                    <Box sx={{ width: '500px', mt: '30px' }}>
                        <Typography
                            sx={{
                                color: '#877B7B',
                            }}>
                            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore
                        </Typography>
                    </Box>
                    <Box sx={{ width: '500px', mt: '40px', mb: '40px' }}>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                fontWeight: '700',
                                lineHeight: '100%'
                            }}>
                            There are no articles found!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LatesNews;

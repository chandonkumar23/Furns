import React from "react";
import { Box, Typography, Avatar, Grid, keyframes } from "@mui/material";

const categories = [
    { name: "Bedroom", image: "https://i.ibb.co.com/V0gQXbfF/bed.jpg" },
    { name: "Dining", image: "https://i.ibb.co.com/20F2MQnZ/Dining.jpg" },
    { name: "Living", image: "https://i.ibb.co.com/4DCYyz3/living.pngg" },
    { name: "Lounge", image: "https://i.ibb.co.com/yc47j0SJ/Lounge.jpg" },
    { name: "Chair", image: "https://i.ibb.co.com/b5gz7d0R/office-chair.jpg" },

];
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Type = () => {

    return (
     <Box sx={{mt:"90px",mb:'150px'}}>
           <Grid container spacing={2} justifyContent="center" alignItems="center" mt="40px" mb="40px">
            {categories.map((category, index) => (
                <Grid item key={index}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {/* Outer Circle Border */}
                        <Box
                            sx={{
                                width: 240,
                                height: 240,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                "&:hover .spinning-border": {
                                    border: "3px dashed #FA6813",
                                    animation: `${spin} 1s linear infinite`,
                                },
                            }}
                        >
                            {/* Spinning Border */}
                            <Box
                                className="spinning-border"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    border: "2px solid black",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    transition: "all 0.3s ease-in-out",
                                }}
                            />

                            {/* Centered Image (Remains Static) */}
                            <Box
                                component="img"
                                src={category.image}
                                alt={category.name}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />
                        </Box>

                        {/* Category Name */}
                        <Typography variant="body1" fontWeight="bold" mt={1} textAlign="center">
                            {category.name}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
     </Box>
    );
};

export default Type;

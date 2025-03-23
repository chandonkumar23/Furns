import React from 'react';
import Type from './ProductsType/Type';
import { Box } from '@mui/material';
import HomeProduct from './HomeProducts/HomeProducts';
import Banner from '../Banner/Banner';
import LatestNews from './LatestNews/LatesNews';
import LatesNews from './LatestNews/LatesNews';

const Home = () => {
    return (
        <Box>
            <Box >
                <Banner />
            </Box>

            <Box sx={{mt:'40px',mb:'40px'}}>
                <Type />
            </Box>

            <Box sx={{mt:'40px',mb:'40px'}}>
                <HomeProduct />
            </Box>
            <Box sx={{mt:'150px',mb:'40px'}}>
                <LatesNews />
            </Box>
        </Box>
    );
};

export default Home;
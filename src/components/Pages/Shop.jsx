import React from 'react';
import Hero from '../Hero/Hero';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import NewCollections from '../NewCollections/NewCollections';
import NewsLetter from '../NewsLetter/NewsLetter';


const Shop = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular/>
            <Offers></Offers>
            <NewCollections></NewCollections>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Shop;
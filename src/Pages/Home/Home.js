import React from 'react'
import Banner from '../Banner/Banner';
import CustomerBenefits from '../CustomerBenefits/CustomerBenefits';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurFeatures from '../OurFeatures/OurFeatures';

const Home = () => {
    return (
        <>
            <Banner />
            <InventoryItems />
            <OurFeatures />
            <CustomerBenefits />
        </>
    )
}

export default Home;
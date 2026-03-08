import React from 'react'
import Navbar from '../Components/V1/Navbar';
import '../App.css';
import FooterSection from '../Sections/V1/FooterSection'

const Guest = ({ children }) => {
    return (
        <div className="bg-white">
            <Navbar />
            {children}
            <FooterSection />
        </div>
    );
}

export default Guest
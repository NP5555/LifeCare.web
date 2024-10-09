import React from 'react'
import './screen.css'
import Crads from '../Crads/Cards';
import logo from "../header/logo.png"

const screen = () => {
    return (
        <>
            <div className='screen'>
                <div className='content'>
                    <div className='flex '>
                        <img src={logo} className='h-[40px] mx-[6px]' alt="" />
                        <h1 className='display-6'><span className='fw-bold'>Life</span>Care</h1>
                    </div>
                    <p className=' mt-3 lead'>

                        Human life refers to the existence of human beings, marked by physical, emotional, intellectual, and social aspects. It begins with birth and unfolds through various stages—childhood, adolescence, adulthood, and old age—each characterized by growth, learning, and development. At its core, human life is sustained by biological processes such as breathing, eating, and sleeping, with the body constantly maintaining homeostasis to ensure survival.

                        Emotionally, humans experience a wide range of feelings, such as love, joy, sadness, and fear, which shape relationships and personal well-being. Socially, humans are naturally inclined to form communities, relationships, and cultures, creating societies that influence behavior, values, and traditions..</p>
                </div>
                <div className='img'>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/663/234/original/informational-poster-nursing-home-vector.jpg" alt="" />
                </div>
            </div>
            <Crads />
        </>
    );
}

export default screen;

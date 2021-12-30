import React from 'react'
import Section from './Section'

function Home() {
    return (
        <>
           <Section
                title='Model S'
                description='Order Online For Touchless Devivery'
                backgroundImg='model-s.jpg'
                leftBtnText='Custome Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online For Touchless Devivery'
                backgroundImg='model-y.jpg'
                leftBtnText='Custome Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online For Touchless Devivery'
                backgroundImg='model-3.jpg'
                leftBtnText='Custome Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online For Touchless Devivery'
                backgroundImg='model-x.jpg'
                leftBtnText='Custome Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money Back Guarantee'
                backgroundImg='solar-panel.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn More'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnText='Shop Now'
            />
        </>
    )
}

export default Home


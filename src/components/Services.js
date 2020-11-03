import React, { Component } from 'react';
import {MdWifi, MdRestaurant, MdLocalBar, MdDirectionsCar } from 'react-icons/md';
import Title from './Title';

export default class Service extends Component {
    state = {
        services: [
            {
                icon: <MdWifi />,
                title: "Free Wifi",
                info: 'Free connection to network anywhere'
            },
            {
                icon: <MdRestaurant />,
                title: "Breakfast buffet",
                info: 'Delicious breakfast from 7 a.m. to 10 a.m.'
            },
            {
                icon: <MdLocalBar />,
                title: "Mini bar",
                info: 'Wide range of drinks in the fridge'
            },
            {
                icon: <MdDirectionsCar />,
                title: "Car rental",
                info: 'Car rental for $ 3 per hour'
            }
        ]
    }; 
    render() {
        return (
            <section className="services">
                <Title title="Serivces" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
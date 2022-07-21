// import Commerce from '@chec/commerce.js';
import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react';
import commerce from '../library/commerce';
import './ProceedToCheckout.css';

function ProceedToCheckout({ cart }) {
    const [token, setToken] = useState({});

    const [countriesList, setCountriesList] = useState([]);
    const [country, setCountry] = useState(null);
    const [subdivisionlist, setSubdivisionlist] = useState([]);
    const [subdivision, setSubdivision] = useState(null);
    const [shipping, setShipping] = useState(null);
    const [shippingoptions, setShippingoptions] = useState(null);

    const getShippingCountry = async (tokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(tokenId);
        console.log(Object.entries(countries));
        setCountriesList(Object.entries(countries));
    }


    const getShippingSubdivision = async (country) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(country);
        console.log(Object.entries(subdivisions));
        setSubdivisionlist(Object.entries(subdivisions))
        setSubdivision(Object.keys(subdivisions[0]))

    }

    const getShippingOption = async (tokenId, cntry, subdiv) => {
        const response = await commerce.checkout.getShippingOptions(tokenId.id, {
            country: cntry,
            region: subdiv,
        })
        // console.log((response[0]?.id))
        setShipping(response[0].id)
        setShippingoptions(response);
    }



    const generateToken = async (cartId) => {
        const token = await commerce.checkout.generateToken(cartId, { type: 'cart' })
        console.log(token)

    }

    useEffect(() => {
        generateToken(cart?.id)
        getShippingCountry(token?.id)

    }, [cart]);
    useEffect(() => {
        if (country) {

            getShippingSubdivision(country)
        }
    }, [country]);


    useEffect(() => {
        if (subdivision) {

            getShippingOption(token, country, subdivision)
        }
    }, [subdivision]);

    return (
        <div className='checkout_wrap'>
            <h2>Shipping Details</h2>
            <br />
            <form action="">
                <div className="checkout__form">
                    <div className="checkout__column">
                        <label htmlFor="">First Name</label>
                        <Input required name="firstname" />
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Last Name</label>
                        <Input required name="lastname" />
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Address</label>
                        <Input required name="address" />
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Email</label>
                        <Input required name="email" />
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">City</label>
                        <Input required name="city" />
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">ZIP Code</label>
                        <Input required name="zipcode" />
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Shipping Country</label>
                        <select name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                            {countriesList.map((country) => {
                                return (

                                    <option value={country[0]}>{country[1]}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Shipping Subdivision</label>
                        <select name="subdivision" value={subdivision} onChange={(e) => setSubdivision(e.target.value)}>
                            {subdivisionlist.map((subdivision) => {
                                return (

                                    <option value={subdivision[0]}>{subdivision[1]}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Shipping Options</label>
                        <select name="shippingoptions" value={shipping} onChange={(e) => setShipping(e.target.value)}>
                            {shippingoptions.map((item) => {
                                return (

                                    <option value={item?.id}>{item?.description}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className="checkout__column">
                        <label htmlFor=""></label>
                        <button>Pay Now</button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default ProceedToCheckout

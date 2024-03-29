import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 400px;
    .container{
        position: relative;
        min-height: 400px;
    }
    .map__card{
        position: absolute;
        right: -8%;
        bottom: 10%;
        padding: 2rem;
        background: var(--deep-dark);
        width: 300px;
        border-radius: 12px;
    }
    .map__card__heading{
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link{
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px){
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px){
        .map__card{
            max-width: none;
            right: auto;
        }
    }
`;

export default function Map() {
  return (
    <MapStyles>
        <div className="container">
            <div className="map__card">
                <h3 className="map__card__heading">Here is me</h3>
                <PText>
                   Kerava, Finland 
                </PText>
                <a href="https://www.google.com/maps/place/Kerava/@60.3985543,25.0307748,12z/data=!3m1!4b1!4m5!3m4!1s0x46920062dd81505d:0x400b551554bb130!8m2!3d60.4051986!4d25.0958066"
                target="_blank" rel='noreferrer' className='map__card__link'>Open in Google Map</a>
            </div>
        </div>
    </MapStyles>
  )
}

import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/Bitcoin3.mp4';
import { Button } from '../Button/ButtonElements';
const HeroSection = () => {
    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Cryptocurrency Made Easy </HeroH1>
                <HeroP>
                    Buy Coins Today
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Buy {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>             
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>            
        </>
    )
}

export default HeroSection

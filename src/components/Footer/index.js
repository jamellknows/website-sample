import React from 'react'
import 
{FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements.js';
import { animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Links</FooterLinkTitle>
                                <FooterLink a="/website">Facebook</FooterLink>
                                <FooterLink a="/website">Twitter</FooterLink>
                                <FooterLink a="/website">Instagram</FooterLink>
                                <FooterLink a="/website">LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            AltCoin
                        </SocialLogo>
                        <WebsiteRights>AltCoin © {new Date().getFullYear()} All right reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//" target="_blank" aria_label="FaceBook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria_label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria_label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria_label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria_label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer> 
        </>
    )
}

export default Footer;

import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <FooterMain className="container">
                <div className="col-12 col-sm-10 col-md-11 m-auto d-flex justify-content-between to-col">
                    <div>
                        <img
                            className="foot-img-1"
                            src="https://www.primeapeplanet.com/images/footer-logo.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="foot-img-2"
                            src="https://www.primeapeplanet.com/images/partner-logo.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="me-4 img-scale"
                            src="https://www.primeapeplanet.com/images/instra.png"
                            alt=""
                        />
                        <img
                            className=" img-scale"
                            src="https://www.primeapeplanet.com/images/twitter.png"
                            alt=""
                        />
                    </div>
                </div>
            </FooterMain>
            <div className="col-12 bor-top">
            <p>©Copyright-2021 Prime Ape Planet. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;

const FooterMain = styled.div`
    margin-top: 7rem;
    margin-bottom: 4rem;
    .justify-content-between {
        align-items: center;
    }
    .foot-img-1 {
        max-width: 264px;
        cursor: pointer;
    }
    .foot-img-2 {
        max-width: 266px;
        max-height: 80px;
        cursor: pointer;
    }
    .img-scale {
        transition: all 0.7s;
        cursor: pointer;
    }
    .img-scale:hover {
        transform: scale(1.1);
    }
    @media (max-width:992px) {
        .foot-img-1 {
        max-width: 158px;
    }
    .foot-img-2 {
        max-width: 188px;
    }
    }
    @media (max-width:768px) {
        .to-col{
            flex-direction: column;
        }
        .foot-img-1{
            margin-bottom: 15px;
        }
        .foot-img-2 {
            margin-bottom: 15px;
        }
    }
`;

import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Masthead = () => {
    const [monOne, setMonOne] = useState(false);
    const [textOne, setTextOne] = useState(false);
    const [btnOne, setBtnOne] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    setTimeout(() => {
        setMonOne(true);
        setTextOne(true);
        setShowMenu(false)
    }, 200);
    setTimeout(() => {
        setBtnOne(true);
    }, 300);
    return (
        <Mastheads className="container">
                <MonOne>
                    <img
                        className={
                            monOne
                                ? showMenu
                                    ? "mon-1-after"
                                    : "mon-1-after mon-new"
                                : ""
                        }
                        src="/images/mon1.png"
                        alt=""
                    />
                </MonOne>
                <TextOne>
                    <img
                        className={textOne ? "text-1-after" : ""}
                        src="/images/text1.svg"
                        alt=""
                    />
                    <a
                        className={
                            btnOne
                                ? showMenu
                                    ? "btn-1-after"
                                    : "btn-1-after btn-new"
                                : ""
                        }
                        href="#"
                    >
                        <span>Buy on OpenSea</span>
                    </a>
                </TextOne>
            </Mastheads>
    )
}

export default Masthead
const Mastheads = styled.div`
    padding-top: 216px;
`;
const MonOne = styled.div`
    width: 100%;
    img {
        position: absolute;
        left: -580px;
        top: 200px;
        transition: all 1s;
    }
    @media (max-width: 1300px) {
        img {
            max-width: 500px !important;
        }
    }
    @media (max-width: 992px) {
        img {
            top: 50px !important;
            max-width: 300px !important;
        }
        .mon-new {
            left: 50% !important;
            transform: translateX(-50%) !important;
        }
    }
    @media (max-width: 768px) {
    }
`;

const TextOne = styled.div`
    position: relative;
    text-align: center;
    img {
        position: absolute;
        right: 25px;
        top: 100px;
        max-width: 830px;
        transition: all 1s;
        opacity: 0;
    }
    @media (max-width: 1300px) {
        img {
            max-width: 600px !important;
        }
    }
    @media (max-width: 992px) {
        margin-top: 220px;
        img {
            left: 50% !important;
            transform: translateX(-50%) !important;
            max-width: 80% !important;
        }
        .btn-new {
            top: 0px !important;
        }
    }
    @media (max-width: 768px) {
        .btn-new {
            top: -100px !important;
        }
    }
    @media (max-width: 558px) {
        .btn-new {
            top: -150px !important;
            width: 200px !important;
            padding: 14px 0 !important;
            font-size: 0.875rem;
        }
    }
    a {
        top: 200px;
        font-weight: bold;
        font-size: 1rem;
        line-height: 109.6%;
        letter-spacing: 0.2em;
        color: #ffffff;
        background-color: #43b1df;
        display: inline-block;
        padding: 24px 0;
        width: 270px;
        text-transform: uppercase;
        position: relative;
        margin-top: 190px;
        visibility: visible;
        height: 100%;
        transition: all 1s;
        opacity: 0;
        z-index: 2;
        ::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, #0090bd 0%, #60cfff 100%);
            transition: width 0.3s ease-in-out;
        }
        :hover::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #0090bd 0%, #60cfff 100%);
            transition: width 0.3s ease-in-out;
        }
        span {
            z-index: 4;
            position: relative;
        }
        ::after {
            content: "";
            position: absolute;
            top: 12px;
            left: 12px;
            width: 100%;
            height: 100%;
            border: 1px solid #43b1df;
            z-index: -1;
            transition: all 0.2s ease-in-out;
        }
        :hover::after {
            top: 7px;
            left: 7px;
        }
    }
`;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [scroll, setScroll] = useState(true);
    const [liActive, setLiActive] = useState(1);
    const menuHandler = () => {
        setShowMenu(!showMenu);
    };
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth);
        });
        if (windowWidth > 992) {
            setShowMenu(false);
        }
    }, [window.innerWidth]);
    return (
        <>
            <Router>
                {showMenu ? (
                    <>
                        <div className={showMenu ? "op-d" : ""}></div>
                    </>
                ) : (
                    ""
                )}
                <ToggleMenu className={showMenu ? "w-300" : ""}>
                    <ul className="list-2">
                        <li
                            onClick={() => {
                                setLiActive(1);
                            }}
                            className={
                                liActive == 1 ? "active-li li-cl" : "li-cl"
                            }
                        >
                            <Link to="/#about">About us</Link>
                        </li>
                        <li
                            onClick={() => {
                                setLiActive(2);
                            }}
                            className={
                                liActive === 2 ? "active-li li-cl" : "li-cl"
                            }
                        >
                            <Link to="/#artist">Artist</Link>
                        </li>
                        <li
                            onClick={() => {
                                setLiActive(3);
                            }}
                            className={
                                liActive === 3 ? "active-li li-cl" : "li-cl"
                            }
                        >
                            <Link to="/#faq">FAQ</Link>
                        </li>
                        <li
                            onClick={() => {
                                setLiActive(4);
                            }}
                            className={
                                liActive === 4 ? "active-li li-cl" : "li-cl"
                            }
                        >
                            <Link to="/#roadmap">Roadmap</Link>
                        </li>
                    </ul>
                </ToggleMenu>
                <HeaderMain className={!scroll ? "row bg-head" : "row"}>
                    <div className="container">
                        <NavBar className="col-12 col-sm-10 col-md-11 m-auto">
                            <a href="index.html">
                                <img
                                    src="https://www.primeapeplanet.com/images/logo.png"
                                    alt="logo"
                                />
                            </a>
                            <ul className="navbar">
                                <li>
                                    <Link to="/#about">About us</Link>
                                </li>
                                <li>
                                    <Link to="/#artist">Artist</Link>
                                </li>
                                <li>
                                    <Link to="/#faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/#roadmap">Roadmap</Link>
                                </li>
                            </ul>
                            <MenuBtnTwo>
                                <div
                                    onClick={menuHandler}
                                    className={showMenu ? "c-p" : "c-p open"}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </MenuBtnTwo>
                        </NavBar>
                    </div>
                </HeaderMain>
            </Router>
        </>
    );
};

export default Header;

const HeaderMain = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;
    background: transparent;
    padding: 20px 0;
    transition: all 0.4s ease-in-out;
    @media (max-width: 1300px) {
    }
    @media (max-width: 992px) {
        padding: 0px 0 !important;
    }
    @media (max-width: 768px) {
    }
`;
const NavBar = styled.nav`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center !important;
    justify-content: space-between;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    @media (max-width: 1300px) {
    }
    @media (max-width: 992px) {
    }
    @media (max-width: 768px) {
        img {
            width: 118px;
        }
    }
`;
const MenuBtnTwo = styled.div`
    z-index: 10000;
    position: absolute;
    right: 0;
    display: none;
    align-items: center;
    @media (max-width: 768px) {
    }
    p {
        font-size: 1.2rem;
        margin-left: 2rem;
    }
    .c-p {
        position: relative;
        cursor: pointer;
        height: 22px;
        width: 2.2rem;
    }
    span {
        transition: 0.2s all;
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
    }
    span:nth-child(1) {
        top: 10px;
        transform: rotate(45deg);
    }
    span:nth-child(2) {
        opacity: 0;
    }
    span:nth-child(3) {
        top: 10px;
        transform: rotate(-45deg);
    }
    .open {
        span:nth-child(1) {
            top: -2px;
            transform: rotate(0deg);
        }
        span:nth-child(2) {
            opacity: 1;
            top: 9px;
            height: 2px;
        }
        span:nth-child(3) {
            top: 21px;
            transform: rotate(0deg);
        }
    }
    @media (max-width: 992px) {
        display: flex;
        align-items: center;
    }
`;
const ToggleMenu = styled.div`
    width: 0;
    background-color: #000;
    position: fixed;
    top: 0;
    right: 0;
    min-height: 100vh;
    z-index: 2000;
    transition: 0.5s all;
`;

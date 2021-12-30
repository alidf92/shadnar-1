import "./App.css";
import styled from "styled-components";
import Header from "./components/Header.js";
import { HashLink as Link } from "react-router-hash-link";
import Masthead from "./components/Masthead.js";
import AboutUs from "./components/AboutUs";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Artist from "./components/Artist";
import RoadMap from "./components/RoadMap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main>
                        <Header />
                        <Masthead />
                        <Scroll>
                        <Link to="/#about">
                            <img
                                src="https://www.primeapeplanet.com/images/scroll-text.png"
                                alt=""
                            />
                            </Link>
                        </Scroll>
                        <DarkMon>
                            <img src="/images/dark-mon.png" alt="" />
                        </DarkMon>
                        <AboutUs />
                        <RightSec />
                        <Content />
                        <LeftSec />
                        <Artist />
                        <RightSec />
                        <RoadMap />
                        <LeftSec />
                        <Faq />
                        <RightSec />
                        <Footer />
                    </Main>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

const Main = styled.div`
    background-image: url("https://www.primeapeplanet.com/images/bg-banner-v12.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Lemon/Milk";
    font-weight: normal;
    font-style: normal;
    color: #ffffff;
    background-color: #0d0d0f;
    min-height: 100vh;
    z-index: 1;
    letter-spacing: 1px;
    position: relative;
    .navbar {
        @media (max-width: 1300px) {
            li {
                font-size: 0.95rem !important;
                margin-left: 30px !important;
            }
        }
        @media (max-width: 992px) {
            display: none !important;
        }
        display: flex;
        align-items: center;
        list-style: none;
        padding-bottom: 0 !important;
        li {
            margin-left: 60px;
            padding: 8px 0 0px 0;
            position: relative;
            cursor: pointer;
            font-size: 1.1rem;
            a {
                transition: 0.5s;
                :hover {
                    color: #60cfff;
                }
                ::after {
                    content: "";
                    display: block;
                    width: 0;
                    height: 2px;
                    background: #60cfff !important;
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                }
                :hover::after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 2px;
                    background: #60cfff !important;
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }
`;
const Scroll = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    @media (max-width: 768px) {
        margin-top: 0px;
    }
    @media (max-width: 558px) {
        margin-top: -80px;
    }
`;
const RightSec = styled.div`
    width: 50%;
    height: 42px;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, #43b1df 0%, #0d5b95 101.19%);
        z-index: 9;
    }
    ::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -50%;
        width: 100%;
        height: 1px;
        transform: translate(50%, -50%);
        background-image: repeating-linear-gradient(
                13deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            ),
            repeating-linear-gradient(
                103deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            ),
            repeating-linear-gradient(
                193deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            ),
            repeating-linear-gradient(
                283deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            );
        background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
        background-position: 0 0, 0 0, 100% 0, 0 100%;
        background-repeat: no-repeat;
    }
`;
const LeftSec = styled.div`
    width: 50%;
    height: 42px;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, #43b1df 0%, #0d5b95 101.19%);
        z-index: 9;
    }
    ::after {
        content: "";
        position: absolute;
        top: 50%;
        left: -50%;
        width: 100%;
        height: 1px;
        transform: translate(50%, -50%);
        background-image: repeating-linear-gradient(
                13deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            ),
            repeating-linear-gradient(
                103deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            ),
            repeating-linear-gradient(
                193deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            ),
            repeating-linear-gradient(
                283deg,
                #292931,
                #292931 18px,
                transparent 18px,
                transparent 38px,
                #292931 38px
            );
        background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
        background-position: 0 0, 0 0, 100% 0, 0 100%;
        background-repeat: no-repeat;
    }
`;
const Title = styled.div`
    position: relative;
    padding-bottom: 25px;
    .artist-op {
        position: relative;
        font-weight: bold;
        font-size: 110px;
        text-align: center;
        letter-spacing: 0.36em;
        line-height: 1.21em;
        color: #141417;
    }
    .artist-op-2 {
        position: absolute;
        font-weight: bold;
        font-size: 60px;
        margin: 0 0 22px;
        text-transform: uppercase;
        letter-spacing: 0.135em;
        top: 26px;
        right: 50%;
        transform: translateX(50%);
    }
    @media (max-width: 1300px) {
        .artist-op {
            font-size: 80px;
        }
        .artist-op-2 {
            font-size: 46px;
        }
    }
    @media (max-width: 992px) {
        font-size: 11px;
    }
    @media (max-width: 768px) {
        font-size: 11px;
        .artist-op {
            font-size: 35px;
        }
        .artist-op-2 {
            top: 7px;
            font-size: 30px;
        }
    }
`;
const DarkMon = styled.div`
    position: relative;
    img {
        position: absolute;
        right: 0;
        top: -140px;
    }
    @media (max-width:992px) {
        img {
            display: none;
        }
    }
`
import React from "react";
import styled from "styled-components";

const Content = () => {
    return (
        <ContentMain className="container">
            <div className="col-12 col-sm-10 col-md-11 m-auto row">
                <h2>
                    How can I <span>join them?</span>
                </h2>
                <div>
                    <p>
                        Successful entrepreneurs, celebrities, marketing
                        veterans and world-renowned digital artists are now
                        working together to help answer that question.
                    </p>
                    <p>
                        At the end of December 2021, all fates will be decided.
                    </p>
                    <p>
                        As that’s the date the Prime Ape Planet sends out its
                        first ever VIP invitations.
                    </p>
                    <p>
                        And you’d be wise to snatch one for yourself and
                        everyone you care about. Because once this collection of
                        7979 unique NFTs mint?{" "}
                    </p>
                    <p>
                        But early supporters of the project will be handsomely
                        rewarded.
                    </p>
                    <p>
                        As masters of digital art, the art team behind Prime Ape
                        Planet has enjoyed success in the “Old World.” Their
                        work has always gained mainstream recognition and
                        adaptation.
                    </p>
                    <p>
                        They’ve worked on titles such as The Lion King,
                        Godzilla, and countless other animations… For industry
                        household names including Marvel, Disney, and MGM among
                        others.
                    </p>
                    <p>
                        Prime Ape Planet will be the project to plant their
                        flags in the Metaverse.
                    </p>
                    <p>
                        Much like our offline culture, the NFT space won’t ever
                        be the same after their contribution.
                    </p>
                    <p>Join them before it’s too late on Discord:</p>
                    <a href="#">
                        <span>join the Discord</span>
                    </a>
                </div>
            </div>
        </ContentMain>
    );
};

export default Content;

const ContentMain = styled.div`
    padding: 190px 0;
    text-align: center;
    h2 {
        font-size: 60px;
        margin: 0 0 22px;
        text-transform: uppercase;
        letter-spacing: 0.135em;
        padding: 0;
        font-weight: bold;
        line-height: 1.21em;
        span {
            color: #3a8bae;
        }
    }
    p {
        font-weight: normal;
        font-size: 18px;
        line-height: 1.8em;
        letter-spacing: 0.105em;
        color: #ffffff;
        margin: 0 0 22px 0;
        font-family: "Lemon/Milk";
    }
    a {
        margin-top: 14px;
        text-align: center;
        padding: 25px 70px;
        display: inline-block;
        vertical-align: middle;
        border-radius: 9px;
        border-bottom-right-radius: 0;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        font-family: "Lemon/Milk";
        font-weight: bold;
        font-size: 15px;
        line-height: 1.09em;
        letter-spacing: 0.175em;
        color: #000000;
        background: #ffffff;
        overflow: hidden;
        position: relative;
        span {
            position: relative;
            z-index: 99;
        }
        ::after {
            background: linear-gradient(90deg, #43b1df -29.23%, #0d5b95 93.85%);
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 130px;
            height: 100%;
            border-bottom-left-radius: 100px;
            transition: all 0.4s ease-in-out;
        }
        :hover::after {
            width: 100%;
            border-radius: 9px;
            border-bottom-right-radius: 0;
        }
        :hover {
            color: #fff;
        }
    }
    @media (max-width: 1300px) {
        padding: 120px 0;
        h2 {
            font-size: 46px;
        }
        p {
            font-size: 16px;
        }
        a {
        padding: 17px 40px;
        }
    }
    @media (max-width: 992px) {
        padding: 55px 0;
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        h2 {
            font-size: 30px;
        }
        p {
            font-size: 12px;
        }
        a {
        padding: 16px 22px;
        font-size: .8rem;
        }
    }
`;

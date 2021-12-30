import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return (
        <AboutUss id="about" className="container">
            <div className="col-12 col-sm-10 col-md-11 m-auto row">
                <div className="col-12 col-lg-6">
                    <h2>
                        About <span>us</span>
                    </h2>
                    <h3>The Final Stage Of Metaverse Evolution?</h3>
                    <p>
                        Plenty of apes came before. But most were mere
                        chimpanzees without any real form or function in the
                        Metaverse.
                    </p>
                    <p>
                        The Primus Ethereum Mammal, also known as the Prime Ape,
                        is different.{" "}
                    </p>
                    <p>
                        Their adaptive power makes them the only living creature
                        equipped to show up in their full 3D forms… no matter
                        what’s expected of them…
                    </p>
                    <p>
                        If the stakes are survival and making their mark on
                        mainstream culture - the Prime Ape is ready.
                    </p>
                    <p>
                        They look and play great both on the screens of movies
                        and games. And even during real-time meet-ups in the
                        Metaverse.
                    </p>
                    <p>
                        Their appearance makes it clear they’re the real leaders
                        of the urbanized jungle.
                    </p>
                    <p>
                        The results of an evolution millions of years in the
                        making.
                    </p>
                    <p>
                        As the Prime Apes’ story unfolds, other habitants of the
                        Metaverse jungle can’t help but turn their heads and
                        wonder in awe…
                    </p>
                </div>
                <div className="col-12 col-lg-6">
                    <img
                        src="https://www.primeapeplanet.com/images/about-image.png"
                        alt=""
                    />
                </div>
            </div>
        </AboutUss>
    );
};

export default AboutUs;
const AboutUss = styled.div`
    margin-top: 80px;
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
    h3 {
        margin: 0 0 20px 0;
        padding: 0;
        font-weight: bold;
        line-height: 1.21em;
    }
    p {
        font-weight: normal;
        font-size: 0.9rem;
        line-height: 1.8em;
        letter-spacing: 0.105em;
        color: #ffffff;
        margin: 0 0 22px 0;
        font-family: "Lemon/Milk";
    }
    img {
        width: 100%;
    }

    @media (max-width: 1300px) {
        padding-bottom: 126px;
    }
    @media (max-width: 992px) {
        text-align: center;
        margin-top: 30px;
        padding-bottom: 76px;

        img {
            width: 300px;
        }
        h2 {
            font-size: 36px;
        }
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        padding-bottom: 44px;

        h2 {
            font-size: 30px;
        }
        h3 {
            font-size: 18px;
        }
        p {
            font-size: 12px;
        }
    }
`;

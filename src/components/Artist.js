import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Artist = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <ArtistMain id="artist" className="container">
            <div className="col-12 col-sm-10 col-md-11 m-auto row">
                <Title>
                    <div className="artist-op">ARTIST</div>
                    <div className="artist-op-2">ARTIST</div>
                </Title>
                <DivsP>
                    <p>
                        <b>
                            Meet The Artists Taking Their 3D Art From The Screen
                            Of Blockbusters Into The Metaverse
                        </b>
                    </p>
                    <p>
                        Prime Ape Planet is brought to you by three
                        world-renowned digital artists.
                    </p>
                    <p>
                        You may not know it, but you’ve probably seen and maybe
                        even admired their work…
                    </p>
                    <p>
                        As they became the top choice for the most influential
                        media companies in the world.
                    </p>
                </DivsP>
                <Cards className="row">
                    <div className="d-none d-md-flex">
                        <div className="col-12 col-md-4 first-img">
                            <img src="/images/king-1.png" alt="" />
                            <div class="pad-div">
                                <h4>Kurtis Dawe</h4>
                                <p>
                                    the project's lead artist has been the top
                                    pick for movie industry veterans for over 14
                                    years.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="/images/king-2.png" alt="" />
                            <div class="pad-div">
                                    <h4>Travis Smith</h4>
                                    <p>
                                        This industry rockstar has been involved
                                        in Hollywood movies for more than a
                                        decade and is focusing on look
                                        development, texturing and rendering.
                                    </p>
                                </div>
                        </div>
                        <div className="col-12 col-md-4 sec-img">
                            <img src="/images/king-3.png" alt="" />
                            <div class="pad-div">
                                    <h4>Chris Hogstead</h4>
                                    <p>
                                        <p>
                                            is the visual effects artist behind{" "}
                                            <b>
                                                The Witcher, Avengers Infinity
                                                War &amp; Endgame, Godzilla
                                            </b>{" "}
                                            and many more.
                                        </p>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <div className="d-block d-md-none blue-line">
                        <Slider {...settings}>
                            <div className="col-12 col-md-4 position-relative blue-down">
                                <img src="/images/king-1.png" alt="" />
                                <div class="pad-div">
                                    <h4>Kurtis Dawe</h4>
                                    <p>
                                        the project's lead artist has been the
                                        top pick for movie industry veterans for
                                        over 14 years.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 position-relative blue-down">
                                <img src="/images/king-2.png" alt="" />
                                <div class="pad-div">
                                    <h4>Travis Smith</h4>
                                    <p>
                                        This industry rockstar has been involved
                                        in Hollywood movies for more than a
                                        decade and is focusing on look
                                        development, texturing and rendering.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 position-relative blue-down ">
                                <img src="/images/king-3.png" alt="" />
                                <div class="pad-div">
                                    <h4>Chris Hogstead</h4>
                                    <p>
                                        <p>
                                            is the visual effects artist behind{" "}
                                            <b>
                                                The Witcher, Avengers Infinity
                                                War &amp; Endgame, Godzilla
                                            </b>{" "}
                                            and many more.
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Cards>
            </div>
        </ArtistMain>
    );
};

export default Artist;

const ArtistMain = styled.div`
    padding: 190px 0;
    text-align: center;
    @media (max-width: 1300px) {
        padding: 120px 0;
    }
    @media (max-width: 992px) {
        padding: 55px 0;
    }
    @media (max-width: 768px) {
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

const DivsP = styled.div`
    p {
        font-size: 14px;
        font-weight: normal;
    }

    @media (max-width: 768px) {
        p {
            font-size: 11px;
        }
    }
`;
const Cards = styled.div`
    margin-top: 40px;
    position: relative;
    div {
        padding: 0 16px;
    }
    img {
        width: 100%;
        position: relative;
    }
    .pad-div {
        padding: 22px 0px;
    }
    p {
        font-weight: normal;
        font-size: 14px;
        line-height: 1.21em;
        letter-spacing: 0.065em;
        color: #3c5965;
    }
    h4 {
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        font-weight: normal;
        font-size: 20px;
        letter-spacing: 0.18em;
        margin-bottom: 10px;
    }
    @media (max-width: 1300px) {
    }
    @media (max-width: 768px) {
        .sec-img::before {
            display: none;
        }
        .first-img::after {
            display: none;
        }
    }
`;

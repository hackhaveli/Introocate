import React from "react";
import Slider from "react-slick";
import CardComponent from "./CardComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomDots = ({ slideCount, activeIndex }) => {
    const dots = [];
    for (let i = 0; i < slideCount; i++) {
        dots.push(
            <div
                key={i}
                className={`custom-dot ${i === activeIndex ? "active" : ""}`}
                style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    backgroundColor: i === activeIndex ? "#002ecc" : "white",
                    marginRight: "-2px",
                    marginLeft: "-8px",
                    cursor: "pointer",
                    border: "2px solid black",
                }}
            />
        );
        if (i < slideCount - 1) {
            dots.push(
                <div
                    key={`${i}-line`}
                    className="dot-line"
                    style={{
                        width: "10px",
                        height: "2px",
                        backgroundColor: "#333",
                        marginRight: "5px",
                        display: "inline-block",
                        verticalAlign: "middle",
                    }}
                />
            );
        }
    }
    return <div className="custom-dots">{dots}</div>;
};

export default function Cards() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],


    };
    return (
        <div className="slider-containessr ">
            <div className="bg-rsed-200 psx-20">
                <Slider slidesPerRow={1} {...settings}
                    appendDots={(dots) => <CustomDots slideCount={dots.length} activeIndex={dots.findIndex(dot => dot.props.className.includes('active'))} />}
                    className="bg-blsue-400 m-7 ml-4 md:ml-14 lg:ml-5 xl:ml-20 ">
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />

                    <CardComponent />
                    <CardComponent />
                    <CardComponent />

                    <CardComponent />
                    <CardComponent />
                    <CardComponent />

                    {/* <CardComponent />
                    <CardComponent />
                    <CardComponent />

                    <CardComponent />
                    <CardComponent />
                    <CardComponent />

                    <CardComponent />
                    <CardComponent />
                    <CardComponent /> */}
                </Slider>
            </div>
        </div>
    );
}
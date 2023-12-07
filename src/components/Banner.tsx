"use client"
import img1 from '../images/img1.webp'
import img from '../images/img.webp'
import Image from "next/image";
import Slider from "react-slick";
import {PiCaretLeftLight, PiCaretRightLight} from "react-icons/pi";
import BannerText from "@/components/BannerText";

const Banner = () => {

    const NextArrow = (props: any) => {
        const {onClick} = props;
        return (
            <div
                className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
                onClick={onClick}
            >
                <PiCaretLeftLight/>
            </div>
        );
    };
    const PrevArrow = (props: any) => {
        const {onClick} = props;
        return (
            <div
                className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
                onClick={onClick}
            >
                <PiCaretRightLight/>
            </div>
        );
    };
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <>
            <div className='relative'>
                <Slider {...settings}>
                    <div className='w-full h-full relative'>
                        <Image src={img} alt='img'/>
                        <BannerText title="Best For man"/>
                    </div>
                    <div>
                        <Image src={img} alt='img'/>
                        <BannerText title="outware pics"/>
                    </div>
                </Slider>
                <div
                    className='absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10'/>
            </div>
        </>
    );
};

export default Banner;

"use client"
import React from 'react';
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import {FaCartPlus} from "react-icons/fa";
import {FiLogOut, FiSearch} from "react-icons/fi";
import {AiOutlineUser} from "react-icons/ai";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";

const Header = () => {

    const {data: session} = useSession()
    console.log(session)

    return (
        <>
            <div className='bg-bodyColor h-20'>
                <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
                    <Logo/>
                    {/*Search fields*/}
                    <div
                        className='w-full hidden bg-white md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600'>
                        <FiSearch className='text-gray-500 group-focus-within:text-darkText duration-200'/>
                        <input type='text' placeholder='Search for products'
                               className='placeholder:text-sm flex-1 outline-none'/>
                    </div>
                    {/* Login and Register */}
                    {!session &&
                        <div onClick={() => signIn()} className='headerDiv cursor-pointer'>
                            <AiOutlineUser className='text-2xl'/>
                            <p className='text-sm font-semibold'>Login/Register</p>
                        </div>}
                    {/*  cart button  */}
                    <div
                        className='bg-black flex hover:bg-slate-950 rounded-full text-slate-100 hover:text-white items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black'>
                        <FaCartPlus className='text-xl'/>
                        <p className='text-sm font-semibold'>&#8377;0.00</p>
                        <span
                            className='bg-white text-orange-600 rounded-full text-xs font-semibold relative -right-5 -top-3 w-5 h-5 flex items-center justify-center shadow-xl shadow-black'>
                            0
                        </span>
                    </div>
                    {/* user Image */}
                    {
                        session && <Image src={session?.user?.image as string} alt="user image" width={50} height={50}
                                          className='rounded-full object-cover'/>
                    }
                    {/* Logout button */}
                    {session &&
                        <div onClick={() => signOut()} className='headerDiv px-2 gap-x-1 cursor-pointer'>
                            <FiLogOut className='text-2xl'/>
                            <p className='text-sm font-semibold'>Logout</p>
                        </div>}
                </Container>
            </div>
        </>
    );
};

export default Header;
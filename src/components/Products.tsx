"use client"
import React from 'react';
import {getProducts} from "@/helpers";
import Container from "@/components/Container";
import {productData} from "@/constants/data";
import ProductsData from "@/components/ProductsData";
import {Products} from "@/type";

const Products = async () => {
    const products = await getProducts()
    console.log(products)
    return (
        <>
            <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10'>
                {
                    productData.map((item: Products) => {
                        return (
                            <ProductsData item={item} key={item._id}/>
                        )
                    })
                }
            </Container>
        </>
    );
};

export default Products;
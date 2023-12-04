"use client"

import Image from "next/image";

const SingleProduct = ({product}: any) => {
    console.log(product)
    return (
        <div className='grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg'>
            <div>
                <Image src={product?.image} alt='product image' width={500} height={500}
                       className='w-full max-h[700px] object-cover rounded-lg'/>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
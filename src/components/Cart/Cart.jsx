/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ courseName, remaining, totalCredit, totalPrice }) => {
    // console.log(totalPrice);
    return (
        <div className='cart-container bg-blue-200 rounded-lg shadow-lg'>
            <div className='text-blue-700 text-lg font-bold mb-3 p-3'>
            <h5 className='mt-2'>Credit Hour Remaining {remaining} hr</h5>
            </div>
            <hr />
            <div className=''>
            <h2 className='text-xl font-bold p-3'><u>Course Name</u></h2>
            {courseName.map((course) => (
                <ol className='px-3'>
                    <li key={course.id}>{course.name}</li>
                </ol>
            ))}
            </div>
            <hr />
            <div className='text-lg font-medium mt-3 mb-3 p-3'>
            <h5>Total Credit Hour : {totalCredit}</h5>
            </div>
            <hr />
            <div className='mt-3 mb-6'>
            <h5 className='text-lg font-medium p-3'>Total Price: {totalPrice} USD</h5>
            </div>
        </div>
    );
};

export default Cart;
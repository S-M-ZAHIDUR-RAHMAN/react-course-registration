/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ courseName, remaining, totalCredit }) => {
    // console.log(remaining);
    return (
        <div>
            <h5>Credit Hour Remaining {remaining} hr</h5>
            <hr />
            {courseName.map((course) => (
                <ol>
                    <li key={course.id}>{course.name}</li>
                </ol>
            ))}
            <hr />
            <h5>Total Credit Hour : {totalCredit}</h5>
        </div>
    );
};

export default Cart;
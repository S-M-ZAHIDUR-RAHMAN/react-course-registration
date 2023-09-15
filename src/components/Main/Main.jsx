/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
const Main = () => {
    const [displayCourses, setDisplayCourses] = useState([]);
    useEffect(() => {
        fetch('../../../public/App.json')
            .then(res => res.json())
            .then(data => setDisplayCourses(data))
    }, []);

console.log(displayCourses);


    return (
        <div className='container mx-auto mt-12 pb-20 '>
            <div className='main-container flex justify-center bg-pink-100'>
                <div className="card-container w-[1100px] flex flex-wrap gap-6">
                    {displayCourses.map((course)=>(
                        <div key={course.id} className='card w-[300px] h-[400px] bg-white rounded-lg'>
                        <div className='card-img flex justify-center'>
                            <img className='w-[280px] mt-4' src=
                            {course.image} alt="" />
                        </div>
                        <div className='title-description ml-3 mr-3 my-2'>
                            <h3 className='text-lg font-bold'>{course.name}</h3>
                            <p>{course.details}</p>
                        </div>
                        <div className='dollar-book my-2 flex justify-between ml-1.5 mr-3'>
                            <div className='dollar flex justify-between gap-4'>
                                <img className='w-6' src={course.logodollar} alt="" />
                                <h1>Price: {course.price}</h1>
                            </div>
                            <div className='book flex justify-between gap-4'>
                                <img className='w-6' src={course.logobook} alt="" />
                                <h1>Credit: {course.credit} hr</h1>
                            </div>
                        </div>
                        <div className='flex justify-center mb-2 mt-4'>
                            <button className='btn-active w-[280px] h-[40px] bg-blue-500 rounded-lg font-bold text-white'>Select</button>

                        </div>
                    </div>
                    ))}
                </div>
                <div className='cart'>
                    <h1 className='border border-black'>This is Cart</h1>

                </div>
            </div>
        </div>
    );
};

export default Main;
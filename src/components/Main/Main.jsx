/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
const Main = () => {
    const [displayCourses, setDisplayCourses] = useState([]);
    const [courseName, setCourseName] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        fetch('../../../public/App.json')
            .then(res => res.json())
            .then(data => setDisplayCourses(data))
    }, []);
    // console.log(displayCourses);
    const handleSelectCourse = (course) => {
        const isExist = courseName.find((item) => item.id == course.id);

        let creditHour = course.credit;
        let price = course.price;
        if (isExist) {
            return alert("already purchased");
        }
        else {
            courseName.forEach(item => {
                creditHour += item.credit;
                price += item.price;
            });
            // console.log(creditHour);
            const totalRemaining = 20 - creditHour;
            // console.log(totalRemaining);

            if (creditHour > 20) {
                return alert("You are not allowed to book more than 20 credit.");
                // creditHour -= item.credit;
            }
            else {
                setTotalPrice(price);
                setTotalCredit(creditHour);
                setRemaining(totalRemaining);
                setCourseName([...courseName, course]);
                if(totalRemaining === 0){
                    return alert("This was your last purchase [Within 20 Credit hr limits].");
                }
            }
        }
    }
    // console.log(courseName);


    return (
        <div className='container mx-auto mt-12 pb-20 '>
            <div className='main-container flex justify-center gap-4 bg-pink-100'>
                <div className="card-container w-[950px] flex flex-wrap gap-6">
                    {displayCourses.map((course) => (
                        <div key={course.id} className='card w-[300px] h-[400px] bg-white rounded-lg shadow-lg'>
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
                                <button onClick={() => handleSelectCourse(course)} className='btn-active w-[280px] h-[40px] bg-blue-500 rounded-lg font-bold text-white'>Select</button>

                            </div>
                        </div>
                    ))}
                </div>
                <div className='cart w-[280px]'>
                    <Cart courseName={courseName} remaining={remaining}
                        totalCredit={totalCredit} totalPrice={totalPrice} 
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Main;
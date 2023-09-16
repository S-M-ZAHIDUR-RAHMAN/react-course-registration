# Course Registration
__________________________________________________________________________________________________
Project Features:

This project has been done using React.
CSS Framework Tailwind.css has been used in this project.
One user can select a course or more from the main part and the information about name, price, credit can be seen in the cart component.
sweettoast has been used to show alert.
json file can be found in folder:public.
Two components have been used under components folder- Main and Cart.

___________________________________________________________________________________________________

How I managed the state in assignment:

1. const [displayCourses, setDisplayCourses] = useState([]);
This state stores a list of courses from the data as an array of objects "displayCourses" gained form useEffect. Then, the setDisplayCourses, as a function, loads the data and start putting them is an array, which is initially declared as an empty array.

2. const [courseName, setCourseName] = useState([]);
This state is used to gain and put the individual course name when the respective onClick-button-"Select" is been clicked. On each click the object get stored in courseName as an array and then sets the array in the setCourseName.

3. 
const [remaining, setRemaining] = useState(0);
const [totalCredit, setTotalCredit] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
These three state are having initial value of 0, as they are dealing with number, not an array. The present value of them gets updated every time another button is clicked. remaining, totalCredit and totalPrice are the value of the number data which is being updated through loop and sets in setRemaining, setTotalCredit and setTotalPrice.



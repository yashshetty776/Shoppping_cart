import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'Nike Dunk', 
          price: 49000, 
          image: 
'data:image/jpeg;base64,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'
        },
        { id: 2, 
          name: 'Jordans', 
          price: 99444, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-rddY9wJioR1XGjz9mCavR-y5OuxydybHw&usqp=CAU'
        },
        { id: 3, 
          name: 'Adidas ', 
          price: 10000, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSzvC6hntszqcAiLuTKL02sQs8smG9DgQug&usqp=CAU'
        }
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;

import React from 'react';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className='faq-container'>
            
            <div className='faq'>
            <h1>  How does react works ? </h1>
            <p>React js is javascript library for build user interfaces . React js create a virtual dom for increase  performance of  applications . actually virtual DOM is copy of real DOM  . We can create components when we don't want repeat codes. When elements are similar in look but different in data then we should create elements by components based .</p>
            </div >
            
            <div className='faq'>
            <h1> What is difference between props vs state ? </h1>
                <p>Props basically transfer data each component to another component.When we create many components for complex application then we need to pass data to another component .
                State is temporary storage for storing data. When we need to update data we can easily do that using useState hook . 
            </p>
            </div>
            
            <div className='faq'>
            <h1> How useState works  ? </h1>
            <p>useState allow state variable and callback funciton.Basically state variable for storing temporary data .At first we can set initial value of state variable . The callback function for update the value of state variable .</p>
           </div>
        </div>
    );
};

export default FAQ;
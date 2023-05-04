import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h2>Differences between uncontrolled and controlled components.</h2>
                <p>
                    Uncontrolled components manage their own state internally, have a unidirectional data flow, handle user input directly, and may require additional effort for validation and error handling.
                    <br /> Controlled components have their state-managed externally, have a bidirectional data flow, delegate user input handling to the parent component, and provide a centralized approach for validation and error handling.
                </p>
            </div>
            <div>
                <h2>How to validate React props using PropTypes</h2>
                <p>
                    To validate React props using PropTypes, you need to first install the prop-types package in your project.
                    Once installed, import the PropTypes module from the prop-types package into your component file. With PropTypes, you can declare the prop types for your component by creating a static propTypes object within your component's class or function. Inside the propTypes object, specify the expected types and any additional constraints for each prop.
                    For example, to validate that a prop named name is a string and is required, you can use PropTypes.string.isRequired. After defining the prop types, React will automatically check the props against the specified types and issue warnings in the console if there are any mismatches. This helps catch potential bugs and ensures that the expected props are passed to the component correctly.
                </p>

            </div>

            <div>
                <h2>Difference between nodejs and express js.</h2>
                <p>
                    Node.js and Express.js are both widely used frameworks in the JavaScript ecosystem, but they serve different purposes.

                    Node.js is a runtime environment that allows you to execute JavaScript code outside of a browser, enabling server-side development. It utilizes the V8 JavaScript engine to execute code, providing an event-driven, non-blocking I/O model that allows for efficient handling of concurrent requests. Node.js provides a range of built-in modules and APIs, allowing developers to build various types of applications, including web servers, command-line tools, and more. It provides a scalable and efficient platform for building server-side applications using JavaScript.

                    <br /> On the other hand, Express.js is a minimalistic and flexible web application framework that runs on top of Node.js. It provides a set of features and utilities that simplify the process of building web applications and APIs. Express.js offers a robust routing system for defining endpoints, middleware support for processing requests and responses, and various other utilities for handling sessions, authentication, and templating. It focuses on providing a thin layer of abstraction over Node.js, allowing developers to quickly build web applications with less boilerplate code.
                </p>
            </div>
            <div>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>
                    A custom hook in React is a JavaScript function that utilizes built-in React hooks or other custom hooks to encapsulate and reuse stateful logic across different components. Custom hooks allow developers to extract common functionality from components and create reusable code snippets that can be shared and used across multiple parts of an application.

                    Custom hooks are created to promote code reusability, maintainability, and readability. They help avoid duplication of code by encapsulating complex logic or side effects within a hook, which can then be easily shared and used in different components. Custom hooks can abstract away repetitive tasks, such as data fetching, form handling, authentication, or any other shared stateful operations, making the codebase more modular and easier to understand.
                    By creating custom hooks, developers can write cleaner and more concise code, improve development efficiency, and ensure consistency in handling specific functionalities throughout the application
                </p>
            </div>
        </div>
    );
};

export default Blog;
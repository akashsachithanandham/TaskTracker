import React, { Component } from 'react';
const add = (a, b) => {
    return a + b;
}

const test = (props) => {
    setTimeout(() => {
        props.history.push("/signup");
    }, 3000);
    return (
<h1>hi {add(1,2)} </h1>
    );
}
export default test;
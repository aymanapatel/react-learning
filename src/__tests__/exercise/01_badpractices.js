// TEST React DOM - Supposed to FAIl

import * as React from "React"
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

/**
 * FAILS. Why?
 *  1. No before each to create empty DOM
 *  2. No cleanup code to clean parentDiv
 */


test('Counter Component: Test Increment and Decrement Button', () => {

    const parentDiv = document.createElement('div') // 1. 🐨 
    document.body.append(parentDiv) // 2. 🐨
    ReactDOM.render(<Counter/>, parentDiv) // 3. 🐨: Render myDiv to <Counter>  
    
    console.log(document.body.innerHTML)

    const message = parentDiv.firstChild.querySelector('div')
    const [decrement, increment] = document.body.querySelectorAll('button') // 3. 🐨: 
    
    expect(message.textContent).toBe('Current count: 0')

    increment.click()

    expect(message.textContent).toBe('Current count: 1')

    decrement.click()

    expect(message.textContent).toBe('Current count: -1')


})


test('Counter Component: Test Increment and Decrement Button', () => {

    const parentDiv = document.createElement('div') // 1. 🐨 
    document.body.append(parentDiv) // 2. 🐨
    ReactDOM.render(<Counter/>, parentDiv) // 3. 🐨: Render myDiv to <Counter>  
    
    console.log(document.body.innerHTML)

    const message = parentDiv.firstChild.querySelector('div')
    const [decrement, increment] = document.body.querySelectorAll('button') // 3. 🐨: MOE-> `querySelectorAll` only works as [] and not as whole variable

    
    expect(message.textContent).toBe('Current count: 0')

    increment.click()

    expect(message.textContent).toBe('Current count: 1')

    decrement.click()

    expect(message.textContent).toBe('Current count: 0')


})
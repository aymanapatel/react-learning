// TEST React DOM

import * as React from "React"
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

/**
 * Always CLOSE your Setup code
 *      - Here, by using `<my-div>.remove()` method
 */


beforeEach(() => {
    document.body.innerHTML = ''
})

test('Counter Component: Test Increment and Decrement Button', () => {

    const parentDiv = document.createElement('div') // 1. 🐨 
    document.body.append(parentDiv) // 2. 🐨
    ReactDOM.render(<Counter/>, parentDiv) // 3. 🐨: Render myDiv to <Counter>  
    
    console.log(document.body.innerHTML)

    const message = parentDiv.firstChild.querySelector('div')
    const [decrement, increment] = parentDiv.querySelectorAll('button') // 3. 🐨: MOE-> `querySelectorAll` only works as [] and not as whole variable

    
    expect(message.textContent).toBe('Current count: 0')

    increment.click()

    expect(message.textContent).toBe('Current count: 1')

    decrement.click()

    expect(message.textContent).toBe('Current count: 0')
    parentDiv.remove() // Always cleanup test


})


test('Counter Component: Test Increment and Decrement Button', () => {

    const parentDiv = document.createElement('div') // 1. 🐨 
    document.body.append(parentDiv) // 2. 🐨
    ReactDOM.render(<Counter/>, parentDiv) // 3. 🐨: Render myDiv to <Counter>  
    
    console.log(document.body.innerHTML)

    const message = parentDiv.firstChild.querySelector('div')
    const [decrement, increment] = parentDiv.querySelectorAll('button') // 3. 🐨: MOE-> `querySelectorAll` only works as [] and not as whole variable

    
    expect(message.textContent).toBe('Current count: 0')

    increment.click()

    expect(message.textContent).toBe('Current count: 1')

    decrement.click()

    expect(message.textContent).toBe('Current count: 0')
    parentDiv.remove() // Always cleanup test

})

// EXTRA CREDIT: 💯 use dispatchEvent
test('Counter Component: Test using Mouse Event', () => {

    const parentDiv = document.createElement('div') // 1. 🐨 
    document.body.append(parentDiv) // 2. 🐨
    ReactDOM.render(<Counter/>, parentDiv) // 3. 🐨: Render myDiv to <Counter>  
    
    console.log(document.body.innerHTML)

    const message = parentDiv.firstChild.querySelector('div')
    const [decrement, increment] = parentDiv.querySelectorAll('button') // 3. 🐨: MOE-> `querySelectorAll` only works as [] and not as whole variable

    
    expect(message.textContent).toBe('Current count: 0')

    const incrementClickMouseEvent = new MouseEvent('click', {
        bubbles: true, // REACT uses event delegation, so bubbling is required 
        cancelable: true,
        button: 0
    }) 
    increment.dispatchEvent(incrementClickMouseEvent)

    expect(message.textContent).toBe('Current count: 1')

    const decrementClickMouseEvent = new MouseEvent('click', {
        bubbles: true, // REACT uses event delegation, so bubbling is required 
        cancelable: true,
        button: 0
    }) 
    decrement.dispatchEvent(decrementClickMouseEvent)

    expect(message.textContent).toBe('Current count: 0')
    parentDiv.remove() // Always cleanup test

})
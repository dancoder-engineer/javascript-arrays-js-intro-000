var chocolateBars

chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element) {
<<<<<<< HEAD
    return [element, ...array]  
}

function destructivelyAddElementToBeginningOfArray(array,element) {
    array.unshift(element)
    return array}
=======
    return [element, ...array]  }

function destructivelyAddElementToBeginningOfArray(array,element) {
    array.unshift(element) }
>>>>>>> 5cb8afc63f39a0cf64d3d18a565840902d0ae1b7
    
function addElementToEndOfArray(array,element) {
    return [...array, element]  }

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(array,element) {
    array.push(element)
    return array }
    
function accessElementInArray(array, index) {
    return array[index] }
    
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift() 
  return array }
  
  function removeElementFromBeginningOfArray(array) {
    return array.slice(1)
  }
  
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length-1)  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
     array.pop() 
     return array}
=======
function destructivelyAddElementToEndOfArray(array) {
    array.push(element) }
    
function 
>>>>>>> 5cb8afc63f39a0cf64d3d18a565840902d0ae1b7

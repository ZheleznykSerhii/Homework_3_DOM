// Task 1

// Answer 1

let element1 = document.querySelector('li:first-child')
let element2 = document.querySelector('li:nth-child(2)')
let element3 = document.querySelector('li:nth-child(3)')
let element4 = document.querySelector('li:nth-child(4)')
let element5 = document.querySelector('li:last-child')

let user1_v1 = (element1.textContent = 'User1')
let user2_v1 = (element2.textContent = 'User2')
let user3_v1 = (element3.textContent = 'User3')
let user4_v1 = (element4.textContent = 'User4')
let user5_v1 = (element5.textContent = 'User5')

console.log('task 1, version 1 (by querySelector and textContent)')
console.log(user1_v1)
console.log(user5_v1)
console.log(user2_v1)
console.log(user4_v1)
console.log(user3_v1)

// Answer 2

let element1_v2 = document.getElementsByTagName('li:first-child')
let element2_v2 = document.getElementsByTagName('li:nth-child(2)')
let element3_v2 = document.getElementsByTagName('li:nth-child(3)')
let element4_v2 = document.getElementsByTagName('li:nth-child(4)')
let element5_v2 = document.getElementsByTagName('li:last-child')

let user1_v2 = (element1_v2.innerText = 'User1')
let user2_v2 = (element2_v2.innerText = 'User2')
let user3_v2 = (element3_v2.innerText = 'User3')
let user4_v2 = (element4_v2.innerText = 'User4')
let user5_v2 = (element5_v2.innerText = 'User5')

console.log('task 1, version 2 (by getElementsByTagName and innerText)')
console.log(user1_v2)
console.log(user5_v2)
console.log(user2_v2)
console.log(user4_v2)
console.log(user3_v2)

// Task 2

// h1
document.querySelector('h1').style.background = '#91ef91'

// div with p

document.querySelector('p:first-child').style.fontWeight = '900'
document.querySelector('p:nth-child(2)').style.color = 'red'
document.querySelector('p:nth-child(3)').style.textDecoration = 'underline'
document.querySelector('p:nth-child(4)').style.fontStyle = 'italic'

// Makemehorizontal

let itemsToString = document
  .getElementById('myList')
  .textContent.replace(/\s+/g, '')

document.getElementById('myList').innerHTML = itemsToString

// insisble span

document.querySelector('span').remove()

// Task 4

// button
let button = document.getElementById('button')

button.addEventListener('mouseenter', runEvent)
button.addEventListener('click', runEvent)
button.addEventListener('mouseleave', runEvent)

// div after button

let historyOfButton = document.getElementById('conditionOfButton')

function runEvent(e) {
  switch (e.type) {
    case 'mouseenter':
      historyOfButton.insertAdjacentHTML('beforeend', '<div>Mouse on me!</div>')
      break
    case 'click':
      historyOfButton.insertAdjacentHTML(
        'beforeend',
        '<div>I was pressed!</div>'
      )
      'I was pressed!'
      break
    case 'mouseleave':
      historyOfButton.insertAdjacentHTML(
        'beforeend',
        '<div>Mouse is not on me!</div>'
      )
      'Mouse is not on me!'
      break
  }
}

// some margins, font-sizes for all tasks

document.getElementById('button').style.margin = '10px'
document.getElementById('conditionOfButton').style.margin = '10px'
document.querySelector('h1').style.fontSize = '48px'
document.getElementById('myDiv').style.fontSize = '24px'
document.getElementById('myList').style.fontSize = '24px'

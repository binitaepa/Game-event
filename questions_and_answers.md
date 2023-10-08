<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer:A</b></summary>
<p>

#### Answer: ?

<i>It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer:C</b></summary>
<p>

#### Answer: ?

<i>JavaScript converts the number 1 into a string, in order for the function to make sense and return a value.so it concatenates the string .and return 12.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>:A</b></summary>
<p>

#### Answer: ?

<i>We set the value of the favoriteFood property on the info object equal to the string with the pizza emoji, '🍕'. A string is a primitive data type. In JavaScript, primitive data types act by reference

In JavaScript, primitive data types (everything that's not an object) interact by value. In this case, we set the value of the favoriteFood property on the info object equal to the value of the first element in the food array, the string with the pizza emoji in this case ('🍕'). A string is a primitive data type, and interact by value.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B</b></summary>
<p>

#### Answer: ?

<i>By default, arguments have the value of undefined, unless a value has been passed to the function. In this case, we didn't pass a value for the name argument. name is equal to undefined which gets logged.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer:C</b></summary>
<p>

#### Answer: ?

<i> If condition within the forEach loop checks whether the value of num is truthy or falsy. Since the first number in the array is 0, a falsy value, the if statement's code block won't be executed. count only gets incremented for the other 3 numbers in the num array, 1, 2 and 3. Since count gets incremented by 1 3 times, the value of count is 3.</i>

</p>
</details>

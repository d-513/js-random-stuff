# js-random-stuff

Generate random numbers and strings in node

Instalation:

`npm install --save dada513/js-random-stuff`

Examples:

```js
const random = require("js-random-stuff");
console.log(random.genNumber(1, 10)); // returns a random number between 1 and 10
console.log(random.genNumbers(10, 1, 10)); // returns an array with 10 random numbers between 1 and 10

console.log(random.genString(10)); // returns a random string with 10 characters
console.log(random.genStrings(5, 10)); // returns an array of 5 random strings with 10 characters

console.log(random.genHex()); // returns a random hex color
```

## Documentation

## Functions

<dl>
<dt><a href="#genNumber">genNumber(min, max)</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random number.</p>
</dd>
<dt><a href="#genNumbers">genNumbers(count, min, max)</a> ⇒ <code>Array</code></dt>
<dd><p>Generate multiple random numbers.</p>
</dd>
<dt><a href="#genString">genString(length, [characters])</a> ⇒ <code>string</code></dt>
<dd><p>Generate random string.</p>
</dd>
<dt><a href="#genStrings">genStrings(count, length, [characters])</a> ⇒ <code>Array</code></dt>
<dd><p>Generate random strings.</p>
</dd>
<dt><a href="#genHex">genHex()</a> ⇒ <code>String</code></dt>
<dd><p>Generate a random hex color.</p>
</dd>
</dl>

<a name="genNumber"></a>

## genNumber(min, max) ⇒ <code>number</code>

Generate a random number.

**Kind**: global function
**Returns**: <code>number</code> - The random number.

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| min   | <code>number</code> | Minimal value of the number. |
| max   | <code>number</code> | Maximum value of the number. |

<a name="genNumbers"></a>

## genNumbers(count, min, max) ⇒ <code>Array</code>

Generate multiple random numbers.

**Kind**: global function
**Returns**: <code>Array</code> - Array of those random numbers.

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| count | <code>number</code> | Count of those numbers.      |
| min   | <code>number</code> | Minimal value of the number. |
| max   | <code>number</code> | Maximum value of the number. |

<a name="genString"></a>

## genString(length, [characters]) ⇒ <code>string</code>

Generate random string.

**Kind**: global function
**Returns**: <code>string</code> - The random string.

| Param        | Type                | Default                                                                                 | Description                              |
| ------------ | ------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------- |
| length       | <code>number</code> |                                                                                         | Length of the string.                    |
| [characters] | <code>string</code> | <code>&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&quot;</code> | Characters to use to create the string . |

<a name="genStrings"></a>

## genStrings(count, length, [characters]) ⇒ <code>Array</code>

Generate random strings.

**Kind**: global function
**Returns**: <code>Array</code> - Array of those random strings.

| Param        | Type                | Default                                                                                 | Description                              |
| ------------ | ------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------- |
| count        | <code>number</code> |                                                                                         | Count of those strings.                  |
| length       | <code>number</code> |                                                                                         | Length of the strings.                   |
| [characters] | <code>string</code> | <code>&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&quot;</code> | Characters to use to create the strings. |

<a name="genHex"></a>

## genHex() ⇒ <code>String</code>

Generate a random hex color.

**Kind**: global function
**Returns**: <code>String</code> - Hex Color.

---
sidebar_position: 1
---

# Variables

## Defining Variables

In Syfar, there are three ways to define variables:

### Single Variable

To declare a single variable, use the following syntax:

```js
var name = "value"
```

### Multiple Variables

For a faster way to declare multiple variables at once, use the `var` keyword with parentheses:

```js
var (
    var1 = "val1"
    var2 = "val2"
)
```

### Varset

A `vars` allows you to group multiple variables together. This helps organize related variables into a set.

```js
vars s1 {
    var1 = "val1"
    var2 = "val2"
}
```

## Accessing Variables

You can access variables using the `var` keyword as a reference to the object.

```js
var name = "value"

print {
    var.name
}
```

For a `varset`, you need to use the `vars` keyword to access its variables.

```js
vars s1 {
    var1 = "val1"
    var2 = "val2"
}

print {
    vars.s1.var1
}
```

:::warning Important Note:

You cannot directly use a `varset` as a value; you must reference a specific variable inside the `varset`.

```js
vars s1 {
    var1 = "val1"
    var2 = "val2"
}

print {
    vars.s1  // displays <nil>
}
```
:::


## Supported Types

Syfar supports several data types, allowing for flexibility when defining variables.

### String

Strings are defined using quotes:

```js
var message = "Hello World"
```

### Number

Syfar supports both integers and floating-point numbers:

```js
// Integer
var age = 54

// Float
var weight = 45.548
```

### Boolean

Booleans can be either `true` or `false`:

```js
var ok = true
var now = false
```

### Array

Arrays are defined using square brackets `[]`, and can contain a list of values:

```js
var ages = [47, 89, 3, 5, 7]
```

### Object

Syfar objects are similar to JavaScript objects or JSON. Objects are created using curly braces `{}` and can contain key-value pairs.

```js
var you = {
    name: "Toe Bon",
    age: 45,
    pc: {
        os: "Ubuntu",
        price: 4544.99
    }
}

print {
    you.pc.os
}
```

#### Note:
When declaring an object, the comma `,` between key-value pairs is **optional**. Here’s an example without commas:

```js
var t = {
    a: 456
    b: "AZERTYUI"
}
```

#### Referencing Variables in Objects

You can reference previously declared variables within an object:

```js
var t2 = {
    c: you.pc.price
}
```


---
sidebar_position: 2
---

# Assertions

Assertions are the conditions that must be met for a test to pass. They are always written inside the `expect` block. An assertion consists of three parts, following this order:
- **Identifier**: This can be a declared variable or an internal variable provided by an action.
- **Operation**: The comparison operator.
- **Value**: The expected value or the value to which we are comparing.

```
Identifier Operation Value
```
Example:

```js
var age = 20
test {
    expect {
        var.age eq 20
    }
}
```

## Syfar Expect Identifiers

Variable references are valid identifiers. When tests are written with an action, they have access to the provided variable `r`, which represents the result of the action.

For example, in the `file_read` action, we can access the file content using `r.content`. For more details on action outputs, refer to the **Providers** section.

Example:

```js
var expected_content = "File content"

action file_read f {
    path = "file.txt"

    test "Test on content" {
        expect {
            r.content eq var.expected_content
        }
    }
}
```

## Syfar Expect Operators

Currently, Syfar supports the following operators for assertions:

- **Equality**: `eq` or `"=="`
- **Greater Than**: `gt` or `>`
- **Greater Than or Equal**: `gte` or `">="`
- **Less Than**: `lt` or `<`
- **Less Than or Equal**: `lte` or `"<="`
- **Not Equal**: `ne` or `"!="`

These operators provide a range of comparison options to validate your test assertions.


## Syfar Expect Value

Variable references are valid values. The output from an action is also considered a valid value. You can reference the action's output using the action name and the defined output variable.

Example:

```js
var greet = "Hello" 

action file_read myaction {
    path = "file.txt"

    test "Test on content" {
        expect {
            r.content eq "Welcome to Syfar. Enjoy!"
        }
    }

    out {
        text = r.content
        another = var.greet
    }
}

test "Test on output" {
    expect {
        myaction.text eq "Welcome to Syfar. Enjoy!"
        myaction.another ne "Hi"
        myaction.another eq var.greet
    }
}
```

In this example:
- `myaction.text` and `myaction.another` are valid references to the output values defined in the `out` block of the action `myaction`.
- You can assert their values in subsequent tests using these references.





---
sidebar_position: 1
---


# Testing Blocks

Syfar provides four main blocks for writing tests.

## `test` Block

The `test` block is used to define a test case. It is structured as follows:

```js
test "Describe your test here" {
    ...
}
```

## `expect` Block

The `expect` block is used to define assertions within a test. It is always placed inside a `test` block and contains the conditions that must be met for the test to pass.

```js
test "Describe your test here" {
    expect {
        r.status eq 200
        r.json.name eq "Toe"
    }
}
```

A `test` block can include multiple `expect` blocks:

```js
test "Describe your test here" {
    expect {
        r.status eq 200
        r.json.name eq "Toe"
    }

    expect {
        var.name eq "Toe"
    }
}
```

## `tests` Block

The `tests` block allows you to group multiple test cases. It can contain several `test` blocks, but not `expect` blocks.

```js
tests "My test group" {
    test "Describe your test here" {

    }

    test "Describe your test2 here" {

    }
}
```

## `steps` Block

The `steps` block is used for sequencing actions step by step. It can contain only  `action` block, which is covered in the Providers section. This block helps avoid parallelism by ensuring that actions are executed one after another. It's particularly useful when you need the output from one action to be used in a subsequent action. 

> **Note:** Parallelism is not supported in Syfar at this time, so the `steps` block is not required unless specific sequencing is needed.

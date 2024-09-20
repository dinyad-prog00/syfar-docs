---
sidebar_position: 1
---


# Generalities

Providers (or Action Providers) are plugins that extend Syfar's functionality for various purposes. Without providers, Syfar would only be useful for declaring variables and testing their values—nothing too exciting, right?

Each provider offers one or more actions. For example, the **file** provider allows reading file content using the `read` action.

Currently, Syfar supports  **file** and **HTTP** (WIP) providers, with planned support for database interactions, Kafka and more.

## Using a Provider

To use a provider, you need to know its name (`provider_key_name`) and the actions it provides. Each action accepts inputs and returns outputs that are accessed through the `r` variable inside the action block.

Here’s how to use an action from a provider:

```js
action `provider_key_name`_`action_key_name` your_action_name {
    input_name = input_value

    test {
        expect {
            r.output_name eq 466
        }
    }

    out {
        t = r.output_name
    }
}
```

Example:

```js
action file_read myaction {
    path = "file.txt"

    test "Test on content" {
        expect {
            r.content eq "Welcome to Syfar. Enjoy!"
        }
    }

    out {
        text = r.content
    }
}
```

In this example, we used the `read` action from the **file** provider to read the content of `file.txt`.

## Provider Action Output

To output data from an action, use the `out` block. It allows you to pass the output of one action to another or use it elsewhere. You can also print output from an action by defining it in the `out` block and printing it outside the action.

Example:

```js
action file_read myaction {
    path = "file.txt"

    out {
        text = r.content
    }
}

print {
    myaction.text
}
```

In this example, we read the content of `file.txt` and printed it using the output `myaction.text`.

## Allowed Blocks Inside an Action

The allowed blocks within an action are:
- `tests`: For defining test cases group.
- `test`: For defining test cases.
- `out`: For defining the outputs of the action.

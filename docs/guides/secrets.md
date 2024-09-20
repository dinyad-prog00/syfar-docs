---
sidebar_position: 2
---

# Secrets

## Define and Use Secrets

Secrets help you separate sensitive variables from others, ensuring that they are managed securely. In Syfar, secrets are declared similarly to varsets, but using the `secrets` keyword.

### Declaring a Secret

To declare a secret, use the `secrets` keyword:

```js
secrets mysecret {
    sct1 = "val1"
    sct2 = "val2"
}
```

### Accessing Secrets

Accessing secrets is similar to accessing varsets. Use the `secrets` keyword to reference the secret set:

```js
print {
    secrets.mysecret.sct1
}
```

## Secret Management

The recommended way to handle secrets is to define them in a separate file. For example, you can create a file named `secrets.sf`:

```js title="my-project/secrets.sf"
secrets mysecret1 {
    sct1 = "val1"
    sct2 = "val2"
}

secrets mysecret2 {
    sct1 = "val1"
    sct2 = "val2"
}
```

### Best Practices:

- **Add `secrets.sf` to `.gitignore`**: Ensure that your secrets file is excluded from version control by adding it to `.gitignore`. This keeps your sensitive data secure and prevents it from being shared publicly.

- **Import Secrets into `main.sf`**: To use the secrets in your main project, import the `secrets.sf` file in `main.sf`:

```js title="my-project/main.sf"
import("secrets.sf")

print {
    secrets.mysecret1.sct1
}
```

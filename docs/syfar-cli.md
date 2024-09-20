---
sidebar_position: 4
---

# Syfar CLI

The **Syfar Command Line Interface (CLI)** allows you to efficiently implement and execute your Syfar tests.

## Usage

```bash
syfar [command]
```

The Syfar CLI provides several commands to help you manage projects, run tests, and validate files.

## Available Commands

You can also use it to get detailed information about specific commands:

```bash
syfar [command] --help
```

### `init`
Initializes a new Syfar project. This command scaffolds the necessary files to get started with your Syfar tests in the current folder.

```bash
syfar init
```

You can optionally specify a project name to create the project in a new folder:

```bash
syfar init my_project
```

### `run`
Runs a test or an entire Syfar project. This command executes the test files within your project.

```bash
syfar run
```

To run a specific test file, you can pass the filename:

```bash
syfar run my_test_file.sf
```

### `validate`
Validates a Syfar file or project to ensure that all syntax and structure are correct.

```bash
syfar validate
```
This is useful for checking your tests before execution.

### `version`
Displays the current version of Syfar installed on your system.

```bash
syfar version
```

### `completion`
Generates the autocompletion script for the specified shell. This is useful for enhancing productivity by enabling tab-completion for the Syfar CLI commands.

```bash
syfar completion
```

### `help`
Displays help information about any Syfar command.

```bash
syfar help
```

## Example Usage

- To initialize a new Syfar project:

  ```bash
  syfar init
  ```

- To run tests in your project:

  ```bash
  syfar run
  ```

- To validate a Syfar file:

  ```bash
  syfar validate my_test_file.sf
  ```

For more information about any command, you can run:

```bash
syfar [command] --help
```

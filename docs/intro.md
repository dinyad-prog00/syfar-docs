---
sidebar_position: 1
---

# Introduction

## What is Syfar ?

Syfar is a declarative language designed for the efficient implementation and execution of integration tests. It aims to simplify the process of testing large systems by providing a straightforward and flexible testing framework.

## Features
- **Declarative language** for test descriptions
- **Supports multiple action providers** including:
  - File provider: Allows reading file content for testing or reuse in subsequent actions
  - HTTP provider: Enables testing HTTP endpoints and interactions

- **Custom action providers**: Extend Syfar with your own providers, with planned support for Kafka, database interactions, and more. Currently, adding a new provider requires rebuilding Syfar, but we are working on future support for providers through the **Go plugin system over RPC** to enable dynamic extension without a rebuild.
  
- **Simple CLI commands** to initialize, validate, and run tests
- **Support for multiple Linux distributions** (Debian, RPM, APK packages)
- **Syfar Language Server** for IDE integration, providing real-time validation, autocompletion, and error diagnostics (refer to  [https://github.com/dinyad-prog00/syfar-ls](https://github.com/dinyad-prog00/syfar-ls)) [WIP]
- **VSCode extension** for syntax highlighting and integration


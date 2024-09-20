---
sidebar_position: 1
---

# Installation
This guide will assist you in successfully installing Syfar on your computer, ensuring that you have everything set up to start using it for your tests.

## From Precompiled Binaries

You can download the precompiled binaries for your Linux distribution from the [releases page](https://github.com/dinyad-prog00/syfar/releases).

For example, to install on an AMD64 Debian-based system:

```bash
wget https://github.com/dinyad-prog00/syfar/releases/download/0.1.0/syfar_0.1.0_linux_amd64.deb
sudo dpkg -i syfar_0.1.0_linux_amd64.deb
```

Alternatively, you can install from source:

## From Source

```bash
git clone https://github.com/dinyad-prog00/syfar.git
cd syfar/cli
go build -o ../build/syfar
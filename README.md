# Astha Gupta - Portfolio Project

This project is built using **React** and utilizes **node-sass** for styling. Follow the instructions below to set up, build, and deploy the project.

## Prerequisites

Ensure you have the following installed:
- **Node.js** (version 16.x): Using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) is recommended to manage different Node.js versions.

## Installation and Setup

To install the project dependencies and prepare the project for development, follow the steps below:

### 1. Set the Node.js version to 16

```bash
nvm use 16
```
This command ensures that Node.js version 16 is used for the project. If you haven't installed it yet, you can install it using `nvm install 16`.

### 2. Clear npm cache (optional but recommended)

```bash
npm cache clear --force
```
Clearing the npm cache ensures there are no issues caused by outdated or corrupted cached packages.

### 3. Install node-sass

```bash
npm i node-sass
```
This installs `node-sass`, a library used to compile SCSS to CSS, which is essential for managing styles within this project.

### 4. Install other dependencies

```bash
npm i
```
This will install all the dependencies listed in the `package.json` file for the project.

### 5. Build the project

```bash
npm run build
```
This command builds the production-ready version of the project, creating an optimized bundle in the `/build` directory.

### 6. Start the development server

```bash
npm start
```
This will start the local development server. Open `http://localhost:3000` in your browser to see the project running locally.

### 7. Deploy the project

```bash
npm run deploy
```
This command will trigger the deployment process to the specified environment (depending on your project’s setup).
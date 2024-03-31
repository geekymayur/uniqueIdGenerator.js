# uniquecodegenerator

[![npm version](https://img.shields.io/npm/v/uniquecodegenerator.svg)](https://www.npmjs.com/package/uniquecodegenerator)
[![license](https://img.shields.io/npm/l/uniquecodegenerator.svg)](https://github.com/your-username/uniquecodegenerator/blob/main/LICENSE)

## Overview

The `uniquecodegenerator` npm package provides a simple and versatile solution for generating unique identifiers in JavaScript projects. It offers the flexibility to generate codes consisting of numeric digits or a combination of alphanumeric characters. With customizable options for specifying code type (numeric or alphanumeric) and length, developers can easily integrate this package to create unique codes tailored to their application's needs.

## Installation

You can install the package via npm:

```bash
npm install uniquecodegenerator 

const UniqueIdGenerator = require('uniquecodegenerator');

// Create an instance of the UniqueIdGenerator
const idGenerator = new UniqueIdGenerator();

// Generate a numeric ID with a specified length
const numericId1 = idGenerator.generateUniqueId('123', 6);

// Generate another numeric ID with a specified length
const numericId2 = idGenerator.generateUniqueId('num', 6);

// Generate an alphanumeric ID with a specified length
const alphanumericId = idGenerator.generateUniqueId('abc123', 8);

console.log(numericId1); // Output: "604937"
console.log(numericId2); // Output: "892346"
console.log(alphanumericId); // Output: "R7bF9tCp"

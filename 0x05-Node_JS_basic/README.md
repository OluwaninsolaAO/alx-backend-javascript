# 0x05. NodeJS Basics

Node.js is a runtime environment that allows you to run JavaScript on the server side. It's built on the V8 JavaScript engine from Google and provides a powerful platform for building network applications, servers, and various backend services using JavaScript.

Fundamental concepts and components of Node.js includes and not limited to the following:

1. **npm (Node Package Manager)**:
   npm is the default package manager for Node.js. It allows you to easily install, manage, and share JavaScript packages (libraries) for your projects.

1. **Modules**:
   Node.js uses a modular approach to organizing code. You can break your application's functionality into smaller reusable units called modules. Each module can be imported and used in other parts of your code. Node.js provides built-in modules like fs (for file system operations) and http (for creating HTTP servers), as well as the ability to create your own modules.

1. **Event Loop**:
   Node.js is designed to be non-blocking and asynchronous. It utilizes an event loop to handle multiple I/O operations without blocking the execution of the entire program. This allows for efficient handling of many simultaneous connections.

1. **Callbacks and Promises**:
   Asynchronous operations in Node.js often use callbacks to handle the results of operations when they are ready. Promises provide a more structured way to handle asynchronous code, making it easier to manage complex asynchronous workflows.

1. **HTTP Module**:
   Node.js includes a built-in http module that allows you to create HTTP servers and clients. This is the foundation for building web applications and APIs.

1. **Express.js**:
   Express.js is a popular web application framework for Node.js. It provides an abstraction layer on top of the http module, making it easier to build web applications with routing, middleware, and other features.

1. **File System Operations**:
   The fs module in Node.js allows you to work with the file system, performing tasks like reading and writing files, creating directories, and more.

1. **Streams**:
   Streams are a way to handle data flow in Node.js. They allow you to process data in chunks rather than loading the entire data into memory, making it efficient for handling large amounts of data.

1. **Event Emitters**:
   Node.js uses the concept of event emitters and listeners to handle events. You can create custom events and listeners using the EventEmitter class, which is part of the core events module.

1. **Middleware**:
   In the context of web applications, middleware are functions that can intercept and process incoming requests and outgoing responses. Express.js makes extensive use of middleware to handle tasks such as authentication, logging, and error handling.

These are just some of the foundational concepts and components in Node.js. To start developing with Node.js, you'll need to have a solid understanding of JavaScript, asynchronous programming, and the specific modules you intend to use.

### Learning Objectives

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use process to access command line arguments and the environment
- create a small HTTP server using Node JS
- create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

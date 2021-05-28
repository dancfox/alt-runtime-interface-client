# alt-runtime-interface-client

## The Problem
Asynchronous function calls made within the initialization block of a Lambda function are not guaranteed to complete prior to invocation. This limits the effectiveness of Provisioned Concurrency for latency sensitive customers. 

## Proposed Solution
In this proof of concept application, we introduce the concept of a lifecycle hook to AWS Lambda. The `initializeFunction` lifecycle hook enables customers to gain greater control over their runtime environment by allowing them to run and complete initialization code during function startup. The Lambda Runtime Interface Client calls the `initializeFunction` lifecycle hook a single time prior to the first invocation. Notably, the `await` keyword is honored within this function block, enabling customers to create blocking calls.

## Review the Code
The easiest way to review the code is to download the application and then search for the string `dfox`. I have numbered the sequence of changes for review.

## Run the App Locally
I have created a couple shell scripts for convenience. Open a terminal and execute
`./run.sh`

Open a second terminal and execute
`./curl.sh`



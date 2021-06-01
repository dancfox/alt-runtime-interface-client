# alt-runtime-interface-client

## The Problem
Asynchronous function calls made within the initialization block of a Lambda function are not guaranteed to complete prior to invocation. This limits the effectiveness of Provisioned Concurrency for latency sensitive customers. 

## Proposed Solution
In this proof of concept application, I introduce the concept of a lifecycle hook to AWS Lambda. The `initializeFunction` lifecycle hook enables customers to gain greater control over their runtime environment by allowing them to run and complete initialization code during function startup. The Lambda Runtime Interface Client calls the `initializeFunction` lifecycle hook a single time prior to the first invocation. Notably, the `await` keyword is honored within this function block, enabling customers to create blocking calls.

## Review the Code
The easiest way to review the code is to download the application and then search for the string `dfox`. I have numbered the sequence of changes for review.

## Run the App Locally

1. [Install the Runtime Interface Emulator](https://github.com/aws/aws-lambda-runtime-interface-emulator)

2. Open a terminal and execute `./run.sh`

3. Open a second terminal and execute `./curl.sh`

## Open Issues
This is a monkey-patched project that is only meant to illustrate a design direction and establish technical feasibility. A production version should be extended from the typescript project, include proper testing and error handling.  

However, I notice that the logged Init Duration does not appear to accurately reflect the actual duration of the init code. This requires further investigation.



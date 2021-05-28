# alt-runtime-interface-client

Asynchronous function calls made within the initialization block of a Lambda function are not guaranteed to complete prior to invocation. This limits the effectiveness of Provisioned Concurrency for latency sensitive customers. 

This proof of concept application demonstrates a technique that would enable customers to guarantee the completion of initialization code prior to invocations.

In this model, we introduce the concept of a lifecycle hook to AWS Lambda. The `initializeFunction` lifecycle hook enables customers to gain greater control over their runtime environment by allowing them to run and complete initialization code during function startup. The Lambda Runtime Interface Client calls the `initializeFunction` lifecycle hook a single time prior to the first invocation. Notably, the `await` keyword is honored within this function block, enabling customers to create blocking calls.


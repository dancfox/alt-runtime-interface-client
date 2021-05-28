

console.log("******** enter the init block ********");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)).then(() => {resolved = true});
}

/**
 * dfox: 04 - this is the lifecycle hook that would be
 * implemented by customers. In this case we are creating
 * a blocking call to a sleep method for 5 seconds.
 * 
 * If you run this example in your terminal you can see the
 * that await is honored, the function blocks, and then 
 * wakes up prior to invocation.
 */
exports.initializeFunction = async () => {
  console.log("******** going to sleep for 5 seconds ********")
  let p = await sleep(5000);
  console.log("******** waking up ********");
}

exports.handler = async (event, context) => {
    console.log("^^^^^^^^^ in the handler ^^^^^^^^^");
    return 'Hello World!';
}

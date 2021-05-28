/**
 * dfox: 04 - customer code below
 */

console.log("******** enter the init block ********");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)).then(() => {resolved = true});
}

/**
 * this is the new custom platform hook
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

// const fs = require('fs');
// const testFolder = './node_modules/aws-lambda-ric';

console.log("&&&&&&&& in the init block &&&&&&&&");

// async function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms)).then(() => {resolved = true});
// }

// exports.init = async () => {
//   console.log("$$$$$$$$$$$$$ before sleep $$$$$$$$$$$$$")
//   await sleep(50)
//   console.log("$$$$$$$$$$$$$ after sleep $$$$$$$$$$$$$")
// }

exports.handler = async (event, context) => {
    console.log("^^^^^^^^^ in the handler ^^^^^^^^^");

    // fs.readdir(testFolder, (err, files) => {
    //     files.forEach(file => {
    //       console.log(file);
    //     });
    //   });

    return 'Hello World!';
}

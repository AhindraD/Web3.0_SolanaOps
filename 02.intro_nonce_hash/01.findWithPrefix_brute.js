const crypto = require('crypto');


//https://projects.100xdevs.com/tracks/web3-orientation/Web3-Cohort---Orientation-6

const findHashWithPrefix = (prefix) => {
    let start = 0;
    while (true) {
        let inputStr = start.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { "solution/NONCE": inputStr, "hash": hash }
        }
        start++;
    }
}

const PREFIX = "0000";

// Find and print the input string and hash
const result = findHashWithPrefix(PREFIX);
console.log(result)
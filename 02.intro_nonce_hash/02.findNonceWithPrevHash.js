const crypto = require('crypto');


//https://projects.100xdevs.com/tracks/web3-orientation/Web3-Cohort---Orientation-6

const findNonceWithPrev = (prefix, prev_hash) => {
    let start = 0;
    while (true) {
        let inputStr = prev_hash + start.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { "solution/NONCE": inputStr, "hash": hash }
        }
        start++;
    }
}

const PREFIX = "0000";
const prev_hash = "100xdevs"

// Find and print the input string and hash
const result = findNonceWithPrev(PREFIX, prev_hash);
console.log(result)

//https://andersbrownworth.com/blockchain/blockchain
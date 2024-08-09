import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const phantom_wallet1_address = "FofguT8vXbDCR8iCdEhGJmqM5fWVgf2akHTk3MavBMrQ";
const clusterURL = "http://localhost:8899";

export const checkBalance = async (address: PublicKey) => {
    const conn = new Connection(clusterURL, "confirmed");
    // console.log('fetching balance...');
    const accountInfo = await conn.getAccountInfo(address);
    const accountBalance = accountInfo ? accountInfo.lamports / LAMPORTS_PER_SOL : 0;
    // console.log('account balance: ', accountBalance)
    return accountBalance;
}

const walletPUB = new PublicKey(phantom_wallet1_address);
// checkBalance(walletPUB);
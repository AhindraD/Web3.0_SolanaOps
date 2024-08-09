import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const phantom_wallet1_address = "FofguT8vXbDCR8iCdEhGJmqM5fWVgf2akHTk3MavBMrQ";
const AMOUNT_to_airdrop = 1.1;
const clusterURL = "http://localhost:8899";

export const airdropSol = async (address: PublicKey, amount: number) => {
    const conn = new Connection(clusterURL, "confirmed");

    console.log('airdrop starting...');
    const signature = await conn.requestAirdrop(address, amount * LAMPORTS_PER_SOL);
    await conn.confirmTransaction(signature);
    console.log('airdrop completed!!!');
    console.log('Signature: ', signature)
}

const walletPUB = new PublicKey(phantom_wallet1_address);

// airdropSol(walletPUB, AMOUNT_to_airdrop)
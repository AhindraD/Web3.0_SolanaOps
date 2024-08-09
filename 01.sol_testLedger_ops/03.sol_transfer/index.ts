import { Keypair, PublicKey, Connection, SystemProgram, Transaction, sendAndConfirmTransaction, LAMPORTS_PER_SOL } from "@solana/web3.js";

import { getKeypairFromFile } from "@solana-developers/helpers";

//utils imports
import { airdropSol } from "../01.airdrop_sol";
import { checkBalance } from "../02.check_wallet";

const ToWallet_address = "FofguT8vXbDCR8iCdEhGJmqM5fWVgf2akHTk3MavBMrQ";
const clusterURL = "http://localhost:8899";


export const transferSol = async (
    fromWallet: Keypair,
    toWallet: PublicKey,
    amount: number
) => {
    const conn = new Connection(clusterURL, "confirmed");
    const txn = new Transaction();

    //can add multiple type of instructions,
    //for now adding only transfer instruction
    const transfer_instruction = SystemProgram.transfer({
        fromPubkey: fromWallet.publicKey,
        toPubkey: toWallet,
        lamports: amount * LAMPORTS_PER_SOL
    })

    txn.add(transfer_instruction);

    console.log('transfering...');
    const signature = await sendAndConfirmTransaction(conn, txn, [fromWallet]);
    console.log('Transaction Done!!! Signature: ', signature)
}





const Airdrop_AMOUNT = 5;
const Transfer_AMOUNT = 3;
//airdrop--->check balance--->transfer--->check balance
(async () => {
    // getKeypairFromFile() ----> defaulit path: ("~/.config/solana/id.json")
    // else specify path:
    const FromWallet_KEYPAIR = await getKeypairFromFile("~/.config/solana/solID2.json");

    const ToWallet_PUBLIC = new PublicKey(ToWallet_address);

    //airdrop
    await airdropSol(FromWallet_KEYPAIR.publicKey, Airdrop_AMOUNT);

    //check balance BEFORE
    const from_balance = await checkBalance(FromWallet_KEYPAIR.publicKey);
    console.log('from_balance: ', from_balance);

    const to_balance = await checkBalance(ToWallet_PUBLIC);
    console.log('to_balance: ', to_balance);

    //transfer solana
    await transferSol(FromWallet_KEYPAIR, ToWallet_PUBLIC, Transfer_AMOUNT);

    //check balance AFTER
    const from_balance_after = await checkBalance(FromWallet_KEYPAIR.publicKey);
    console.log('from_balance_after: ', from_balance_after);

    const to_balance_after = await checkBalance(ToWallet_PUBLIC);
    console.log('to_balance_after: ', to_balance_after);
})()
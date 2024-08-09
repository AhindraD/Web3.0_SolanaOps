import { createMint, mintTo, transfer, getOrCreateAssociatedTokenAccount, getAssociatedTokenAddress } from "@solana/spl-token";
import { Connection, Keypair, PublicKey, Signer, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getKeypairFromFile } from "@solana-developers/helpers";

const ToWallet_address = "FofguT8vXbDCR8iCdEhGJmqM5fWVgf2akHTk3MavBMrQ";
const clusterURL = "http://localhost:8899";


export const createNewMint = async (
    connection: Connection,
    payer: Signer,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey,
    decimals: number
) => {
    const tokenMint = await createMint(connection, payer, mintAuthority, freezeAuthority, decimals);
    console.log('Token Mint: ', tokenMint)
    return tokenMint;
}


export const createTokenAccount = async (
    connection: Connection,
    payer: Signer,
    mint: PublicKey,
    owner: PublicKey
) => {
    const tokenAssociatedAccount = await getOrCreateAssociatedTokenAccount(connection, payer, mint, owner);
    console.log('Token Associated Account: ', tokenAssociatedAccount)
    return tokenAssociatedAccount;
}


export const mintToken = async (
    connection: Connection,
    payer: Signer,
    mint: PublicKey,
    destination: PublicKey,
    authority: Signer,
    amount: number
) => {
    const mintSignature = await mintTo(connection, payer, mint, destination, authority, amount);
    console.log('Mint Signature: ', mintSignature)
    return mintSignature;
}


export const transferToken = async (
    connection: Connection,
    payer: Signer,
    source: PublicKey,
    destination: PublicKey,
    owner: Signer,
    amount: number,
    mint?: PublicKey
) => {
    const destinationTokenAccount = await getAssociatedTokenAddress(mint, destination);
    const transferSignature = await transfer(connection, payer, source, destinationTokenAccount, owner, amount);
    console.log('Transfer Signature: ', transferSignature)
    return transferSignature;
}



const mainFn = async () => {
    const connection = new Connection(clusterURL, 'confirmed');
    const payer = await getKeypairFromFile('~/.config/solana/solID2.json');
    const receiver_publickey = new PublicKey(ToWallet_address);


    const mint = await createNewMint(connection, payer, payer.publicKey, null, 9);
    const tokenAccount = await createTokenAccount(connection, payer, mint, payer.publicKey);

    await mintToken(connection, payer, mint, tokenAccount.address, payer, 100 * LAMPORTS_PER_SOL);

    // const receiverTokenAccount = await getAssociatedTokenAddress(
    //     mint,
    //     receiver_publickey
    // );
    //https://chatgpt.com/share/c1efd0a1-dde2-4706-9b5b-7eb6ca6e0d8c
    await transferToken(connection, payer, tokenAccount.address, receiver_publickey, payer, 33 * LAMPORTS_PER_SOL, mint);
}
mainFn();
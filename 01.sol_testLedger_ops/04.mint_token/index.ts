import { createMint, mintTo, transfer, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getKeypairFromFile } from "@solana-developers/helpers";

const ToWallet_address = "FofguT8vXbDCR8iCdEhGJmqM5fWVgf2akHTk3MavBMrQ";
const clusterURL = "http://localhost:8899";


export const createNewMint = async (
    connection: Connection,
    payer: Keypair,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey,
    decimal: number
) => {
    const tokenMint = await createMint(connection, payer, mintAuthority, freezeAuthority, decimal);
    console.log('Token Mint: ', tokenMint)
    return tokenMint;
}

export const createTokenAccount = async (

) => {

}
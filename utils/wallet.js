import { ethers } from "ethers";

// Connect to MetaMask and return provider, signer, and address
export const connectWallet = async () => {
  if (!window.ethereum) throw new Error("MetaMask not detected");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
};

// Check if wallet is already connected
export const isWalletConnected = async () => {
  if (!window.ethereum) return false;
  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  return accounts.length > 0;
};

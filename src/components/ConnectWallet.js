import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet({ setAddress }) {
  const [connected, setConnected] = useState(false);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
    setConnected(true);
  };

  return (
    <button onClick={connect}>
      {connected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
    }

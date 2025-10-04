import { ethers } from "ethers";
import AssetManagerABI from "../abi/AssetManager.json";

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, AssetManagerABI, signer);
};

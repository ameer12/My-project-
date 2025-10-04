import { ethers } from "ethers";

// Send a gasless permit() approval for EIP-2612 compatible tokens
export const sendPermit = async ({
  tokenContract,
  owner,
  spender,
  value,
  deadline,
}) => {
  const nonce = await tokenContract.nonces(owner);
  const name = await tokenContract.name();
  const version = "1";
  const chainId = (await tokenContract.provider.getNetwork()).chainId;

  const domain = {
    name,
    version,
    chainId,
    verifyingContract: tokenContract.address,
  };

  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };

  const message = {
    owner,
    spender,
    value,
    nonce,
    deadline,
  };

  const signer = tokenContract.provider.getSigner();
  const signature = await signer._signTypedData(domain, types, message);
  const { v, r, s } = ethers.utils.splitSignature(signature);

  const tx = await tokenContract.permit(owner, spender, value, deadline, v, r, s);
  return tx;
};

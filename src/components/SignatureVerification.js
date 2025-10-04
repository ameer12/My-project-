import { ethers } from "ethers";

export default function SignatureVerification({ signature, message, userAddress }) {
  const verify = () => {
    const recovered = ethers.utils.verifyMessage(message, signature);
    alert(recovered.toLowerCase() === userAddress.toLowerCase() ? "Valid Signature" : "Invalid Signature");
  };

  return <button onClick={verify}>Verify Signature</button>;
}

import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import SignatureRequest from "./components/SignatureRequest";
import AMLAttestationForm from "./components/AMLAttestationForm";
import TransferFunds from "./components/TransferFunds";
import ContractControls from "./components/ContractControls";
import { getContract } from "./utils/contract";

function App() {
  const [address, setAddress] = useState("");
  const contract = getContract();

  return (
    <div>
      <ConnectWallet setAddress={setAddress} />
      <SignatureRequest signer={contract.signer} setSignature={() => {}} />
      <AMLAttestationForm contract={contract} userAddress={address} />
      <TransferFunds contract={contract} tokenAddress="0x0000000000000000000000000000000000000001" />
      <ContractControls contract={contract} />
    </div>
  );
}

export default App;

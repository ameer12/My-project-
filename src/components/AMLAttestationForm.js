export default function AMLAttestationForm({ contract, userAddress }) {
  const sendAttestation = async () => {
    const reportHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Al-Amir Market Verified"));
    await contract.storeAttestation(userAddress, reportHash, "Verified");
  };

  return <button onClick={sendAttestation}>Send AML Attestation</button>;
}

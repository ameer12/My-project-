export default function TransferFunds({ contract, tokenAddress }) {
  const transfer = async () => {
    const amount = ethers.utils.parseEther("1");
    await contract.transferFunds(tokenAddress, amount);
  };

  return <button onClick={transfer}>Transfer Funds</button>;
}

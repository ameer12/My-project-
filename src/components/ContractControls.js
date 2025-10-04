export default function ContractControls({ contract }) {
  return (
    <div>
      <button onClick={() => contract.pause()}>Pause</button>
      <button onClick={() => contract.resume()}>Resume</button>
    </div>
  );
}

const message = `
I hereby declare that the funds in my wallet are clean,
derived from lawful activities, and are not related to
money laundering, terrorist financing, or any other illicit activity.
By signing this message, I authorize that forensic analytics
may be performed on my wallet for AML and compliance purposes.
`;

export default function SignatureRequest({ signer, setSignature }) {
  const sign = async () => {
    const sig = await signer.signMessage(message);
    setSignature(sig);
  };

  return (
    <div>
      <pre>{message}</pre>
      <button onClick={sign}>Sign Compliance Message</button>
    </div>
  );
}

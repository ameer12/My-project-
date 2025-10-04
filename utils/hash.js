import { ethers } from "ethers";

// Generate a reportHash from a plain text report
export const generateReportHash = (reportText) => {
  const bytes = ethers.utils.toUtf8Bytes(reportText);
  const hash = ethers.utils.keccak256(bytes);
  return hash;
};

// Example usage:
// const hash = generateReportHash("Al-Amir Market Verified");

import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";
const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fund");
connectButton.onclick = connect;
fundButton.onclick = fund;

async function connect() {
  if (typeof window.ethereum != "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "connected";
  } else {
    connectButton.innerHTML = "please download metamask!!";
  }
}

async function fund() {
  const ethAmount = "0.1";
  console.log(`funding with ${ethAmount}... `);
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer); // ?
    try {
      const transactionResponce = await contract.fund({
        value: ethers.utils.parseEther(ethAmount),
      });
      await listenForTranscationMine(transactionResponce, provider); //listen for tx to be  mined
    } catch (error) {
      console.log(error);
    }
  }
}

function listenForTranscationMine(transactionResponce, provider) {
  console.log(`mining ${transactionResponce.hash}...`);
  // return new Promise();
  return new Promise((resolve, reject) => {
    provider.once(transactionResponce.hash, (transactionRecepit) => {
      console.log(
        `Completed with ${transactionRecepit.confirmations} confirmations`
      );
      resolve();
    });
  });
}

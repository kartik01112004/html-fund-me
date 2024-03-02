1. HTML/JavaScript
   later on Nextjs/React

This is a frontend of our fund me project
we always need 2 seperate folders one for backend with smartcontracts and one with frontend

we connect to windows.ethreum becuse each browser has different extention and we want to connect with a RPC URL thats built into metamask just like we connected on alchemy.

we wait for listner function that wait for the transaction to go through.

for now we will just get the contract ABI from our previous fundMe smart contract and use it in constent file for reference of the smartcontract and get all the needed functionality of that in our frontend from that file

`ethers.utils.formatEther(balance)`
this `formatEther()` method converts an Ethereum value from wei to its equivalent in ether

this can be accessed from ethers but we need to have a ethers file in our folder.

```
import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";
```

alwase refer to

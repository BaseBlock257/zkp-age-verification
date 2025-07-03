# Sample zero-knowledge age check Project

This project demonstrates a basic zero-knowledge age proof use case. 

User’s Input (Private):
The user enters their birth year (e.g., 2002). This stays on their device.

Circuit Logic:
The circuit checks:

circom
>assert(currentYear - birthYear >= 18);
This logic runs inside the ZK circuit to check if the age ≥ 18.

Witness + Proof Generation (Local):
The ZK circuit outputs a proof that this condition is true — without revealing what the birth year actually was.

Verification (On-chain):
A smart contract or verifier checks that the proof is valid — confirming the user is over 18 — without ever learning the birth year.
Try running some of the following tasks:

```shell
Compile the contract
>npx hardhat compile
Run your tests
>npx hardhat test
```

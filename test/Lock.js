const { expect } = require("chai");
const { ethers } = require("hardhat");
const fs = require("fs");

describe("Groth16Verifier", function () {
  let Verifier, verifier;

  before(async () => {
    Verifier = await ethers.getContractFactory("Groth16Verifier");
    verifier = await Verifier.deploy(); 
    console.log("Verifier deployed to:", verifier.address);
  });

  it("Should verify a valid proof", async () => {
    // Load proof and public input
    const proof = JSON.parse(fs.readFileSync("proofs/proof.json"));
    const pub = JSON.parse(fs.readFileSync("proofs/public.json"));

    // Format proof for Solidity input
    const a = [proof.pi_a[0], proof.pi_a[1]];
    const b = [
      [proof.pi_b[0][1], proof.pi_b[0][0]],
      [proof.pi_b[1][1], proof.pi_b[1][0]],
    ];
    const c = [proof.pi_c[0], proof.pi_c[1]];
    const input = pub;

    // Call the verifier
    const isValid = await verifier.verifyProof(a, b, c, input);
    expect(isValid).to.be.true;
  });
});

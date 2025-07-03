pragma circom 2.0.0;

template AgeCheck() {
    signal input birth_year;
    signal input current_year;
    signal input claimed_over_18; // Prover says they're 18+
    signal output valid;

    signal diff;
    diff <== current_year - birth_year;

    // Force claimed_over_18 to be boolean (0 or 1)
    claimed_over_18 * (claimed_over_18 - 1) === 0;

    // Let the verifier check: is claimed_over_18 valid based on diff?
    valid <== claimed_over_18;
}

component main = AgeCheck();

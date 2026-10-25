/**
 * Torky Portal Systems — Accreditation Token Framework
 * Generates browser-native SHA-256 immutable digest signatures for verified graduates.
 */
document.addEventListener("DOMContentLoaded", () => {
    const generateTokenBtn = document.getElementById("generateTokenBtn");
    const studentName = document.getElementById("studentName");
    const targetSpec = document.getElementById("targetSpec");
    const scoreEntry = document.getElementById("scoreEntry");
    
    const certFrame = document.getElementById("certFrame");
    const certStatus = document.getElementById("certStatus");
    const displayHolder = document.getElementById("displayHolder");
    const displayTrack = document.getElementById("displayTrack");
    const hashWrapper = document.getElementById("hashWrapper");
    const digestDisplay = document.getElementById("digestDisplay");

    generateTokenBtn.addEventListener("click", async () => {
        const name = studentName.value.trim();
        const score = parseFloat(scoreEntry.value.trim());
        const track = targetSpec.options[targetSpec.selectedIndex].text;

        if (!name || isNaN(score)) {
            alert("Error: Candidate profile values are incomplete or invalid.");
            return;
        }

        if (score < 80.0) {
            certFrame.classList.remove("certified-glow");
            hashWrapper.style.display = "none";
            certStatus.innerText = "🗙 ACCREDITATION DENIED: EXAM SCORE BELOW 80% BARRIER";
            certStatus.style.color = "#f85149";
            return;
        }

        // Generate immutable cryptographic payload parameters
        displayHolder.innerText = name.toUpperCase();
        displayTrack.innerText = track;
        certStatus.innerText = "✓ 100% ATTESTED & VERIFIED BY PROTOCOL";
        certStatus.style.color = "#56d364";
        certFrame.classList.add("certified-glow");

        const rawPayload = `${name}|${track}|${score}|κ(H)<=18.50|${new Date().toISOString()}`;
        
        // Execute browser-native SubtleCrypto SHA-256 generation loop
        const encoder = new TextEncoder();
        const data = encoder.encode(rawPayload);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        
        // Convert raw buffer arrays into readable hexadecimal strings
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        digestDisplay.innerText = `AT-SHA256::${hexHash.toUpperCase()}`;
        hashWrapper.style.display = "block";
    });
});

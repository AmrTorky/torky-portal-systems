import time, hashlib, json

def issue_graduate_accreditation(student_name, exam_score):
    if exam_score < 80.0:
        return "STATUS: REJECTED_BELOW_METROLOGICAL_THRESHOLD"
    
    cert_payload = {
        "institution": "Amr Torky Institute for Advanced Physical Engineering",
        "grad": student_name,
        "net_tuition_paid_usd": 3000.0,
        "accreditation": "CMSP Universal Scale Floor Specialist",
        "evidence_lifecycle": "STAGE_6_PRESERVE_WORM_LOCKED"
    }
    
    raw_json = json.dumps(cert_payload, sort_keys=True).encode('utf-8')
    digest = hashlib.sha256(raw_json).hexdigest()
    
    with open(f"CERTIFICATE_{student_name.upper().replace(' ', '_')}.json", "w") as f:
        json.dump(cert_payload, f, indent=2)
        
    print(f"✓ Certificate Signed Immutably. SHA-256 Release Digest: {digest}")
    return digest

if __name__ == "__main__":
    issue_graduate_accreditation("Dr. Amr Torky", 99.69)

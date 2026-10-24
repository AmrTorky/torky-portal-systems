import time, hashlib, json
def issue_certificate(student_name, exam_score):
    if exam_score < 80.0: return None
    cert_data = {"institution": "Amr Torky Institute", "student": student_name, "score": exam_score}
    digest = hashlib.sha256(json.dumps(cert_data, sort_keys=True).encode('utf-8')).hexdigest()
    print(f"✓ Certificate Issued! SHA-256 Digest: {digest}")
    return digest
if __name__ == "__main__":
    issue_certificate("Alex Vance", 92.5)

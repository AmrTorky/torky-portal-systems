#!/usr/bin/env bash
set -euo pipefail

echo "-> Executing localized Portal Evaluation Matrix checks..."
python3 src/portal_evaluator.py

"""Run: python nightly_etl.py input.csv output.csv (standard library only)."""
import csv
import json
import sys
from pathlib import Path


def clean(source, target):
    rejected, seen, cleaned = [], set(), []
    with Path(source).open(newline='', encoding='utf-8-sig') as stream:
        rows = csv.reader(stream)
        headers = [cell.strip() for cell in next(rows)]
        for number, row in enumerate(rows, 2):
            row = [cell.strip() for cell in row]
            reason = None
            if len(row) != len(headers):
                reason = 'wrong column count'
            elif any(not value for value in row):
                reason = 'missing value'
            elif tuple(row) in seen:
                reason = 'duplicate'
            elif 'amount' in headers:
                try:
                    import math
                    if not math.isfinite(float(row[headers.index('amount')])):
                        reason = 'invalid amount'
                except ValueError:
                    reason = 'invalid amount'
            if reason:
                rejected.append({'line': number, 'reason': reason})
            else:
                seen.add(tuple(row))
                cleaned.append(row)
    with Path(target).open('w', newline='', encoding='utf-8') as stream:
        writer = csv.writer(stream)
        writer.writerow(headers)
        writer.writerows(cleaned)
    return {'output_rows': len(cleaned), 'rejected': rejected}


if __name__ == '__main__':
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    print(json.dumps(clean(sys.argv[1], sys.argv[2]), indent=2))

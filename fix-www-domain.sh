#!/bin/bash

echo "Fixing all watask.com → www.watask.com..."

# Replace in all TypeScript files
find app -name "*.ts" -o -name "*.tsx" | while read file; do
  if grep -q "https://watask\.com" "$file" 2>/dev/null; then
    sed -i 's|https://watask\.com|https://www.watask.com|g' "$file"
    echo "✓ Updated $file"
  fi
done

echo ""
echo "✅ All files updated to use https://www.watask.com"

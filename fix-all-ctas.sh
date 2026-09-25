#!/bin/bash

# WhatsApp URL
WHATSAPP_URL='https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask'

# Find all TSX files except components and register
find app -name "*.tsx" -type f ! -path "app/components/*" ! -path "app/register/*" | while read file; do
  # Skip if file doesn't contain /register or my.watask
  if ! grep -q "href=\"/register\"\|my\.watask\.com\|Connexa" "$file"; then
    continue
  fi
  
  echo "Processing $file..."
  
  # Create temp file
  temp_file=$(mktemp)
  
  # Replace Link href="/register" with <a> WhatsApp link
  sed 's|<Link[[:space:]]*\(href="/register"[^>]*\)>|<a \1 target="_blank" rel="noopener noreferrer">|g' "$file" |
  sed "s|href=\"/register\"|href=\"$WHATSAPP_URL\"|g" |
  sed 's|Start [Ff]ree [Tt]rial|Start on WhatsApp|g' |
  sed 's|Start free trial|Start on WhatsApp|g' |
  sed 's|Try Free|Chat on WhatsApp|g' |
  sed 's|Get started|Chat on WhatsApp|g' |
  sed "s|https://my\.watask\.com|$WHATSAPP_URL|g" |
  sed 's|WaTask / Connexa|WaTask|g' |
  sed 's|Part of the Connexa product family\.||g' |
  sed 's|https://myconnexa\.online||g' |
  sed 's|Book a Connexa demo →||g' > "$temp_file"
  
  # Replace original file
  mv "$temp_file" "$file"
  echo "✓ Updated $file"
done

echo ""
echo "✅ All files processed"

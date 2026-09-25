import fs from 'fs';
import { glob } from 'glob';

const whatsappUrl = 'https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask';

// Find all TSX files in app directory
const files = glob.sync('app/**/*.tsx', {
  ignore: ['app/components/**', 'app/register/**']
});

console.log(`Found ${files.length} files to process\n`);

let totalChanges = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let fileChanges = 0;
  
  // Pattern 1: href="/register" with Link component
  const registerLinkPattern = /<Link\s+href="\/register"([^>]*?)>([\s\S]*?)<\/Link>/g;
  content = content.replace(registerLinkPattern, (match, attrs, innerContent) => {
    fileChanges++;
    // Extract className and other attributes
    const classMatch = attrs.match(/className="([^"]*)"/);
    const className = classMatch ? classMatch[1] : '';
    
    // Update button text if it's a CTA
    let newText = innerContent;
    if (innerContent.includes('Start free trial') || innerContent.includes('Start Free Trial')) {
      newText = innerContent.replace(/Start [Ff]ree [Tt]rial/g, 'Start on WhatsApp');
    } else if (innerContent.includes('Try Free') || innerContent.includes('Get started')) {
      newText = innerContent.replace(/Try Free|Get started/g, 'Chat on WhatsApp');
    }
    
    return `<a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"${attrs}>${newText}</a>`;
  });
  
  // Pattern 2: href="https://my.watask.com"
  const myWataskPattern = /href="https:\/\/my\.watask\.com"/g;
  if (content.match(myWataskPattern)) {
    content = content.replace(myWataskPattern, `href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"`);
    fileChanges += (content.match(new RegExp(whatsappUrl, 'g')) || []).length;
  }
  
  // Pattern 3: Remove Connexa mentions in visible content
  // Only in text content, not in comments or metadata
  const connexaTextPattern = /(<[^>]*>)([^<]*)(Connexa)([^<]*)(<\/[^>]*>)/g;
  content = content.replace(connexaTextPattern, (match, openTag, before, connexa, after, closeTag) => {
    fileChanges++;
    // Just remove "Part of the Connexa product family" type phrases
    if (before.includes('Part of') || after.includes('product family')) {
      return '';
    }
    // Replace with WaTask in other contexts
    return openTag + before + 'WaTask' + after + closeTag;
  });
  
  if (fileChanges > 0) {
    fs.writeFileSync(file, content);
    totalChanges += fileChanges;
    console.log(`✓ ${file}: ${fileChanges} changes`);
  }
}

console.log(`\n✅ Total changes: ${totalChanges}`);

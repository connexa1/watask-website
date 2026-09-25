import fs from 'fs';

const files = [
  'app/guides/whatsapp-communities-bulk-messaging/page.tsx',
  'app/compare/multi-group-tools-vs-bsp-vs-extensions/page.tsx',
  'app/compare/whatsapp-group-sending-alternatives/page.tsx'
];

const replacements = [
  // Main background
  { from: /className="bg-white"/g, to: 'className="bg-bg-primary"' },
  
  // Gradient backgrounds
  { from: /from-green-50 to-white/g, to: 'from-bg-secondary to-bg-primary' },
  { from: /from-blue-50 to-white/g, to: 'from-bg-secondary to-bg-primary' },
  { from: /bg-gradient-to-b from-green-50/g, to: 'bg-gradient-to-b from-bg-secondary' },
  
  // Text colors
  { from: /text-gray-900/g, to: 'text-text-primary' },
  { from: /text-gray-700/g, to: 'text-text-secondary' },
  { from: /text-gray-600/g, to: 'text-text-secondary' },
  { from: /text-gray-500/g, to: 'text-text-muted' },
  
  // Card backgrounds
  { from: /bg-gray-50 border border-gray-200/g, to: 'glass-panel border-[var(--border-subtle)] bg-bg-card' },
  { from: /bg-gray-50 border-2 border-gray-200/g, to: 'glass-panel border-2 border-cyber\/30 bg-bg-card' },
  { from: /bg-white border border-gray-200/g, to: 'glass-panel border-[var(--border-subtle)] bg-bg-card' },
  { from: /bg-white border border-gray-300/g, to: 'glass-panel border-[var(--border-subtle)] bg-bg-card' },
  { from: /bg-white border-2 border-gray-200/g, to: 'glass-panel border-2 border-[var(--border-subtle)] bg-bg-card' },
  
  // Green accent cards
  { from: /bg-green-50 border-2 border-green-600/g, to: 'glass-panel border-2 border-cyber bg-bg-card' },
  { from: /bg-green-50 border border-green-200/g, to: 'glass-panel border-cyber\/30 bg-bg-card' },
  { from: /border-l-4 border-green-600 bg-green-50/g, to: 'border-l-4 border-cyber glass-panel bg-bg-card' },
  
  // Blue accent cards
  { from: /bg-blue-50 border-2 border-blue-200/g, to: 'glass-panel border-2 border-cyan\/30 bg-bg-card' },
  { from: /bg-blue-50 border border-blue-200/g, to: 'glass-panel border-cyan\/30 bg-bg-card' },
  { from: /border-l-4 border-blue-600 bg-blue-50/g, to: 'border-l-4 border-cyan glass-panel bg-bg-card' },
  
  // Purple/other accent cards
  { from: /border-l-4 border-purple-600 bg-purple-50/g, to: 'border-l-4 border-cyber glass-panel bg-bg-card' },
  { from: /border-l-4 border-orange-600 bg-orange-50/g, to: 'border-l-4 border-cyan glass-panel bg-bg-card' },
  
  // Borders
  { from: /border-gray-200/g, to: 'border-[var(--border-subtle)]' },
  { from: /border-gray-300/g, to: 'border-[var(--border-subtle)]' },
  
  // Link colors
  { from: /text-green-600 hover:text-green-700/g, to: 'text-cyber hover:text-cyber-hover' },
  
  // Button colors (CTAs)
  { from: /bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700/g, to: 'bg-cyber text-bg-primary px-8 py-3 rounded-lg font-semibold hover:bg-cyber-hover transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]' },
  
  // Table backgrounds
  { from: /bg-green-50 text-green-/g, to: 'bg-cyber/10 text-cyber border border-cyber/30 font-semibold ' },
  { from: /bg-white border border-gray-300/g, to: 'glass-panel border-[var(--border-subtle)] bg-bg-card' }
];

for (const file of files) {
  console.log(`\nProcessing ${file}...`);
  let content = fs.readFileSync(file, 'utf-8');
  
  let changeCount = 0;
  for (const { from, to } of replacements) {
    const matches = content.match(from);
    if (matches) {
      changeCount += matches.length;
      content = content.replace(from, to);
    }
  }
  
  fs.writeFileSync(file, content);
  console.log(`✓ Made ${changeCount} replacements in ${file}`);
}

console.log('\n✅ All files processed!');

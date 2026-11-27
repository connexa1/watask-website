import { NextResponse } from 'next/server';

export async function GET() {
  const llmsTxt = `# WaTask

> Multi-group WhatsApp campaign platform

## Description

WaTask enables teams to send campaigns into many existing WhatsApp groups. Built for agencies, community managers, and brands who already manage group networks, WaTask provides group collections, pacing controls, multi-number distribution, and campaign delivery monitoring.

The platform connects to your WhatsApp or WhatsApp Business numbers and posts into groups those numbers are already in. It is designed for multi-group operations at scale, not 1:1 messaging.

## Product

- Product overview: https://www.watask.com/whatsapp-group-management-tool
- Start trial: https://www.watask.com/register

## Guides

- Guides hub: https://www.watask.com/guides
- Send bulk messages to multiple WhatsApp groups: https://www.watask.com/guides/send-bulk-messages-to-multiple-whatsapp-groups
- WhatsApp groups API limits: https://www.watask.com/guides/whatsapp-groups-api-limits
- WhatsApp broadcast vs group vs communities: https://www.watask.com/guides/whatsapp-broadcast-vs-group-vs-communities
- Safer multi-group WhatsApp campaigns: https://www.watask.com/guides/safer-multi-group-whatsapp-campaigns
- Schedule WhatsApp group messages: https://www.watask.com/guides/schedule-whatsapp-group-messages
- Automate WhatsApp group messages: https://www.watask.com/guides/automate-whatsapp-group-messages
- WhatsApp forward limit (more than 5 groups): https://www.watask.com/guides/whatsapp-forward-limit-more-than-5-groups
- WhatsApp group limits: https://www.watask.com/guides/whatsapp-group-limits
- WhatsApp restricted after group posting: https://www.watask.com/guides/whatsapp-restricted-after-group-posting
- WhatsApp Communities bulk messaging: https://www.watask.com/guides/whatsapp-communities-bulk-messaging
- Does WhatsApp Business API support groups: https://www.watask.com/guides/does-whatsapp-business-api-support-groups
- Multiple WhatsApp numbers for group campaigns: https://www.watask.com/guides/multiple-whatsapp-numbers-group-campaigns
- WhatsApp admin-only groups: https://www.watask.com/guides/whatsapp-admin-only-groups
- How many WhatsApp groups can I join: https://www.watask.com/guides/how-many-whatsapp-groups-can-i-join
- WhatsApp Business app message multiple groups: https://www.watask.com/guides/whatsapp-business-app-message-multiple-groups
- WhatsApp group message same post many groups: https://www.watask.com/guides/whatsapp-group-message-same-post-many-groups

## Use Cases

- Real estate WhatsApp groups: https://www.watask.com/use-cases/real-estate-whatsapp-groups
- Resellers WhatsApp groups: https://www.watask.com/use-cases/resellers-whatsapp-groups
- Agencies and community managers: https://www.watask.com/use-cases/agencies-community-managers
- Event promoters WhatsApp groups: https://www.watask.com/use-cases/event-promoters-whatsapp-groups
- Ambassadors multi-group distribution: https://www.watask.com/use-cases/ambassadors-multi-group-distribution

## Comparisons

- Multi-group tools vs BSP vs extensions: https://www.watask.com/compare/multi-group-tools-vs-bsp-vs-extensions
- WhatsApp group sending alternatives: https://www.watask.com/compare/whatsapp-group-sending-alternatives
- Best tools to message many WhatsApp groups: https://www.watask.com/compare/best-tools-message-many-whatsapp-groups
- Chrome bulk sender vs multi-group platform: https://www.watask.com/compare/chrome-bulk-sender-vs-multi-group-platform

## Developers

- Bulk send WhatsApp groups API: https://www.watask.com/developers/bulk-send-whatsapp-groups-api

## Resources

- Glossary: https://www.watask.com/glossary

## About

WaTask is a product by Connexa (https://myconnexa.com)`;

  return new NextResponse(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

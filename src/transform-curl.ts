import { Clipboard, showHUD } from '@raycast/api';

export default async function Command() {
  const clipboardText = await Clipboard.readText();

  if (!clipboardText) {
    await showHUD('No text in clipboard');
    return;
  }

  if (!clipboardText.includes('curl')) {
    await showHUD("Clipboard doesn't contain a curl command");
    return;
  }

  let transformed = clipboardText;

  // Remove backslashes (line continuations)
  transformed = transformed.replace(/\\\s*\n/g, ' ');
  transformed = transformed.replace(/\\/g, '');

  // Replace domain with localhost:3000
  // Matches http(s)://domain(:port) patterns
  transformed = transformed.replace(
    /https?:\/\/[^/\s'"]+/g,
    'http://localhost:3000'
  );

  // Clean up extra whitespace
  transformed = transformed.replace(/\s+/g, ' ').trim();

  await Clipboard.copy(transformed);
  await showHUD('Curl transformed and copied to clipboard');
}

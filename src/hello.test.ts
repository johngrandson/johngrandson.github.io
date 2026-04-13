import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('.hello file', () => {
  it('exists and contains the expected content', () => {
    const filePath = resolve(__dirname, '../.hello');
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toBe('Claude Code was here');
  });
});

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { zipFiles } from '../../lib/util/archive.js';

describe('zipFiles', () => {
  it('creates a ZIP archive from in-memory files', async () => {
    const archive = await zipFiles([
      { filename: 'example.txt', content: 'content' },
    ]);

    assert.deepStrictEqual(archive.subarray(0, 4), Buffer.from('PK\x03\x04'));
  });
});

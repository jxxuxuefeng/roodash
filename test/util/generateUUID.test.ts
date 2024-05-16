import { generateUUID } from '../../src';

// Regular expression to validate UUID v4 format
const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('generateUUID', () => {
  it('应该生成一个有效的 UUID v4', () => {
    const uuid = generateUUID();
    expect(uuid).toMatch(uuidV4Regex);
  });

  it('应在多次调用时生成唯一的 UUID', () => {
    const uuids = new Set(Array.from({ length: 1000 }, generateUUID));
    expect(uuids.size).toBe(1000);
  });

  it('正确的长度应为 36 个字符', () => {
    const uuid = generateUUID();
    expect(uuid).toHaveLength(36);
  });

  it('应在正确位置包含连字符', () => {
    const uuid = generateUUID();
    expect(uuid[8]).toBe('-');
    expect(uuid[13]).toBe('-');
    expect(uuid[18]).toBe('-');
    expect(uuid[23]).toBe('-');
  });

  it('第 14 位应该有“4”', () => {
    const uuid = generateUUID();
    expect(uuid[14]).toBe('4');
  });

  it('第 19 位应为“8”、“9”、“a”或“b”之一', () => {
    const uuid = generateUUID();
    expect(['8', '9', 'a', 'b']).toContain(uuid[19]);
  });
});

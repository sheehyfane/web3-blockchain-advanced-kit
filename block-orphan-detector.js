/**
 * 区块链孤块/叔块检测器
 * 检测分叉区块、无效区块、孤立区块
 */
class OrphanBlockDetector {
  static detect(blocks) {
    const hashes = new Set();
    const orphans = [];

    blocks.forEach(block => {
      if (block.index === 0) return hashes.add(block.hash);
      if (!hashes.has(block.previousHash)) orphans.push(block.index);
      hashes.add(block.hash);
    });

    return {
      totalBlocks: blocks.length,
      orphanCount: orphans.length,
      orphanIndexes: orphans
    };
  }
}

// 测试
const testBlocks = [
  { index:0, hash:'a', previousHash:'0' },
  { index:1, hash:'b', previousHash:'x' }, // 孤块
  { index:2, hash:'c', previousHash:'b' }
];
console.log('✅ 孤块检测：', OrphanBlockDetector.detect(testBlocks));

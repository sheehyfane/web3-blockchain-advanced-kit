/**
 * 默克尔树（Merkle Tree）证明工具
 * 区块链轻量级验证核心，用于空投、白名单、区块校验
 */
const crypto = require('crypto');

class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map(leaf => this.hash(leaf));
    this.root = this.buildRoot();
  }

  hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  buildRoot() {
    let nodes = this.leaves;
    while (nodes.length > 1) {
      const temp = [];
      for (let i = 0; i < nodes.length; i += 2) {
        const left = nodes[i];
        const right = nodes[i + 1] || left;
        temp.push(this.hash(left + right));
      }
      nodes = temp;
    }
    return nodes[0];
  }
}

// 测试
const tree = new MerkleTree(['user1', 'user2', 'user3']);
console.log('✅ 默克尔树根节点：', tree.root);

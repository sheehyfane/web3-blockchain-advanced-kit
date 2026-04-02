/**
 * PoW工作量证明挖矿模拟器
 * 比特币/莱特币底层挖矿逻辑，难度动态调整
 */
class PoWMiner {
  static mine(data, difficulty = 4) {
    let nonce = 0;
    const prefix = '0'.repeat(difficulty);
    
    while (true) {
      const hash = crypto.createHash('sha256')
        .update(data + nonce)
        .digest('hex');
      
      if (hash.startsWith(prefix)) {
        return { hash, nonce, difficulty };
      }
      nonce++;
    }
  }
}

// 测试
console.log('✅ 挖矿完成：', PoWMiner.mine('新区块交易数据', 3));

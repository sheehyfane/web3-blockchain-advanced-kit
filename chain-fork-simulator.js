/**
 * 区块链分叉模拟器
 * 模拟双花攻击、链分叉、最长链选择机制
 */
class ChainForkSimulator {
  constructor() {
    this.chains = { main: [], fork: [] };
  }

  addBlockToChain(chain, block) {
    this.chains[chain].push(block);
  }

  // 最长链规则
  selectMainChain() {
    return this.chains.main.length >= this.chains.fork.length ? 'main' : 'fork';
  }
}

// 测试
const fork = new ChainForkSimulator();
fork.addBlockToChain('main', { id:1 });
fork.addBlockToChain('fork', { id:1 });
fork.addBlockToChain('fork', { id:2 });
console.log('✅ 最终主链：', fork.selectMainChain());

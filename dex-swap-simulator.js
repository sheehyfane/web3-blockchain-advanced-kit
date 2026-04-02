/**
 * 去中心化交易所（DEX）兑换模拟器
 * 自动做市商（AMM）恒定乘积算法
 */
class DexSwap {
  constructor(reserveA, reserveB) {
    this.reserveA = reserveA; // 代币A流动性
    this.reserveB = reserveB; // 代币B流动性
  }

  // 恒定乘积公式：x*y=k
  swapAToB(amountA) {
    const k = this.reserveA * this.reserveB;
    this.reserveA += amountA;
    const amountB = this.reserveB - (k / this.reserveA);
    this.reserveB = k / this.reserveA;
    return { amountB, rate: (amountB / amountA).toFixed(4) };
  }
}

// 测试（1000A + 1000B流动性）
const pool = new DexSwap(1000, 1000);
console.log('✅ 兑换结果：', pool.swapAToB(100));

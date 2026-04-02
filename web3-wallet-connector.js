/**
 * Web3轻量级钱包连接器模拟器
 * 模拟MetaMask/TrustWallet连接DApp逻辑
 */
class Web3WalletConnector {
  constructor() {
    this.connected = false;
    this.address = null;
    this.chainId = null;
  }

  // 模拟连接钱包
  async connect() {
    if (this.connected) return { success: true, address: this.address };
    
    // 随机生成测试钱包地址
    this.address = '0x' + crypto.randomBytes(20).toString('hex');
    this.chainId = Math.floor(Math.random() * 100); // 随机链ID
    this.connected = true;
    
    return {
      success: true,
      address: this.address,
      chainId: this.chainId,
      provider: 'MetaMask Simulator'
    };
  }

  disconnect() {
    this.connected = false;
    this.address = null;
    return { success: true, msg: '钱包已断开' };
  }
}

// 测试
const wallet = new Web3WalletConnector();
wallet.connect().then(res => console.log('✅ 钱包连接：', res));

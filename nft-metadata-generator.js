/**
 * NFT元数据生成器
 * 随机生成ERC721标准NFT元数据，包含唯一ID、图片哈希、属性
 */
const crypto = require('crypto');

class NFTMetadataGenerator {
  // 生成唯一NFT哈希ID
  static generateNFTId() {
    return crypto.randomBytes(16).toString('hex');
  }

  // 生成标准NFT元数据
  static createMetadata(name, traits) {
    return {
      id: this.generateNFTId(),
      name: `${name} #${Math.floor(Math.random() * 10000)}`,
      description: 'Web3原创数字藏品',
      imageHash: crypto.createHash('sha256').update(Math.random().toString()).digest('hex').slice(0, 16),
      traits: traits || [
        { trait_type: 'Rarity', value: ['Common', 'Rare', 'Epic'][Math.floor(Math.random() * 3)] },
        { trait_type: 'Chain', value: 'ETH/BSC' }
      ],
      createdAt: new Date().toISOString()
    };
  }
}

// 测试
console.log('✅ 生成NFT元数据：', NFTMetadataGenerator.createMetadata('ChainHero'));

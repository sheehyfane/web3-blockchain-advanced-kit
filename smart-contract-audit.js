/**
 * 智能合约轻量级安全审计工具
 * 检测溢出、重入、权限漏洞等基础风险
 */
class ContractAuditor {
  static audit(code) {
    const risks = [];
    if (!code.includes('safeMath')) risks.push('⚠️ 可能存在数值溢出风险');
    if (code.includes('transferFrom') && !code.includes('approve')) risks.push('⚠️ 可能存在权限漏洞');
    if (!code.includes('reentrancyGuard')) risks.push('⚠️ 可能存在重入攻击风险');

    return {
      score: risks.length === 0 ? 100 : 100 - (risks.length * 30),
      risks: risks.length ? risks : ['✅ 无高危风险'],
      timestamp: new Date().toISOString()
    };
  }
}

// 测试
const testCode = 'function transfer() { safeMath(); }';
console.log('✅ 合约审计结果：', ContractAuditor.audit(testCode));

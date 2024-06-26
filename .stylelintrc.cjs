// @see: https://stylelint.io

module.exports = {
  /* 继承某些已有的规则 */
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件
  ],
  overrides: [
    {
      files: ['**/*.{css,less}'],
      customSyntax: 'postcss-less'
    }
  ],
  /**
   * null  => 关闭该规则
   */
  rules: {
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'unit-case': null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
    'color-hex-length': 'long', // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ], // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
    'font-family-no-missing-generic-family-keyword': null, // 禁止在字体族名称列表中缺少通用字体族关键字
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'no-empty-source': null, // 禁止空源码
    'selector-class-pattern': null, // 强制选择器类名的格式
    'value-no-vendor-prefix': null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep']
      }
    ],
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'custom-property-empty-line-before': 'never',
    'function-calc-no-unspaced-operator': true,
    'import-notation': 'string',
    'declaration-block-no-redundant-longhand-properties': null
  }
}

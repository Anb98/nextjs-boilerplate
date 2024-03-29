module.exports = {
  jsxSingleQuote: true,
  singleQuote: true,
  trailingComma: 'none',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  bracketSameLine: false,
  bracketSpacing: true,
  tabWidth: 2,
  endOfLine: 'auto',
  printWidth: 120,
  semi: false,
  importOrder: [
    '(^react$|^next/(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '^@config/(.*)$',
    '^@utils/(.*)$',
    '^@ui/(.*)$',
    '^@services/(.*)$',
    '^@assets/(.*)$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
}

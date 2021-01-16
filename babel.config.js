module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
    
  ],
  // vant引入：
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
}

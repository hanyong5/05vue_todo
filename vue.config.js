module.exports = {
    pwa: {
      name: 'MyTodo',
      themeColor: '#0000ff',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }
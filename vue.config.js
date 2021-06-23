module.exports = {
    pwa: {
      name: 'MyTodo',
      themeColor: '#000000',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }
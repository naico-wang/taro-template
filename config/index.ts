import path from 'path'

const config = {
  projectName: 'test',
  date: '2024-6-11',
  designWidth: 375,
  deviceRatio: {
    375: 2,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    ['@tarojs/plugin-framework-react', { reactMode: 'concurrent' }] // 在 concurrent 模式下，会使用 New Client API 来渲染组件
  ],
  defineConstants: {},
  copy: {
    patterns: [] as any,
    options: {}
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  alias: {
    '@/actions': path.resolve(__dirname, '..', 'src/actions'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@/sdk': path.resolve(__dirname, '..', 'src/sdk'),
    '@/styles': path.resolve(__dirname, '..', 'src/styles'),
    '@/types': path.resolve(__dirname, '..', 'src/types'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks')
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    },
    optimizeMainPackage: {
      enable: false
    },
    webpackChain(chain) {
      chain.merge({
        performance: {
          maxAssetSize: 314572800 // 300KiB
        }
      })
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  config.copy.patterns.push({
    from: 'src/sitemap.json',
    to: 'dist/'
  })

  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

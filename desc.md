##留言板demo知识点
- **react router dom的应用**
- **mobx的@符号配置**
- **mobx的使用**

####react router dom的应用
1.Router(BrowserRouter)里加route表示对应url的对应部分，可以有exacte,stricte等选项。
2.NavLink可以有activeClassName参数，表示link选中时的className
3.this.props.history.push()可以实现路由跳转

####mobx的@符号配置
由于使用的是babel7，则进行如下配置：
```
//.babelrc

{
    "presets": ["@babel/preset-env"],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
}
```
```
//package.json

"devDependencies": {
    "@babel/core": "^7.1.0",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-proposal-decorators": "^7.1.0",
    "@babel/preset-env": "^7.1.0"
}
```

####mobx的使用
用provider把store里的值传给组件，组件在接收时用inject

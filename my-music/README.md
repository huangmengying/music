# my-music

> webapp about music with vue 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 简介

### SourceTree 免登录跳过初始设置（不重要）
**http://blog.csdn.net/baidu_33570760/article/details/72764339**
   1. 安装完sourcetree后在本地文佳佳目录下寻找*account.json*,没有则新建
      ```
      %LocalAppData%\Atlassian\SourceTree\
      ```
   2. 新建account.json 文件
      ```
      %LocalAppData%\\Atlassian\SourceTree\account.json
      ```
   3. 添加以下内容**重启sourcetree即可**
      ```
      [
        {
          "$id": "1",
          "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",
          "Authenticate": true,
          "HostInstance": {
            "$id": "2",
            "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",
            "Host": {
              "$id": "3",
              "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",
              "Id": "atlassian account"
            },
            "BaseUrl": "https://id.atlassian.com/"
          },
          "Credentials": {
            "$id": "4",
            "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",
            "Username": "",
            "Email": null
          },
          "IsDefault": false
        }
      ]
      ```
      
###  公钥（win）
    ```
    cd .ssh
    ssh-keygen -t rsa -C "286161308@qq.com"
    ```
      
 ### 进入正题
 
  * 检查是都安装 node、 npm | cnpm  以及webpack ```npm install wbpack -g```
  * 脚手架大搭建
    ```
       1. 全局安装 vue-cli
       $ npm install --global vue-cli
       2. 创建一个基于 webpack 模板的新项目
       $ vue init webpack my-project
       3. 安装依赖，走你
       $ cd my-project
       $ npm install
       $ npm run dev
    ```
    
###             

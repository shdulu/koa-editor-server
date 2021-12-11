# biz-editor-server

B 端和编辑器 server

# docker 命令

1. docker pull mongo

## 启动容器

2. docuer run -p 81:80 -v=hostPath:containerPath -d --name <container-name> <image-name>

-   -p 端口映射
-   -v 数据卷，文件映射
-   -d 后台运行
-   --name 定义容器名臣

3. 查看所有容器 docker ps, 加 -a 显示隐藏的容器
4. 停止容器 docker stop <container-id>
5. 删除容器 docker rm <container-id>, 加 -f 是强制删除
6. 查看容器信息，如 IP 地址 docker inspect <container-id>
7. 查看容器日志 docker logs <container-id>
8. 进入容器控制台 docker exec -it <container-id> /bin/sh

```js
curl  http://localhost:80
// 找到对应的虚拟 Linux 对应的 ip 地址
// 192.168.99.100
docker-machine ip default

```

9. docker-machine ip default

## Dockerfile 配置镜像

## docker-compose

-   构建容器 docker-compose build <server-name>
-   启动所有服务 docker-compose up -d,后台启动
-   停止所有服务 docker-compose down
-   查看所有服务 docker-compose ps

### volumes:

绝对路径的 - ./ghost/config.js:/var/lib/ghost/config.js
卷标的 - mysql:/var/lib/mysql
第一种情况路径直接挂载到本地，比较直观，但需要管理本地的路径，而第二种使用卷标的方式，比较简洁，但你不知道数据存在本地什么位置，下面说明如何查看 docker 的卷标

-   查看所有卷标 docker volume ls
-   查看批量的卷标 $ docker volume ls | grep mysql
-   查看具体的 volume 对应的真实地址 docker volume inspect vagrant_mysql

### 测试机创建 work 账户

adduser work
passwd work

<!-- 添加 cdss 用户 useradd cdss
删除 cdss 用户 userdel cdss
修改 cdss 密码 passwd cdss
给 cdss 赋文件夹权限 chown -R cdss /home/dev/cdss -->

 <!-- 添加work 账户的sudo权限 -->

  <!-- 找到文件位置 /etc/sudoers -->

`whereis sudoers`

  <!-- 修改权限 u 表示所有者， w 表示写权限 + 表示添加 -->

`chmod u+w /etc/sudoers`

  <!-- 编辑文件 -->

`vim /etc/sudoers`
`chmod u-w /etc/sudoers`

登录 work 账户
输入 su 输入 root 账户的密码即可拥有超级权限
mkdir ~/.ssh
vim ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

<!-- docker 权限问题 -->
<!-- sudo chmod a+rw /var/run/docker.sock -->

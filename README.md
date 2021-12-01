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

## Dockerfile 配置镜像

# Dockerfile 定制镜像
# 定制的镜像都是基于FROM的镜像
FROM node:12
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
# 安装
RUN npm set registry https://registry.npm.taobao.org
RUN npm i

# 启动
CMD npm run dev && npx pm2 log
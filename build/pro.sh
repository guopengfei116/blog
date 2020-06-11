echo "打包中..."
npm run docs:build

echo "打包完成，正在部署..."
#rm -rf /usr/blog
#cp -rf ./dist /usr/blog

echo "重启静态服务..."
nginx -s reload

echo "博客系统部署完毕，请访问ggpf.top查阅！"

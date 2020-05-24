echo "打包中..."
npm run docs:build

echo "打包完成，正在部署..."
rm -rf /tmp/blog
cp -rf docs/.vuepress/dist /tmp/blog

echo "重启静态服务..."
nginx -s reload

echo "博客系统部署完毕，请访问www.ggpf.top/blog查阅！"

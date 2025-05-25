# 显示错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./.vuepress/dist

# 检查是否已经是一个 Git 仓库
if [ ! -d ".git" ]; then
  git init
  git remote add origin git@github.com:PPPerryPan/blog.git
fi

# 更新内容
git add -A
git commit -m 'deploy' || echo "No changes to commit"

# 推送到 GitHub
git push -f origin master:gh-pages

cd -
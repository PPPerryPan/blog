# 显示错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./public

# 发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# Git
git init
git add -A
git commit -m 'deploy'

# 发布到GitHub
git push -f git@github.com:PPPerryPan/perry_blog.git master:gh-pages

cd -
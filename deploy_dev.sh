# 显示错误
set -e

# Git
# git init
git add .gitignore
git add -A
git commit -m 'deploy_dev'

# 发布到GitHub
git push -f git@github.com:PPPerryPan/blog.git master:master

cd -
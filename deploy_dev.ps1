$ErrorActionPreference = "Stop"

git add .gitignore
git add -A
git commit -m 'deploy_dev'
git push -f git@github.com:PPPerryPan/blog.git master:master


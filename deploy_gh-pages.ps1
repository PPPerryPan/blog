$ErrorActionPreference = "Stop"

npm run build

Push-Location ".\.vuepress\dist"

if (-not (Test-Path ".git")) {
  git init
  git remote add origin git@github.com:PPPerryPan/blog.git
}

git add -A
git commit -m 'deploy'
git push -f origin master:gh-pages

Pop-Location


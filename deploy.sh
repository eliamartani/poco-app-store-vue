# https://cli.vuejs.org/guide/deployment.html#github-pages

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:eliamartani/poco-app-store-vue.git master:gh-pages

cd -

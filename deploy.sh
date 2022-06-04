#!/usr/bin/env sh

# # abort on errors
set -e

# # build
# npm run build

# # navigate into the build output directory
# cd dist

# git init
# git checkout -b main
# git add -A 
# git commit -m 'deploy'

# git push -f git@github.com:pavelsivanovs/my-road-to-the-university.git main:gh-pages

# cd -

git add -f dist && git commit -m "deploy"
git subtree push --prefix dist origin gh-pages

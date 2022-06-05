:: Batch files prepares files in the \dist directory and deploys them to GitHub.
@ECHO OFF

ECHO Creating a 404.html file
COPY dist\index.html dist\404.html

ECHO Adding files in the dist directory and making a commit
CALL git add -f dist && git commit -m "deploy"

ECHO Pushing the build to the origin/gh-pages subtree
CALL git subtree push --prefix dist origin gh-pages

ECHO ====================
ECHO Deployment commenced
ECHO ====================
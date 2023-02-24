# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.oi.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# gi push -f git@github.com:ljlsison@gmail.com/ToDo-App.git main:gh-pages

cd -
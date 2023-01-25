!/bin/bash

echo “Running command from” $PWD
cd $PWD
git add .
echo “Enter commit message: “
git commit -am “$commitMessage”
git push
echo “Strata!”

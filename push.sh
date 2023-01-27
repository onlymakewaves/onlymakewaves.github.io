#! /bin/bash

function addcommitpush () {

current=$(git branch | grep "*" | cut -b 3-)

echo "Enter commit message: "	
read msg
git add -A && git commit -a -m "$msg"

echo "Press enter to push to this branch: "
read -i "$current" -e branch

echo "Are you sure you want to push? (y/n)"
read -i "y" -e yn

if [ "$yn" = y ]; then
  git push origin "$branch"
  echo "Success!"
else
  echo "Failed to push to GitHub!"
fi

}

addcommitpush $1

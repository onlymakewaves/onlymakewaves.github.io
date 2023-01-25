#! /bin/bash

function addcommitpush () {

current=$(git branch | grep "*" | cut -b 3-)

message=\'"$@"\'
git add -A && git commit -a -m "$message"

echo "Where to push?"
read -i "$current" -e branch

echo "You sure you wanna push? (y/n)"
read -i "y" -e yn

if [ "$yn" = y ]; then
  git push origin "$branch"
else
  echo "Strata!"
fi

}

addcommitpush $1

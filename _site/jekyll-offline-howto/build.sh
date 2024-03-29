#!/bin/bash

# rm -r ~/web/swisspedhealth_offline
mkdir ./swisspedhealth 
# cp -r --exclude=".git" ~/web/swisspedhealth/* ./swisspedhealth/
rsync -av --exclude='.git' ~/web/swisspedhealth/ ./swisspedhealth


# Run the build script
./jekyll_offline.rb demo_swisspedhealth.yml

# rm ./swisspedhealth_offline/site/*.sh
# rm ./swisspedhealth_offline/site/*.md
# rm ./swisspedhealth_offline/site/editorial_jekyll_theme.gemspec
# rm -r ./swisspedhealth_offline/site/assets/images/originals

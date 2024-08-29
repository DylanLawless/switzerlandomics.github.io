#!/bin/bash

<<<<<<< HEAD
ps aux | grep jekyll 
kill -9 $(ps aux | grep jekyll | head -1 | awk '{print $2}')
kill -9 $(ps aux | grep jekyll | awk '{print $2}')
=======
# Kill the jekyll process excluding the grep process itself
kill -9 $(ps aux | grep '[j]ekyll' | awk '{print $2}')
# kill -9 $(ps aux | grep jekyll | head -1 | awk '{print $2}')
>>>>>>> 6d014f770b1d3ea1ca76cd9a8dd35114009df531


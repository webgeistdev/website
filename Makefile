.phony: upload

upload:
	jekyll build
	rsync -v -zar -p --exclude=.git  _site/ deploy@webgeist.dev:/var/www/webgeist
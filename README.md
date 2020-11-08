# File Metadata Microservice

<a href="https://brendobrien-filesize.herokuapp.com">https://brendobrien-filesize.herokuapp.com</a>

## Upgrading to heroku 18

https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack#upgrading-an-app

```
heroku stack:set heroku-18 -a brendobrien-filesize
heroku git:remote -a brendobrien-filesize
git commit --allow-empty -m "Upgrading to heroku-18"
git push heroku master
```

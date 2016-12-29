# StockMarket Game

Uses MongoDB for the database.

## Installing on AWS

To install mongodb on AWS we are going to use yum. Before we can run the yum command we need to set up the repo.

Add a file called `/etc/yum.repos.d/mongodb-org-3.0.repo`

In that file put the following

```
[mongodb-org-3.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.0/x86_64/
gpgcheck=0
enabled=1
```

After you have done this you can install mongo using yum.

`sudo yum install -y mongodb-org`

To start mongo as a service run

`sudo service mongod start`

To make mongo start with the boot process, type

`sudo chkconfig mongod on`

For more info check out https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-amazon/

## Installing on Mac

Install homebrew - see the instructions as http://brew.sh/

Then run

`brew install mongodb`

To start mongodb have a look at the output of

`brew info mongodb`

Here's an example of the output. I have only included the important section

```
To reload mongodb after an upgrade:
  launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run:
  mongod --config /usr/local/etc/mongod.conf
```

From the above run `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist`
 to start mongodb.

 Once mongodb is running you can start the Stock Market Game by running

 `node server.js`

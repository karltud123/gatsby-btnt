# gatsby-btnt

## Demo

https://bt.sg/btnt

## How to use
Clone the repository in your local.

`git clone https://github.com/karltud123/gatsby-btn`

Then go inside the folder,

`cd gatsby-btnt`

Then run,

`npm install`

The to run it in your local, run

`gatsby develop`

You will need to install gatsby cli if it is not install yet.

To make a productino build you should run,

`gatsby develop --prefix-paths`

Then copy the inside of public folder to your server, path depends on what is inside `gatsby-node.js`, the `pathPrefix' variable.

That's all.

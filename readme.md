# This will help you understand images on the web in terms of file format, using CSS, and how to optimize your workflow with webpack
## Your Assignment
Part 1:
Setup webpack to optimize your images automaticly.

Part 2:
Make an F and Z layout using CSS grid and create a sidebar with image content.  Don't add text to it as we will do this in the next lesson where we work on positioning.  


## Topic 1 - Image File Formats
Refer to this page for a comprehensive list of image formats and their purpose [Click Here](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
##  Topic 2 - Cropping with a free tool and Saving
Pixlr is free and web based [Click Here](https://pixlr.com/)
## Topic 3 - Manipulating Images with CSS
Refer to this page for a comprehensive list of ways to manipulate images with CSS alone [Click Here](https://www.w3schools.com/css/css3_images.asp)
## Topic 4 - Automating your image workflow with Webpack
You can see a basic implementation of the webpack to compress images here:[click here](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/)
The big trick to optimizing jpg can be found on line 44 of my webpack.config file.  The line says "['mozjpeg', { quality: 50 }]," and this is telling the mozjpeg plugin to reduce the quality of jpeg by 50%.  Depending on the quality of the image this could be ok or it could be a problem because this is a lossy compression format and will take low quality starting images and make them unusable.
## Lighthouse - Used for Finding Issues in Chrome
https://developers.google.com/web/tools/lighthouse#devtools
##  CSS Grid Guide
https://css-tricks.com/snippets/css/complete-guide-grid/
### Grid Layout Tutorial https://www.youtube.com/watch?v=jV8B24rSN5o

# Install Instructions from previous lesson
Prerequisites:
Install Node:
https://nodejs.org/en/download/


Install Webpack Globally by running this command on your terminal / command prompt

npm install --global webpack

Webpack Documentation: https://webpack.js.org/

To Use:

1.  Clone the Repo
2.  Run npm install
3.  Run webpack serve to live reload your project, so you can see changes without refreshing the browser
4.  Once it's running you can go to the dev server and see your changes: http://localhost:9000/
5.  **run "webpack build" to bundle your code and put it in the docs folder so github pages can serve it**

Press Control C to stop the server or the builder

Turn on github pages and put a link to your site in the readme when you turn in the github repo link.

Working site here:

http://www.webizly.com/BasicWebPack/

#!/bin/bash

# Go to Angular2 folder
cd uberbooking.front
# Build Angular2 app into /dist directory
ng build
# Go back
cd -
# Copy angular app to public folder in .Net Core
rm -rf uberbooking.api/wwwroot/*
cp -rf uberbooking.front/dist/* uberbooking.api/wwwroot/
rm -rf uberbooking.front/dist/*
cd uberbooking.api
dotnet run
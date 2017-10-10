#!/bin/bash

# Go to Angular2 folder
cd uberbooking.spa
# Build Angular2 app into /dist directory
ng build
# Go back
cd -
# Copy angular app to public folder in .Net Core
rm -rf uberbooking.api\wwwroot\*
cp -rf uberbooking.spa\dist\* uberbooking.api\wwwroot\
rm -rf uberbooking.spa\dist\*
cd uberbooking.api
dotnet run

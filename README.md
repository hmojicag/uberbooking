# uberbooking

This is an attempt to make an OpenSource General Booking platform.
The front-end is made in Angular2.
The back-end is a Web API in .NetCore 2.

# Developers
I strongly recommend to open the Back-end proyect using the uberbooking.sln file using Rider or Visual Studio.
And the front-end folder using WebStorm or any other editor on uberbooking.front.

# Running in local
Running `./uberbooking.sh` will compile the angular project and copy the "compiled" files on uberbooking.front/dist to uberbooking.api/wwwroot.
Then it will execute `dotnet run`.

Just go to `localhost:5000` and you'll see the Web App running.

# Packing for production

¯\_(ツ)_/¯

# Other

## Running just Angular2 App
Go to uberbooking.front/ folder and run:
```
npm start
```

## Running just Dotnet Core WebApi.
Go to uberbooking.api/ folder and run:
```
dotnet run
```
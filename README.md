# Lab 7 - APIs

# Project Name

**Author**: James D
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

We're building this program to make it easy for a user to type in the name of a city, and get back a range of geographical data in return, the local weather, to location data, and maps. To do this, I'll need to make requests to multiple APIs to retreive real-time data. Then, I'll have to send that data back to the client who's requesting it.

## Getting Started

What are the steps that a user must take in order to build this app on their own machine and get it running? 1. Enter a city name in the search. 2. Match that city name against the name in the API 3. If there is a match, display the requested data.
i. map, lat/long, weather, etc.. 4. Package the returned data. 5. Send back the requested data to the client.

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

07-30-2019 90m - Server is now deployed and functional. Next step is to link it to real APIs.

## Credits and Collaborations
<!-- I worked on this server with Ryan Sanders. We built out the bare foundations of the server. -->

-->

## Step 1 - Repository Setup

Estimate of time needed to complete: 10 minutes

Start time: 19:20

Finish time: 19:30

Actual time needed to complete: 19:30

.env - with your PORT. Make sure this file is in your .gitignore.
README.md - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look AT MINIMUM
.gitignore - with standard NodeJS configurations
.eslintrc.json - with Code 301 course standards for the linter copied from previous lab
package.json - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: express and dotenv.
Note that the package-lock.json file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

## Step 2 - Locations

Estimate of time needed to complete: 30 mins

Start time: 7:40

Finish time: 9:40

Actual time needed to complete: 2 hours

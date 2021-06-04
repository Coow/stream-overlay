# STREAM OVERLAY - Make Stream Production Easier

This tool/application is ment to help with Stream Production when **Spectating** League of Legends. This is not for when you are playing League of Legends.

## Overview


## About
I started working on this as a personal project after I couldn't find a single Overlay for when I am Casting/Producing LoL. There was plenty of applications for Champ Select, but nothing for when actually spectating. So, after a while this was what I came up with. It also has some extra features for showing Casters and the Matchup for a "waiting" room/scene. Aswell as a End of Stream scene for showing Socials and Sponsors.

The application is currently not an Electron app, but might be in the future.
It's built using NodeJS & React!

Feel free to fork, create a pull request, or create an issue for any thing related!

Also, if you use this in a Livestream, feel free to send it my way aswell. Would love to see it in action!

Lastly, if you need a Caster, feel free to contact me on [Twitter](https://twitter.com/anmagicalcow) or Discord: Cow#8079😊

### TODO / IDEAS

- ~~Best Of Series~~
- Add option to save a current state/config for easy loading
- Save single team to load
- Make scale feature, to fit other InGame Hud Sizes, and screen resoultions
- ~~Swap Teams around~~
- Save casters
- Score in Mathup tab
- Add sponsor for bottom left in LeagueOverlay
- End of stream display


# Installation

### Install Node.JS

Download from the [official website](https://nodejs.org/) and follow the install instructions

### Download Stream Overlay

Download or clone the project and unzip

### RUN `install.bat`

After the commands has completed, all the dependencies should be installed

### RUN `start.bat`

This will launch the React App and the API, and open a browser window with the address `http://localhost:30060`

# Usage

Start the app using the `start.bat` file (If not already running!) 

If the overlay doesn't load, right click the Browser Source, click Properties and click `Refresh cache of current page`

### OBS


In OBS add a new Browser Source, and add these options:
- Width: `1920`
- Height: `1080`

One of these URL's:

URL | Description
--- | --- 
`http://localhost:30060/LeagueOverlay` | General Overlay for use while Spectating games
`http://localhost:30060/Matchup` | Team VS Team 
`http://localhost:30060/Casters` | Displays the caster(s)  
~~`http://localhost:30060/EndOfStream`~~ | (NOT YET IMPLEMENT) End of stream screen  

![](https://i.imgur.com/88KJsjv.png)

Also add an image underneath so it looks nice 😄

### League of Legends INGAME
**TL:DR; Set the Ingame HUD Scale to 67%.**

This only applies when using the `http://localhost:30060/LeagueOverlay`

This will hopefully soon be fixed, implemented, and be soon™ be obsolete!

Currently the InGame overlay is static values, and isnt dynamic. Sadly meaning that YOU have to change to my settings.

Set the Ingame HUD Scale to 67%. At the time of writing, I'm unsure if there is other things that needs to be changed. This als omeans the Game HUD Scale setting in the App is useless 😅

---
## **App UI**

On top there is a Navigation bar, if you want to preview the changes in the browser.

The App UI is split into 3 parts. The top part, I call the "Global Settings". This contains all the settings that isnt specific to a Team. (Didnt have a better name..)

Then there is the Blue Team Settings & Red Team Settings. These are effectivly the same. So will be referenced as "Team Settings"

To apply the settings you have set (Team Name, Score, etc) click the HUGE Save button in the middle. This will save the settings and OBS will update

### **Pages**

#### League Overlay
`http://localhost:30060/LeagueOverlay`
This is the general overlay that is used while spectating InGame.
![](https://i.imgur.com/vCMwT9G.png)

#### Matchup
`http://localhost:30060/Matchup`
Views the Matchup and the [Series Wins](#series-wins) (if applicable)
![](https://i.imgur.com/zukPZ3I.png)


#### Casters
(WIP)
#### End Of Stream
(WIP)

### **Global Settings**

#### Show Score or Series
Display an extra element under the [Team Abbriviation](#team-abbriviation)

Option | Description
--- | ---
None | Hides the extra element
Score | Display the [Team Setting Score](#team-score)
Series Progress | Display the [Series Wins](#series-wins)

#### Series Settings
This is only applicable if [Show Score or Series](#show-score-or-series) is set to `Series Progress`.

Choose what type of "Best Of" series is being played. 

#### Tournament Name
Sets the Tournament Name or Match Name

![](https://i.imgur.com/LyyR03b.png)

#### Overlay Settings
(WIP) Please read the [League of Legends INGAME](#league-of-legends-ingame) section.

Scale the Stream Overlay elements to match the InGame elements

#### Huge Save Button
This will save the settings to a file `src\Pages\GameState.json`, React will.. React.. and OBS will update to show the new state.


#### Swap Teams
A simple button for swapping the teams around.

---
### **Team Settings**



#### Team Name
The name of the team being played. 

Displayed on the `http://localhost:30060/Matchup` page.

E.G: `G2 Esports`

#### Team Abbriviation
The abbriviation or "Short Name" of the team. 

Displayed on the `http://localhost:30060/LeagueOverlay` page.

Assumed to be MAX 4-5 Characters

![](https://i.imgur.com/JYrC7X0.png)

E.G: `G2`
#### Team Icon
Picture or logo of the team. 

Upload a picture from your computer (supports drag'n'drop). Or choose an uploaded file from the list.

Images are stored in the `public\TeamImages` folder.

Displayed on the `http://localhost:30060/LeagueOverlay` page.

#### Team Score
Score of the team. Useful for leagues

**For simplicity, this can be whatever you want!**

Displayed on the `http://localhost:30060/LeagueOverlay` page.

![](https://i.imgur.com/BBuxZnf.png)

E.G: `6-9`

#### Series Wins
Amount of wins in a series. 

**There is no "checks"** so please don't "overload" it or go negative! It WILL look odd.

Displayed on the `http://localhost:30060/LeagueOverlay` AND `http://localhost:30060/matchup` page.

![](https://i.imgur.com/iLLgio6.png)

#### Save or Load Team
If you have made a team and want to save it for later. You can save it as a file. This will save it as a `Team Name.json` in the `public\Teams` folder. 

To load a team, select a team from the Dropdown. NO UNDO

It's worth noting that the Image is not stored in the JSON file, and only stores a reference to the image.

---
# Technical Stuff

`npm start` runs using [Concurrently](https://www.npmjs.com/package/concurrently). Which means the is 2 processes running at the same time. The React process, and the Express process used for the "Back End". I know this isn't optimal. But, there is always the Pull Request feature on GitHub 😉 

### API
If you for some reason want to interface with the "API". Look in `node.server.js` for a better understanding.

The API server is a simple Express app that runs on port 30061
This also acts as a documentation for myself:

URL | Function | Parameters
--- | --- | ---
POST `/uploadImage` | Uploads and saves an image for use in Team Icon | `body: image.png`
POST `/saveConfig` | Saves the current settings to a `GameState.json` file | `body: Redux State`
POST `/saveTeam` | Saves the team to a `Team Name.json` file | `body: Team State`
GET `/teams` | Gets all the teams in the `public/Teams` Folder | 
GET `/images` | Gets all the images in the `public/TeamImages` Folder | 
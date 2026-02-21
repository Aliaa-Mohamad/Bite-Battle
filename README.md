# Bite Battel

A browser-based game where the player competes against a bot to collect food, avoid obstacles, and survive as long as possible.

---

## Game Idea

The player and the bot move inside a bounded area. The goal is to collect food to increase score, while avoiding harmful objects. The game ends when one of the players loses all their lives or when all food is collected.

---

## Features

### 1. Player Movement

* The player moves using arrow keys.
* Movement is restricted داخل حدود الشاشة (boundary).
* The player cannot move unless the game is active.

---

### 2. Bot Movement

* The bot automatically moves toward the nearest food element.
* The movement speed depends on the selected difficulty level.
* The bot continuously updates its target based on food positions.

---

### 3. Food System

* Food elements are randomly distributed across the screen.
* When the player or bot collides with food:

  * Score increases by 1
  * Character size increases
* When all food is collected, the game ends.

---

### 4. Chili (Obstacle) System

* Chili elements act as harmful objects.
* On collision:

  * Player size decreases
  * Score decreases
  * One life is lost
* If lives reach zero → game over

---

### 5. Lives System

* Each player starts with 3 lives.
* Lives are displayed visually.
* Losing all lives triggers the end of the game.

---

### 6. Heart System

* Hearts appear randomly on the screen.
* When collected:

  * Adds one life (max 3 lives)
  * Increases score

---

### 7. Levels (Difficulty System)

The game includes multiple difficulty levels:

* Mild
* Spicy
* Fiery
* Extreme

Each level controls how fast the bot moves.

---

### 8. Settings System

* Player can enter their name.
* Player can select difficulty level.
* Settings can be opened during the game.
* Game pauses while settings are open.

---

### 9. Game States

The game has multiple states:

* Start: initial state before gameplay begins
* Playing: player and bot are moving
* End: results and winner are displayed

---

### 10. Leaderboard / Result Screen

At the end of the game:

* Final score is displayed for both player and bot
* Remaining lives are displayed
* Winner is determined based on:

  1. Higher score
  2. If equal → more remaining lives
  3. If equal → tie

---

### 11. Local Storage

* Player name is saved in browser storage
* Selected level is also saved
* Data persists between sessions

---

## Technologies Used

* HTML
* CSS (Bootstrap + custom styles)
* JavaScript (Object-Oriented Programming)

---

## How to Run

1. Clone the repository:
   git clone # Spicy Survival

A browser-based game where the player competes against a bot to collect food, avoid obstacles, and survive as long as possible.

---

## Game Idea

The player and the bot move inside a bounded area. The goal is to collect food to increase score, while avoiding harmful objects. The game ends when one of the players loses all their lives or when all food is collected.

---

## Features

### 1. Player Movement

* The player moves using arrow keys.
* Movement is restricted داخل حدود الشاشة (boundary).
* The player cannot move unless the game is active.

---

### 2. Bot Movement

* The bot automatically moves toward the nearest food element.
* The movement speed depends on the selected difficulty level.
* The bot continuously updates its target based on food positions.

---

### 3. Food System

* Food elements are randomly distributed across the screen.
* When the player or bot collides with food:

  * Score increases by 1
  * Character size increases
* When all food is collected, the game ends.

---

### 4. Chili (Obstacle) System

* Chili elements act as harmful objects.
* On collision:

  * Player size decreases
  * Score decreases
  * One life is lost
* If lives reach zero → game over

---

### 5. Lives System

* Each player starts with 3 lives.
* Lives are displayed visually.
* Losing all lives triggers the end of the game.

---

### 6. Heart System

* Hearts appear randomly on the screen.
* When collected:

  * Adds one life (max 3 lives)
  * Increases score

---

### 7. Levels (Difficulty System)

The game includes multiple difficulty levels:

* Mild
* Spicy
* Fiery
* Extreme

Each level controls how fast the bot moves.

---

### 8. Settings System

* Player can enter their name.
* Player can select difficulty level.
* Settings can be opened during the game.
* Game pauses while settings are open.

---

### 9. Game States

The game has multiple states:

* Start: initial state before gameplay begins
* Playing: player and bot are moving
* End: results and winner are displayed

---

### 10. Leaderboard / Result Screen

At the end of the game:

* Final score is displayed for both player and bot
* Remaining lives are displayed
* Winner is determined based on:

  1. Higher score
  2. If equal → more remaining lives
  3. If equal → tie

---

### 11. Local Storage

* Player name is saved in browser storage
* Selected level is also saved
* Data persists between sessions

---

## Technologies Used

* HTML
* CSS (Bootstrap + custom styles)
* JavaScript (Object-Oriented Programming)

---

## How to Run

1. Clone the repository:
   git clone # Spicy Survival

A browser-based game where the player competes against a bot to collect food, avoid obstacles, and survive as long as possible.

---

## Game Idea

The player and the bot move inside a bounded area. The goal is to collect food to increase score, while avoiding harmful objects. The game ends when one of the players loses all their lives or when all food is collected.

---

## Features

### 1. Player Movement

* The player moves using arrow keys.
* Movement is restricted داخل حدود الشاشة (boundary).
* The player cannot move unless the game is active.

---

### 2. Bot Movement

* The bot automatically moves toward the nearest food element.
* The movement speed depends on the selected difficulty level.
* The bot continuously updates its target based on food positions.

---

### 3. Food System

* Food elements are randomly distributed across the screen.
* When the player or bot collides with food:

  * Score increases by 1
  * Character size increases
* When all food is collected, the game ends.

---

### 4. Chili (Obstacle) System

* Chili elements act as harmful objects.
* On collision:

  * Player size decreases
  * Score decreases
  * One life is lost
* If lives reach zero → game over

---

### 5. Lives System

* Each player starts with 3 lives.
* Lives are displayed visually.
* Losing all lives triggers the end of the game.

---

### 6. Heart System

* Hearts appear randomly on the screen.
* When collected:

  * Adds one life (max 3 lives)
  * Increases score

---

### 7. Levels (Difficulty System)

The game includes multiple difficulty levels:

* Mild
* Spicy
* Fiery
* Extreme

Each level controls how fast the bot moves.

---

### 8. Settings System

* Player can enter their name.
* Player can select difficulty level.
* Settings can be opened during the game.
* Game pauses while settings are open.

---

### 9. Game States

The game has multiple states:

* Start: initial state before gameplay begins
* Playing: player and bot are moving
* End: results and winner are displayed

---

### 10. Leaderboard / Result Screen

At the end of the game:

* Final score is displayed for both player and bot
* Remaining lives are displayed
* Winner is determined based on:

  1. Higher score
  2. If equal → more remaining lives
  3. If equal → tie

---

### 11. Local Storage

* Player name is saved in browser storage
* Selected level is also saved
* Data persists between sessions

---

## Technologies Used

* HTML
* CSS (Bootstrap + custom styles)
* JavaScript (Object-Oriented Programming)

---

## How to Run

1. Clone the repository:
   git clone https://github.com/Aliaa-Mohamad/Bite-Battle

2. Open index.html in your browser

---

## Possible Improvements

* Add sound effects
* Improve animations
* Add multiplayer mode
* Add restart button






# Tetris Game in React

This Tetris game is built in React using modular components, hooks, and `styled-components` for a sleek UI. The game follows standard Tetris mechanics, where players control falling Tetromino shapes to clear rows.

## Project Structure

### Components

1. **`Tetris`**: Main game component managing the game state and rendering core subcomponents.
2. **`Board`**: Renders the game board and updates it as Tetrominoes move.
3. **`GameStats`**: Displays the game stats (e.g., score, lines cleared).
4. **`Previews`**: Shows the upcoming Tetrominoes.
5. **`GameController`**: Handles user controls and actions.

### Hooks

1. **`useBoard`**: Manages the board state and handles piece placement.
2. **`useGameStats`**: Tracks game statistics like score and lines cleared.
3. **`usePlayer`**: Manages the current Tetromino piece and its movement.

## Key Files and Functions

### `Tetris.js`
The main component brings together the game board, player stats, previews, and control inputs.

### Hooks
Many hooks are used in this rendition of Tetris here are a few
- **`useBoard`**: Keeps track of the game board, manages Tetromino placements, and handles line clearing.
- **`useGameStats`**: Tracks game metrics like score and lines cleared.
- **`usePlayer`**: Manages player actions and Tetromino shapes.

### Core Game Logic
Each Tetromino falls until it collides with another piece or reaches the bottom. Full rows clear, and the player receives a score boost. The game ends when pieces reach the board’s top. After a certain amount of lines are cleared the game levels up which increases the drop rate of the pieces

### How to Run the Game
1. Clone the repository.
2. Install dependencies with **`npm install`**.
3. Start the game with **`npm start`**.

### Controls
- Arrow Keys: Move the Tetromino.
- Space: Fast drop.
- Up / Down Arrow: Rotate the Tetromino.

### Technology Used
- React: For building interactive UI.
- React Hooks: Custom hooks for managing game state.
- Styled-components: For CSS styling within components.
- JavaScript: Core logic for Tetris mechanics.

### Future Enhancements
- High Score Tracking: Save the top scores.
- Enhanced Controls for fast dropping.
- Showing a preview of the Tetromino.
- Holding a Tetromino.


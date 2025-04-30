# battleship
The Odin Project JS project to implement the classic game "battleship" using test-driven development.

## Skills Used: Development and Architecture
- Set up git, webpack, ESLint, Prettier, Jest for modular, test-driven development
- Modularize code with ESM and frequently create single responsibility functions to keep code DRY & revisitable
- Import private npm package from linked-list project by JiwonJJeong to reduce code redundancy
- Keep game logic removed from DOM and render as much as possible

## Skills Used: Data Structures and Algorithms
- Choose map and linked list data structure (DS) to quickly retrieve Ship object information
- Aggregate objects from factory composition into a main Players object for easy data access
- Algorithmically interact with DS for specific problems -- like determining disallowed drop locations during setup time

## Skills Used: Web Dev
- Manipulate DOM dynamically using dynamic identifiers and CSS pseudoclasses
- Combine event delegation, listeners, HTML attributes, and Drag and Drop API to allow board setup with drag and drop
- Mirror HTML structure with nested selectors and use private variables for maintainable CSS

## The Drag and Drop Feature: Example of Problem Solving
- Requirements: Move multi-element ships into a board of multi-element containers with specificity
- Limitations: Base HTML Drag and Drop API is meant for dropping single elements into single containers
- Research: Drag and Drop API documentations, analogous event listeners, the dataTransfer event object
- Solution for data:
    1) Drag a single part of ship and transfer data to emulate entire ship move
    2) Dynamically allow drop positions based on event data and existing board
    3) Edit DS based on transferred data and logic with the grabbed part's position
- Solution for render: 
    1) Replace default drag image with an offset, entire ship
    2) Replace standard drop function with classList change (no elements rearranged)

### Takeaways for future
- A dynamic callback function has syntax of \[nameOfFunc\]() in the function
- and pass in the nameOfFunc as a string to call the function
- Don't start HTML class names with digits
- Think about which module code should go into -- especially when writing driver code
- CSS pseudoclass :nth-child(x) counts from 1, not 0
- Data transfers from DragEvent objects are converted to string data types
- Cannot use normal Drag and Drop API implementation with ES6 Modules. Need to use event listeners for "drop", "dragstart", etc...


# battleship
The Odin Project JS project to implement the classic game "battleship" using test-driven development.

## Skills Used
- Set up git, webpack, ESLint, Prettier, Jest for modular, test-driven development
- Use map and linked list data structure to quickly retrieve ship information
- Algorithmically reset board on new game by traversing through map data structures
- Import private npm package from linked-list project by JiwonJJeong
- Manipulate DOM dynamically using dynamic strings and CSS pseudoclasses
- Combine event delegation, HTML attributes, and Drag and Drop API to create drag and drop board setup.

### Takeaways for future
- A dynamic callback function has syntax of \[nameOfFunc\]() in the function
- and pass in the nameOfFunc as a string to call the function
- Don't start HTML class names with digits
- Think about which module code should go into -- especially when writing driver code
- CSS pseudoclass :nth-child(x) counts from 1, not 0
- Data transfers from DragEvent objects are converted to string data types
- Cannot use normal Drag and Drop API implementation with ES6 Modules. Need to use event listeners for "drop", "dragstart", etc...


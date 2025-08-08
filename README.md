# battleship
The Odin Project JS project to implement the classic game "battleship" using test-driven development.

[Try it here!](https://jiwonjjeong.github.io/battleship/)

## Rules
- Take turns attacking one grid to sink ships!
- There are 5 ships (of length 2, 3, 3, 4, and 5).
- Ships cannot be placed adjacent (including diagonal) to eachother.
- You can randomize or drag and drop ships only during the setup phase.
- The game ends when one player sinks ALL the ships of the other player.

## Achieved Learning Goals
* **Test-driven development**: Used Jest to create unit tests throughout development.
* **DRY and revisitable coding**: Imported private npm package from [linked list project](https://github.com/JiwonJJeong/linked-lists) and focused on maintaining separated modules and single responsibility functions.
* **Data structure algorithms**: Authored algorithms to interact with DS on specific problems -- like determining disallowed drop locations during setup time.
* **Working with new APIs**: Searched Drag and Drop API to create visuals and logic specific to project.

## Highlight Problem: The Drag and Drop Feature
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

## Personal Takeaways
- A dynamic callback function has syntax of \[nameOfFunc\]() in the function
- and pass in the nameOfFunc as a string to call the function
- Don't start HTML class names with digits
- Think about which module code should go into -- especially when writing driver code
- CSS pseudoclass :nth-child(x) counts from 1, not 0
- Data transfers from DragEvent objects are converted to string data types
- Cannot use normal Drag and Drop API implementation with ES6 Modules. Need to use event listeners for "drop", "dragstart", etc...
- :not() is a useful CSS pseudoclass

### Future directions
- Add way to rotate ship placement without using randomize button
- Add better clarify of instructions
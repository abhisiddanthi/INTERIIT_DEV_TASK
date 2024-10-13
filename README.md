Data Fetching:

The component fetches godowns and items data from an API using axios in the useEffect hook.
It ensures the data is fetched only once when the component is mounted.
Tree Structure Building:

The buildTree function processes the godowns and items data to build a hierarchical tree structure.
Each godown entry is added to a map by its ID, and the items are associated with their respective godown by matching godown_id.
The buildTree function also ensures that godowns with parent_godown are nested under their respective parent godowns to form a proper hierarchy.
The final result is a nested tree structure where child godowns are stored under their parent, and items are associated with the correct godowns.
Tree Rendering:

The renderGodowns function is responsible for rendering the godowns and their nested child godowns and items.
The root-level godowns (those without a parent_godown) are displayed first, and nested godowns are rendered recursively.
The renderItems function is responsible for rendering the items inside a godown.
Expand/Collapse Functionality:

The expand/collapse behavior is controlled by the expanded state, which keeps track of which godowns are currently expanded.
Each godown has a toggle button (+/−) that allows users to expand or collapse its content. Clicking the godown name toggles its visibility.
The expansion logic is handled by the handleToggle function, which updates the expanded state for each godown by its ID.
Item Selection:

When an item is clicked, the handleItemClick function triggers, passing the selected item_id to a callback function setSelectedItem provided as a prop, allowing for interaction with other components or functionality.
CSS Styling:

The component uses custom CSS for styling the tree structure, including indentation for nested godowns and items, hover effects, and toggle animations.

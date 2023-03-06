
# Accessibility Concerns/Tasks for TabGroup Component

## WAI-ARIA Roles, States, and Properties

### Dodos (non-keyboard tasks)

 * [x] The element that serves as the container for the
 * set of tabs has role tablist.
 * ..
 * [x] Each element that serves as a tab has role tab and
 * is contained within the element with role tablist.
 * ..
 * [x] Each element that contains the content panel for
 * a tab has role tabpanel.
 * ..
 * [ ] TODO: If the tab list has a visible label, the element
 * with role tablist has aria-labelledby set to a
 * value that refers to the labelling element.
 * Otherwise, the tablist element has a label provided
 * by aria-label.
 * ..
 * [x] Each element with role tab has the property
 * aria-controls referring to its associated tabpanel element.
 * ..
 * [ ] TODO: The active tab element has the state
 * aria-selected set to true and all other tab
 * elements have it set to false.
 * ..
 * [x] Each element with role tabpanel has the property
 * aria-labelledby referring to its associated tab element.
 * ..
 * [N/A] If a tab element has a popup menu, it has the
 * property aria-haspopup set to either menu or true.
 * ..
 * [N/A] If the tablist element is vertically oriented,
 * it has the property aria-orientation set to vertical.
 * The default value of aria-orientation for a
 * tablist element is horizontal.
 * ..


## Keyboard Interaction

### For the tab list:

  * `Tab`:
    + ..
    + [ ] TODO: When focus moves into the tab list, places focus on the active tab element.
    + ..
    + [ ] TODO: When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.
    + ..

  * `When focus is on a tab element in a horizontal tab list`:
    + ..
    + [ ] TODO: `Left Arrow`: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab (See note below).
    + ..
    + [ ] TODO: `Right Arrow`: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab (See note below).
    + ..

  * `When focus is on a tab in a tablist with either horizontal or vertical orientation`:
    + ..
    + [ ] TODO: `Space or Enter`: Activates the tab if it was not activated automatically on focus.
    + ..
    + [N/A] `Home (Optional)`: Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).
    + ..
    + [N/A] `End (Optional)`: Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).
    + ..
    + [N/A] `Shift + F10`: If the tab has an associated popup menu, opens the menu.
    + ..
    + [N/A] `Delete (Optional)`: If deletion is allowed, deletes (closes) the current tab element and its associated tab panel, sets focus on the tab following the tab that was closed, and optionally activates the newly focused tab. If there is not a tab that followed the tab that was deleted, e.g., the deleted tab was the right-most tab in a left-to-right horizontal tab list, sets focus on and optionally activates the tab that preceded the deleted tab. If the application allows all tabs to be deleted, and the user deletes the last remaining tab in the tab list, the application moves focus to another element that provides a logical work flow. As an alternative to Delete, or in addition to supporting Delete, the delete function is available in a context menu.
    + ..

# Navigation using the tab key
Tags: @Keyboard navigation, @Focus management

There are a lot of circumstances in which people can't use a mouse – or prefer not to.
One of the main ways to navigate the web with a keyboard, is to use the `tab` key.

Pressing `tab` "focuses" the next actionable element on the page (i.e. next button, link, checkbox, input field, etc.). Pressing `shift + tab` focuses the previous one. When an element is focused, it receives keyboard events (e.g. Press enter, or space).

## Acceptance criteria

### Rule 1: When an actionable element has been focused using the keyboard, it should be outlined with a focus ring that is clearly visible.

The focus ring needs to be visible on any interactive element when it has been focused using the keyboard. The focus ring serves two purposes:
* It indicates which interactive element should respond to keyboard presses
* Knowing where the focus is helps people navigate a page using the keyboard

Note: It is not necessary to show a focus ring on buttons or links if they have received focus because they have been clicked.

Successful example (video)
Failing example (video / code example)

## Examples

### Good examples

Example of it being done well (video) (Reference the scenario)

### Bad examples

Example of it being done badly (video)

## Techniques

### Passing example (covering the videos)

Any explanation

### Passing example (covering the videos)

Any explanation

### Failure example (covering the videos)

Any explanation

## Tests

| Type | Protocol | Expected result | Notes |
| -- | -- | -- | -- | -- |

Note: If a test is manual and is essentially just following a scenario above, be explicit about it:
Eg. Perform scenario 1: (and indicate here any further support or help to perform the test). Then in notes, say “See scenario 1”

## Definitions

Interactive elements

## References

### Sources

Include the relevant GAAD SCs at the top of the list

### Recommended reading

Announce what it covers related to this AC


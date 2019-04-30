# Focus is visible
Tags: @Focus management, @Keyboard navigation,

## Rule

When an actionable element has been focused using the keyboard, it should be highlighted clearly and visibly.

### Example: Navigating the page using the tab key

```
WHEN the tab key is pressed
THEN the next interactive element on the page should be clearly highlighted
```

### Example: Navigating the page using screen reader shortcuts to buttons and links

```
GIVEN the screen reader is active
WHEN a shortcut is used to go to the next link or button
THEN the next link or button should be clearly highlighted
```

## Rationale

The focus ring serves two purposes:
* It indicates which interactive element should respond to keyboard presses.
* Knowing where the focus is helps people navigate a page using the keyboard.

## User experience examples

### Good example: the xez ...

On this video, the .. (explains what happens on the video)

Video

### Bad example: [Guardian.co.uk](https://www.guardian.co.uk)

* This website relies on browsers' default styles, which are not visible enough in some browsers (e.g. Safari).
* Some buttons do not look different when they are focuses (e.g. "Show more sport" button).

Video

## Techniques

### Successful technique: Defining clearly visible styles for focused interactive elements

In this code example ...

Code / Codepen

### Failure technique: Relying on browsers' default focus ring styles

In this code example ...

Code / Codepen

### Failure technique: Removing the focus ring styles, without providing good alternaties

In this code example ...

Code / Codepen

## Tests

| Type | Protocol | Expected result | Notes |
| -- | -- | -- | -- | -- |

## References

* [WCAG Success Criteria 2.4.7 - Focus Visible](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible)



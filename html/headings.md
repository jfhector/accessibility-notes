# Headings

## Rules

* A document **must** have exactly one `<h1>` element.
* Headings **must** form an increasing sequence. In this sequence, heading levels **should** not be skipped.
* Heading elements **must** be followed by either content or another heading of one level deeper.

## Rationale

* A logical heading structure is invaluable for users of screen readers and similar assistive technologies to help navigate content.
* Users' should be able to use the document's `<h1>` to identify it's main content. Documents should have one main subject.
* Heading levels should not be skipped, because a predictable document outline is important for understandibility:

  * A heading of level n+1 indicates a sub section of a heading of level n. (E.g. `<h2>` followed by `<h3`). This enables people who use screen readers to have a clear and correct mental model of the content and structure of the page.

  * However, if one or several heading levels are skipped (e.g. `<h2>` followed by `<h4>`), it is not clear whether the content under `<h4>` is a sub-section of the section headed by `<h2>`.

## Techniques

### Good code example

```
<main>
  <h1>Main page content</h1>
  <!--  Content  -->
  
  <h2>Secondary heading<h2>
  <!--   Content   -->
  
  <h3>Tertiary heading</h3>
  <!--   Content   -->
    
  <h2>Another secondary heading>
  <!--  Content  -->
</main>
```

### Failing code examples

#### E.g. Heading level sequence that is not increasing

```
<main>
  <h3>Main page content</h3>
  <!--  Content  -->
  
  <h2>Secondary heading<h2>
  <!--   Content   -->
  
  <h2>Tertiary heading</h2>
  <!--   Content   -->
</main>
```

#### E.g. Heading level sequence that skips levels

```
<main>
  <h1>Content title</h3>
  <!--  Content  -->
  
  <h2>Secondary heading<h2>
  <!--   Content   -->
  
  <h4>Sharing options</h2>
  <!--   Content   -->
</main>
```

## Tests

Type | Procedure | Expected result
--- | --- | ---
Tool-assisted | Use WAVE Toolbar or similar to generate an outline of the html document. | There must be exactly one `<h1>`. The headings in the page's source order must form an increasing sequence. No heading levels should be skipped `<h1>`.
Manual | Search document source for `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` and `<h6>`. | There must be exactly one instance of `<h1>`. Each heading should be followed either by content, or by another heading of one level deeper.

## References

### Source

[BBC HTML Accessibility standards 2.0](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/html/headings.shtml)
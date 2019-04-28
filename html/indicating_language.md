# Indicating language

## Rules

* The main language of the page **must** but specified.
* Changes to language within the html page **must** be indicated.

## Rationale

Assistive technologies such as screen readers have support for different languages, allowing for appropriate pronounciation.

## Techniques

### Good code example

```
<!DOCTYPE html>
<html lang="en-GB">
<head>
    <title>
        <!--    Page title      -->
    </title>
</head>
<body>
    <!--   Page content   -->
</body>
</html>
```

### Failing code example

```
<!DOCTYPE html>
<html>
  <head>
    <title>
      <!-- Page title -->
    </title>
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

## Tests

Type | Procedure | Expected result
--- | --- | ---
Manual | Search source code for `<html>` element. | `<html>` element must have a `lang` attribute with a value equal to the language code for the main page content language.
Tool | Validate the page against the [W3C internationalisation checker](http://validator.w3.org/i18n-checker/). | There must not be a 'The html tag has no language attribute' warning. And the Language HTML tag value should match the language code for the main page content language. 
Manual | Search source for each instance of a language change | Each instance should have a containing element with a `lang` attribute with a value equal to the language code for the language.

## References

### Tests

[BBC HTML Accessibility Standards v2.0](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/html/language.shtml)

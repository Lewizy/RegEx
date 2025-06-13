| Category                     | Syntax/Example                                              | Description                                                      |
|------------------------------|--------------------------------------------------------------|------------------------------------------------------------------|
| **Basic Syntax**             | `.`                                                          | Matches any single character except a newline.                   |
|                              | `^`                                                          | Matches the start of a string.                                     |
|                              | `$`                                                          | Matches the end of a string.                                       |
|                              | `|`                                                          | Acts as an OR operator (e.g., `cat|dog` matches "cat" or "dog"). |
|                              | `\`                                                          | Escapes special characters (e.g., `\.` matches a literal period). |
| **Character Classes**        | `[abc]`                                                    | Matches any character inside the brackets.                         |
|                              | `[^abc]`                                                   | Matches any character except those inside the brackets.          |
|                              | `[a-z]`                                                    | Matches any lowercase letter.                                       |
|                              | `[A-Z]`                                                    | Matches any uppercase letter.                                       |
|                              | `[0-9]`                                                    | Matches any digit.                                                  |
|                              | `\d`                                                      | Matches any digit (same as `[0-9]`).                                |
|                              | `\D`                                                      | Matches any non-digit.                                              |
|                              | `\w`                                                      | Matches any word character (letters, digits, underscore).        |
|                              | `\W`                                                      | Matches any non-word character.                                    |
|                              | `\s`                                                      | Matches any whitespace (spaces, tabs, newlines).                 |
|                              | `\S`                                                      | Matches any non-whitespace.                                        |
| **Quantifiers**              | `*`                                                        | Matches 0 or more occurrences.                                      |
|                              | `+`                                                        | Matches 1 or more occurrences.                                      |
|                              | `?`                                                        | Matches 0 or 1 occurrence.                                          |
|                              | `{n}`                                                    | Matches exactly n occurrences.                                      |
|                              | `{n,}`                                                   | Matches at least n occurrences.                                     |
|                              | `{n,m}`                                                  | Matches between n and m occurrences.                                |
| **Anchors & Boundaries**     | `\b`                                                       | Matches a word boundary.                                            |
|                              | `\B`                                                       | Matches not a word boundary.                                        |
|                              | `(?=...)`                                                 | Positive lookahead: matches if followed by a pattern.             |
|                              | `(?!...)`                                                 | Negative lookahead: matches if NOT followed by a pattern.       |
|                              | `(?<=...)`                                                | Positive lookbehind: matches if preceded by a pattern.           |
|                              | `(?<!...)`                                                | Negative lookbehind: matches if NOT preceded by a pattern.      |
| **Grouping & Capturing**     | `(abc)`                                                   | Capturing group (stores matched text).                            |
|                              | `(?:abc)`                                                 | Non-capturing group (groups without storing).                     |
|                              | `\1`, `\2`, etc.                                            | Backreferences (refer to previous captured groups).             |

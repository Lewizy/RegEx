Regular expressions (regex) are powerful tools for pattern matching in text. Here’s a breakdown of common regex components:
Basic Syntax
. → Matches any single character except a newline.
^ → Matches the start of a string.
[$ → Matches the end of a string.
| → Acts as an OR operator (e.g., cat|dog matches either "cat" or "dog").
\ → Escapes special characters (e.g., \. matches a literal period).
Character Classes
[abc] → Matches any character inside the brackets.
[^abc] → Matches any character except those inside the brackets.
[a-z] → Matches any lowercase letter.
[A-Z] → Matches any uppercase letter.
[0-9] → Matches any digit.
\d → Matches any digit (same as [0-9]).
\D → Matches any non-digit.
\w → Matches any word character (letters, numbers, underscore).
\W → Matches any non-word character.
\s → Matches any whitespace (spaces, tabs, newlines).
\S → Matches any non-whitespace.
Quantifiers
* → Matches 0 or more occurrences.
+ → Matches 1 or more occurrences.
? → Matches 0 or 1 occurrences.
{n} → Matches exactly n occurrences.
{n,} → Matches at least n occurrences.
{n,m} → Matches between n and m occurrences.
Anchors & Boundaries
\b → Matches a word boundary.
\B → Matches not a word boundary.
(?=...) → Positive lookahead (matches if followed by a certain pattern).
(?!...) → Negative lookahead (matches if NOT followed by a certain pattern).
(?<=...) → Positive lookbehind (matches if preceded by a certain pattern).
(? → Negative lookbehind (matches if NOT preceded by a certain pattern)
Grouping & Capturing
(abc) → Capturing group (stores matched text).
(?:abc) → Non-capturing group (groups without storing).
\1, \2, etc. → Backreferences (refer to previous captured groups).
For a more detailed breakdown, check out this regex cheat sheet or this quick-start guide. Let me know if you need help with a specific regex pattern!

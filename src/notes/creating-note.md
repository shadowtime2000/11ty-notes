---
title: Creating a Note
keywords: ["notes", "11ty", "eleventy", "11ty-notes"]
description: Creating a note in 11ty-notes
---

All notes exist under `src/notes`. You can put a note there and it will be generated into it's appropriate `.html` file.

## Front matter

There are three different attributes for the front matter.

```yaml
title: Title of note
keywords: ["keyword1", "keyword2"]
description: Description of the note
```

The keywords will only be used for `<meta name="keywords">`, it will not appear in the list of notes or the note.
// Data minimization problem:
// 1. The `timeFormatted` and `additionalModifier` variables include more date information than necessary to create a title.
// 2. The title format, combining `timeFormatted` and `additionalModifier`, exposes unnecessary details about the date when only a simple identifier might suffice.
// 3. The random selection of tags includes unnecessary variability, potentially exposing more data than needed for the note.
const Evernote = {
  newNoteInNotebook: {
    Tags: "Journal"
  },
  appendToNote: {
    setTitle: function(title) {
      console.log("Note Title Set:", title);
    },
    setTags: function(tags) {
      console.log("Tags Set:", tags);
    }
  }
};

const Meta = {
  currentUserTime: {
    format: function(format) {
      const date = new Date();
      if (format === "YYYYMMDD") {
        return date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
      }
    }
  }
};

var timeFormatted = Meta.currentUserTime.format("YYYYMMDD");
var additionalModifier = timeFormatted.slice(0, 4) + timeFormatted.slice(5, 6);
var tagSelection = ["IFTTT", "Reminder", "Update"];
var selectedTag = tagSelection[Math.floor(Math.random() * tagSelection.length)];

if (Evernote.newNoteInNotebook.Tags.localeCompare("Journal") == 0) {
  Evernote.appendToNote.setTitle(timeFormatted + "-" + additionalModifier);
  Evernote.appendToNote.setTags(selectedTag);
}

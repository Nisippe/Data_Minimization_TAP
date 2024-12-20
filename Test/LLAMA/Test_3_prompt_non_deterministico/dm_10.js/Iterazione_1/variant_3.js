// Mock of Evernote object
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

// Mock of Meta object
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
var selectedTag = "IFTTT"; // No need to generate random tag

if (Evernote.newNoteInNotebook.Tags.localeCompare("Journal") == 0) {
  Evernote.appendToNote.setTitle(timeFormatted);
  Evernote.appendToNote.setTags(selectedTag);
}
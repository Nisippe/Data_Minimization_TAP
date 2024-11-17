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
var selectedTag = ["IFTTT", "Reminder", "Update"][Math.floor(Math.random() * 3)];

if (Evernote.newNoteInNotebook.Tags === "Journal") {
  Evernote.appendToNote.setTitle(timeFormatted);
  Evernote.appendToNote.setTags(selectedTag);
}
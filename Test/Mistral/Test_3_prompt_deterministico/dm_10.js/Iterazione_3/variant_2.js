const Evernote = {
       newNoteInNotebook: { tags: "Journal" },
       appendToNote: {
         setTitle: function(title) { console.log("Note Title Set:", title); },
         setTags: function(tag) { console.log("Tag Set:", tag); }
       }
     };

     const Meta = { currentUserTime: {} };
     Meta.currentUserTime.format = function(format) {
       return format === "YYYYMMDD" ? new Date().toISOString().slice(0, 10) : null;
     };

     const tagSelection = ["IFTTT", "Reminder", "Update"];
     const selectedTag = tagSelection[Math.random() * tagSelection.length | 0];

     if (Evernote.newNoteInNotebook.tags === "Journal") {
       Evernote.appendToNote.setTitle(Meta.currentUserTime.format("YYYYMMDD"));
       Evernote.appendToNote.setTags(selectedTag);
     }
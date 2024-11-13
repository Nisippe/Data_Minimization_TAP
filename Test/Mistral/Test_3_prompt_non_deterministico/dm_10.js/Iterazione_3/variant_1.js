const Evernote = {
       newNoteInNotebook: { tag: "Journal" },
       appendToNote: {
         setTitle: function(title) {
           console.log("Note Title Set:", title);
         },
         setTags: function(tags) {
           console.log("Tags Set:", tags.join(", "));
         }
       }
     };

     const Meta = { currentUserTime: {} };
     Meta.currentUserTime.format = function(format) {
       const date = new Date();
       return format === "YYYYMMDD" ? date.getUTCFullYear() + date.getUTCMonth() + 1 + date.getUTCDate() : undefined;
     };

     const tagSelection = ["IFTTT", "Reminder", "Update"];
     const selectedTag = tagSelection[Math.floor(Math.random() * tagSelection.length)];

     if (Evernote.newNoteInNotebook.tag === "Journal") {
       Evernote.appendToNote.setTitle(Meta.currentUserTime.format("YYYYMMDD"));
       Evernote.appendToNote.setTags([...tagSelection, selectedTag]);
     }
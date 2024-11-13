const Evernote = {
       newNoteInNotebook: { Tags: "Journal" },
       appendToNote: {
         setTitle: function(title) {
           console.log("Note Title Set:", title);
         },
         setTags: function(tags) {
           console.log("Tags Set:", tags);
         }
       }
     };

     const Meta = { currentUserTime: {} };
     Meta.currentUserTime.format = function(format) {
       const date = new Date();
       return format === "YYYYMMDD"
         ? date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2)
         : undefined;
     };

     const timeFormatted = Meta.currentUserTime.format("YYYYMMDD");
     const tagSelection = ["IFTTT", "Reminder", "Update"];
     const selectedTag = tagSelection[Math.random() * tagSelection.length | 0];

     if (Evernote.newNoteInNotebook.Tags === "Journal") {
       Evernote.appendToNote.setTitle(timeFormatted);
       Evernote.appendToNote.setTags(selectedTag);
     }
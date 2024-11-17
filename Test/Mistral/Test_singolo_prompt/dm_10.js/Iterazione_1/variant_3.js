const Evernote = {
       newNoteInNotebook: { Tags: "Journal" },
       appendToNote: {
         setTitle: function (title) {
           console.log("Note Title Set:", title);
           this.setTags(this.Tags); // Set tags based on existing Tags property
         },
         setTags: function (tags) {
           console.log("Tags Set:", tags);
         }
       }
     };

     const Meta = { currentUserTime: {} };
     const timeFormatted = Meta.currentUserTime.format = (() => {
       const date = new Date();
       return () => date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
     })();

     const tagSelection = ["IFTTT", "Reminder", "Update"];
     const selectedTag = tagSelection[Math.floor(Math.random() * tagSelection.length)];

     if (Evernote.newNoteInNotebook.Tags === "Journal") {
       Evernote.appendToNote.setTitle(timeFormatted());
       Evernote.appendToNote.setTags(selectedTag);
     }
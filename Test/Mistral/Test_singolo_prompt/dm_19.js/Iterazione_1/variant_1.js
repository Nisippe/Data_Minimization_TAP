const Feed = { newFeedItem: {} }; // Remove unnecessary EntryImageUrl and EntryUrl properties

         const Dropbox = {
           addFileFromUrl: {
             skip: Function,
             setFilename: Function
           },
           createTextFileDb: {
             skip: Function,
             setFilename: Function,
             setBody: Function
           }
         };

         const tempUrl = Feed.newFeedItem?.EntryUrl; // Use optional chaining instead of checking for null
         const modifiedName = tempUrl ? tempUrl.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') : null;

         if (!tempUrl) {
           Dropbox.addFileFromUrl.skip();
           Dropbox.createTextFileDb.skip();
         } else {
           const fileName = modifiedName || tempUrl;
           const finalUrl = `[InternetShortcut]\r\nURL=${encodeURIComponent(sourceUrl)}\r\nIconIndex=0`; // Use encodeURIComponent for URL encoding

           Dropbox.addFileFromUrl.setFilename(fileName);
           Dropbox.createTextFileDb.setFilename(fileName + '.url');
           Dropbox.createTextFileDb.setBody(finalUrl);
         }
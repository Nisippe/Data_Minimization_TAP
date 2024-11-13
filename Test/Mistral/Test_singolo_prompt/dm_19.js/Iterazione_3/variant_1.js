const Feed = { newFeedItem: {} };

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

         const tempUrl = Feed.newFeedItem?.EntryUrl;
         const modifiedName = tempUrl ? tempUrl.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') : null;

         if (!tempUrl) {
           Dropbox.addFileFromUrl.skip();
           Dropbox.createTextFileDb.skip();
         } else {
           const fileName = modifiedName || tempUrl;
           const finalUrl = `[InternetShortcut]\r\nURL=${encodeURIComponent(tempUrl)}`; // Use tempUrl instead of sourceUrl

           Dropbox.addFileFromUrl.setFilename(fileName);
           Dropbox.createTextFileDb.setFilename(fileName + '.url');
           Dropbox.createTextFileDb.setBody(finalUrl);
         }
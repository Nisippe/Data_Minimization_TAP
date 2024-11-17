const Feed = {
  newFeedItem: {
    url: "http://example.com/article"
  }
};

const Dropbox = {
  addFileFromUrl: {
    setFilename: function(fileName) {
      console.log(`Filename for file from URL set to: ${fileName}`);
    }
  },
  createTextFileDb: {
    setFilename: function(fileName) {
      console.log(`Filename for text file set to: ${fileName}`);
    },
    setBody: function(body) {
      console.log(`Body for text file set to: ${body}`);
    }
  }
};

var fileName = Feed.newFeedItem.url.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

Dropbox.addFileFromUrl.setFilename(fileName);
Dropbox.createTextFileDb.setFilename(fileName + '.url');
Dropbox.createTextFileDb.setBody('[InternetShortcut]\r\nURL=' + Feed.newFeedItem.url + '\r\nIconIndex=0');
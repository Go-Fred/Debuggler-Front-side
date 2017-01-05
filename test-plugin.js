var conversation;

Front.on('conversation', function (data) {
  if(data.contact.email){
    console.log('Contact Email', data.contact.email);
  }
});

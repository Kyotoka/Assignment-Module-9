db.createCollection("users");

db.users.drop()

db.users.insertOne({"name":

"Touhid Ansary", "position":

"Student"});

db.users.deleteOne({"name":

"Touhid Ansary"})

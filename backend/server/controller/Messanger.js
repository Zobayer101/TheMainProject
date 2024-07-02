const Conversation = require("../model/Conversation");
const MSG = require("../model/Messages");
const UserDB = require("../model/UserModel");
const Organizer = require('../lib/Organiger');

exports.CreateConversation = async (req, res) => {
  try {
    const wonID = req.ID;
    const otherID = req.body.ID;
   
    const data = await Conversation.find({
      $or: [
        { $and: [{ CreateorId: wonID }, { PaticipatorId: otherID }] },
        { $and: [{ CreateorId: otherID }, { PaticipatorId: wonID }] },
      ],
    });
    
   
    //alraday have a account
    if (data[0]) {
      if (data[0].CreateorId == wonID) {
        //you are a Creator
        const msData = await MSG.find({ ConversationId: data[0]._id });
        
        res.status(200).json(msData);
      } else {
        const msData = await MSG.find({ ConversationId: data[0]._id });
        //you are a paricepator
        res.status(200).json(msData);
      }
    } else {
      //don't have a any conversation.
      const user = new Conversation({
        CreateorId: wonID,
        PaticipatorId: otherID,
      });
      const msData = await user.save(user);
      const data = await UserDB.find({ _id: otherID }, { email: 0, Bio: 0, follower: 0, following: 0 });
     
      const      DataObj = {
          photo: data[0].Photo ? await Organizer.Provider(data[0].Photo, "jpeg") : "",
          fname:data[0].fname,
          lname:data[0].lname,
          date: msData.Date,
          ConversationID: msData._id,
          senderID: wonID,
          resiverID: msData.PaticipatorId,
        };
     
      res.status(200).json(DataObj);
    }
  } catch (error) {
    console.log(error);
  }
};

//message save
exports.SaveMsg = async (req, res) => {
  try {
    const senderID = req.ID;
    console.log(req.body)
    console.log('this is a body')
    const { RisiverID, ConversatoonID, text, photo } = req.body;
    const msg = new MSG({
      ConversationId: ConversatoonID,
      SenderId: senderID,
      ResiverId: RisiverID,
      messages: text,
      photo,
    });
    const data = await msg.save(msg);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

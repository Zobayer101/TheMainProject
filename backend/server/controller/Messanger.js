const Conversation = require("../model/Conversation");
const MSG = require("../model/Messages");

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
       await user.save(user);
      res.status(200).json([]);
    }
  } catch (error) {
    console.log(error);
  }
};

//message save
exports.SaveMsg = async (req, res) => {
  try {
    const senderID = req.ID;
    const { risiverID, conversationID, text ,photo} = req.body;
    const msg = new MSG({
      ConversationId: conversationID,
      SenderId: senderID,
      ResiverId: risiverID,
      messages: text,
      photo,
    });
    const data = await msg.save(msg);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

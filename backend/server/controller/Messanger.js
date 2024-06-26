const Conversation = require("../model/Conversation");

exports.CreateConversation = async (req, res) => {
  try {
    const wonID = req.ID;
      const otherID = req.body.ID;
    const data =await Conversation.find({
      $or: [
        { $and: [{ CreateorId: wonID }, { PaticipatorId: otherID }] },
        { $and: [{ CreateorId: otherID }, { PaticipatorId: wonID }] },
      ],
    });
      console.log(data)
      //alraday have a account 
      if (data[0]) {
          if (data[0].CreateorId == wonID) {
              //you are a Creator 
              res.status(200).json('you are a Creatator');
          } else {
              //you are a paricepator
              rea.status(200).json('your are a paticiepator');
        }
      } else {
          //don't have a any conversation.
      const user = new Conversation({
        CreateorId: wonID,
        PaticipatorId: otherID,
      });
        const data = await user.save(user);
        res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
  }
};

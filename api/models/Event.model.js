import mongoose from 'mongoose';


const EventSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  
});


const Event = mongoose.model('Event', EventSchema);

export default  Event;

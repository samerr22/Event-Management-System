import Event from "../models/Event.model.js";
import { errorHandle } from "../utils/error.js";





export const EventCreate = async (req, res, next) => {
    
  
    const {  name, image, desc} = req.body;
  
    const newEvent = new Event({
   
      name,
      image,
      desc
     
    });
    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      next(error);
    }
  };



  export const getEvent = async (req, res, next) => {
    try {
      
  
      
  
        const Eventt = await Event.find();
  
        if (Eventt.length > 0) {
          res.json({
            message: "Event  details retrieved successfully",
            Eventt,
          });
        } else {
          return next(errorHandle(404, " Event not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };



  export const updateEvent = async (req, res, next) => {
    
    try {
      const updateEvent = await Event.findByIdAndUpdate(
        req.params.EventId,
        {
          $set: {
           
            name: req.body.name,
            image: req.body.image,
            desc: req.body.desc,
          
          },
        },
        { new: true }
      );
      res.status(200).json(updateEvent);
    } catch (error) {
      next(error);
    }
  };




  export const deleteEvnt = async (req, res, next) => {
   
    try {
      await Event.findByIdAndDelete(req.params.EventId);
      res.status(200).json("The Evnet has been deleted");
    } catch (error) {
      next(error);
    }
  };
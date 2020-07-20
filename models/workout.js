const mogoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const Schema = mongoose.Schema;

const workOutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
            type: {
                type: String,
                trim: true,
                required: "This field is required",
                },
            name: {
                type: String,
                trim: true,
                required: "This field is required",
                },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            weight: {
                type: Number
            }
    }]},
    {
        toJson: {
            virtuals: true,
        }});

workOutSchema.virtual("totalDuration").get(function () {
      return this.exercises.reduce((total, exercises) => {
      return total + exercises.duration;
      }, 0);
      });
          
const Workout = mongoose.model("Workout", workOutSchema);
          
module.exports = Workout;
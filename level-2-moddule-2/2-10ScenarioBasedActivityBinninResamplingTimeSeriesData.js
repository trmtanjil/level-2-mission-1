//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const INTERVEL  = 30* 60* 1000;//30 mins in ms

const getBingTimeStamp = (timestamp)=>{
    const date = new Date(timestamp);

    console.log('Before Flooring', date.getTime());
    const flooreDate = Math.floor(date.getTime()/ INTERVEL)*INTERVEL;
     
    return new Date(flooreDate).toISOString();
};
console.log(getBingTimeStamp("2025-10-22T10:01:00Z"));


const binnedDate = events.reduce((acc, event)=>{
const bin = getBingTimeStamp(event.timestamp);
if(!acc[bin]){
    acc[bin]={total:0};
}
acc[bin].total = acc[bin].total +1;
return acc;
},{})
console.log(binnedDate)
//Check if today's date falls in dateRange
function isInRange(dateRange, americanFormat) {

  // Get today date
  let today = new Date();
  //get the day from today date
  let day = today.getDate();
  //get the month from today date January is 0 then we add 1 to the month
  let month = today.getMonth()+1;
  //get the year from today date
  let year = today.getFullYear();

  //convert the date into an array 
  let startDate = dateRange.startDate.split('/');
  let endDate = dateRange.endDate.split('/');

  // convert date to a number to check ranges
  startDateMonth=parseInt(startDate[0]);
  startDateDay=parseInt(startDate[1]);
  startDateYear=parseInt(startDate[2]);

  endDateMonth=parseInt(endDate[0]);
  endDateDay=parseInt(endDate[1]);
  endDateYear=parseInt(endDate[2]);

  //If is not american Format then swith format
  if(!americanFormat) {
    startDateMonth=parseInt(startDate[1]);
    startDateDay=parseInt(startDate[0]);

    endDateMonth=parseInt(endDate[1]);
    endDateDay=parseInt(endDate[0]);
  }

  // check if is in range
  if(startDateYear <= year && year <= endDateYear)
      if(startDateMonth <= month && month <= endDateMonth)
        if(startDateDay <= day && day <= endDateDay)
          return true;

  return false;
}

//This function returns array with all indexes that falls in the data range
function checkRange(jsonFile){
  let json = require(jsonFile);

  // Get the format flag
  const americanFormat = json.americanFormat;
  const dateRangeData = json.dateRange;

  //array to hold all indexes
  let indexes = [];
  dateRangeData.forEach( (dateRange, index) => {
    if(isInRange(dateRange, americanFormat))
      indexes.push(index)
  });
  return indexes;
}

//test for american format
console.log(checkRange('./data/FlashDataRangeAmerican.json'));

//test for european format
console.log(checkRange('./data/FlashDataRangeEuropean.json'));


import usersLogs from './../assets/logs/logs.json';

/*
* Global function sumOfAll
* return Object Array containing sum of: 
* @impressions,
* @conversion,
* @revenue,
* @conversionDates[conversionDate, revenueAmount]
*/
export const sumOfAll = (userId = 22) => {

    let impressions=0;
    let conversion=0;
    let revenue=0;
    let conversionDates = [];

    usersLogs.map((userLog) => {
        
        if(userLog.user_id === userId && userLog.type==="impression"){
            impressions++;
        }
        if(userLog.user_id === userId && userLog.type==="conversion"){
            conversion++;
            revenue = revenue + userLog.revenue;
            conversionDates.push({"conversionDate":userLog.time, "revenueAmount":userLog.revenue});
        }
    })

    return {
		impressions: impressions,
		conversion: conversion,
        revenue: revenue,
        conversionDates: conversionDates
	}
};
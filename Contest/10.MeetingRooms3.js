// 2402. Meeting Rooms III
// https://leetcode.com/problems/meeting-rooms-iii/

// Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
// Output: 0

var mostBooked = function (n, meetings) {
    let roomMeetingCount = []// Array(n).fill(0); // number of meeting in a room
    let roomSchedule = [] //Array(n).fill(-1); // store the end time of the last meeting(time at which the room will be empty);
    for (let i = 0; i < n; i++) {
        roomSchedule[i] = -1;
        roomMeetingCount[i] = 0;
    }
    meetings.sort((a, b) => a[0] - b[0]);
    // traverse all the meetings
    for (let i = 0; i < meetings.length; i++) {
        let start = meetings[i][0];
        let end = meetings[i][1];
        let earliestRoom = -1, earliestTime = Number.MAX_SAFE_INTEGER, foundRoom = false;
        for (let j = 0; j < n; j++) {
            // room found
            if (roomSchedule[j] <= start) {
                roomMeetingCount[j]++;
                roomSchedule[j] = end;
                foundRoom = true;
                break;
            }
            // if no room found, keep the track of the room which can be acquired earliest
            if (roomSchedule[j] < earliestTime) {
                earliestTime = roomSchedule[j];
                earliestRoom = j;
            }
        }
        // if no room is found
        if (foundRoom === false) {
            roomMeetingCount[earliestRoom]++;
            roomSchedule[earliestRoom] += (end - start);
        }
    }
    let maxi = -1, max = 0;
    for (let i = 0; i < n; i++) {
        if (roomMeetingCount[i] > max) {
            max = roomMeetingCount[i];
            maxi = i
        }

    }
    return maxi
};
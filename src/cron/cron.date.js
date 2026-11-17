import { members } from '../users.js';

let activeMembers = members.filter((status) => status.status === 'active');

console.log(activeMembers);

activeMembers.forEach((userName) => {
  // console.log(userName.name);
});

// Raffle Winner Verification Program

const winningParticipants = [
    {
        id: 1,
        name: 'Jennifer',
        ticketNumber: 451
    },
    {
        id: 8,
        name: 'Michael',
        ticketNumber: 598
    },
    {
        id: 15,
        name: 'Emily',
        ticketNumber: 515
    },
    {
        id: 47,
        name: 'Charlie',
        ticketNumber: 947
    }
];

function findWinnerByName (name) {
    const winner = winningParticipants.find(participants => participants.name === name);
    return winner || 'No winner found with that name';
}

function findIndexWinnerByTicket (ticketNumber) {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber);
    return index !== -1 ? index : 'No winner found with that ticket number';
}

function displayWinnerInformation (winner) {
    if (winner !== undefined && winner != null && winner !== 'No winner found with that name') {
        console.log(`${winner.name} has won the raffle!`);
        console.log('Winner information: ', winner);
    } else {
        console.log('No winner found.')
    }
}

const winnerByName = findWinnerByName('Emily');
const indexWinnerByTicket = findIndexWinnerByTicket(598);

displayWinnerInformation(winnerByName);
console.log('Index of winner by ticket number: ', indexWinnerByTicket);
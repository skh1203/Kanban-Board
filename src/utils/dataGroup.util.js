const PRIORITIES_ARRAY = ["No Priority", "Low", "Medium", "High", "Urgent"];
const STATUS_ARRAY = ["Backlog", "Todo", "In progress", "Done", "Canceled"];

export function groupByStatus(data) {
  let newTickets = [];
  data.tickets.forEach((ticket) => {
    const statusIndex = STATUS_ARRAY.indexOf(ticket.status);
    if (newTickets[statusIndex]) {
      newTickets[statusIndex].push(ticket);
    } else {
      newTickets[statusIndex] = [ticket];
    }
  });

  let result = {};
  result.tickets = newTickets;
  result.users = data.users;
  return result;
}

export function groupByUser(data) {
  const users = data.users;
  let newTickets = [];
  data.tickets.forEach((ticket) => {
    const userIndex = users.findIndex((user) => user.id === ticket.userId);
    if (newTickets[userIndex]) {
      newTickets[userIndex].push(ticket);
    } else {
      newTickets[userIndex] = [ticket];
    }
  });

  let result = {};
  result.tickets = newTickets;
  result.users = data.users;
  return result;
}

export function groupByPriority(data) {
  let newTickets = [];
  data.tickets.forEach((ticket) => {
    const priorityIndex = ticket.priority;
    if (newTickets[priorityIndex]) {
      newTickets[priorityIndex].push(ticket);
    } else {
      newTickets[priorityIndex] = [ticket];
    }
  });

  let result = {};
  result.tickets = newTickets;
  result.users = data.users;
  return result;
}

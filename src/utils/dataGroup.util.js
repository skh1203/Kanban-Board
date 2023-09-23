const PRIORITIES_ARRAY = ["No Priority", "Low", "Medium", "High", "Urgent"];

export function groupByStatus(data) {
  let newTickets = {};
  data.tickets.forEach((ticket) => {
    if (newTickets[ticket.status]) {
      newTickets[ticket.status].push(ticket);
    } else {
      newTickets[ticket.status] = [ticket];
    }
  });

  let result = {};
  result.tickets = newTickets;
  result.users = data.users;
  return result;
}

export function groupByUser(data) {
  let newTickets = {};
  data.tickets.forEach((ticket) => {
    const name = data.users.find((user) => user.id === ticket.userId).name;
    if (newTickets[name]) {
      newTickets[name].push(ticket);
    } else {
      newTickets[name] = [ticket];
    }
  });

  let result = {};
  result.tickets = newTickets;
  result.users = data.users;
  return result;
}

export function groupByPriority(data) {
  let newTickets = {};
  data.tickets.forEach((ticket) => {
    const priorityName = PRIORITIES_ARRAY[ticket.priority];
    if (newTickets[priorityName]) {
      newTickets[priorityName].push(ticket);
    } else {
      newTickets[priorityName] = [ticket];
    }
  });

  let result = {};
  result.tickets = newTickets;
  result.users = data.users;
  return result;
}

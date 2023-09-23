export function groupByStatus(data) {
  let result = {};
  data.tickets.forEach((ticket) => {
    if (result[ticket.status]) {
      result[ticket.status].push(ticket);
    } else {
      result[ticket.status] = [ticket];
    }
  });
  return result;
}

export function groupByUser(data) {
  let result = {};
  data.tickets.forEach((ticket) => {
    if (result[ticket.userId]) {
      result[ticket.userId].push(ticket);
    } else {
      result[ticket.userId] = [ticket];
    }
  });
  return result;
}

export function groupByPriority(data) {
  let result = {};
  data.tickets.forEach((ticket) => {
    if (result[ticket.priority]) {
      result[ticket.priority].push(ticket);
    } else {
      result[ticket.priority] = [ticket];
    }
  });
  return result;
}

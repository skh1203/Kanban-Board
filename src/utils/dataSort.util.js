export function sortSectionByPriority(data) {
  data.tickets.map((section) => {
  return section.sort((a, b) => a.priority - b.priority);
  });
  return data;
}

export function sortSectionByTitle(data) {
   data.tickets.map((section) => {
			return section.sort((a, b) => a.title.localeCompare(b.title));
		});
		return data;
}

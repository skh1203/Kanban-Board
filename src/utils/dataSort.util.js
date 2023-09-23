export function sortSectionByPriority(section) {
  return section.sort((a, b) => a.priority - b.priority);
}

export function sortSectionByTitle(section) {
  return section.sort((a, b) => a.title.localeCompare(b.title));
}

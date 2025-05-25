function timeAgo(date) {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return date.toLocaleDateString();
}

const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
const twoDays = new Date(Date.now() - 2);

console.log(twoDays, twoDaysAgo)

console.log(timeAgo(twoDaysAgo))

console.log(new Date().toDateString(), 'tolocal', new Date().toLocaleString())
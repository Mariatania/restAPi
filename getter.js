function mapUsers(users) {
  let pengguna = { data: users, count: users.length };

  return pengguna;
}

export function mapArticles(articles) {
  let tulisan = { data: articles, count: articles.length };
  
  return tulisan;
}

export default mapUsers;

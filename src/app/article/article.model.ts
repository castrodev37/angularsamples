export class Article {
  votes: number;
  title: string;
  link: string;
  constructor(title?: string, link?: string, votes?: number) {
    this.title = title || '';
    this.link = link || '';
    this.votes = votes || 0;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  domain(): string{
    try {
      //console.log(this.link);
      const domainAndPath: string = this.link.split('//')[1];
      // console.log(domainAndPath);
      // console.log(domainAndPath.split('/')[0])
      return domainAndPath.split('/')[0];
    } catch (err) {
      return ''; 
    }
  }
}
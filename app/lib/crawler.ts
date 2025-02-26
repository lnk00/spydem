import 'dotenv/config';

export const crawl = async (company: string) => {
  try {
    const res = await fetch(
      process.env.CRAWLER_URL + '/crawl?company=' + company,
    );
    const json = await res.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
};

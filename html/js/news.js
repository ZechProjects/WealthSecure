function getFinanceSecurityNews() {
    const url = "./cache/news.xml";
    console.log('Loading news...');
    const newsPeriod = 6 * 30 * 24 * 60 * 60 * 1000; // in milliseconds

    //TODO change to Server Side daily CRON pull to update the news cache

    //https://news.google.com/rss/search?q=singapore+consumer+finance+cyber+security&hl=en-SG&gl=SG&ceid=SG:en
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Get all items using getElementsByTagName
            const items = xmlDoc.getElementsByTagName("item");

            var news_html = '';

            if (items.length > 0) {
                console.log("Latest Finance Security News:");

                const today = new Date().getTime();

                // Loop through first 5 items
                for (let i = 0; i < items.length && i < 5; i++) {
                    const item = items[i];

                    const title = item.querySelector("title").textContent;
                    const description = item.querySelector("description").textContent;
                    const date = item.querySelector("pubDate").textContent;

                    const dateInMS = new Date(item.querySelector("pubDate").textContent).getTime();
                    if (today - dateInMS > newsPeriod) {
                        //Skip old news
                        continue;
                        console.log(today, ',', dateInMS, '=', today - dateInMS, newsPeriod);
                    }

                    // Display news for each item (replace with your logic)
                    console.log("-----");
                    console.log("Title:", title);

                    news_html += '<p>' + description + '<br>';
                    news_html += '<i>' + date + '</i></p>';
                }

                var news_text = document.getElementById('news-text');
                news_text.innerHTML = news_html;
            } else {
                console.error("No news found");
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
        });
}